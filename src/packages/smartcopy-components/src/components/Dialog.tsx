import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Collapse,
  Paper,
  Typography,
  Button,
  cardClasses,
  Fab,
  DialogActions,
  Snackbar,
  Alert,
  Stack
} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { copyDestSub } from '../service/subscribe';

export interface SmartCopyProps {
  boardId: string;
}

const Dialog = ({ boardId }: SmartCopyProps) => {
  //  const siteId = useActiveSiteId();
  const [error, setError] = useState();

  const DEFAULT_WEBSITE_PATH = '/site/website';
  const DEFAULT_COMPONENT_PATH = '/site/components';
  const ALERT_AUTO_HIDE_DURATION = 4000;

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({});
  const [desPath, setDesPath] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

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

  const resetState = () => {
    setDesPath('');
    setIsProcessing(false);
    setOpen(false);
  };

  const handleClose = (event, reason?) => {
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      resetState();
    }
  };

  const onCloseAlert = () => {
    setAlert(
      Object.assign(
        {},
        {
          open: false,
          severity: 'info', //alert.severity,
          message: 'alert message' //alert.message,
        }
      )
    );
  };

  const handleCopy = (event, shouldOpenEditForm?) => {
    event.preventDefault();

    const selectedItem = null; //StudioAPI.getSelectedItem();

    if (isProcessing || !desPath || !selectedItem || !selectedItem.path) {
      return;
    }

    setIsProcessing(true);
    const path = selectedItem.path;
    const destinationPath = desPath;
    const res = null; //await StudioAPI.copyItem(path, destinationPath)
    if (res) {
      const pastePath = res.items[0];
      if (shouldOpenEditForm && path) {
        //StudioAPI.openEditForm(selectedItem.contentType, pastePath);
      }
    } else {
      setIsProcessing(false);
      return setAlert({
        open: true,
        severity: 'error',
        message: `There is an error while copying file: ${path}`
      });
    }

    setAlert({
      open: true,
      severity: 'success',
      message: 'Selected files are copied to destination folder.'
    });
    setIsProcessing(false);
  };

  const handleCopyAndOpen = (event) => {
    const shouldOpenEditForm = true;
    handleCopy(event, shouldOpenEditForm);
    setOpen(false);
  };

  const selectedItem = null; //StudioAPI.getSelectedItem();
  const rootDir = getRootDir(selectedItem);
  copyDestSub.subscribe((path) => {
    setDesPath(path);
  });

  return (
    <>
      {selectedItem && (
        <>
          <Button onClick={handleCopyAndOpen} disabled={isProcessing || !rootDir || !desPath}>
            Copy and Edit
          </Button>

          <Button onClick={handleCopy} disabled={isProcessing || !rootDir || !desPath}>
            Copy
          </Button>
        </>
      )}

      <IconButton onClick={handleClose} disabled={isProcessing}>
        Close
      </IconButton>
    </>
  );
};

export default Dialog;
