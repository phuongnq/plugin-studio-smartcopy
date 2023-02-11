const React$1 = craftercms.libs.React;
const { useState, useEffect } = craftercms.libs.React;
const React__default = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
const { useSelector, useDispatch } = craftercms.libs.ReactRedux;
const Table = craftercms.libs.MaterialUI.Table && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Table, 'default') ? craftercms.libs.MaterialUI.Table['default'] : craftercms.libs.MaterialUI.Table;
const TableBody = craftercms.libs.MaterialUI.TableBody && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TableBody, 'default') ? craftercms.libs.MaterialUI.TableBody['default'] : craftercms.libs.MaterialUI.TableBody;
const TableContainer = craftercms.libs.MaterialUI.TableContainer && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TableContainer, 'default') ? craftercms.libs.MaterialUI.TableContainer['default'] : craftercms.libs.MaterialUI.TableContainer;
const TableHead = craftercms.libs.MaterialUI.TableHead && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TableHead, 'default') ? craftercms.libs.MaterialUI.TableHead['default'] : craftercms.libs.MaterialUI.TableHead;
const TableRow = craftercms.libs.MaterialUI.TableRow && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TableRow, 'default') ? craftercms.libs.MaterialUI.TableRow['default'] : craftercms.libs.MaterialUI.TableRow;
const StyledTableCell = craftercms.libs.MaterialUI.TableCell && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TableCell, 'default') ? craftercms.libs.MaterialUI.TableCell['default'] : craftercms.libs.MaterialUI.TableCell;
const Paper = craftercms.libs.MaterialUI.Paper && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Paper, 'default') ? craftercms.libs.MaterialUI.Paper['default'] : craftercms.libs.MaterialUI.Paper;
const Grid = craftercms.libs.MaterialUI.Grid && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Grid, 'default') ? craftercms.libs.MaterialUI.Grid['default'] : craftercms.libs.MaterialUI.Grid;
const ExpandMoreOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreOutlined');
const ChevronRightOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightOutlined');
const MenuItem = craftercms.libs.MaterialUI.MenuItem && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.MenuItem, 'default') ? craftercms.libs.MaterialUI.MenuItem['default'] : craftercms.libs.MaterialUI.MenuItem;
const Popper = craftercms.libs.MaterialUI.Popper && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Popper, 'default') ? craftercms.libs.MaterialUI.Popper['default'] : craftercms.libs.MaterialUI.Popper;
const MenuList = craftercms.libs.MaterialUI.MenuList && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.MenuList, 'default') ? craftercms.libs.MaterialUI.MenuList['default'] : craftercms.libs.MaterialUI.MenuList;
const Grow = craftercms.libs.MaterialUI.Grow && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Grow, 'default') ? craftercms.libs.MaterialUI.Grow['default'] : craftercms.libs.MaterialUI.Grow;
const ClickAwayListener = craftercms.libs.MaterialUI.ClickAwayListener && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.ClickAwayListener, 'default') ? craftercms.libs.MaterialUI.ClickAwayListener['default'] : craftercms.libs.MaterialUI.ClickAwayListener;
const CreateNewFolderOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/CreateNewFolderOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/CreateNewFolderOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/CreateNewFolderOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/CreateNewFolderOutlined');
const BorderColorOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/BorderColorOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/BorderColorOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/BorderColorOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/BorderColorOutlined');
const { styled, useThemeProps, useTheme, alpha } = craftercms.libs.MaterialUI;
const TextField = craftercms.libs.MaterialUI.TextField && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TextField, 'default') ? craftercms.libs.MaterialUI.TextField['default'] : craftercms.libs.MaterialUI.TextField;
const DialogActions = craftercms.libs.MaterialUI.DialogActions && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.DialogActions, 'default') ? craftercms.libs.MaterialUI.DialogActions['default'] : craftercms.libs.MaterialUI.DialogActions;
const DialogContent = craftercms.libs.MaterialUI.DialogContent && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.DialogContent, 'default') ? craftercms.libs.MaterialUI.DialogContent['default'] : craftercms.libs.MaterialUI.DialogContent;
const DialogTitle = craftercms.libs.MaterialUI.DialogTitle && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.DialogTitle, 'default') ? craftercms.libs.MaterialUI.DialogTitle['default'] : craftercms.libs.MaterialUI.DialogTitle;
const DialogContentText = craftercms.libs.MaterialUI.DialogContentText && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.DialogContentText, 'default') ? craftercms.libs.MaterialUI.DialogContentText['default'] : craftercms.libs.MaterialUI.DialogContentText;
const Button = craftercms.libs.MaterialUI.Button && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Button, 'default') ? craftercms.libs.MaterialUI.Button['default'] : craftercms.libs.MaterialUI.Button;
const require$$2 = craftercms.libs.ReactDOM && Object.prototype.hasOwnProperty.call(craftercms.libs.ReactDOM, 'default') ? craftercms.libs.ReactDOM['default'] : craftercms.libs.ReactDOM;
const Dialog = craftercms.libs.MaterialUI.Dialog && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Dialog, 'default') ? craftercms.libs.MaterialUI.Dialog['default'] : craftercms.libs.MaterialUI.Dialog;
const { get, post } = craftercms.utils.ajax;
const { Subject } = craftercms.libs.rxjs;
const { unstable_useEnhancedEffect, unstable_useId, useForkRef, useControlled, ownerDocument } = craftercms.libs.MaterialUI;
const generateUtilityClass = craftercms.libs.MaterialUI.generateUtilityClass && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.generateUtilityClass, 'default') ? craftercms.libs.MaterialUI.generateUtilityClass['default'] : craftercms.libs.MaterialUI.generateUtilityClass;
const generateUtilityClasses = craftercms.libs.MaterialUI.generateUtilityClasses && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.generateUtilityClasses, 'default') ? craftercms.libs.MaterialUI.generateUtilityClasses['default'] : craftercms.libs.MaterialUI.generateUtilityClasses;
const Collapse = craftercms.libs.MaterialUI.Collapse && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Collapse, 'default') ? craftercms.libs.MaterialUI.Collapse['default'] : craftercms.libs.MaterialUI.Collapse;
const { createAction } = craftercms.libs.ReduxToolkit;
const ToolsPanelListItemButton = craftercms.components.ToolsPanelListItemButton && Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton, 'default') ? craftercms.components.ToolsPanelListItemButton['default'] : craftercms.components.ToolsPanelListItemButton;
const Tooltip = craftercms.libs.MaterialUI.Tooltip && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Tooltip, 'default') ? craftercms.libs.MaterialUI.Tooltip['default'] : craftercms.libs.MaterialUI.Tooltip;
const IconButton = craftercms.libs.MaterialUI.IconButton && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.IconButton, 'default') ? craftercms.libs.MaterialUI.IconButton['default'] : craftercms.libs.MaterialUI.IconButton;
const SystemIcon = craftercms.components.SystemIcon && Object.prototype.hasOwnProperty.call(craftercms.components.SystemIcon, 'default') ? craftercms.components.SystemIcon['default'] : craftercms.components.SystemIcon;
const { Button: Button$1 } = craftercms.libs.MaterialUI;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const useSelection =
  useSelector ;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function useItemsByPath() {
  return useSelection((state) => state.content.itemsByPath);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function usePreviewGuest() {
  return useSelector((state) => state.preview.guest);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function useCurrentPreviewItem() {
  var _a;
  const { path } = (_a = usePreviewGuest()) !== null && _a !== void 0 ? _a : {};
  const items = useItemsByPath();
  return items === null || items === void 0 ? void 0 : items[path];
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var createData = function (name, path) {
    return { name: name, path: path };
};
var SourceItemTable = function (_a) {
    var sourceItem = _a.sourceItem;
    var row = sourceItem ? createData(sourceItem.name, sourceItem.path) : null;
    return (React$1.createElement(React$1.Fragment, null,
        React$1.createElement(Grid, { container: true, sx: { padding: '15px' } },
            React$1.createElement(TableContainer, { component: Paper },
                React$1.createElement(Table, { sx: { minWidth: 650 }, "aria-label": "source item table" },
                    React$1.createElement(TableHead, null,
                        React$1.createElement(TableRow, null,
                            React$1.createElement(StyledTableCell, null, "Name"),
                            React$1.createElement(StyledTableCell, null, "Path"))),
                    React$1.createElement(TableBody, null, row && (React$1.createElement(TableRow, { key: row.name },
                        React$1.createElement(StyledTableCell, { component: "th", scope: "row" }, row.name),
                        React$1.createElement(StyledTableCell, null, row.path)))))))));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var clsx_m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  clsx: clsx,
  default: clsx
});

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach(
  // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        acc.push(getUtilityClass(key));
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
      }
      return acc;
    }, []).join(' ');
  });
  return output;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=React__default,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

/**
 * @ignore - internal component.
 */
const TreeViewContext = /*#__PURE__*/React$1.createContext({});
var TreeViewContext$1 = TreeViewContext;

