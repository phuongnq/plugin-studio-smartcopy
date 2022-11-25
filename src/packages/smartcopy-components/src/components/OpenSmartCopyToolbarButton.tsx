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
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SystemIcon, { SystemIconDescriptor } from '@craftercms/studio-ui/components/SystemIcon';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenSmartCopyToolbarButton(props) {
  const buttonLabel = props.title ? props.title : 'Smart Copy';
  const buttonIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/ContentPasteOutlined';

  const dispatch = useDispatch();
  return (
    <Tooltip title={buttonLabel}>
      <IconButton
        size="large"
        onClick={() =>
          dispatch(
            showWidgetDialog({
              title: buttonLabel,
              extraProps: props,
              widget: {
                id: 'org.rd.plugin.smartcopy.dialog'
              }
            })
          )
        }
      >
        <SystemIcon icon={{ id: buttonIcon }} fontIconProps={{ fontSize: 'small' }} />
      </IconButton>
    </Tooltip>
  );
}

export default OpenSmartCopyToolbarButton;
