# SmartCopy Plugin for CrafterCMS

- The Smart Copy plugin adds the following copy behaviors to the system:
  - Locale / translation behaviors: 
    - A dialog that makes it easy to copy content from one locale to another
    - Form controls that track the lineage or source ID of the content copied from one item to another
    - A controller that updates the locale of references to child content objects if they exist in the destination location
 - Anbility to place a shortcut for the copy behavior in the sidebar and top navigation of Studio
 - Ability to re-badge/icon  and re-label the Smart Copy shortcuts
 
# Installation

1. Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.
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
