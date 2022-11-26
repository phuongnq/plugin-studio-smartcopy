# Custom Locale Control Plugin

## Update Plugin

To update, modify `src/main.js` file.

## Build source code

```
cd sources/custom-locale
yarn
yarn build
```

## Install plugin

After the build step above, run following commands to commit update to sandbox:

```
git add ../../config/studio/plugins/control/custom-locale/main.js
git commit -m "Update custom locale plugin"
```

## Add required fields to content types

* Add an input with name Locale Code

  * Variable: localeCode_s

  * Display Size: 50

  * Readonly: true

* Add an input with name Source Locale Code

  * Variable: sourceLocaleCode_s

  * Display Size: 50

  * Readonly: true

* Add Custom Locale control

  * Variable: localeSourceId_s