const _excluded$3 = ["element"];
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
function binaryFindElement(array, element) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle].element === element) {
      return middle;
    }

    // eslint-disable-next-line no-bitwise
    if (array[middle].element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
}
const DescendantContext = /*#__PURE__*/React$1.createContext({});
function usePrevious(value) {
  const ref = React$1.useRef(null);
  React$1.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const noop = () => {};

/**
 * This hook registers our descendant by passing it into an array. We can then
 * search that array by to find its index when registering it in the component.
 * We use this for focus management, keyboard navigation, and typeahead
 * functionality for some components.
 *
 * The hook accepts the element node
 *
 * Our main goals with this are:
 *   1) maximum composability,
 *   2) minimal API friction
 *   3) SSR compatibility*
 *   4) concurrent safe
 *   5) index always up-to-date with the tree despite changes
 *   6) works with memoization of any component in the tree (hopefully)
 *
 * * As for SSR, the good news is that we don't actually need the index on the
 * server for most use-cases, as we are only using it to determine the order of
 * composed descendants for keyboard navigation.
 */
function useDescendant(descendant) {
  const [, forceUpdate] = React$1.useState();
  const {
    registerDescendant = noop,
    unregisterDescendant = noop,
    descendants = [],
    parentId = null
  } = React$1.useContext(DescendantContext);

  // This will initially return -1 because we haven't registered the descendant
  // on the first render. After we register, this will then return the correct
  // index on the following render and we will re-register descendants
  // so that everything is up-to-date before the user interacts with a
  // collection.
  const index = findIndex(descendants, item => item.element === descendant.element);
  const previousDescendants = usePrevious(descendants);

  // We also need to re-register descendants any time ANY of the other
  // descendants have changed. My brain was melting when I wrote this and it
  // feels a little off, but checking in render and using the result in the
  // effect's dependency array works well enough.
  const someDescendantsHaveChanged = descendants.some((newDescendant, position) => {
    return previousDescendants && previousDescendants[position] && previousDescendants[position].element !== newDescendant.element;
  });

  // Prevent any flashing
  unstable_useEnhancedEffect(() => {
    if (descendant.element) {
      registerDescendant(_extends({}, descendant, {
        index
      }));
      return () => {
        unregisterDescendant(descendant.element);
      };
    }
    forceUpdate({});
    return undefined;
  }, [registerDescendant, unregisterDescendant, index, someDescendantsHaveChanged, descendant]);
  return {
    parentId,
    index
  };
}
function DescendantProvider(props) {
  const {
    children,
    id
  } = props;
  const [items, set] = React$1.useState([]);
  const registerDescendant = React$1.useCallback(_ref => {
    let {
        element
      } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$3);
    set(oldItems => {
      let newItems;
      if (oldItems.length === 0) {
        // If there are no items, register at index 0 and bail.
        return [_extends({}, other, {
          element,
          index: 0
        })];
      }
      const index = binaryFindElement(oldItems, element);
      if (oldItems[index] && oldItems[index].element === element) {
        // If the element is already registered, just use the same array
        newItems = oldItems;
      } else {
        // When registering a descendant, we need to make sure we insert in
        // into the array in the same order that it appears in the DOM. So as
        // new descendants are added or maybe some are removed, we always know
        // that the array is up-to-date and correct.
        //
        // So here we look at our registered descendants and see if the new
        // element we are adding appears earlier than an existing descendant's
        // DOM node via `node.compareDocumentPosition`. If it does, we insert
        // the new element at this index. Because `registerDescendant` will be
        // called in an effect every time the descendants state value changes,
        // we should be sure that this index is accurate when descendent
        // elements come or go from our component.

        const newItem = _extends({}, other, {
          element,
          index
        });

        // If an index is not found we will push the element to the end.
        newItems = oldItems.slice();
        newItems.splice(index, 0, newItem);
      }
      newItems.forEach((item, position) => {
        item.index = position;
      });
      return newItems;
    });
  }, []);
  const unregisterDescendant = React$1.useCallback(element => {
    set(oldItems => oldItems.filter(item => element !== item.element));
  }, []);
  const value = React$1.useMemo(() => ({
    descendants: items,
    registerDescendant,
    unregisterDescendant,
    parentId: id
  }), [items, registerDescendant, unregisterDescendant, id]);
  return /*#__PURE__*/jsxRuntime.exports.jsx(DescendantContext.Provider, {
    value: value,
    children: children
  });
}

function getTreeViewUtilityClass(slot) {
  return generateUtilityClass('MuiTreeView', slot);
}
generateUtilityClasses('MuiTreeView', ['root']);

