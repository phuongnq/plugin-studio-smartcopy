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

import React from 'react';
import { CrafterThemeProvider } from '@craftercms/studio-ui';
import useCurrentPreviewItem from '@craftercms/studio-ui/hooks/useCurrentPreviewItem';

import SelectedItem from './components/SelectedItem';
import TreeView from './components/TreeView';
import AppActions from './components/AppActions';
import StudioAPI from './api/studio';

const DEFAULT_WEBSITE_PATH = '/site/website';
const DEFAULT_COMPONENT_PATH = '/site/components';

/**
 * Get root directory
 * If /site/website => root directory
 * If /site/components => root directory
 * Default: /site
 * @returns root directory
 */
  const getRootDir = (item) => {
  if (item && item.path && item.path.startsWith(DEFAULT_WEBSITE_PATH)) {
    return DEFAULT_WEBSITE_PATH;
  }

  if (item && item.path && item.path.startsWith(DEFAULT_COMPONENT_PATH)) {
    return DEFAULT_COMPONENT_PATH;
  }

  return null;
};

export default function App() {
  const currentPreviewItem = useCurrentPreviewItem();
  const selectedItem = currentPreviewItem ? StudioAPI.getPreviewItem(currentPreviewItem) : null;
  const rootDir = getRootDir(selectedItem);

  return (
    <CrafterThemeProvider>
      <SelectedItem selectedItem={selectedItem} />
      <TreeView rootDir={rootDir} />
      <AppActions
        rootDir={rootDir}
        selectedItem={selectedItem}
      />
    </CrafterThemeProvider>
  );
}
