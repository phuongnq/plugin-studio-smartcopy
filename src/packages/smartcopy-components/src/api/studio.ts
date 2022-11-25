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

import HttpUtils from '../utils/http';

const API_GET_ITEM_TREE = '/api/1/services/api/1/content/get-items-tree.json';
const API_CREATE_FOLDER = '/api/1/services/api/1/content/create-folder.json';
const API_RENAME_FOLDER = '/api/1/services/api/1/content/rename-folder.json';
const API_CONTENT_PASTE = '/api/2/content/paste';

export type PreviewItemType = {
  name: string;
  path: string;
  contentType: string;
};

const StudioAPI = {
  getPreviewItem: function(previewItem): PreviewItemType {
    return {
      name: previewItem.label,
      path: previewItem.path,
      contentType: previewItem.contentTypeId,
    };
  },
  async getChildrenPaths(authoringBase: string, siteId: string, path: string) {
    const url = `${authoringBase}${API_GET_ITEM_TREE}?site=${siteId}&path=${path}&depth=1`;
    try {
      const res = await HttpUtils.get(url);

      if (res.status === 200) {
        return res.response.item.children.filter(child => child.path !== path).map(child => {
          return child.path;
        });
      }
      return [];
    } catch (e) {
      return [];
    }
  },
  async copyItem(authoringBase: string, siteId: string, path: string, destinationPath: string) {
    const url = `${authoringBase}${API_CONTENT_PASTE}`;
    const body = {
      siteId,
      operation: 'COPY',
      targetPath: destinationPath,
      item: {
        path,
      }
    };

    try {
      const res = await HttpUtils.post(url, body);
      if (res.status === 200) {
        return res.response;
      }
      return null;
    } catch (e) {
      return null;
    }
  },
  async createFolder(authoringBase: string, siteId: string, path: string, name: string) {
    const url = `${authoringBase}${API_CREATE_FOLDER}?site=${siteId}&path=${path}&name=${name}`;
    const body = '';
    try {
      const res = await HttpUtils.post(url, body);
      if (res.status === 200) {
        return res.response;
      }
      return false;
    } catch (e) {
      return false;
    }
  },
  async renameFolder(authoringBase: string, siteId: string, path: string, name: string) {
    const url = `${authoringBase}${API_RENAME_FOLDER}?site=${siteId}&path=${path}&name=${name}`;
    const body = '';

    try {
      const res = await HttpUtils.post(url, body);
      if (res.status === 200) {
        return res.response;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
};

export default StudioAPI;