const _excluded$2 = ["children", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disabledItemsFocusable", "disableSelection", "expanded", "id", "multiSelect", "onBlur", "onFocus", "onKeyDown", "onNodeFocus", "onNodeSelect", "onNodeToggle", "selected"];
const useUtilityClasses$1 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTreeViewUtilityClass, classes);
};
const TreeViewRoot = styled('ul', {
  name: 'MuiTreeView',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  outline: 0
});
function isPrintableCharacter(string) {
  return string && string.length === 1 && string.match(/\S/);
}
function findNextFirstChar(firstChars, startIndex, char) {
  for (let i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }
  return -1;
}
function noopSelection() {
  return false;
}
const defaultDefaultExpanded = [];
const defaultDefaultSelected = [];
const TreeView = /*#__PURE__*/React$1.forwardRef(function TreeView(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTreeView'
  });
  const {
      children,
      className,
      defaultCollapseIcon,
      defaultEndIcon,
      defaultExpanded = defaultDefaultExpanded,
      defaultExpandIcon,
      defaultParentIcon,
      defaultSelected = defaultDefaultSelected,
      disabledItemsFocusable = false,
      disableSelection = false,
      expanded: expandedProp,
      id: idProp,
      multiSelect = false,
      onBlur,
      onFocus,
      onKeyDown,
      onNodeFocus,
      onNodeSelect,
      onNodeToggle,
      selected: selectedProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const ownerState = _extends({}, props, {
    defaultExpanded,
    defaultSelected,
    disabledItemsFocusable,
    disableSelection,
    multiSelect
  });
  const classes = useUtilityClasses$1(ownerState);
  const treeId = unstable_useId(idProp);
  const treeRef = React$1.useRef(null);
  const handleRef = useForkRef(treeRef, ref);
  const [focusedNodeId, setFocusedNodeId] = React$1.useState(null);
  const nodeMap = React$1.useRef({});
  const firstCharMap = React$1.useRef({});
  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'TreeView',
    state: 'expanded'
  });
  const [selected, setSelectedState] = useControlled({
    controlled: selectedProp,
    default: defaultSelected,
    name: 'TreeView',
    state: 'selected'
  });

  /*
   * Status Helpers
   */
  const isExpanded = React$1.useCallback(id => Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false, [expanded]);
  const isExpandable = React$1.useCallback(id => nodeMap.current[id] && nodeMap.current[id].expandable, []);
  const isSelected = React$1.useCallback(id => Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id, [selected]);
  const isDisabled = React$1.useCallback(id => {
    let node = nodeMap.current[id];

    // This can be called before the node has been added to the node map.
    if (!node) {
      return false;
    }
    if (node.disabled) {
      return true;
    }
    while (node.parentId != null) {
      node = nodeMap.current[node.parentId];
      if (node.disabled) {
        return true;
      }
    }
    return false;
  }, []);
  const isFocused = id => focusedNodeId === id;

  /*
   * Child Helpers
   */

  // Using Object.keys -> .map to mimic Object.values we should replace with Object.values() once we stop IE11 support.
  const getChildrenIds = id => Object.keys(nodeMap.current).map(key => {
    return nodeMap.current[key];
  }).filter(node => node.parentId === id).sort((a, b) => a.index - b.index).map(child => child.id);
  const getNavigableChildrenIds = id => {
    let childrenIds = getChildrenIds(id);
    if (!disabledItemsFocusable) {
      childrenIds = childrenIds.filter(node => !isDisabled(node));
    }
    return childrenIds;
  };

  /*
   * Node Helpers
   */

  const getNextNode = id => {
    // If expanded get first child
    if (isExpanded(id) && getNavigableChildrenIds(id).length > 0) {
      return getNavigableChildrenIds(id)[0];
    }
    let node = nodeMap.current[id];
    while (node != null) {
      // Try to get next sibling
      const siblings = getNavigableChildrenIds(node.parentId);
      const nextSibling = siblings[siblings.indexOf(node.id) + 1];
      if (nextSibling) {
        return nextSibling;
      }

      // If the sibling does not exist, go up a level to the parent and try again.
      node = nodeMap.current[node.parentId];
    }
    return null;
  };
  const getPreviousNode = id => {
    const node = nodeMap.current[id];
    const siblings = getNavigableChildrenIds(node.parentId);
    const nodeIndex = siblings.indexOf(id);
    if (nodeIndex === 0) {
      return node.parentId;
    }
    let currentNode = siblings[nodeIndex - 1];
    while (isExpanded(currentNode) && getNavigableChildrenIds(currentNode).length > 0) {
      currentNode = getNavigableChildrenIds(currentNode).pop();
    }
    return currentNode;
  };
  const getLastNode = () => {
    let lastNode = getNavigableChildrenIds(null).pop();
    while (isExpanded(lastNode)) {
      lastNode = getNavigableChildrenIds(lastNode).pop();
    }
    return lastNode;
  };
  const getFirstNode = () => getNavigableChildrenIds(null)[0];
  const getParent = id => nodeMap.current[id].parentId;

  /**
   * This is used to determine the start and end of a selection range so
   * we can get the nodes between the two border nodes.
   *
   * It finds the nodes' common ancestor using
   * a naive implementation of a lowest common ancestor algorithm
   * (https://en.wikipedia.org/wiki/Lowest_common_ancestor).
   * Then compares the ancestor's 2 children that are ancestors of nodeA and NodeB
   * so we can compare their indexes to work out which node comes first in a depth first search.
   * (https://en.wikipedia.org/wiki/Depth-first_search)
   *
   * Another way to put it is which node is shallower in a trémaux tree
   * https://en.wikipedia.org/wiki/Tr%C3%A9maux_tree
   */
  const findOrderInTremauxTree = (nodeAId, nodeBId) => {
    if (nodeAId === nodeBId) {
      return [nodeAId, nodeBId];
    }
    const nodeA = nodeMap.current[nodeAId];
    const nodeB = nodeMap.current[nodeBId];
    if (nodeA.parentId === nodeB.id || nodeB.parentId === nodeA.id) {
      return nodeB.parentId === nodeA.id ? [nodeA.id, nodeB.id] : [nodeB.id, nodeA.id];
    }
    const aFamily = [nodeA.id];
    const bFamily = [nodeB.id];
    let aAncestor = nodeA.parentId;
    let bAncestor = nodeB.parentId;
    let aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
    let bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
    let continueA = true;
    let continueB = true;
    while (!bAncestorIsCommon && !aAncestorIsCommon) {
      if (continueA) {
        aFamily.push(aAncestor);
        aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
        continueA = aAncestor !== null;
        if (!aAncestorIsCommon && continueA) {
          aAncestor = nodeMap.current[aAncestor].parentId;
        }
      }
      if (continueB && !aAncestorIsCommon) {
        bFamily.push(bAncestor);
        bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
        continueB = bAncestor !== null;
        if (!bAncestorIsCommon && continueB) {
          bAncestor = nodeMap.current[bAncestor].parentId;
        }
      }
    }
    const commonAncestor = aAncestorIsCommon ? aAncestor : bAncestor;
    const ancestorFamily = getChildrenIds(commonAncestor);
    const aSide = aFamily[aFamily.indexOf(commonAncestor) - 1];
    const bSide = bFamily[bFamily.indexOf(commonAncestor) - 1];
    return ancestorFamily.indexOf(aSide) < ancestorFamily.indexOf(bSide) ? [nodeAId, nodeBId] : [nodeBId, nodeAId];
  };
  const getNodesInRange = (nodeA, nodeB) => {
    const [first, last] = findOrderInTremauxTree(nodeA, nodeB);
    const nodes = [first];
    let current = first;
    while (current !== last) {
      current = getNextNode(current);
      nodes.push(current);
    }
    return nodes;
  };

  /*
   * Focus Helpers
   */

  const focus = (event, id) => {
    if (id) {
      setFocusedNodeId(id);
      if (onNodeFocus) {
        onNodeFocus(event, id);
      }
    }
  };
  const focusNextNode = (event, id) => focus(event, getNextNode(id));
  const focusPreviousNode = (event, id) => focus(event, getPreviousNode(id));
  const focusFirstNode = event => focus(event, getFirstNode());
  const focusLastNode = event => focus(event, getLastNode());
  const focusByFirstCharacter = (event, id, char) => {
    let start;
    let index;
    const lowercaseChar = char.toLowerCase();
    const firstCharIds = [];
    const firstChars = [];
    // This really only works since the ids are strings
    Object.keys(firstCharMap.current).forEach(nodeId => {
      const firstChar = firstCharMap.current[nodeId];
      const map = nodeMap.current[nodeId];
      const visible = map.parentId ? isExpanded(map.parentId) : true;
      const shouldBeSkipped = disabledItemsFocusable ? false : isDisabled(nodeId);
      if (visible && !shouldBeSkipped) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    });

    // Get start index for search based on position of currentItem
    start = firstCharIds.indexOf(id) + 1;
    if (start >= firstCharIds.length) {
      start = 0;
    }

    // Check remaining slots in the menu
    index = findNextFirstChar(firstChars, start, lowercaseChar);

    // If not found in remaining slots, check from beginning
    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    }

    // If match was found...
    if (index > -1) {
      focus(event, firstCharIds[index]);
    }
  };

  /*
   * Expansion Helpers
   */

  const toggleExpansion = (event, value = focusedNodeId) => {
    let newExpanded;
    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter(id => id !== value);
    } else {
      newExpanded = [value].concat(expanded);
    }
    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }
    setExpandedState(newExpanded);
  };
  const expandAllSiblings = (event, id) => {
    const map = nodeMap.current[id];
    const siblings = getChildrenIds(map.parentId);
    const diff = siblings.filter(child => isExpandable(child) && !isExpanded(child));
    const newExpanded = expanded.concat(diff);
    if (diff.length > 0) {
      setExpandedState(newExpanded);
      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };

  /*
   * Selection Helpers
   */

  const lastSelectedNode = React$1.useRef(null);
  const lastSelectionWasRange = React$1.useRef(false);
  const currentRangeSelection = React$1.useRef([]);
  const handleRangeArrowSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      next,
      current
    } = nodes;
    if (!next || !current) {
      return;
    }
    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }
    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter(id => id === start || id !== current);
        currentRangeSelection.current = currentRangeSelection.current.filter(id => id === start || id !== current);
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }
    if (onNodeSelect) {
      onNodeSelect(event, base);
    }
    setSelectedState(base);
  };
  const handleRangeSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      end
    } = nodes;
    // If last selection was a range selection ignore nodes that were selected.
    if (lastSelectionWasRange.current) {
      base = base.filter(id => currentRangeSelection.current.indexOf(id) === -1);
    }
    let range = getNodesInRange(start, end);
    range = range.filter(node => !isDisabled(node));
    currentRangeSelection.current = range;
    let newSelected = base.concat(range);
    newSelected = newSelected.filter((id, i) => newSelected.indexOf(id) === i);
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleMultipleSelect = (event, value) => {
    let newSelected;
    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter(id => id !== value);
    } else {
      newSelected = [value].concat(selected);
    }
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleSingleSelect = (event, value) => {
    const newSelected = multiSelect ? [value] : value;
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const selectNode = (event, id, multiple = false) => {
    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }
      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }
    return false;
  };
  const selectRange = (event, nodes, stacked = false) => {
    const {
      start = lastSelectedNode.current,
      end,
      current
    } = nodes;
    if (stacked) {
      handleRangeArrowSelect(event, {
        start,
        next: end,
        current
      });
    } else if (start != null && end != null) {
      handleRangeSelect(event, {
        start,
        end
      });
    }
    lastSelectionWasRange.current = true;
  };
  const rangeSelectToFirst = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getFirstNode()
    });
  };
  const rangeSelectToLast = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getLastNode()
    });
  };
  const selectNextNode = (event, id) => {
    if (!isDisabled(getNextNode(id))) {
      selectRange(event, {
        end: getNextNode(id),
        current: id
      }, true);
    }
  };
  const selectPreviousNode = (event, id) => {
    if (!isDisabled(getPreviousNode(id))) {
      selectRange(event, {
        end: getPreviousNode(id),
        current: id
      }, true);
    }
  };
  const selectAllNodes = event => {
    selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };

  /*
   * Mapping Helpers
   */
  const registerNode = React$1.useCallback(node => {
    const {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    } = node;
    nodeMap.current[id] = {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    };
  }, []);
  const unregisterNode = React$1.useCallback(id => {
    const newMap = _extends({}, nodeMap.current);
    delete newMap[id];
    nodeMap.current = newMap;
    setFocusedNodeId(oldFocusedNodeId => {
      if (oldFocusedNodeId === id && treeRef.current === ownerDocument(treeRef.current).activeElement) {
        return getChildrenIds(null)[0];
      }
      return oldFocusedNodeId;
    });
  }, []);
  const mapFirstChar = React$1.useCallback((id, firstChar) => {
    firstCharMap.current[id] = firstChar;
  }, []);
  const unMapFirstChar = React$1.useCallback(id => {
    const newMap = _extends({}, firstCharMap.current);
    delete newMap[id];
    firstCharMap.current = newMap;
  }, []);

  /**
   * Event handlers and Navigation
   */

  const handleNextArrow = event => {
    if (isExpandable(focusedNodeId)) {
      if (isExpanded(focusedNodeId)) {
        focusNextNode(event, focusedNodeId);
      } else if (!isDisabled(focusedNodeId)) {
        toggleExpansion(event);
      }
    }
    return true;
  };
  const handlePreviousArrow = event => {
    if (isExpanded(focusedNodeId) && !isDisabled(focusedNodeId)) {
      toggleExpansion(event, focusedNodeId);
      return true;
    }
    const parent = getParent(focusedNodeId);
    if (parent) {
      focus(event, parent);
      return true;
    }
    return false;
  };
  const handleKeyDown = event => {
    let flag = false;
    const key = event.key;

    // If the tree is empty there will be no focused node
    if (event.altKey || event.currentTarget !== event.target || !focusedNodeId) {
      return;
    }
    const ctrlPressed = event.ctrlKey || event.metaKey;
    switch (key) {
      case ' ':
        if (!disableSelection && !isDisabled(focusedNodeId)) {
          if (multiSelect && event.shiftKey) {
            selectRange(event, {
              end: focusedNodeId
            });
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case 'Enter':
        if (!isDisabled(focusedNodeId)) {
          if (isExpandable(focusedNodeId)) {
            toggleExpansion(event);
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case 'ArrowDown':
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectNextNode(event, focusedNodeId);
        }
        focusNextNode(event, focusedNodeId);
        flag = true;
        break;
      case 'ArrowUp':
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectPreviousNode(event, focusedNodeId);
        }
        focusPreviousNode(event, focusedNodeId);
        flag = true;
        break;
      case 'ArrowRight':
        if (isRtl) {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }
        break;
      case 'ArrowLeft':
        if (isRtl) {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }
        break;
      case 'Home':
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToFirst(event, focusedNodeId);
        }
        focusFirstNode(event);
        flag = true;
        break;
      case 'End':
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToLast(event, focusedNodeId);
        }
        focusLastNode(event);
        flag = true;
        break;
      default:
        if (key === '*') {
          expandAllSiblings(event, focusedNodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a' && !disableSelection) {
          selectAllNodes(event);
          flag = true;
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(event, focusedNodeId, key);
          flag = true;
        }
    }
    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleFocus = event => {
    // if the event bubbled (which is React specific) we don't want to steal focus
    if (event.target === event.currentTarget) {
      const firstSelected = Array.isArray(selected) ? selected[0] : selected;
      focus(event, firstSelected || getNavigableChildrenIds(null)[0]);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleBlur = event => {
    setFocusedNodeId(null);
    if (onBlur) {
      onBlur(event);
    }
  };
  const activeDescendant = nodeMap.current[focusedNodeId] ? nodeMap.current[focusedNodeId].idAttribute : null;
  return /*#__PURE__*/jsxRuntime.exports.jsx(TreeViewContext$1.Provider, {
    // TODO: fix this lint error
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value: {
      icons: {
        defaultCollapseIcon,
        defaultExpandIcon,
        defaultParentIcon,
        defaultEndIcon
      },
      focus,
      toggleExpansion,
      isExpanded,
      isExpandable,
      isFocused,
      isSelected,
      isDisabled,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      multiSelect,
      disabledItemsFocusable,
      mapFirstChar,
      unMapFirstChar,
      registerNode,
      unregisterNode,
      treeId
    },
    children: /*#__PURE__*/jsxRuntime.exports.jsx(DescendantProvider, {
      children: /*#__PURE__*/jsxRuntime.exports.jsx(TreeViewRoot, _extends({
        role: "tree",
        id: treeId,
        "aria-activedescendant": activeDescendant,
        "aria-multiselectable": multiSelect,
        className: clsx(classes.root, className),
        ref: handleRef,
        tabIndex: 0,
        onKeyDown: handleKeyDown,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ownerState: ownerState
      }, other, {
        children: children
      }))
    })
  });
});
var TreeView$1 = TreeView;

function useTreeItem(nodeId) {
  const {
    focus,
    isExpanded,
    isExpandable,
    isFocused,
    isDisabled,
    isSelected,
    multiSelect,
    selectNode,
    selectRange,
    toggleExpansion
  } = React$1.useContext(TreeViewContext$1);
  const expandable = isExpandable ? isExpandable(nodeId) : false;
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const handleExpansion = event => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);

      // If already expanded and trying to toggle selection don't close
      if (expandable && !(multiple && isExpanded(nodeId))) {
        toggleExpansion(event, nodeId);
      }
    }
  };
  const handleSelection = event => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);
      if (multiple) {
        if (event.shiftKey) {
          selectRange(event, {
            end: nodeId
          });
        } else {
          selectNode(event, nodeId, true);
        }
      } else {
        selectNode(event, nodeId);
      }
    }
  };
  const preventSelection = event => {
    if (event.shiftKey || event.ctrlKey || event.metaKey || disabled) {
      // Prevent text selection
      event.preventDefault();
    }
  };
  return {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  };
}

