(function () {
  'use strict';

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  (function () {
    var React = CrafterCMSNext.React;
    var ReactDOM = CrafterCMSNext.ReactDOM;
    var CrafterCMSNextBridge = CrafterCMSNext.components.CrafterCMSNextBridge;
    var ConfirmDialog = CrafterCMSNext.components.ConfirmDialog;

    function CustomLocale(props) {
      var _React$useState = React.useState(false),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          isDialogOpen = _React$useState2[0],
          setIsDialogOpen = _React$useState2[1];

      var _React$useState3 = React.useState(props.locale),
          _React$useState4 = _slicedToArray(_React$useState3, 2),
          locale = _React$useState4[0],
          setLocale = _React$useState4[1];

      var DEFAULT_FIELDS_MAX_LENGTH = 50;

      var onConfirmOk = function onConfirmOk(e) {
        e.preventDefault();

        var _props$unlinkLocale = props.unlinkLocale(),
            uuid = _props$unlinkLocale.uuid,
            sourceLocaleCode = _props$unlinkLocale.sourceLocaleCode;

        setLocale({
          localeCode: locale.localeCode,
          localeSourceId: uuid,
          sourceLocaleCode: sourceLocaleCode
        });
        setIsDialogOpen(false);
      };

      React.useEffect(function () {
        var setLocaleCodeTimer = setInterval(function () {
          if (typeof $ !== 'function') return;
          if (!$('#localeCode_s').find('input')[0]) return;

          if (locale.localeCode && locale.localeCode.length >= 0) {
            $('#localeCode_s').find('input')[0].value = locale.localeCode;
            $('#localeCode_s').find('.cstudio-form-control-input-count')[0].innerHTML = "".concat(locale.localeCode.length, " / ").concat(DEFAULT_FIELDS_MAX_LENGTH);
          }

          clearInterval(setLocaleCodeTimer);
        }, 100);
        var setSourceLocaleCodeTimer = setInterval(function () {
          if (typeof $ !== 'function') return;
          if (!$('#sourceLocaleCode_s').find('input')[0]) return;

          if (locale.sourceLocaleCode && locale.sourceLocaleCode.length >= 0) {
            $('#sourceLocaleCode_s').find('input')[0].value = locale.sourceLocaleCode;
            $('#sourceLocaleCode_s').find('.cstudio-form-control-input-count')[0].innerHTML = "".concat(locale.sourceLocaleCode.length, " / ").concat(DEFAULT_FIELDS_MAX_LENGTH);
          }

          clearInterval(setSourceLocaleCodeTimer);
        }, 100);
      }, [locale.localeCode, locale.sourceLocaleCode, locale.localeSourceId]);
      return /*#__PURE__*/React.createElement(React.Fragment, null, locale && locale.localeCode && locale.sourceLocaleCode && locale.localeCode !== locale.sourceLocaleCode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        className: "btn btn-default btn-sm edit-position",
        onClick: function onClick() {
          setIsDialogOpen(true);
        },
        style: {
          padding: '1px 5px',
          marginLeft: '5px',
          display: 'inline',
          "float": 'right'
        }
      }, "Unlink"), /*#__PURE__*/React.createElement(CrafterCMSNextBridge, null, /*#__PURE__*/React.createElement(ConfirmDialog, {
        open: isDialogOpen,
        onOk: onConfirmOk,
        onCancel: function onCancel() {
          setIsDialogOpen(false);
        },
        onClose: function onClose() {
          setIsDialogOpen(false);
        },
        body: "Warning: By unlinking this content you are indicating that this object has no localization relationships to any other objects in the system. Do you wish to continue?",
        title: "Unlink",
        disableEnforceFocus: false
      }))));
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
      getLabel: function getLabel() {
        return 'Custom Locale Control';
      },

      /**
       * List of valid custom locale codes
       */
      _getLocaleList: function _getLocaleList() {
        return ['us', 'uk', 'de', 'es', 'fr', 'it', 'dk', 'fi', 'nl', 'no', 'ru', 'se', 'br', 'el', 'jp'];
      },

      /**
       * Get locale code from a site path. Ex: /site/website/us/content/sample-content/index.xml => us
       * @param {*} path
       * @returns
       */
      _getLocaleFromPath: function _getLocaleFromPath(path) {
        if (!path) return '';
        var pathStr = path.toLowerCase().replace(/^\/site\/[^\/]+\//, '');
        var localeCode = pathStr.split('/')[0];

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
      _unlinkLocale: function _unlinkLocale(obj) {
        var uuid = CStudioAuthoring.Utils.generateUUID();

        var sourceLocaleCode = this._getLocaleFromPath(obj.form.path);

        obj.form.updateModel('localeSourceId_s', uuid);
        obj.form.updateModel('sourceLocaleCode_s', sourceLocaleCode);
        return {
          uuid: uuid,
          sourceLocaleCode: sourceLocaleCode
        };
      },

      /**
       * Render form from a React component
       * @param {*} obj
       * @returns
       */
      _renderReactComponent: function _renderReactComponent(obj) {
        var localeFromPath = this._getLocaleFromPath(obj.form.path);

        if (!obj.form.model.localeSourceId_s) {
          return this._renderNewItem(obj, localeFromPath);
        }

        return this._renderExistingItem(obj, localeFromPath);
      },

      /**
       * Item is solo created without being copied from other item
       */
      _renderNewItem: function _renderNewItem(obj, localeFromPath) {
        var _this = this;

        var locale = {
          localeCode: localeFromPath,
          sourceLocaleCode: localeFromPath,
          localeSourceId: CStudioAuthoring.Utils.generateUUID()
        };
        obj.form.updateModel('localeCode_s', locale.localeCode);
        obj.form.updateModel('sourceLocaleCode_s', locale.sourceLocaleCode);
        obj.form.updateModel('localeSourceId_s', locale.localeSourceId);
        ReactDOM.unmountComponentAtNode(obj.containerEl);
        ReactDOM.render(React.createElement(CustomLocale, {
          locale: locale,
          unlinkLocale: function unlinkLocale() {
            return _this._unlinkLocale(obj);
          }
        }), obj.containerEl);
      },

      /**
       * Item already exists (it's an update)
       */
      _renderExistingItem: function _renderExistingItem(obj, localeFromPath) {
        var _this2 = this;

        var locale = {
          localeCode: localeFromPath,
          sourceLocaleCode: obj.form.model.sourceLocaleCode_s || localeFromPath,
          localeSourceId: obj.form.model.localeSourceId_s
        };
        obj.form.updateModel('localeCode_s', locale.localeCode);
        obj.form.updateModel('sourceLocaleCode_s', locale.sourceLocaleCode);
        ReactDOM.unmountComponentAtNode(obj.containerEl);
        ReactDOM.render(React.createElement(CustomLocale, {
          locale: locale,
          unlinkLocale: function unlinkLocale() {
            return _this2._unlinkLocale(obj);
          }
        }), obj.containerEl);
      },
      render: function render(config, containerEl) {
        containerEl.id = this.id;

        this._renderReactComponent(this);
      },
      getValue: function getValue() {
        return this.value;
      },
      setValue: function setValue(value) {
        this.value = value;
      },
      getName: function getName() {
        return 'custom-locale';
      },
      getSupportedProperties: function getSupportedProperties() {
        return [];
      },
      getSupportedConstraints: function getSupportedConstraints() {
        return [];
      },
      getSupportedPostFixes: function getSupportedPostFixes() {
        return this.supportedPostFixes;
      }
    });
    CStudioAuthoring.Module.moduleLoaded('custom-locale', CStudioForms.Controls.CustomLocale);
  })();

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BhY2thZ2VzL2N1c3RvbS1sb2NhbGUvc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBSZWFjdCA9IENyYWZ0ZXJDTVNOZXh0LlJlYWN0O1xuICB2YXIgUmVhY3RET00gPSBDcmFmdGVyQ01TTmV4dC5SZWFjdERPTTtcbiAgdmFyIENyYWZ0ZXJDTVNOZXh0QnJpZGdlID0gQ3JhZnRlckNNU05leHQuY29tcG9uZW50cy5DcmFmdGVyQ01TTmV4dEJyaWRnZTtcbiAgdmFyIENvbmZpcm1EaWFsb2cgPSBDcmFmdGVyQ01TTmV4dC5jb21wb25lbnRzLkNvbmZpcm1EaWFsb2c7XG5cbiAgZnVuY3Rpb24gQ3VzdG9tTG9jYWxlKHByb3BzKSB7XG4gICAgY29uc3QgW2lzRGlhbG9nT3Blbiwgc2V0SXNEaWFsb2dPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGUocHJvcHMubG9jYWxlKTtcblxuICAgIGNvbnN0IERFRkFVTFRfRklFTERTX01BWF9MRU5HVEggPSA1MDtcblxuICAgIGNvbnN0IG9uQ29uZmlybU9rID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgdXVpZCwgc291cmNlTG9jYWxlQ29kZSB9ID0gcHJvcHMudW5saW5rTG9jYWxlKCk7XG4gICAgICBzZXRMb2NhbGUoe1xuICAgICAgICBsb2NhbGVDb2RlOiBsb2NhbGUubG9jYWxlQ29kZSxcbiAgICAgICAgbG9jYWxlU291cmNlSWQ6IHV1aWQsXG4gICAgICAgIHNvdXJjZUxvY2FsZUNvZGU6IHNvdXJjZUxvY2FsZUNvZGUsXG4gICAgICB9KTtcbiAgICAgIHNldElzRGlhbG9nT3BlbihmYWxzZSk7XG4gICAgfTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBzZXRMb2NhbGVDb2RlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgJCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgICAgICBpZiAoISQoJyNsb2NhbGVDb2RlX3MnKS5maW5kKCdpbnB1dCcpWzBdKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGxvY2FsZS5sb2NhbGVDb2RlICYmIGxvY2FsZS5sb2NhbGVDb2RlLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgJCgnI2xvY2FsZUNvZGVfcycpLmZpbmQoJ2lucHV0JylbMF0udmFsdWUgPSBsb2NhbGUubG9jYWxlQ29kZTtcbiAgICAgICAgICAkKCcjbG9jYWxlQ29kZV9zJykuZmluZCgnLmNzdHVkaW8tZm9ybS1jb250cm9sLWlucHV0LWNvdW50JylbMF0uaW5uZXJIVE1MID0gYCR7bG9jYWxlLmxvY2FsZUNvZGUubGVuZ3RofSAvICR7REVGQVVMVF9GSUVMRFNfTUFYX0xFTkdUSH1gO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0TG9jYWxlQ29kZVRpbWVyKTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIGNvbnN0IHNldFNvdXJjZUxvY2FsZUNvZGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiAkICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgICAgIGlmICghJCgnI3NvdXJjZUxvY2FsZUNvZGVfcycpLmZpbmQoJ2lucHV0JylbMF0pIHJldHVybjtcblxuICAgICAgICBpZiAobG9jYWxlLnNvdXJjZUxvY2FsZUNvZGUgJiYgbG9jYWxlLnNvdXJjZUxvY2FsZUNvZGUubGVuZ3RoID49MCApIHtcbiAgICAgICAgICAkKCcjc291cmNlTG9jYWxlQ29kZV9zJykuZmluZCgnaW5wdXQnKVswXS52YWx1ZSA9IGxvY2FsZS5zb3VyY2VMb2NhbGVDb2RlO1xuICAgICAgICAgICQoJyNzb3VyY2VMb2NhbGVDb2RlX3MnKS5maW5kKCcuY3N0dWRpby1mb3JtLWNvbnRyb2wtaW5wdXQtY291bnQnKVswXS5pbm5lckhUTUwgPSBgJHtsb2NhbGUuc291cmNlTG9jYWxlQ29kZS5sZW5ndGh9IC8gJHtERUZBVUxUX0ZJRUxEU19NQVhfTEVOR1RIfWA7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChzZXRTb3VyY2VMb2NhbGVDb2RlVGltZXIpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LCBbbG9jYWxlLmxvY2FsZUNvZGUsIGxvY2FsZS5zb3VyY2VMb2NhbGVDb2RlLCBsb2NhbGUubG9jYWxlU291cmNlSWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAge2xvY2FsZSAmJiBsb2NhbGUubG9jYWxlQ29kZSAmJiBsb2NhbGUuc291cmNlTG9jYWxlQ29kZSAmJiBsb2NhbGUubG9jYWxlQ29kZSAhPT0gbG9jYWxlLnNvdXJjZUxvY2FsZUNvZGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gZWRpdC1wb3NpdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldElzRGlhbG9nT3Blbih0cnVlKTsgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxcHggNXB4JyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBVbmxpbmtcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Q3JhZnRlckNNU05leHRCcmlkZ2U+XG4gICAgICAgICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICAgICAgICBvcGVuPXtpc0RpYWxvZ09wZW59XG4gICAgICAgICAgICAgIG9uT2s9e29uQ29uZmlybU9rfVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4geyBzZXRJc0RpYWxvZ09wZW4oZmFsc2UpIH19XG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHsgc2V0SXNEaWFsb2dPcGVuKGZhbHNlKSB9fVxuICAgICAgICAgICAgICBib2R5PXtcIldhcm5pbmc6IEJ5IHVubGlua2luZyB0aGlzIGNvbnRlbnQgeW91IGFyZSBpbmRpY2F0aW5nIHRoYXQgdGhpcyBvYmplY3QgaGFzIG5vIGxvY2FsaXphdGlvbiByZWxhdGlvbnNoaXBzIHRvIGFueSBvdGhlciBvYmplY3RzIGluIHRoZSBzeXN0ZW0uIERvIHlvdSB3aXNoIHRvIGNvbnRpbnVlP1wifVxuICAgICAgICAgICAgICB0aXRsZT17XCJVbmxpbmtcIn1cbiAgICAgICAgICAgICAgZGlzYWJsZUVuZm9yY2VGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ3JhZnRlckNNU05leHRCcmlkZ2U+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBDU3R1ZGlvRm9ybXMuQ29udHJvbHMuQ3VzdG9tTG9jYWxlID0gQ1N0dWRpb0Zvcm1zLkNvbnRyb2xzLkN1c3RvbUxvY2FsZSB8fCBmdW5jdGlvbiAoaWQsIGZvcm0sIG93bmVyLCBwcm9wZXJ0aWVzLCBjb25zdHJhaW50cykge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLm93bmVyLnJlZ2lzdGVyRmllbGQodGhpcyk7XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICB0aGlzLmlucHV0RWwgPSBudWxsO1xuICAgIHRoaXMuY291bnRFbCA9IG51bGw7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSAnX25vdC1zZXQnO1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3VwcG9ydGVkUG9zdEZpeGVzID0gWydfcyddO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgWUFIT08uZXh0ZW5kKENTdHVkaW9Gb3Jtcy5Db250cm9scy5DdXN0b21Mb2NhbGUsIENTdHVkaW9Gb3Jtcy5DU3R1ZGlvRm9ybUZpZWxkLCB7XG4gICAgZ2V0TGFiZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnQ3VzdG9tIExvY2FsZSBDb250cm9sJztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgdmFsaWQgY3VzdG9tIGxvY2FsZSBjb2Rlc1xuICAgICAqL1xuICAgIF9nZXRMb2NhbGVMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gWyd1cycsICd1aycsICdkZScsICdlcycsICdmcicsICdpdCcsICdkaycsICdmaScsICdubCcsICdubycsICdydScsICdzZScsICdicicsICdlbCcsICdqcCddO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IGxvY2FsZSBjb2RlIGZyb20gYSBzaXRlIHBhdGguIEV4OiAvc2l0ZS93ZWJzaXRlL3VzL2NvbnRlbnQvc2FtcGxlLWNvbnRlbnQvaW5kZXgueG1sID0+IHVzXG4gICAgICogQHBhcmFtIHsqfSBwYXRoXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBfZ2V0TG9jYWxlRnJvbVBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIGlmICghcGF0aCkgcmV0dXJuICcnO1xuXG4gICAgICBjb25zdCBwYXRoU3RyID0gcGF0aC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL15cXC9zaXRlXFwvW15cXC9dK1xcLy8sICcnKTtcbiAgICAgIGNvbnN0IGxvY2FsZUNvZGUgPSBwYXRoU3RyLnNwbGl0KCcvJylbMF07XG4gICAgICBpZiAodGhpcy5fZ2V0TG9jYWxlTGlzdCgpLmluZGV4T2YobG9jYWxlQ29kZSkgPj0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlQ29kZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5saW5rIHRoZSBjb250ZW50IGZyb20gdGhlIGN1cnJlbnQgbG9jYWxlXG4gICAgICogTmV3IHV1aWQgd2lsbCBiZSBhc3NpZ25lZCBhbmQgdGhlIChzb3VyY2UpIGxvY2FsZSBjb2RlIHdpbGwgYmUgc2V0IHRvIGN1cnJlbnQgcGF0aCBsb2NhbGVcbiAgICAgKiBAcGFyYW0geyp9IG9ialxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgX3VubGlua0xvY2FsZTogZnVuY3Rpb24gKG9iaikge1xuICAgICAgY29uc3QgdXVpZCA9IENTdHVkaW9BdXRob3JpbmcuVXRpbHMuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICBjb25zdCBzb3VyY2VMb2NhbGVDb2RlID0gdGhpcy5fZ2V0TG9jYWxlRnJvbVBhdGgob2JqLmZvcm0ucGF0aCk7XG4gICAgICBvYmouZm9ybS51cGRhdGVNb2RlbCgnbG9jYWxlU291cmNlSWRfcycsIHV1aWQpO1xuICAgICAgb2JqLmZvcm0udXBkYXRlTW9kZWwoJ3NvdXJjZUxvY2FsZUNvZGVfcycsIHNvdXJjZUxvY2FsZUNvZGUpO1xuICAgICAgcmV0dXJuIHsgdXVpZCwgc291cmNlTG9jYWxlQ29kZSB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGZvcm0gZnJvbSBhIFJlYWN0IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Kn0gb2JqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBfcmVuZGVyUmVhY3RDb21wb25lbnQ6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgY29uc3QgbG9jYWxlRnJvbVBhdGggPSB0aGlzLl9nZXRMb2NhbGVGcm9tUGF0aChvYmouZm9ybS5wYXRoKTtcblxuICAgICAgaWYgKCFvYmouZm9ybS5tb2RlbC5sb2NhbGVTb3VyY2VJZF9zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJOZXdJdGVtKG9iaiwgbG9jYWxlRnJvbVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRXhpc3RpbmdJdGVtKG9iaiwgbG9jYWxlRnJvbVBhdGgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogSXRlbSBpcyBzb2xvIGNyZWF0ZWQgd2l0aG91dCBiZWluZyBjb3BpZWQgZnJvbSBvdGhlciBpdGVtXG4gICAgICovXG4gICAgX3JlbmRlck5ld0l0ZW06IGZ1bmN0aW9uKG9iaiwgbG9jYWxlRnJvbVBhdGgpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHtcbiAgICAgICAgbG9jYWxlQ29kZTogbG9jYWxlRnJvbVBhdGgsXG4gICAgICAgIHNvdXJjZUxvY2FsZUNvZGU6IGxvY2FsZUZyb21QYXRoLFxuICAgICAgICBsb2NhbGVTb3VyY2VJZDogQ1N0dWRpb0F1dGhvcmluZy5VdGlscy5nZW5lcmF0ZVVVSUQoKVxuICAgICAgfTtcblxuICAgICAgb2JqLmZvcm0udXBkYXRlTW9kZWwoJ2xvY2FsZUNvZGVfcycsIGxvY2FsZS5sb2NhbGVDb2RlKTtcbiAgICAgIG9iai5mb3JtLnVwZGF0ZU1vZGVsKCdzb3VyY2VMb2NhbGVDb2RlX3MnLCBsb2NhbGUuc291cmNlTG9jYWxlQ29kZSk7XG4gICAgICBvYmouZm9ybS51cGRhdGVNb2RlbCgnbG9jYWxlU291cmNlSWRfcycsIGxvY2FsZS5sb2NhbGVTb3VyY2VJZCk7XG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUob2JqLmNvbnRhaW5lckVsKTtcbiAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEN1c3RvbUxvY2FsZSwgeyBsb2NhbGUsIHVubGlua0xvY2FsZTogKCkgPT4gdGhpcy5fdW5saW5rTG9jYWxlKG9iaikgfSksIG9iai5jb250YWluZXJFbCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBJdGVtIGFscmVhZHkgZXhpc3RzIChpdCdzIGFuIHVwZGF0ZSlcbiAgICAgKi9cbiAgICBfcmVuZGVyRXhpc3RpbmdJdGVtOiBmdW5jdGlvbihvYmosIGxvY2FsZUZyb21QYXRoKSB7XG4gICAgICBjb25zdCBsb2NhbGUgPSB7XG4gICAgICAgIGxvY2FsZUNvZGU6IGxvY2FsZUZyb21QYXRoLFxuICAgICAgICBzb3VyY2VMb2NhbGVDb2RlOiBvYmouZm9ybS5tb2RlbC5zb3VyY2VMb2NhbGVDb2RlX3MgfHwgbG9jYWxlRnJvbVBhdGgsXG4gICAgICAgIGxvY2FsZVNvdXJjZUlkOiBvYmouZm9ybS5tb2RlbC5sb2NhbGVTb3VyY2VJZF9zXG4gICAgICB9O1xuICAgICAgb2JqLmZvcm0udXBkYXRlTW9kZWwoJ2xvY2FsZUNvZGVfcycsIGxvY2FsZS5sb2NhbGVDb2RlKTtcbiAgICAgIG9iai5mb3JtLnVwZGF0ZU1vZGVsKCdzb3VyY2VMb2NhbGVDb2RlX3MnLCBsb2NhbGUuc291cmNlTG9jYWxlQ29kZSk7XG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKG9iai5jb250YWluZXJFbCk7XG4gICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDdXN0b21Mb2NhbGUsIHsgbG9jYWxlLCB1bmxpbmtMb2NhbGU6ICgpID0+IHRoaXMuX3VubGlua0xvY2FsZShvYmopIH0pLCBvYmouY29udGFpbmVyRWwpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoY29uZmlnLCBjb250YWluZXJFbCkge1xuICAgICAgY29udGFpbmVyRWwuaWQgPSB0aGlzLmlkO1xuICAgICAgdGhpcy5fcmVuZGVyUmVhY3RDb21wb25lbnQodGhpcyk7XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXROYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ2N1c3RvbS1sb2NhbGUnO1xuICAgIH0sXG4gICAgZ2V0U3VwcG9ydGVkUHJvcGVydGllczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0U3VwcG9ydGVkQ29uc3RyYWludHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGdldFN1cHBvcnRlZFBvc3RGaXhlczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydGVkUG9zdEZpeGVzO1xuICAgIH1cbiAgfSk7XG4gIENTdHVkaW9BdXRob3JpbmcuTW9kdWxlLm1vZHVsZUxvYWRlZCgnY3VzdG9tLWxvY2FsZScsIENTdHVkaW9Gb3Jtcy5Db250cm9scy5DdXN0b21Mb2NhbGUpO1xufSkoKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDcmFmdGVyQ01TTmV4dCIsIlJlYWN0RE9NIiwiQ3JhZnRlckNNU05leHRCcmlkZ2UiLCJjb21wb25lbnRzIiwiQ29uZmlybURpYWxvZyIsIkN1c3RvbUxvY2FsZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0RpYWxvZ09wZW4iLCJzZXRJc0RpYWxvZ09wZW4iLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJERUZBVUxUX0ZJRUxEU19NQVhfTEVOR1RIIiwib25Db25maXJtT2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1bmxpbmtMb2NhbGUiLCJ1dWlkIiwic291cmNlTG9jYWxlQ29kZSIsImxvY2FsZUNvZGUiLCJsb2NhbGVTb3VyY2VJZCIsInVzZUVmZmVjdCIsInNldExvY2FsZUNvZGVUaW1lciIsInNldEludGVydmFsIiwiJCIsImZpbmQiLCJsZW5ndGgiLCJ2YWx1ZSIsImlubmVySFRNTCIsImNsZWFySW50ZXJ2YWwiLCJzZXRTb3VyY2VMb2NhbGVDb2RlVGltZXIiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsImRpc3BsYXkiLCJDU3R1ZGlvRm9ybXMiLCJDb250cm9scyIsImlkIiwiZm9ybSIsIm93bmVyIiwicHJvcGVydGllcyIsImNvbnN0cmFpbnRzIiwicmVnaXN0ZXJGaWVsZCIsImVycm9ycyIsImlucHV0RWwiLCJjb3VudEVsIiwicmVxdWlyZWQiLCJzdXBwb3J0ZWRQb3N0Rml4ZXMiLCJZQUhPTyIsImV4dGVuZCIsIkNTdHVkaW9Gb3JtRmllbGQiLCJnZXRMYWJlbCIsIl9nZXRMb2NhbGVMaXN0IiwiX2dldExvY2FsZUZyb21QYXRoIiwicGF0aCIsInBhdGhTdHIiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJzcGxpdCIsImluZGV4T2YiLCJfdW5saW5rTG9jYWxlIiwib2JqIiwiQ1N0dWRpb0F1dGhvcmluZyIsIlV0aWxzIiwiZ2VuZXJhdGVVVUlEIiwidXBkYXRlTW9kZWwiLCJfcmVuZGVyUmVhY3RDb21wb25lbnQiLCJsb2NhbGVGcm9tUGF0aCIsIm1vZGVsIiwibG9jYWxlU291cmNlSWRfcyIsIl9yZW5kZXJOZXdJdGVtIiwiX3JlbmRlckV4aXN0aW5nSXRlbSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJjb250YWluZXJFbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJzb3VyY2VMb2NhbGVDb2RlX3MiLCJjb25maWciLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiZ2V0TmFtZSIsImdldFN1cHBvcnRlZFByb3BlcnRpZXMiLCJnZXRTdXBwb3J0ZWRDb25zdHJhaW50cyIsImdldFN1cHBvcnRlZFBvc3RGaXhlcyIsIk1vZHVsZSIsIm1vZHVsZUxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFQSxDQUFDLFlBQVk7RUFDWCxNQUFJQSxLQUFLLEdBQUdDLGNBQWMsQ0FBQ0QsS0FBM0I7RUFDQSxNQUFJRSxRQUFRLEdBQUdELGNBQWMsQ0FBQ0MsUUFBOUI7RUFDQSxNQUFJQyxvQkFB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
