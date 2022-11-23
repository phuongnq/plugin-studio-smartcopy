import React, { useState, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import DialogActions from '@mui/material/DialogActions';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import { closeWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

import { StyledCancelButton, StyledMainButton } from './StyledButton';

import StudioAPI, { SelectedItemType } from '../api/studio';
import { copyDestSub } from '../service/subscribe';

const ALERT_AUTO_HIDE_DURATION = 4000;

const Alert = forwardRef(function Alert(props: AlertProps, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AppActions({ rootDir, selectedItem } : { rootDir: string, selectedItem?: SelectedItemType}) {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState<{ open: boolean, severity: AlertColor, message: string}>({ open: false, severity: 'info', message: '' });
  const [desPath, setDesPath] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  copyDestSub.subscribe((path) => {
    setDesPath(path);
  });

  const onCloseAlert = () => {
    setAlert(Object.assign({}, {
      open: false,
      severity: alert.severity,
      message: alert.message,
    }));
  };

  const handleCopy = async (event: React.MouseEvent<HTMLElement>, openEditForm: boolean) => {
    event.preventDefault();

    if (isProcessing || !desPath || !selectedItem || !selectedItem.path) {
      return;
    }

    setIsProcessing(true);
    const path = selectedItem.path;
    const destinationPath = desPath;
    const res = await StudioAPI.copyItem(path, destinationPath);
    if (res) {
      const pastePath = res.items[0];
      if (openEditForm && pastePath) {
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

  const handleClose = (event: React.MouseEvent<HTMLElement>, reason?: string) => {
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      resetState();
      dispatch(closeWidgetDialog());
    }
  };

  const resetState = () => {
    setDesPath('');
    setIsProcessing(false);
  };

  return (
    <>
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
    </>
  );
};