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

import HttpHelper from '../helpers/http';

const API_GET_ITEM_TREE = '/studio/api/1/services/api/1/content/get-items-tree.json';
const API_GET_ITEM = '/studio/api/1/services/api/1/content/get-item.json';
const API_CREATE_FOLDER = '/studio/api/1/services/api/1/content/create-folder.json';
const API_RENAME_FOLDER = '/studio/api/1/services/api/1/content/rename-folder.json';
const API_CONTENT_PASTE = '/studio/api/2/content/paste';

const StudioAPI = {
  origin() {
    return window.location.origin;
  },
  siteId() {
    return CrafterCMSNext.system.store.getState().sites.active;
  },
  getSelectedItem: function() {
    if (!craftercms.getStore().getState().preview.guest) {
      return null;
    }
    const selectedPath = craftercms.getStore().getState().preview.guest.path;
    if (!selectedPath) return null;

    const item = craftercms.getStore().getState().content.itemsByPath[selectedPath];
    if (!item) return null;

    return {
      name: item.label,
      path: item.path,
      contentType: item.contentTypeId,
    };

  },
  openEditForm: function(contentType, path) {
    const site = CrafterCMSNext.system.store.getState().sites.active;
    const authoringBase = CrafterCMSNext.system.store.getState().env.authoringBase;
    const eventIdSuccess = 'editDialogSuccess';
    const eventIdDismissed = 'editDialogDismissed';

    return CrafterCMSNext.system.store.dispatch({
      type: 'SHOW_EDIT_DIALOG',
      payload: {
        site: site,
        path: path,
        type: 'form',
        authoringBase,
        isHidden: false,
        onSaveSuccess: {
          type: 'BATCH_ACTIONS',
          payload: [
            {
              type: 'DISPATCH_DOM_EVENT',
              payload: { id: eventIdSuccess }
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
              payload: { id: eventIdDismissed }
            }
          ]
        }
      }
    });
  },
  async getChildrenPaths(path) {
    const res = await HttpHelper.get(`${StudioAPI.origin()}${API_GET_ITEM_TREE}?site=${StudioAPI.siteId()}&path=${path}&depth=1`);

    if (res.status === 200) {
      return res.response.item.children.filter(child => child.path !== path).map(child => {
        return child.path;
      });
    }

    return [];
  },
  async getItem(path) {
    const res = await HttpHelper.get(`${StudioAPI.origin()}${API_GET_ITEM}?site=${StudioAPI.siteId()}&path=${path}&populateDependencies=false`);

    if (res.status === 200) {
      return res.response;
    }

    return null;
  },
  async copyItem(path, destinationPath) {
    const res = await HttpHelper.post(`${StudioAPI.origin()}${API_CONTENT_PASTE}`, {
      siteId: StudioAPI.siteId(),
      operation: 'COPY',
      targetPath: destinationPath,
      item: {
        path,
      }
    });

    if (res.status === 200) {
      return res.response;
    }

    return null;
  },
  async createFolder(path, name) {
    const body = '';
    const res = await HttpHelper.post(`${StudioAPI.origin()}${API_CREATE_FOLDER}?site=${StudioAPI.siteId()}&path=${path}&name=${name}`, body);

    if (res.status === 200) {
      return res.response;
    }

    return false;
  },
  async renameFolder(path, name) {
    const body = '';
    const res = await HttpHelper.post(`${StudioAPI.origin()}${API_RENAME_FOLDER}?site=${StudioAPI.siteId()}&path=${path}&name=${name}`, body);

    if (res.status === 200) {
      return res.response;
    }

    return false;
  }
};

export default StudioAPI;
