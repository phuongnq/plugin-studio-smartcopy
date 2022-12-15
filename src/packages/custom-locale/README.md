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

Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.

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

## Update content type `controller.groovy`

Copy `src/controller.groovy`