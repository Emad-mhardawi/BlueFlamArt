import React, { useEffect } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import {  makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../redux-store/actions/adminActions";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 1500,
    margin: "0px auto",
  },

  container: {
    maxWidth: 1500,
    margin: "100px auto",
  },

  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

const AdminUsersList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  const getUsersList = useSelector((state) => state.getAllUsers);
  let { loading, error, users } = getUsersList;
  if (!users) {
    users = [];
  }

  const deletedUser = useSelector((state) => state.adminDeleteUser);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>ID</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                USER NAME
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>EMAIL</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                DELETE USER
              </TableCell>
            </TableRow>
          </TableHead>
          {loading == true && <Spinner />}
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : users
            ).map((user) => (
              <TableRow key={user._id}>
                <TableCell align="left">{user._id}</TableCell>
                <TableCell align="left">{user.username}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => userDelete(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default AdminUsersList;
