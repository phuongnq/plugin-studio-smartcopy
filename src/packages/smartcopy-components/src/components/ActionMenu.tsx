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
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled, alpha } from '@mui/material/styles';

const StyledMenu = styled((props) => (
  <Popper
    elevation={0}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function ActionMenu({ anchorEl, onClose, position, onCreateFolder, onRenameFolder, onContextMenu }) {
  const open = Boolean(anchorEl);
  const { pageX, pageY } = position;

  function handleListKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  }

  const handleClose = (event) => {
    if (anchorEl.current && anchorEl.current.contains(event.target)) {
      return;
    }

    onClose();
  };

  return (
    <div>
      <StyledMenu
        anchorEl={{
          getBoundingClientRect: () => ({
            width: 0,
            height: 0,
            top: pageY,
            right: pageX,
            bottom: pageY,
            left: pageX
          })
        }}
        open={open}
        onClose={onClose}
        onContextMenu={(event) => onContextMenu(event)}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
         {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={onCreateFolder} disableRipple>
                      <CreateNewFolderIcon />
                      Create new folder
                    </MenuItem>
                    <MenuItem onClick={onRenameFolder} disableRipple>
                      <BorderColorIcon />
                      Rename
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
      </StyledMenu>
    </div>
  );
}
