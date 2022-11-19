import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StyledTableRow from '@mui/material/TableRow';
import StyledTableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export interface SelectedItemProps {
}

function createData(name, path) {
  return { name, path };
}


const SelectedItem = ({  }: SelectedItemProps) => {
  const row = selectedItem ? createData(selectedItem.name, selectedItem.path) : null;

  return (
    <>
      <Grid container sx={{ padding: '15px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="selected item table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Path</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row && (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.path}</StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default SelectedItem;
