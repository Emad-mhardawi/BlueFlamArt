import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, TableFooter } from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 1500,
    margin: '0px auto'
  },

  container:{
    maxWidth: 1500,
    margin: '100px auto'
  },

  tableHeaderCell:{
    fontWeight:'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  }

}));

const users = [
  { id: 1, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 2, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 3, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 4, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 5, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 6, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 7, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 8, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
  { id: 9, username: "emad", email: "emad@emad.com", numberOfOrders: 5 },
];

const AdminUsersList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <TableContainer className={classes.container}  component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>USER NAME</TableCell>
            <TableCell className={classes.tableHeaderCell}>EMAIL</TableCell>
            <TableCell className={classes.tableHeaderCell}>NUMBER OF ORDERS</TableCell>
            <TableCell className={classes.tableHeaderCell}>DELETE USER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : users
          ).map((user) =>(
            <TableRow key={user.id}>
               <TableCell align="left">{user.id}</TableCell>
               <TableCell align="left">{user.username}</TableCell>
               <TableCell align="left">{user.email}</TableCell>
               <TableCell align="left">{user.numberOfOrders}</TableCell>
               <TableCell align="left">
                 <Button variant='contained' color='secondary'>Delelte</Button>
                </TableCell>
            </TableRow>
          ))}


      
        </TableBody>
        <TableFooter>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default AdminUsersList;
