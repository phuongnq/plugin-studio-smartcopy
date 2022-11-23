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

import React, { useState, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';

import { CrafterThemeProvider } from '@craftercms/studio-ui';
import { closeWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';

import { useDispatch } from 'react-redux';

import SelectedItem from './components/SelectedItem';
import TreeView from './components/TreeView';
import { StyledCancelButton, StyledMainButton } from './components/StyledButton';

import { copyDestSub } from './service/subscribe';
import StudioAPI from './api/studio';

const DEFAULT_WEBSITE_PATH = '/site/website';
const DEFAULT_COMPONENT_PATH = '/site/components';
const ALERT_AUTO_HIDE_DURATION = 4000;

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

const Alert = forwardRef(function Alert(props: AlertProps, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function App() {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState<{ open: boolean, severity: AlertColor, message: string}>({ open: false, severity: 'info', message: '' });
  const [desPath, setDesPath] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedItem = StudioAPI.getSelectedItem();
  const rootDir = getRootDir(selectedItem);
  copyDestSub.subscribe((path) => {
    setDesPath(path);
  });

  const resetState = () => {
    setDesPath('');
    setIsProcessing(false);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>, reason?: string) => {
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      resetState();
      dispatch(closeWidgetDialog());
    }
  };

  const onCloseAlert = () => {
    setAlert(Object.assign({}, {
      open: false,
      severity: alert.severity,
      message: alert.message,
    }));
  }

  const handleCopy = async (event: React.MouseEvent<HTMLElement>, openEditForm: boolean) => {
    event.preventDefault();

    const selectedItem = StudioAPI.getSelectedItem();
    if (isProcessing || !desPath || !selectedItem || !selectedItem.path) {
      return;
    }

    setIsProcessing(true);
    const path = selectedItem.path;
    const destinationPath = desPath;
    const res = await StudioAPI.copyItem(path, destinationPath);
    if (res) {
      const pastePath = res.items[0];
      if (openEditForm && path) {
        StudioAPI.openEditForm(selectedItem.contentType, pastePath);
      }
    } else {
      setIsProcessing(false);
      return setAlert({
        open: true,
        severity: 'error',
        message: `There is an error while copying file: ${path}`,
      });
    }

    if (!openEditForm) {
      setAlert({
        open: true,
        severity: 'success',
        message: 'Selected files are copied to destination folder.',
      });
    }

    setIsProcessing(false);
  }

  const handleCopyAndOpen = (event: React.MouseEvent<HTMLElement>) => {
    const openEditForm = true;
    handleCopy(event, openEditForm);
  };

  return (
    <CrafterThemeProvider>
      <SelectedItem selectedItem={selectedItem} />
      <TreeView rootDir={rootDir} />
      <DialogActions>
        <StyledCancelButton
            variant="outlined"
            color="primary"
            onClick={(event) => handleClose(event, null)}
            disabled={isProcessing}
          >
            Close
          </StyledCancelButton>
          <StyledMainButton
            variant="contained"
            color="primary"
            onClick={(event) => handleCopy(event, false)}
            disabled={isProcessing || !rootDir || !desPath}
          >
            Copy
          </StyledMainButton>
          <StyledMainButton
            variant="contained"
            color="primary"
            onClick={handleCopyAndOpen}
            disabled={isProcessing || !rootDir || !desPath}
          >
            Copy and Edit
          </StyledMainButton>
      </DialogActions>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={alert && alert.open} autoHideDuration={ALERT_AUTO_HIDE_DURATION} onClose={onCloseAlert}>
          <Alert onClose={onCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      </Stack>
    </CrafterThemeProvider>
  );
}
