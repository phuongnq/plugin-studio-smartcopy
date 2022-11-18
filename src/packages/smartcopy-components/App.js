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

import React, { useState, forwardRef, useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import TranslateIcon from '@mui/icons-material/Translate';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SelectedItem from './components/SelectedItem';
import TreeView from './components/TreeView';
import { StyledCancelButton, StyledMainButton } from './components/StyledButton';

import { copyDestSub } from './service/subscribe';
import StudioAPI from './api/studio';

const CrafterCMSNextBridge = CrafterCMSNext.components.CrafterCMSNextBridge;

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

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * Context menu button to open copy dialog
 */
const StyledPopupButton = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  lineHeight: 1.5,
  position: 'relative',
  display: 'flex'
}));

export default function App() {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({});
  const [desPath, setDesPath] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedItem = StudioAPI.getSelectedItem();
  const rootDir = getRootDir(selectedItem);
  copyDestSub.subscribe((path) => {
    setDesPath(path);
  });

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        ...CrafterCMSNext.system.defaultThemeOptions
      }),
    [prefersDarkMode],
  );

  const resetState = () => {
    setDesPath('');
    setIsProcessing(false);
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      resetState();
    }
  };

  const onCloseAlert = () => {
    setAlert(Object.assign({}, {
      open: false,
      severity: alert.severity,
      message: alert.message,
     }));
  }

  const handleCopy = async (event, shouldOpenEditForm) => {
    event.preventDefault();

    const selectedItem = StudioAPI.getSelectedItem();

    if (isProcessing || !desPath || !selectedItem || !selectedItem.path) {
      return;
    }

    setIsProcessing(true);
    const path = selectedItem.path;
      const destinationPath = desPath;
      const res = await StudioAPI.copyItem(path, destinationPath)
      if (res) {
        const pastePath = res.items[0];
        if (shouldOpenEditForm && path) {
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

    setAlert({
      open: true,
      severity: 'success',
      message: 'Selected files are copied to destination folder.',
    });
    setIsProcessing(false);
  }

  const handleCopyAndOpen = (event) => {
    const shouldOpenEditForm = true;
    handleCopy(event, shouldOpenEditForm);
    setOpen(false);
  };

  return (
      <ThemeProvider theme={theme}>
        { selectedItem && (
          <StyledPopupButton className="ItemTranslate cursor" onClick={() => setOpen(true)}>
            <TranslateIcon />
            Translate
          </StyledPopupButton>
        )}
        <Dialog
          open={open}
          fullWidth
          maxWidth="lg"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={handleClose}
        >
          <DialogTitle id="alert-dialog-title">Translate</DialogTitle>
          <DialogContent>
            <SelectedItem selectedItem={selectedItem} />
            <TreeView rootDir={rootDir} />
          </DialogContent>
          <DialogActions>
            {
              selectedItem && (
                <StyledMainButton
                  variant="contained"
                  color="primary"
                  onClick={handleCopyAndOpen}
                  disabled={isProcessing || !rootDir || !desPath}
                >
                  Copy and Edit
                </StyledMainButton>
              )
            }
            <StyledMainButton
                variant="contained"
                color="primary"
                onClick={handleCopy}
                disabled={isProcessing || !rootDir || !desPath}
              >
                Copy
            </StyledMainButton>
            <StyledCancelButton
                variant="outlined"
                color="primary"
                onClick={handleClose}
                disabled={isProcessing}
              >
                Close
              </StyledCancelButton>
          </DialogActions>
        </Dialog>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={alert && alert.open} autoHideDuration={ALERT_AUTO_HIDE_DURATION} onClose={onCloseAlert}>
            <Alert onClose={onCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
              {alert.message}
            </Alert>
          </Snackbar>
        </Stack>
      </ThemeProvider>
  );
}
