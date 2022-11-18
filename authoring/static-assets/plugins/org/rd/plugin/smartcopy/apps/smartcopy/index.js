const React = craftercms.libs.React;
const { useState } = craftercms.libs.React;
import '@mui/material';
const IconButton = craftercms.libs.MaterialUI.IconButton && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.IconButton, 'default') ? craftercms.libs.MaterialUI.IconButton['default'] : craftercms.libs.MaterialUI.IconButton;
const { Subject } = craftercms.libs.rxjs;
const ToolsPanelListItemButton = craftercms.components.ToolsPanelListItemButton && Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton, 'default') ? craftercms.components.ToolsPanelListItemButton['default'] : craftercms.components.ToolsPanelListItemButton;
const { createAction } = craftercms.libs.ReduxToolkit;
const { useDispatch } = craftercms.libs.ReactRedux;

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

const copyDestSub = new Subject('');

var Dialog = function (_a) {
    _a.boardId;
    //  const siteId = useActiveSiteId();
    var _b = useState(); _b[0]; _b[1];
    var DEFAULT_WEBSITE_PATH = '/site/website';
    var DEFAULT_COMPONENT_PATH = '/site/components';
    var _c = useState(false); _c[0]; var setOpen = _c[1];
    var _d = useState({}); _d[0]; _d[1];
    var _e = useState(''); _e[0]; var setDesPath = _e[1];
    var _f = useState(false), isProcessing = _f[0], setIsProcessing = _f[1];
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
    var resetState = function () {
        setDesPath('');
        setIsProcessing(false);
        setOpen(false);
    };
    var handleClose = function (event, reason) {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            resetState();
        }
    };
    var selectedItem = null; //StudioAPI.getSelectedItem();
    getRootDir(selectedItem);
    copyDestSub.subscribe(function (path) {
        setDesPath(path);
    });
    return (React.createElement(React.Fragment, null,
        selectedItem ,
        React.createElement(IconButton, { onClick: handleClose, disabled: isProcessing }, "Close")));
};

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
// endregion

function Foo(props) {
    var buttonLabel = props.title ? props.title : 'Smart Copy';
    var buttonIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/ContentPasteOutlined';
    var dispatch = useDispatch();
    return (React.createElement(ToolsPanelListItemButton, { icon: { id: buttonIcon }, title: buttonLabel, onClick: function () {
            return dispatch(showWidgetDialog({
                title: buttonLabel,
                extraProps: props,
                widget: {
                    id: 'org.rd.plugin.smartcopy.dialog'
                }
            }));
        } }));
}

var plugin = {
    locales: undefined,
    scripts: undefined,
    stylesheets: undefined,
    id: 'org.rd.plugin.smartcopy',
    widgets: {
        'org.rd.plugin.smartcopy.openSmartCopyPanelButton': Foo,
        'org.rd.plugin.smartcopy.dialog': Dialog
    }
};

export { Dialog, Foo as OpenSmartCopyPanelButton, plugin as default };
