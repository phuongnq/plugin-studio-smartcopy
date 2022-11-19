import React, { useState, useEffect } from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import StyledTableRow from '@mui/material/TableRow';
import StyledTableCell from '@mui/material/TableCell';
import ActionMenu from './ActionMenu';
import NewFolderDialog from './NewFolderDialog';
import RenameFolderDialog from './RenameFolderDialog';

import StudioAPI from '../api/studio';
import { copyDestSub } from '../service/subscribe';

export default function FileSystemNavigator({ rootDir }) {
  const [nodes, setNodes] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState('');
  const [rightClickAnchorEl, setRightClickAnchorEl] = useState(null);
  const [rightClickPosition, setRightClickPosition] = useState({});
  const [newFolderDialogOpen, setNewFolderDialogOpen] = useState(false);
  const [renameFolderDialogOpen, setRenameFolderDialogOpen] = useState(false);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  /**
   * Find a node by its path from nodes object
   * @param {*} path
   * @param {*} data
   * @returns found node
   */
  const findNode = (path, data) => {
    // Get list of paths from root to the node
    // Ex, ['site', 'website', 'article'] => ['/site', '/site/website', '/site/website/article']
    const subPaths = path.split('/').filter((elm) => !!elm);
    const fullPaths = [];
    let nextPath = '';
    const rootPath = rootDir;
    for (let i = 0; i < subPaths.length; i += 1) {
      if (i === 0) {
        nextPath = `/${subPaths[i]}`;
      } else {
        nextPath = `${nextPath}/${subPaths[i]}`;
      }

      if (nextPath.indexOf(rootPath) >= 0) {
        fullPaths.push(nextPath);
      }
    }

    let foundNode = {};
    // go throush each path from root to the last child node
    while (fullPaths.length > 0) {
      const currPath = fullPaths.shift();
      if (data.id === currPath) {
        foundNode = data;
        continue;
      }

      foundNode = foundNode.children.find((item) => item.id === currPath);
    }

    return foundNode;
  };

  const handleSelect = async (event, nodeId) => {
    setSelected(nodeId);
    copyDestSub.next(nodeId);
    fetchChildNodes(nodeId);
  };

  /**
   * Fetch child nodes if needed
   * @param {*} nodeId
   * @returns
   */
  const fetchChildNodes = async (nodeId, forceUpdate) => {
    // First, find a node by its path
    // If found and it has children, return since no need to fetch data anymore
    const foundNode = findNode(nodeId, nodes);
    if (!forceUpdate && foundNode.children.length > 0) {
      return;
    }

    // Get children of node from API then append to nodes object
    const items = await StudioAPI.getChildrenPaths(nodeId);
    const childNodes = items.map((item) => ({
      id: item,
      name: item.split('/').pop(),
      children: []
    }));
    foundNode.children = childNodes;

    // Re-render tree view
    setNodes(Object.assign({}, nodes));
  };

  useEffect(() => {
    (async function () {
      const items = await StudioAPI.getChildrenPaths(rootDir);
      const childNodes = items.map((item) => ({
        id: item,
        name: item.split('/').pop(),
        children: []
      }));

      setNodes({
        id: rootDir,
        name: rootDir.split('/').pop(),
        children: childNodes
      });
    })();
  }, []);

  /**
   * Recursively render tree view
   * @param {*} nodes
   * @returns
   */
  const renderTree = (nodes) => {
    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        onContextMenu={(event) => onNodeContextMenuClick(event, nodes.id)}
      >
        {Array.isArray(nodes.children) && nodes.children.length > 0 ? (
          nodes.children.map((node) => renderTree(node))
        ) : (
          <TreeItem />
        )}
      </TreeItem>
    );
  };

  const onNodeContextMenuClick = (event, nodeId) => {
    event.stopPropagation();
    event.preventDefault();
    setSelected(nodeId);
    setRightClickAnchorEl(event.currentTarget);
    setRightClickPosition({
      pageX: event.pageX,
      pageY: event.pageY,
      path: nodeId
    });
  };

  const onCreateFolderClose = (isSuccess) => {
    if (isSuccess) {
      fetchChildNodes(rightClickPosition.path, true);
    }
    setNewFolderDialogOpen(false);
  };

  const onRenameFolderClose = (isSuccess) => {
    if (isSuccess) {
      const parentNodeId = rightClickPosition.path.split('/').slice(0, -1).join('/');
      fetchChildNodes(parentNodeId, true);
    }
    setRenameFolderDialogOpen(false);
  };

  return (
    <>
      <Grid container sx={{ padding: '15px' }}>
        <TableContainer component={Paper} sx={{ marginBottom: '15px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="destination path table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Destination Path</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={selected ? selected : 'root'}>
                <StyledTableCell component="th" scope="row">
                  {selected ? selected : 'Select a destination path'}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={[rootDir]}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          sx={{ height: 360, flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}
        >
          {renderTree(nodes)}
        </TreeView>
        <ActionMenu
          anchorEl={rightClickAnchorEl}
          onClose={() => setRightClickAnchorEl(null)}
          position={rightClickPosition}
          onCreateFolder={() => {
            setRightClickAnchorEl(null);
            setNewFolderDialogOpen(true);
          }}
          onRenameFolder={() => {
            setRightClickAnchorEl(null);
            setRenameFolderDialogOpen(true);
          }}
          onContextMenu={(event) => {
            setRightClickAnchorEl(null);
            event.preventDefault();
          }}
        />
      </Grid>
      <NewFolderDialog open={newFolderDialogOpen} onClose={onCreateFolderClose} path={rightClickPosition.path} />
      <RenameFolderDialog open={renameFolderDialogOpen} onClose={onRenameFolderClose} path={rightClickPosition.path} />
    </>
  );
}