const _excluded$1 = ["classes", "className", "displayIcon", "expansionIcon", "icon", "label", "nodeId", "onClick", "onMouseDown"];
const TreeItemContent = /*#__PURE__*/React$1.forwardRef(function TreeItemContent(props, ref) {
  const {
      classes,
      className,
      displayIcon,
      expansionIcon,
      icon: iconProp,
      label,
      nodeId,
      onClick,
      onMouseDown
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  } = useTreeItem(nodeId);
  const icon = iconProp || expansionIcon || displayIcon;
  const handleMouseDown = event => {
    preventSelection(event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  };
  const handleClick = event => {
    handleExpansion(event);
    handleSelection(event);
    if (onClick) {
      onClick(event);
    }
  };
  return (
    /*#__PURE__*/
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions -- Key event is handled by the TreeView */
    jsxRuntime.exports.jsxs("div", _extends({
      className: clsx(className, classes.root, expanded && classes.expanded, selected && classes.selected, focused && classes.focused, disabled && classes.disabled),
      onClick: handleClick,
      onMouseDown: handleMouseDown,
      ref: ref
    }, other, {
      children: [/*#__PURE__*/jsxRuntime.exports.jsx("div", {
        className: classes.iconContainer,
        children: icon
      }), /*#__PURE__*/jsxRuntime.exports.jsx("div", {
        className: classes.label,
        children: label
      })]
    }))
  );
});
var TreeItemContent$1 = TreeItemContent;

function getTreeItemUtilityClass(slot) {
  return generateUtilityClass('MuiTreeItem', slot);
}
const treeItemClasses = generateUtilityClasses('MuiTreeItem', ['root', 'group', 'content', 'expanded', 'selected', 'focused', 'disabled', 'iconContainer', 'label']);
var treeItemClasses$1 = treeItemClasses;

const _excluded = ["children", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"];
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    content: ['content'],
    expanded: ['expanded'],
    selected: ['selected'],
    focused: ['focused'],
    disabled: ['disabled'],
    iconContainer: ['iconContainer'],
    label: ['label'],
    group: ['group']
  };
  return composeClasses(slots, getTreeItemUtilityClass, classes);
};
const TreeItemRoot = styled('li', {
  name: 'MuiTreeItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  outline: 0
});
const StyledTreeItemContent = styled(TreeItemContent$1, {
  name: 'MuiTreeItem',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    return [styles.content, styles.iconContainer && {
      [`& .${treeItemClasses$1.iconContainer}`]: styles.iconContainer
    }, styles.label && {
      [`& .${treeItemClasses$1.label}`]: styles.label
    }];
  }
})(({
  theme
}) => ({
  padding: '0 8px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${treeItemClasses$1.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    backgroundColor: 'transparent'
  },
  [`&.${treeItemClasses$1.focused}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${treeItemClasses$1.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    },
    [`&.${treeItemClasses$1.focused}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`& .${treeItemClasses$1.iconContainer}`]: {
    marginRight: 4,
    width: 15,
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    '& svg': {
      fontSize: 18
    }
  },
  [`& .${treeItemClasses$1.label}`]: _extends({
    width: '100%',
    // fixes overflow - see https://github.com/mui/material-ui/issues/27372
    minWidth: 0,
    paddingLeft: 4,
    position: 'relative'
  }, theme.typography.body1)
}));
const TreeItemGroup = styled(Collapse, {
  name: 'MuiTreeItem',
  slot: 'Group',
  overridesResolver: (props, styles) => styles.group
})({
  margin: 0,
  padding: 0,
  marginLeft: 17
});
const TreeItem = /*#__PURE__*/React$1.forwardRef(function TreeItem(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTreeItem'
  });
  const {
      children,
      className,
      collapseIcon,
      ContentComponent = TreeItemContent$1,
      ContentProps,
      endIcon,
      expandIcon,
      disabled: disabledProp,
      icon,
      id: idProp,
      label,
      nodeId,
      onClick,
      onMouseDown,
      TransitionComponent = Collapse,
      TransitionProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    icons: contextIcons = {},
    focus,
    isExpanded,
    isFocused,
    isSelected,
    isDisabled,
    multiSelect,
    disabledItemsFocusable,
    mapFirstChar,
    unMapFirstChar,
    registerNode,
    unregisterNode,
    treeId
  } = React$1.useContext(TreeViewContext$1);
  let id = null;
  if (idProp != null) {
    id = idProp;
  } else if (treeId && nodeId) {
    id = `${treeId}-${nodeId}`;
  }
  const [treeitemElement, setTreeitemElement] = React$1.useState(null);
  const contentRef = React$1.useRef(null);
  const handleRef = useForkRef(setTreeitemElement, ref);
  const descendant = React$1.useMemo(() => ({
    element: treeitemElement,
    id: nodeId
  }), [nodeId, treeitemElement]);
  const {
    index,
    parentId
  } = useDescendant(descendant);
  const expandable = Boolean(Array.isArray(children) ? children.length : children);
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const ownerState = _extends({}, props, {
    expanded,
    focused,
    selected,
    disabled
  });
  const classes = useUtilityClasses(ownerState);
  let displayIcon;
  let expansionIcon;
  if (expandable) {
    if (!expanded) {
      expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
    } else {
      expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
    }
  }
  if (expandable) {
    displayIcon = contextIcons.defaultParentIcon;
  } else {
    displayIcon = endIcon || contextIcons.defaultEndIcon;
  }
  React$1.useEffect(() => {
    // On the first render a node's index will be -1. We want to wait for the real index.
    if (registerNode && unregisterNode && index !== -1) {
      registerNode({
        id: nodeId,
        idAttribute: id,
        index,
        parentId,
        expandable,
        disabled: disabledProp
      });
      return () => {
        unregisterNode(nodeId);
      };
    }
    return undefined;
  }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
  React$1.useEffect(() => {
    if (mapFirstChar && unMapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
      return () => {
        unMapFirstChar(nodeId);
      };
    }
    return undefined;
  }, [mapFirstChar, unMapFirstChar, nodeId, label]);
  let ariaSelected;
  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    /* single-selection trees unset aria-selected on un-selected items.
     *
     * If the tree does not support multiple selection, aria-selected
     * is set to true for the selected node and it is not present on any other node in the tree.
     * Source: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
     */
    ariaSelected = true;
  }
  function handleFocus(event) {
    // DOM focus stays on the tree which manages focus with aria-activedescendant
    if (event.target === event.currentTarget) {
      ownerDocument(event.target).getElementById(treeId).focus({
        preventScroll: true
      });
    }
    const unfocusable = !disabledItemsFocusable && disabled;
    if (!focused && event.currentTarget === event.target && !unfocusable) {
      focus(event, nodeId);
    }
  }
  return /*#__PURE__*/jsxRuntime.exports.jsxs(TreeItemRoot, _extends({
    className: clsx(classes.root, className),
    role: "treeitem",
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled || null,
    ref: handleRef,
    id: id,
    tabIndex: -1
  }, other, {
    ownerState: ownerState,
    onFocus: handleFocus,
    children: [/*#__PURE__*/jsxRuntime.exports.jsx(StyledTreeItemContent, _extends({
      as: ContentComponent,
      ref: contentRef,
      classes: {
        root: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        focused: classes.focused,
        disabled: classes.disabled,
        iconContainer: classes.iconContainer,
        label: classes.label
      },
      label: label,
      nodeId: nodeId,
      onClick: onClick,
      onMouseDown: onMouseDown,
      icon: icon,
      expansionIcon: expansionIcon,
      displayIcon: displayIcon,
      ownerState: ownerState
    }, ContentProps)), children && /*#__PURE__*/jsxRuntime.exports.jsx(DescendantProvider, {
      id: nodeId,
      children: /*#__PURE__*/jsxRuntime.exports.jsx(TreeItemGroup, _extends({
        as: TransitionComponent,
        unmountOnExit: true,
        className: classes.group,
        in: expanded,
        component: "ul",
        role: "group"
      }, TransitionProps, {
        children: children
      }))
    })]
  }));
});
var TreeItem$1 = TreeItem;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function useActiveSiteId() {
  return useSelector((state) => state.sites.active);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function useEnv() {
  return useSelector((state) => state.env);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var StyledMenu = styled(function (props) { return React__default.createElement(Popper, __assign({}, props)); })(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0'
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5)
                },
                '&:active': {
                    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
                }
            }
        }
    });
});
function RightClickMenu(_a) {
    var anchorEl = _a.anchorEl, position = _a.position, onMenuClose = _a.onMenuClose, onCreateFolder = _a.onCreateFolder, onRenameFolder = _a.onRenameFolder, onContextMenu = _a.onContextMenu;
    var open = Boolean(anchorEl);
    var pageX = position.pageX, pageY = position.pageY;
    var handleKeyDown = function (event) {
        if (event.key === 'Tab' || event.key === 'Escape') {
            event.preventDefault();
            onMenuClose();
        }
    };
    var handleClose = function (event) {
        if (anchorEl.current && anchorEl.current.contains(event.target)) {
            return;
        }
        onMenuClose();
    };
    return (React__default.createElement("div", null,
        React__default.createElement(StyledMenu, { anchorEl: {
                getBoundingClientRect: function () {
                    return ({
                        x: pageX,
                        y: pageY,
                        width: 0,
                        height: 0,
                        top: pageY,
                        right: pageX,
                        bottom: pageY,
                        left: pageX
                    });
                }
            }, open: open, onClose: onMenuClose, onContextMenu: function (event) { return onContextMenu(event); }, role: undefined, placement: "bottom-start", transition: true, disablePortal: true }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            return (React__default.createElement(Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                } }),
                React__default.createElement(Paper, null,
                    React__default.createElement(ClickAwayListener, { onClickAway: handleClose },
                        React__default.createElement(MenuList, { autoFocusItem: open, id: "composition-menu", "aria-labelledby": "composition-button", onKeyDown: handleKeyDown },
                            React__default.createElement(MenuItem, { onClick: onCreateFolder, disableRipple: true },
                                React__default.createElement(CreateNewFolderOutlinedIcon, null),
                                "Create new folder"),
                            React__default.createElement(MenuItem, { onClick: onRenameFolder, disableRipple: true },
                                React__default.createElement(BorderColorOutlinedIcon, null),
                                "Rename"))))));
        })));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var StyledActionButton = styled(Button)(function (_a) {
    _a.theme;
    return ({
        textTransform: 'none',
        minWidth: '120px'
    });
});

