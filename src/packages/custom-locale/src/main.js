"use strict";

(function () {
  var React = CrafterCMSNext.React;
  var ReactDOM = CrafterCMSNext.ReactDOM;
  var CrafterCMSNextBridge = CrafterCMSNext.components.CrafterCMSNextBridge;
  var ConfirmDialog = CrafterCMSNext.components.ConfirmDialog;

  function CustomLocale(props) {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [locale, setLocale] = React.useState(props.locale);

    const DEFAULT_FIELDS_MAX_LENGTH = 50;

    const onConfirmOk = (e) => {
      e.preventDefault();
      const { uuid, sourceLocaleCode } = props.unlinkLocale();
      setLocale({
        localeCode: locale.localeCode,
        localeSourceId: uuid,
        sourceLocaleCode: sourceLocaleCode,
      });
      setIsDialogOpen(false);
    };

    React.useEffect(() => {
      const setLocaleCodeTimer = setInterval(() => {
        if (typeof $ !== 'function') return;
        if (!$('#localeCode_s').find('input')[0]) return;

        if (locale.localeCode && locale.localeCode.length >= 0) {
          $('#localeCode_s').find('input')[0].value = locale.localeCode;
          $('#localeCode_s').find('.cstudio-form-control-input-count')[0].innerHTML = `${locale.localeCode.length} / ${DEFAULT_FIELDS_MAX_LENGTH}`;
        }
        clearInterval(setLocaleCodeTimer);
      }, 100);

      const setSourceLocaleCodeTimer = setInterval(() => {
        if (typeof $ !== 'function') return;
        if (!$('#sourceLocaleCode_s').find('input')[0]) return;

        if (locale.sourceLocaleCode && locale.sourceLocaleCode.length >=0 ) {
          $('#sourceLocaleCode_s').find('input')[0].value = locale.sourceLocaleCode;
          $('#sourceLocaleCode_s').find('.cstudio-form-control-input-count')[0].innerHTML = `${locale.sourceLocaleCode.length} / ${DEFAULT_FIELDS_MAX_LENGTH}`;
        }
        clearInterval(setSourceLocaleCodeTimer);
      }, 100);
    }, [locale.localeCode, locale.sourceLocaleCode, locale.localeSourceId]);

    return (
      <>
      {locale && locale.localeCode && locale.sourceLocaleCode && locale.localeCode !== locale.sourceLocaleCode && (
        <>
          <button
            style={{
              float: 'right',
              color: '#fff',
              backgroundColor: '#7e9dbb',
              border: '1px solid transparent',
              borderColor: '#6d90b2',
              minWidth: '72px',
            }}
            onClick={() => { setIsDialogOpen(true); }}
          >
            Unlink
          </button>
          <CrafterCMSNextBridge>
            <ConfirmDialog
              open={isDialogOpen}
              onOk={onConfirmOk}
              onCancel={() => { setIsDialogOpen(false) }}
              onClose={() => { setIsDialogOpen(false) }}
              description={"Warning: By unlinking this content you are indicating that this object has no localization relationships to any other objects in the system. Do you wish to continue?"}
              title={"Unlink"}
              disableEnforceFocus={false}
            />
          </CrafterCMSNextBridge>
        </>
      )}
      </>
    );
  }

  CStudioForms.Controls.CustomLocale = CStudioForms.Controls.CustomLocale || function (id, form, owner, properties, constraints) {
    this.owner = owner;
    this.owner.registerField(this);
    this.errors = [];
    this.properties = properties;
    this.constraints = constraints;
    this.inputEl = null;
    this.countEl = null;
    this.required = false;
    this.value = '_not-set';
    this.form = form;
    this.id = id;
    this.supportedPostFixes = ['_s'];

    return this;
  };

  YAHOO.extend(CStudioForms.Controls.CustomLocale, CStudioForms.CStudioFormField, {
    getLabel: function () {
      return 'Custom Locale Control';
    },
    /**
     * List of valid custom locale codes for Pokemon
     */
    _getLocaleList: function () {
      return ['us', 'uk', 'de', 'es', 'fr', 'it', 'dk', 'fi', 'nl', 'no', 'ru', 'se', 'br', 'el', 'jp'];
    },
    /**
     * Get locale code from a site path. Ex: /site/us/content/pokemon/pikachu.html => us
     * @param {*} path
     * @returns
     */
    _getLocaleFromPath: function(path) {
      if (!path) return '';

      const pathStr = path.toLowerCase().replace(/^\/site\/[^\/]+\//, '');
      const localeCode = pathStr.split('/')[0];
      if (this._getLocaleList().indexOf(localeCode) >= 0) {
        return localeCode;
      }

      return '';
    },
    /**
     * Unlink the content from the current locale
     * New uuid will be assigned and the (source) locale code will be set to current path locale
     * @param {*} obj
     * @returns
     */
    _unlinkLocale: function (obj) {
      const uuid = CStudioAuthoring.Utils.generateUUID();
      const sourceLocaleCode = this._getLocaleFromPath(obj.form.path);
      obj.form.updateModel('localeSourceId_s', uuid);
      obj.form.updateModel('sourceLocaleCode_s', sourceLocaleCode);
      return { uuid, sourceLocaleCode };
    },
    /**
     * Render form from a React component
     * @param {*} obj
     * @returns
     */
    _renderReactComponent: function(obj) {
      const localeFromPath = this._getLocaleFromPath(obj.form.path);

      if (!obj.form.model.localeSourceId_s) {
        return this._renderNewItem(obj, localeFromPath);
      }

      return this._renderExistingItem(obj, localeFromPath);
    },
    /**
     * Item is solo created without being copied from other item
     */
    _renderNewItem: function(obj, localeFromPath) {
      const locale = {
        localeCode: localeFromPath,
        sourceLocaleCode: localeFromPath,
        localeSourceId: CStudioAuthoring.Utils.generateUUID()
      };

      obj.form.updateModel('localeCode_s', locale.localeCode);
      obj.form.updateModel('sourceLocaleCode_s', locale.sourceLocaleCode);
      obj.form.updateModel('localeSourceId_s', locale.localeSourceId);

      ReactDOM.unmountComponentAtNode(obj.containerEl);
      ReactDOM.render(React.createElement(CustomLocale, { locale, unlinkLocale: () => this._unlinkLocale(obj) }), obj.containerEl);
    },
    /**
     * Item already exists (it's an update)
     */
    _renderExistingItem: function(obj, localeFromPath) {
      const locale = {
        localeCode: localeFromPath,
        sourceLocaleCode: obj.form.model.sourceLocaleCode_s || localeFromPath,
        localeSourceId: obj.form.model.localeSourceId_s
      };
      obj.form.updateModel('localeCode_s', locale.localeCode);
      obj.form.updateModel('sourceLocaleCode_s', locale.sourceLocaleCode);
      ReactDOM.unmountComponentAtNode(obj.containerEl);
      ReactDOM.render(React.createElement(CustomLocale, { locale, unlinkLocale: () => this._unlinkLocale(obj) }), obj.containerEl);
    },
    render: function (config, containerEl) {
      containerEl.id = this.id;
      this._renderReactComponent(this);
    },
    getValue: function () {
      return this.value;
    },
    setValue: function (value) {
      this.value = value;
    },
    getName: function () {
      return 'custom-locale';
    },
    getSupportedProperties: function () {
      return [];
    },
    getSupportedConstraints: function () {
      return [];
    },
    getSupportedPostFixes: function () {
      return this.supportedPostFixes;
    }
  });
  CStudioAuthoring.Module.moduleLoaded('custom-locale', CStudioForms.Controls.CustomLocale);
})();