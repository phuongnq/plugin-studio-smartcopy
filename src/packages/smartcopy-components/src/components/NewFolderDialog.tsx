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

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import useEnv from '@craftercms/studio-ui/hooks/useEnv';

import StyledActionButton from './StyledButton';
import StyledDialogComponent from './StyledDialog';

import StudioAPI from '../api/studio';

export default function NewFolderDialog({ open, onClose, path } : { open: boolean, onClose: (isSuccess: boolean) => void, path: string}) {
  const siteId = useActiveSiteId();
  const { authoringBase } = useEnv();

  const [folderName, setFolderName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    if (folderName && path) {
      setIsProcessing(true);
      const res = await StudioAPI.createFolder(authoringBase, siteId, path, folderName);
      setFolderName('');
      onClose(res);
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    setFolderName('');
    onClose(false);
  };

  return (
    <div>
      <StyledDialogComponent open={open} onClose={handleCancel} aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Create a New Folder
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Parent path: {path}
            <br />
            Please enter a folder name.
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
          <StyledActionButton variant="outlined" color="primary" onClick={handleCancel}>
            Cancel
          </StyledActionButton>
          <StyledActionButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!folderName || isProcessing}
          >
            Create
          </StyledActionButton>
        </DialogActions>
      </StyledDialogComponent>
    </div>
  );
}
