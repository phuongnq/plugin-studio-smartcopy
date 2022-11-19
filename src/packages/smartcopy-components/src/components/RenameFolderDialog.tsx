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
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

import { StyledCancelButton, StyledMainButton } from './StyledButton';
import StyledDialogComponent from './StyledDialog';

import StudioAPI from '../api/studio';

export default function RenameFolderDialog({ open, onClose, path }) {
  const [folderName, setFolderName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (path) {
      setFolderName(path.split('/').pop());
    }
  }, [path]);

  const onSubmit = async () => {
    if (folderName && path) {
      setIsProcessing(true);
      const res = await StudioAPI.renameFolder(path, folderName);
      onClose(res);
      setIsProcessing(false);
    }
  };

  const closeWithoutSubmit = () => {
    onClose();
  };

  return (
    <div>
      <StyledDialogComponent open={open} onClose={closeWithoutSubmit} aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Rename Folder
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Current path: {path}
            <br />
            Please provide a new folder name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder Name"
            type="text"
            fullWidth
            variant="standard"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value.trim())}
          />
        </DialogContent>
        <DialogActions>
          <StyledMainButton
            variant="contained"
            color="primary"
            onClick={onSubmit}
            disabled={!folderName || isProcessing}
          >
            Rename
          </StyledMainButton>
          <StyledCancelButton variant="outlined" color="primary" onClick={closeWithoutSubmit}>
            Cancel
          </StyledCancelButton>
        </DialogActions>
      </StyledDialogComponent>
    </div>
  );
}
