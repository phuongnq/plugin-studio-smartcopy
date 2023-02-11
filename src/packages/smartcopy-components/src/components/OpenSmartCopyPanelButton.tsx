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

import * as React from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenSmartCopyPanelButton(props) {
  const dispatch = useDispatch();
  const {
    title = 'Smart Copy',
    icon = { id: '@mui/icons-material/ContentPasteOutlined' }
  } = props;
  return (
    <ToolsPanelListItemButton
      icon={icon}
      title={title}
      onClick={() =>
        dispatch(
          showWidgetDialog({
            title,
            extraProps: props,
            widget: { id: 'org.rd.plugin.smartcopy.dialog' }
          })
        )
      }
    />
  );
}

export default OpenSmartCopyPanelButton;