var cjs = {exports: {}};

var Draggable$1 = {};

var require$$3 = /*@__PURE__*/getAugmentedNamespace(clsx_m);

var domFns = {};

var shims = {};

Object.defineProperty(shims, "__esModule", {
  value: true
});
shims.dontSetMe = dontSetMe;
shims.findInArray = findInArray;
shims.int = int;
shims.isFunction = isFunction;
shims.isNum = isNum;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  // $FlowIgnore[method-unbinding]
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
)
/*: ?Error*/
{
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}

var getPrefix$1 = {};

Object.defineProperty(getPrefix$1, "__esModule", {
  value: true
});
getPrefix$1.browserPrefixToKey = browserPrefixToKey;
getPrefix$1.browserPrefixToStyle = browserPrefixToStyle;
getPrefix$1.default = void 0;
getPrefix$1.getPrefix = getPrefix;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var _window$document, _window$document$docu;

  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Ensure we're running in an environment where there is actually a global
  // `window` obj
  if (typeof window === 'undefined') return ''; // If we're in a pseudo-browser server-side environment, this access
  // path may not exist, so bail out if it doesn't.

  var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
  if (!style) return '';
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = (getPrefix()
/*: string*/
);

getPrefix$1.default = _default;

function _typeof$1(obj) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$1(obj); }

Object.defineProperty(domFns, "__esModule", {
  value: true
});
domFns.addClassName = addClassName;
domFns.addEvent = addEvent;
domFns.addUserSelectStyles = addUserSelectStyles;
domFns.createCSSTransform = createCSSTransform;
domFns.createSVGTransform = createSVGTransform;
domFns.getTouch = getTouch;
domFns.getTouchIdentifier = getTouchIdentifier;
domFns.getTranslation = getTranslation;
domFns.innerHeight = innerHeight;
domFns.innerWidth = innerWidth;
domFns.matchesSelector = matchesSelector;
domFns.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
domFns.offsetXYFromParent = offsetXYFromParent;
domFns.outerHeight = outerHeight;
domFns.outerWidth = outerWidth;
domFns.removeClassName = removeClassName;
domFns.removeEvent = removeEvent;
domFns.removeUserSelectStyles = removeUserSelectStyles;

var _shims$2 = shims;

var _getPrefix = _interopRequireWildcard$1(getPrefix$1);

