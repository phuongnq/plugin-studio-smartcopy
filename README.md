# SmartCopy Plugin for CrafterCMS


# Installation

Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.

# Toolbar Optional Configuration (`ui.xml`)
```
  <widget id="org.rd.plugin.smartcopy.openSmartCopyToolbarButton">
      <plugin id="org.rd.plugin.smartcopy"
              site="{site}"
              type="apps"
              name="smartcopy"
              file="index.js"/>
     <configuration>
         <title>Copy for Translation</title> 
         <icon id="@mui/icons-material/TranslateRounded"/>
     </configuration>                
  </widget>
```

# Sidebar Optional Configuration (`ui.xml`)
```
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

