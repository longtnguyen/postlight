import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination, 
  TableRow,
  Paper, 
  IconButton 
} from '@material-ui/core';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  icon: {
    fontSize:16,
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        size="small"
        disabled={page === 0}
        aria-label="first page"
      >
        <span className={classes.icon}>First</span>
      </IconButton>
      <IconButton onClick={handleBackButtonClick} size="small" disabled={page === 0} aria-label="previous page">
        <span className={classes.icon}>Previous</span>
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        size="small"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <span className={classes.icon}>Next</span>
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        size="small"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <span className={classes.icon}>Last</span>
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function PaginatedTable({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let history = useHistory();

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleOnclick = (row) => {
    history.push('/employee', { ...row })
  }
  return (
    <Paper>
      <div>
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Thumbnail</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">City and State</TableCell>
              <TableCell align="left">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              <TableRow key={row.uuid} onClick={() => handleOnclick(row)}>
                <TableCell align="left">{<img src={row.pictureThumb}/>}</TableCell>
                <TableCell align="left">{`${row.title} ${row.firstName} ${row.lastName}`}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{`${row.city}, ${row.state}`}</TableCell>
                <TableCell align="left">{row.gender}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}