function _getRequireWildcardCache$1(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache$1 = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard$1(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof$1(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache$1(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims$2.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims$2.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, _shims$2.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims$2.int)(computedStyle.borderTopWidth);
  height += (0, _shims$2.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims$2.int)(computedStyle.borderLeftWidth);
  width += (0, _shims$2.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims$2.int)(computedStyle.paddingTop);
  height -= (0, _shims$2.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims$2.int)(computedStyle.paddingLeft);
  width -= (0, _shims$2.int)(computedStyle.paddingRight);
  return width;
}
/*:: interface EventWithOffset {
  clientX: number, clientY: number
}*/


// Get from offsetParent
function offsetXYFromParent(evt
/*: EventWithOffset*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty$1({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, _shims$2.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims$2.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}

var positionFns = {};

Object.defineProperty(positionFns, "__esModule", {
  value: true
});
positionFns.canDragX = canDragX;
positionFns.canDragY = canDragY;
positionFns.createCoreData = createCoreData;
positionFns.createDraggableData = createDraggableData;
positionFns.getBoundPosition = getBoundPosition;
positionFns.getControlPosition = getControlPosition;
positionFns.snapToGrid = snapToGrid;

var _shims$1 = shims;

var _domFns$1 = domFns;

function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var boundNodeEl
    /*: HTMLElement*/
    = boundNode; // for Flow, can't seem to refine correctly

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, _shims$1.int)(boundNodeStyle.paddingLeft) + (0, _shims$1.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims$1.int)(boundNodeStyle.paddingTop) + (0, _shims$1.int)(nodeStyle.marginTop),
      right: (0, _domFns$1.innerWidth)(boundNodeEl) - (0, _domFns$1.outerWidth)(node) - node.offsetLeft + (0, _shims$1.int)(boundNodeStyle.paddingRight) - (0, _shims$1.int)(nodeStyle.marginRight),
      bottom: (0, _domFns$1.innerHeight)(boundNodeEl) - (0, _domFns$1.outerHeight)(node) - node.offsetTop + (0, _shims$1.int)(boundNodeStyle.paddingBottom) - (0, _shims$1.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, _shims$1.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims$1.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, _shims$1.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims$1.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns$1.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns$1.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, _shims$1.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}

var DraggableCore$2 = {};

var log$1 = {};

Object.defineProperty(log$1, "__esModule", {
  value: true
});
log$1.default = log;

/*eslint no-console:0*/
function log() {
}

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(DraggableCore$2, "__esModule", {
  value: true
});
DraggableCore$2.default = void 0;

var React = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(propTypes.exports);

var _reactDom = _interopRequireDefault(require$$2);

var _domFns = domFns;

var _positionFns = positionFns;

var _shims = shims;

var _log = _interopRequireDefault(log$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void | false;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreDefaultProps = {
  allowAnyClick: boolean,
  disabled: boolean,
  enableUserSelectHack: boolean,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

/*:: export type DraggableCoreProps = {
  ...DraggableCoreDefaultProps,
  cancel: string,
  children: ReactElement<any>,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX || 0;
        var deltaY = y - _this.state.lastY || 0;

        var _snapToGrid3 = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid4 = _slicedToArray(_snapToGrid3, 2);

        deltaX = _snapToGrid4[0];
        deltaY = _snapToGrid4[1];
        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props, _this$props2, _this$props2$nodeRef;

      return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0 ? void 0 : _this$props2$nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: React.Element<any>*/
    {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

DraggableCore$2.default = DraggableCore$1;

_defineProperty(DraggableCore$1, "displayName", 'DraggableCore');

_defineProperty(DraggableCore$1, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});

_defineProperty(DraggableCore$1, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  disabled: false,
  enableUserSelectHack: true,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});

(function (exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "DraggableCore", {
	  enumerable: true,
	  get: function get() {
	    return _DraggableCore.default;
	  }
	});
	exports.default = void 0;

	var React = _interopRequireWildcard(React__default);

	var _propTypes = _interopRequireDefault(propTypes.exports);

	var _reactDom = _interopRequireDefault(require$$2);

	var _clsx2 = _interopRequireDefault(require$$3);

	var _domFns = domFns;

	var _positionFns = positionFns;

	var _shims = shims;

	var _DraggableCore = _interopRequireDefault(DraggableCore$2);

	var _log = _interopRequireDefault(log$1);

	var _excluded = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//
	// Define <Draggable>
	//
	var Draggable = /*#__PURE__*/function (_React$Component) {
	  _inherits(Draggable, _React$Component);

	  var _super = _createSuper(Draggable);

	  function Draggable(props
	  /*: DraggableProps*/
	  ) {
	    var _this;

	    _classCallCheck(this, Draggable);

	    _this = _super.call(this, props);

	    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
	      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

	      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


	      if (shouldStart === false) return false;

	      _this.setState({
	        dragging: true,
	        dragged: true
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
	      if (!_this.state.dragging) return false;
	      (0, _log.default)('Draggable: onDrag: %j', coreData);
	      var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
	      var newState
	      /*: $Shape<DraggableState>*/
	      = {
	        x: uiData.x,
	        y: uiData.y
	      }; // Keep within bounds.

	      if (_this.props.bounds) {
	        // Save original x and y.
	        var x = newState.x,
	            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.

	        newState.x += _this.state.slackX;
	        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

	        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
	            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
	            newStateX = _getBoundPosition2[0],
	            newStateY = _getBoundPosition2[1];

	        newState.x = newStateX;
	        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

	        newState.slackX = _this.state.slackX + (x - newState.x);
	        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

	        uiData.x = newState.x;
	        uiData.y = newState.y;
	        uiData.deltaX = newState.x - _this.state.x;
	        uiData.deltaY = newState.y - _this.state.y;
	      } // Short-circuit if user's callback killed it.


	      var shouldUpdate = _this.props.onDrag(e, uiData);

	      if (shouldUpdate === false) return false;

	      _this.setState(newState);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
	      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

	      var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

	      if (shouldContinue === false) return false;
	      (0, _log.default)('Draggable: onDragStop: %j', coreData);
	      var newState
	      /*: $Shape<DraggableState>*/
	      = {
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      }; // If this is a controlled component, the result of this operation will be to
	      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

	      var controlled = Boolean(_this.props.position);

	      if (controlled) {
	        var _this$props$position = _this.props.position,
	            x = _this$props$position.x,
	            y = _this$props$position.y;
	        newState.x = x;
	        newState.y = y;
	      }

	      _this.setState(newState);
	    });

	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,
	      // Whether or not we have been dragged before.
	      dragged: false,
	      // Current transform x and y.
	      x: props.position ? props.position.x : props.defaultPosition.x,
	      y: props.position ? props.position.y : props.defaultPosition.y,
	      prevPropsPosition: _objectSpread({}, props.position),
	      // Used for compensating for out-of-bounds drags
	      slackX: 0,
	      slackY: 0,
	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };

	    if (props.position && !(props.onDrag || props.onStop)) {
	      // eslint-disable-next-line no-console
	      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
	    }

	    return _this;
	  }

	  _createClass(Draggable, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
	        this.setState({
	          isElementSVG: true
	        });
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.setState({
	        dragging: false
	      }); // prevents invariant if unmounted while dragging
	    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
	    // the underlying DOM node ourselves. See the README for more information.

	  }, {
	    key: "findDOMNode",
	    value: function findDOMNode()
	    /*: ?HTMLElement*/
	    {
	      var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;

	      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
	    }
	  }, {
	    key: "render",
	    value: function render()
	    /*: ReactElement<any>*/
	    {
	      var _clsx;

	      var _this$props2 = this.props;
	          _this$props2.axis;
	          _this$props2.bounds;
	          var children = _this$props2.children,
	          defaultPosition = _this$props2.defaultPosition,
	          defaultClassName = _this$props2.defaultClassName,
	          defaultClassNameDragging = _this$props2.defaultClassNameDragging,
	          defaultClassNameDragged = _this$props2.defaultClassNameDragged,
	          position = _this$props2.position,
	          positionOffset = _this$props2.positionOffset;
	          _this$props2.scale;
	          var draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);

	      var style = {};
	      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

	      var controlled = Boolean(position);
	      var draggable = !controlled || this.state.dragging;
	      var validPosition = position || defaultPosition;
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
	        // Set top if vertical drag is enabled
	        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
	      }; // If this element was SVG, we use the `transform` attribute.

	      if (this.state.isElementSVG) {
	        svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
	      } else {
	        // Add a CSS transform to move the element around. This allows us to move the element around
	        // without worrying about whether or not it is relatively or absolutely positioned.
	        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	        // has a clean slate.
	        style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
	      } // Mark with class while dragging


	      var className = (0, _clsx2.default)(children.props.className || '', defaultClassName, (_clsx = {}, _defineProperty(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty(_clsx, defaultClassNameDragged, this.state.dragged), _clsx)); // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)

	      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
	        onStart: this.onDragStart,
	        onDrag: this.onDrag,
	        onStop: this.onDragStop
	      }), /*#__PURE__*/React.cloneElement(React.Children.only(children), {
	        className: className,
	        style: _objectSpread(_objectSpread({}, children.props.style), style),
	        transform: svgTransform
	      }));
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: // React 16.3+
	    // Arity (props, state)
	    function getDerivedStateFromProps(_ref, _ref2)
	    /*: ?$Shape<DraggableState>*/
	    {
	      var position = _ref.position;
	      var prevPropsPosition = _ref2.prevPropsPosition;

	      // Set x/y if a new position is provided in props that is different than the previous.
	      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
	        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
	          position: position,
	          prevPropsPosition: prevPropsPosition
	        });
	        return {
	          x: position.x,
	          y: position.y,
	          prevPropsPosition: _objectSpread({}, position)
	        };
	      }

	      return null;
	    }
	  }]);

	  return Draggable;
	}(React.Component);

	exports.default = Draggable;

	_defineProperty(Draggable, "displayName", 'Draggable');

	_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
	    left: _propTypes.default.number,
	    right: _propTypes.default.number,
	    top: _propTypes.default.number,
	    bottom: _propTypes.default.number
	  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
	  defaultClassName: _propTypes.default.string,
	  defaultClassNameDragging: _propTypes.default.string,
	  defaultClassNameDragged: _propTypes.default.string,

	  /**
	   * `defaultPosition` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  defaultPosition: _propTypes.default.shape({
	    x: _propTypes.default.number,
	    y: _propTypes.default.number
	  }),
	  positionOffset: _propTypes.default.shape({
	    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
	    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
	  }),

	  /**
	   * `position`, if present, defines the current position of the element.
	   *
	   *  This is similar to how form elements in React work - if no `position` is supplied, the component
	   *  is uncontrolled.
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable position={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  position: _propTypes.default.shape({
	    x: _propTypes.default.number,
	    y: _propTypes.default.number
	  }),

	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	}));

	_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
	  axis: 'both',
	  bounds: false,
	  defaultClassName: 'react-draggable',
	  defaultClassNameDragging: 'react-draggable-dragging',
	  defaultClassNameDragged: 'react-draggable-dragged',
	  defaultPosition: {
	    x: 0,
	    y: 0
	  },
	  scale: 1
	}));
} (Draggable$1));

var _require = Draggable$1,
    Draggable = _require.default,
    DraggableCore = _require.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


cjs.exports = Draggable;
cjs.exports.default = Draggable;
cjs.exports.DraggableCore = DraggableCore;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var StyledDialog = styled(Dialog)(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiPaper-root': {
            width: '45%'
        },
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2)
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1)
        }
    });
});
function PaperComponent(props) {
    return (React__default.createElement(cjs.exports, { handle: "#draggable-dialog-title", cancel: '[class*="MuiDialogContent-root"]' },
        React__default.createElement(Paper, __assign({}, props))));
}
function StyledDialogComponent(props) {
    return React__default.createElement(StyledDialog, __assign({ maxWidth: "md", PaperComponent: PaperComponent }, props));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var HttpUtils = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            get(url).subscribe({
                next: function (response) {
                    resolve(response);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    },
    post: function (url, body, headers) {
        return new Promise(function (resolve, reject) {
            post(url, body, headers).subscribe({
                next: function (response) {
                    resolve(response);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    }
};

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var API_GET_ITEM_TREE = '/api/1/services/api/1/content/get-items-tree.json';
var API_CREATE_FOLDER = '/api/1/services/api/1/content/create-folder.json';
var API_RENAME_FOLDER = '/api/1/services/api/1/content/rename-folder.json';
var API_CONTENT_PASTE = '/api/2/content/paste';
var StudioAPI = {
    getPreviewItem: function (previewItem) {
        return {
            name: previewItem.label,
            path: previewItem.path,
            contentType: previewItem.contentTypeId
        };
    },
    getChildrenPaths: function (authoringBase, siteId, path) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(authoringBase).concat(API_GET_ITEM_TREE, "?site=").concat(siteId, "&path=").concat(path, "&depth=1");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HttpUtils.get(url)];
                    case 2:
                        res = _a.sent();
                        if (res.status === 200) {
                            return [2 /*return*/, res.response.item.children
                                    .filter(function (child) { return child.path !== path; })
                                    .map(function (child) {
                                    return child.path;
                                })];
                        }
                        return [2 /*return*/, []];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    copyItem: function (authoringBase, siteId, path, destinationPath) {
        return __awaiter(this, void 0, void 0, function () {
            var url, body, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(authoringBase).concat(API_CONTENT_PASTE);
                        body = {
                            siteId: siteId,
                            operation: 'COPY',
                            targetPath: destinationPath,
                            item: {
                                path: path
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HttpUtils.post(url, body)];
                    case 2:
                        res = _a.sent();
                        if (res.status === 200) {
                            return [2 /*return*/, res.response];
                        }
                        return [2 /*return*/, null];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    createFolder: function (authoringBase, siteId, path, name) {
        return __awaiter(this, void 0, void 0, function () {
            var url, body, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(authoringBase).concat(API_CREATE_FOLDER, "?site=").concat(siteId, "&path=").concat(path, "&name=").concat(name);
                        body = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HttpUtils.post(url, body)];
                    case 2:
                        res = _a.sent();
                        if (res.status === 200) {
                            return [2 /*return*/, res.response];
                        }
                        return [2 /*return*/, false];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    renameFolder: function (authoringBase, siteId, path, name) {
        return __awaiter(this, void 0, void 0, function () {
            var url, body, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(authoringBase).concat(API_RENAME_FOLDER, "?site=").concat(siteId, "&path=").concat(path, "&name=").concat(name);
                        body = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HttpUtils.post(url, body)];
                    case 2:
                        res = _a.sent();
                        if (res.status === 200) {
                            return [2 /*return*/, res.response];
                        }
                        return [2 /*return*/, false];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function NewFolderDialog(_a) {
    var _this = this;
    var open = _a.open, onClose = _a.onClose, path = _a.path;
    var siteId = useActiveSiteId();
    var authoringBase = useEnv().authoringBase;
    var _b = useState(''), folderName = _b[0], setFolderName = _b[1];
    var _c = useState(false), isProcessing = _c[0], setIsProcessing = _c[1];
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(folderName && path)) return [3 /*break*/, 2];
                    setIsProcessing(true);
                    return [4 /*yield*/, StudioAPI.createFolder(authoringBase, siteId, path, folderName)];
                case 1:
                    res = _a.sent();
                    setFolderName('');
                    onClose(res);
                    setIsProcessing(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleCancel = function () {
        setFolderName('');
        onClose(false);
    };
    return (React__default.createElement("div", null,
        React__default.createElement(StyledDialogComponent, { open: open, onClose: handleCancel, "aria-labelledby": "draggable-dialog-title" },
            React__default.createElement(DialogTitle, { style: { cursor: 'move' }, id: "draggable-dialog-title" }, "Create a New Folder"),
            React__default.createElement(DialogContent, null,
                React__default.createElement(DialogContentText, null,
                    "Parent path: ",
                    path,
                    React__default.createElement("br", null),
                    "Please enter a folder name."),
                React__default.createElement(TextField, { autoFocus: true, margin: "dense", id: "name", label: "Folder Name", type: "text", fullWidth: true, variant: "standard", value: folderName, onChange: function (e) { return setFolderName(e.target.value.trim()); } })),
            React__default.createElement(DialogActions, null,
                React__default.createElement(StyledActionButton, { variant: "outlined", color: "primary", onClick: handleCancel }, "Cancel"),
                React__default.createElement(StyledActionButton, { variant: "contained", color: "primary", onClick: handleSubmit, disabled: !folderName || isProcessing }, "Create")))));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function RenameFolderDialog(_a) {
    var _this = this;
    var open = _a.open, onClose = _a.onClose, path = _a.path;
    var siteId = useActiveSiteId();
    var authoringBase = useEnv().authoringBase;
    var _b = useState(''), folderName = _b[0], setFolderName = _b[1];
    var _c = useState(false), isProcessing = _c[0], setIsProcessing = _c[1];
    useEffect(function () {
        if (path) {
            setFolderName(path.split('/').pop());
        }
    }, [path]);
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(folderName && path)) return [3 /*break*/, 2];
                    setIsProcessing(true);
                    return [4 /*yield*/, StudioAPI.renameFolder(authoringBase, siteId, path, folderName)];
                case 1:
                    res = _a.sent();
                    onClose(res);
                    setIsProcessing(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleCancel = function () {
        onClose(false);
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(StyledDialogComponent, { open: open, onClose: handleCancel, "aria-labelledby": "draggable-dialog-title" },
            React__default.createElement(DialogTitle, { style: { cursor: 'move' }, id: "draggable-dialog-title" }, "Rename Folder"),
            React__default.createElement(DialogContent, null,
                React__default.createElement(DialogContentText, null,
                    "Current path: ",
                    path,
                    React__default.createElement("br", null),
                    "Please provide a new folder name."),
                React__default.createElement(TextField, { autoFocus: true, margin: "dense", id: "name", label: "Folder Name", type: "text", fullWidth: true, variant: "standard", value: folderName, onChange: function (e) { return setFolderName(e.target.value.trim()); } })),
            React__default.createElement(DialogActions, null,
                React__default.createElement(StyledActionButton, { variant: "outlined", color: "primary", onClick: handleCancel }, "Cancel"),
                React__default.createElement(StyledActionButton, { variant: "contained", color: "primary", onClick: handleSubmit, disabled: !folderName || isProcessing }, "Rename")))));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var destinationPathSubscriber = new Subject();

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function DirectoryTreeView(_a) {
    var _this = this;
    var rootDir = _a.rootDir;
    var siteId = useActiveSiteId();
    var authoringBase = useEnv().authoringBase;
    var _b = useState({}), nodes = _b[0], setNodes = _b[1];
    var _c = useState([]), expanded = _c[0], setExpanded = _c[1];
    var _d = useState(''), selected = _d[0], setSelected = _d[1];
    var _e = useState(null), rightClickAnchorEl = _e[0], setRightClickAnchorEl = _e[1];
    var _f = useState({}), rightClickPosition = _f[0], setRightClickPosition = _f[1];
    var _g = useState(false), newFolderDialogOpen = _g[0], setNewFolderDialogOpen = _g[1];
    var _h = useState(false), renameFolderDialogOpen = _h[0], setRenameFolderDialogOpen = _h[1];
    var handleToggle = function (event, nodeIds) {
        setExpanded(nodeIds);
    };
    /**
     * Find a node by its path from nodes object
     * @param {*} path
     * @param {*} data
     * @returns found node
     */
    var findNode = function (path, data) {
        // Get list of paths from root to the node
        // Ex, ['site', 'website', 'article'] => ['/site', '/site/website', '/site/website/article']
        var subPaths = path.split('/').filter(function (elm) { return !!elm; });
        var fullPaths = [];
        var nextPath = '';
        var rootPath = rootDir;
        for (var i = 0; i < subPaths.length; i += 1) {
            if (i === 0) {
                nextPath = "/".concat(subPaths[i]);
            }
            else {
                nextPath = "".concat(nextPath, "/").concat(subPaths[i]);
            }
            if (nextPath.indexOf(rootPath) >= 0) {
                fullPaths.push(nextPath);
            }
        }
        var foundNode = {};
        var _loop_1 = function () {
            var currPath = fullPaths.shift();
            if (data.id === currPath) {
                foundNode = data;
                return "continue";
            }
            foundNode = foundNode.children.find(function (item) { return item.id === currPath; });
        };
        // go throush each path from root to the last child node
        while (fullPaths.length > 0) {
            _loop_1();
        }
        return foundNode;
    };
    var handleSelect = function (event, nodeId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setSelected(nodeId);
            destinationPathSubscriber.next(nodeId);
            fetchChildNodes(nodeId, false);
            return [2 /*return*/];
        });
    }); };
    /**
     * Fetch child nodes if needed
     * @param {*} nodeId
     * @returns
     */
    var fetchChildNodes = function (nodeId, forceUpdate) { return __awaiter(_this, void 0, void 0, function () {
        var foundNode, items, childNodes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!nodeId)
                        return [2 /*return*/];
                    foundNode = findNode(nodeId, nodes);
                    if (!forceUpdate && foundNode.children.length > 0) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, StudioAPI.getChildrenPaths(authoringBase, siteId, nodeId)];
                case 1:
                    items = _a.sent();
                    childNodes = items.map(function (item) { return ({
                        id: item,
                        name: item.split('/').pop(),
                        children: []
                    }); });
                    foundNode.children = childNodes;
                    // Re-render tree view
                    setNodes(Object.assign({}, nodes));
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var items, childNodes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, StudioAPI.getChildrenPaths(authoringBase, siteId, rootDir)];
                        case 1:
                            items = _a.sent();
                            childNodes = items.map(function (item) { return ({
                                id: item,
                                name: item.split('/').pop(),
                                children: []
                            }); });
                            setNodes({
                                id: rootDir,
                                name: rootDir.split('/').pop(),
                                children: childNodes
                            });
                            return [2 /*return*/];
                    }
                });
            });
        })();
    }, []);
    /**
     * Recursively render tree view
     * @param {*} nodes
     * @returns
     */
    var renderTree = function (nodes) {
        if (!nodes.id) {
            return React__default.createElement(TreeItem$1, { nodeId: "empty-tree" });
        }
        return (React__default.createElement(TreeItem$1, { key: nodes.id, nodeId: nodes.id, label: nodes.name, onContextMenu: function (event) { return onNodeContextMenuClick(event, nodes.id); } }, Array.isArray(nodes.children) && nodes.children.length > 0 ? (nodes.children.map(function (node) { return renderTree(node); })) : (React__default.createElement(TreeItem$1, { nodeId: "empty-tree" }))));
    };
    var onNodeContextMenuClick = function (event, nodeId) {
        event.stopPropagation();
        event.preventDefault();
        setSelected(nodeId);
        setRightClickAnchorEl(event.currentTarget);
        setRightClickPosition({
            pageX: event.pageX,
            pageY: event.pageY,
            path: nodeId
        });
    };
    var onCreateFolderClose = function (isSuccess) {
        if (isSuccess) {
            fetchChildNodes(rightClickPosition.path, true);
        }
        setNewFolderDialogOpen(false);
    };
    var onRenameFolderClose = function (isSuccess) {
        if (isSuccess) {
            var parentNodeId = rightClickPosition.path.split('/').slice(0, -1).join('/');
            fetchChildNodes(parentNodeId, true);
        }
        setRenameFolderDialogOpen(false);
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Grid, { container: true, sx: { padding: '15px' } },
            React__default.createElement(TableContainer, { component: Paper, sx: { marginBottom: '15px' } },
                React__default.createElement(Table, { sx: { minWidth: 650 }, "aria-label": "destination path table" },
                    React__default.createElement(TableHead, null,
                        React__default.createElement(TableRow, null,
                            React__default.createElement(StyledTableCell, null, "Destination Path"))),
                    React__default.createElement(TableBody, null,
                        React__default.createElement(TableRow, { key: selected ? selected : 'root' },
                            React__default.createElement(StyledTableCell, { component: "th", scope: "row" },
                                React__default.createElement(TreeView$1, { defaultCollapseIcon: React__default.createElement(ExpandMoreOutlinedIcon, null), defaultExpandIcon: React__default.createElement(ChevronRightOutlinedIcon, null), defaultExpanded: [rootDir], expanded: expanded, selected: selected, onNodeToggle: handleToggle, onNodeSelect: handleSelect, sx: {
                                        height: 'calc(90vh - 64px - 1px - 140px - 110px - 30px - 64px - 15px)',
                                        flexGrow: 1,
                                        maxWidth: '100%',
                                        overflowY: 'auto'
                                    } }, renderTree(nodes))))))),
            React__default.createElement(RightClickMenu, { anchorEl: rightClickAnchorEl, onMenuClose: function () {
                    setRightClickAnchorEl(null);
                }, position: rightClickPosition, onCreateFolder: function () {
                    setRightClickAnchorEl(null);
                    setNewFolderDialogOpen(true);
                }, onRenameFolder: function () {
                    setRightClickAnchorEl(null);
                    setRenameFolderDialogOpen(true);
                }, onContextMenu: function (event) {
                    setRightClickAnchorEl(null);
                    event.preventDefault();
                } })),
        React__default.createElement(NewFolderDialog, { open: newFolderDialogOpen, onClose: onCreateFolderClose, path: rightClickPosition.path }),
        React__default.createElement(RenameFolderDialog, { open: renameFolderDialogOpen, onClose: onRenameFolderClose, path: rightClickPosition.path })));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
