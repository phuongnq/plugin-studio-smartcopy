# SmartCopy Plugin for CrafterCMS

- The Smart Copy plugin adds the following copy behaviors to the system:
  - Locale / translation behaviors: 
    - A dialog that makes it easy to copy content from one locale to another
    - Form controls that track the lineage or source ID of the content copied from one item to another
    - A controller that updates the locale of references to child content objects if they exist in the destination location
 - Anbility to place a shortcut for the copy behavior in the sidebar and top navigation of Studio
 - Ability to re-badge/icon  and re-label the Smart Copy shortcuts
 
# Installation

1. Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management
   
   OR You can also install this plugin by cloning this repository and using the Studio API.

	1a. Create a Studio JWT Token.
	1b. Execute the following CURL command a terminal

	```bash
	curl --location --request POST 'http://SERVER_AND_PORT/studio/api/2/marketplace/copy' \
	--header 'Authorization: Bearer THE_JWT_TOKEN_FOR_STUDIO' \
	--header 'Content-Type: application/json' \
	--data-raw '{
	  "siteId": "YOUR-SITE-ID",
	  "path": "THE_ABSOLUTEL_FILE_SYSTEM_PATH_TO_THIS_REPO",
	  "parameters": { }
	}
	```

2. Copy or incorporate `src/packages/custom-locale/src/controller.groovy` into each content type you want to use smart copy on (this controller exectures on copy command and will update paths and metadata like locales.
3. Add the following felds to your content types:
 - Control type: Custom Locale Control 
   - Title: Locale Source ID
   - Variable Name: `localeSourceId_s`
 - Control type: Input
   - Title: Locale Code
   - Variable Name: `localeCode_s`
   - Readonly: true
   - Display Size: 50
   - Max Lenght: 50
 - Control type: Input
   - Title: Source Locale Code
   - Variable Name: `sourceLocaleCode_s`
   - Readonly: true
   - Display Size: 50
   - Max Lenght: 50

# Toolbar Optional Configuration (`ui.xml`)
```xml
<widget id="org.rd.plugin.smartcopy.openSmartCopyToolbarButton">
	<plugin
		id="org.rd.plugin.smartcopy"
		site="{site}"
		type="apps"
		name="smartcopy"
		file="index.js"
	/>
	<configuration>
		<title>Copy</title><!-- The text on the button and/or tooltip -->
		<tooltip>Smart Copy</tooltip><!-- Optional. Defaults to the value of `title`. Text for the tooltip. -->
		<useIcon>false</useIcon><!-- Optional. Use an icon button (no text, tooltip only) -->
		<useIconWithText>true</useIconWithText><!-- Optional. Use a button with text and icon -->
        <dialogTitle>Smart Copy</dialogTitle><!-- Optional. Defaults to title. The title for the dialog that the button opens. -->
		<icon id="@mui/icons-material/TranslateRounded"/>
	</configuration>
</widget>
```

# Sidebar Optional Configuration (`ui.xml`)
```xml
    <widget id="org.rd.plugin.smartcopy.openSmartCopyPanelButton">
       <plugin id="org.rd.plugin.smartcopy"
               site="{site}"
               type="apps"
               name="smartcopy"
               file="index.js"/>
        <!-- optional parameters -->
        <configuration>
            <title>Copy for Translation</title>
            <icon id="@mui/icons-material/TranslateRounded"/>
        </configuration>
    </widget>
```
# Custom Locale Configuration (`site-config-tools.xml`)
```xml
    <control>
        <plugin>
            <pluginId>org.rd.plugin</pluginId>
            <type>control</type>
            <name>custom-locale</name>
            <filename>main.js</filename>
        </plugin>
        <icon>
            <class>fa-language</class>
        </icon>
    </control>
```

# Add the Type Controller
Add the following content type hooks to each content type will be "Smart copied"
```
import scripts.libs.CommonLifecycleApi
import java.util.UUID
import groovy.util.logging.Slf4j
import org.dom4j.DocumentHelper

@Slf4j
class LocaleFieldsOnCopyContentTypeHook {

    def site
    def path
    def contentLoader
    def applicationContext

    def getLocaleFromPath(path) {
        def matcher = (path =~ /^\/site\/[^\/]+\/([^\/]+)\//)
        if (matcher) {
            return matcher.group(1)
        } else {
            return ''
        }
    }

    def updateElement(name, text, elem, rootElem) {
        if (elem) {
            elem.text = text
        } else {
            def newElem = DocumentHelper.createElement(name)
                newElem.text = text

            rootElement.add(newElem)
        }
    }

    def run() {
        log.info("Running {} for path {}", getClass().getSimpleName(), path)

        def contentService = applicationContext.getBean("cstudioContentService")
        def document = contentLoader.getContent(site, path)
        def rootElem = document.rootElement
        def localeCodeElem = rootElem.selectSingleNode("localeCode_s")
        def sourceLocaleCodeElem = rootElem.selectSingleNode("sourceLocaleCode_s")
        def localeSourceIdElem = rootElem.selectSingleNode("localeSourceId_s")
        def pathLocaleCode = getLocaleFromPath(path)
        def originLocaleCode = localeCodeElem.text

        if (localeCodeElem && originLocaleCode) {
            if (originLocaleCode != pathLocaleCode) {
                // If the locale is different, update the locale code, and keep the locale source ID
                log.info("Original locale code ({}) is different from current locale code in path ({}). " +
                         "Updating the locale field.", originLocaleCode, pathLocaleCode)

                updateElement("localeCode_s", pathLocaleCode, localeCodeElem, rootElem)

                // update shared component link to the new locale if component exists in the new locale
                def sharedComponents = rootElem.selectNodes('//*[@item-list="true"]')
                sharedComponents.each { element ->
                    def items = element.elements('item')
                    items.each { itemElm ->
                        if (itemElm.attributeValue('inline')) {
                            // item is not a shared component
                            return
                        }

                        ['key', 'include'].each { elementName ->
                            def replaceElm = itemElm.element(elementName)
                            def isSharedComponent = replaceElm && replaceElm.text && replaceElm.text.startsWith('/site/') && replaceElm.text.endsWith('.xml')
                            if (isSharedComponent) {
                                def newPath = replaceElm.text.replace("/${originLocaleCode}/", "/${pathLocaleCode}/")
                                def contentExists = contentService.contentExists(site, newPath)
                                if (contentExists) {
                                    log.info("Shared component ({}) exists for the element ({}). " +
                                             "Updating the link.", newPath, "${element.getName()}.${itemElm.getName()}.${elementName}")
                                    updateElement(elementName, newPath, replaceElm, rootElem)
                                }
                            }
                        }
                    }
                }
            } else {
                // If the locale is the same, create a new locale source ID
                log.info("Original locale code ({}) is the same as current locale code in path ({}). " +
                         "Generating new locale source ID and updating the source locale code to the current one",
                         localeCodeElem.text, pathLocaleCode)

                updateElement("localeSourceId_s", UUID.randomUUID().toString(), localeSourceIdElem, rootElem)
                updateElement("sourceLocaleCode_s", pathLocaleCode, sourceLocaleCodeElem, rootElem)
            }
        }

        // Write content
        def is = new ByteArrayInputStream(document.asXML().getBytes('UTF-8'))
            contentService.writeContent(site, path, is)
    }

}

def contentLifecycleParams =[:]
    contentLifecycleParams.site = site
    contentLifecycleParams.path = path
    contentLifecycleParams.user = user
    contentLifecycleParams.contentType = contentType
    contentLifecycleParams.contentLifecycleOperation = contentLifecycleOperation
    contentLifecycleParams.contentLoader = contentLoader
    contentLifecycleParams.applicationContext = applicationContext

// Only run if it's a copy or a duplicate
if (contentLifecycleOperation == "COPY" || contentLifecycleOperation == "DUPLICATE") {
    def hook = new LocaleFieldsOnCopyContentTypeHook()
        hook.site = site
        hook.path = path
        hook.contentLoader = contentLoader
        hook.applicationContext = applicationContext

    hook.run()
}

def controller = new CommonLifecycleApi(contentLifecycleParams)
controller.execute()
```
