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

import { PluginDescriptor } from '@craftercms/studio-ui';
import Dialog from './App';
import OpenSmartCopyPanelButton from './components/OpenSmartCopyPanelButton';
import OpenSmartCopyToolbarButton from './components/OpenSmartCopyToolbarButton';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.smartcopy',
  widgets: {
    'org.rd.plugin.smartcopy.dialog': Dialog,
    'org.rd.plugin.smartcopy.openSmartCopyPanelButton': OpenSmartCopyPanelButton,
    'org.rd.plugin.smartcopy.openSmartCopyToolbarButton': OpenSmartCopyToolbarButton
  }
};

export { Dialog, OpenSmartCopyPanelButton, OpenSmartCopyToolbarButton };

export default plugin;