// endregion
// region Widget Dialog
const showWidgetDialog = /*#__PURE__*/ createAction('SHOW_WIDGET_DIALOG');
const closeWidgetDialog = /*#__PURE__*/ createAction('CLOSE_WIDGET_DIALOG');
// endregion

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const showSystemNotification = /*#__PURE__*/ createAction('SHOW_SYSTEM_NOTIFICATION');

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function AppActions(_a) {
    var _this = this;
    var rootDir = _a.rootDir, sourceItem = _a.sourceItem;
    var dispatch = useDispatch();
    var siteId = useActiveSiteId();
    var authoringBase = useEnv().authoringBase;
    var _b = useState(''), destinationPath = _b[0], setDestinationPath = _b[1];
    var _c = useState(false), isProcessing = _c[0], setIsProcessing = _c[1];
    destinationPathSubscriber.subscribe(function (path) {
        setDestinationPath(path);
    });
    var handleCopy = function (event, copyAndEdit) { return __awaiter(_this, void 0, void 0, function () {
        var sourcePath, res, pastedPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (isProcessing || !destinationPath || !sourceItem || !sourceItem.path) {
                        return [2 /*return*/];
                    }
                    setIsProcessing(true);
                    sourcePath = sourceItem.path;
                    return [4 /*yield*/, StudioAPI.copyItem(authoringBase, siteId, sourcePath, destinationPath)];
                case 1:
                    res = _a.sent();
                    if (res) {
                        pastedPath = res.items[0];
                        if (copyAndEdit && pastedPath) {
                            openEditForm(siteId, pastedPath);
                        }
                    }
                    else {
                        setIsProcessing(false);
                        return [2 /*return*/, dispatch(showSystemNotification({
                                message: "There is an error while copying content: ".concat(sourcePath)
                            }))];
                    }
                    if (!copyAndEdit) {
                        dispatch(showSystemNotification({
                            message: 'Selected files are copied to destination folder.'
                        }));
                    }
                    setIsProcessing(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var openEditForm = function (siteId, path) {
        return dispatch({
            type: 'SHOW_EDIT_DIALOG',
            payload: {
                site: siteId,
                path: path,
                type: 'form',
                authoringBase: authoringBase,
                isHidden: false,
                onSaveSuccess: {
                    type: 'BATCH_ACTIONS',
                    payload: [
                        {
                            type: 'DISPATCH_DOM_EVENT',
                            payload: { id: 'editDialogSuccess' }
                        },
                        {
                            type: 'SHOW_EDIT_ITEM_SUCCESS_NOTIFICATION'
                        },
                        {
                            type: 'CLOSE_EDIT_DIALOG'
                        }
                    ]
                },
                onCancel: {
                    type: 'BATCH_ACTIONS',
                    payload: [
                        {
                            type: 'CLOSE_EDIT_DIALOG'
                        },
                        {
                            type: 'DISPATCH_DOM_EVENT',
                            payload: { id: 'editDialogDismissed' }
                        }
                    ]
                }
            }
        });
    };
    var handleCopyAndOpen = function (event) {
        var openEditForm = true;
        handleCopy(event, openEditForm);
    };
    var handleClose = function (event, reason) {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            resetState();
            dispatch(closeWidgetDialog());
        }
    };
    var resetState = function () {
        setDestinationPath('');
        setIsProcessing(false);
    };
    return (React__default.createElement(DialogActions, null,
        React__default.createElement(StyledActionButton, { variant: "outlined", color: "primary", onClick: function (event) { return handleClose(event, null); }, disabled: isProcessing }, "Close"),
        React__default.createElement(StyledActionButton, { variant: "contained", color: "primary", onClick: function (event) { return handleCopy(event, false); }, disabled: isProcessing || !rootDir || !destinationPath }, "Copy"),
        React__default.createElement(StyledActionButton, { variant: "contained", color: "primary", onClick: handleCopyAndOpen, disabled: isProcessing || !rootDir || !destinationPath }, "Copy and Edit")));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var DEFAULT_WEBSITE_PATH = '/site/website';
var DEFAULT_COMPONENT_PATH = '/site/components';
/**
 * Get root directory
 * If /site/website => root directory
 * If /site/components => root directory
 * Default: /site
 * @returns root directory
 */
var getRootDir = function (item) {
    if (item && item.path && item.path.startsWith(DEFAULT_WEBSITE_PATH)) {
        return DEFAULT_WEBSITE_PATH;
    }
    if (item && item.path && item.path.startsWith(DEFAULT_COMPONENT_PATH)) {
        return DEFAULT_COMPONENT_PATH;
    }
    return null;
};
function App() {
    var currentPreviewItem = useCurrentPreviewItem();
    var sourceItem = currentPreviewItem ? StudioAPI.getPreviewItem(currentPreviewItem) : null;
    var rootDir = getRootDir(sourceItem);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(SourceItemTable, { sourceItem: sourceItem }),
        React__default.createElement(DirectoryTreeView, { rootDir: rootDir }),
        React__default.createElement(AppActions, { rootDir: rootDir, sourceItem: sourceItem })));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function OpenSmartCopyPanelButton(props) {
    var buttonLabel = props.title ? props.title : 'Smart Copy';
    var buttonIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/ContentPasteOutlined';
    var dispatch = useDispatch();
    return (React$1.createElement(ToolsPanelListItemButton, { icon: { id: buttonIcon }, title: buttonLabel, onClick: function () {
            return dispatch(showWidgetDialog({
                title: buttonLabel,
                extraProps: props,
                widget: {
                    id: 'org.rd.plugin.smartcopy.dialog'
                }
            }));
        } }));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function OpenSmartCopyToolbarButton(props) {
    var dispatch = useDispatch();
    var _a = props.title, title = _a === void 0 ? 'Smart Copy' : _a, _b = props.tooltip, tooltip = _b === void 0 ? title : _b, _c = props.useIcon, useIcon = _c === void 0 ? true : _c, _d = props.buttonSize, buttonSize = _d === void 0 ? 'small' : _d, _e = props.dialogTitle, dialogTitle = _e === void 0 ? title : _e, _f = props.icon, icon = _f === void 0 ? { id: '@mui/icons-material/ContentPasteOutlined' } : _f;
    var handleClick = function () {
        return dispatch(showWidgetDialog({
            title: dialogTitle,
            extraProps: props,
            widget: { id: 'org.rd.plugin.smartcopy.dialog' }
        }));
    };
    var wrap = function (thing) {
        return useIcon || props.tooltip ? React$1.createElement(Tooltip, { title: tooltip }, thing) : thing;
    };
    return wrap(useIcon ? (React$1.createElement(IconButton, { size: buttonSize, onClick: handleClick },
        React$1.createElement(SystemIcon, { icon: icon }))) : (React$1.createElement(Button$1, { size: buttonSize, onClick: handleClick }, title)));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var plugin = {
    locales: undefined,
    scripts: undefined,
    stylesheets: undefined,
    id: 'org.rd.plugin.smartcopy',
    widgets: {
        'org.rd.plugin.smartcopy.dialog': App,
        'org.rd.plugin.smartcopy.openSmartCopyPanelButton': OpenSmartCopyPanelButton,
        'org.rd.plugin.smartcopy.openSmartCopyToolbarButton': OpenSmartCopyToolbarButton
    }
};

export { App as Dialog, OpenSmartCopyPanelButton, OpenSmartCopyToolbarButton, plugin as default };
