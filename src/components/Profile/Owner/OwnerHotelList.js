import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { getHotelListById } from '../../../ducks/lists/listAsync';
import { setInnerTabs, setHotelInfo } from '../../../ducks/lists/listSync';

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const HotelTableHead = props => {
  const { order, orderBy, onRequestSort } = props;
  const rows = [
    { id: 'name', label: 'Hotel Name' },
    { id: 'address', label: 'Hotel Address' },
    { id: 'frontDeskNum', label: 'Front Desk #' },
    { id: 'reservationNum', label: 'Reservation #' },
    { id: 'actions', label: 'Table Actions' }
  ];

  return (
    <TableHead>
      <TableRow>
        {rows.map(
          row => (
            <TableCell key={row.id} align='left' padding='default' sortDirection={orderBy === row.id ? order : false}>
              <TableSortLabel active={orderBy === row.id} direction={order} onClick={e => onRequestSort(e, row.id)}>
                {row.label}
              </TableSortLabel>
            </TableCell>
          ),
          this
        )}
      </TableRow>
    </TableHead>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
  }
}));

const OwnerHotelInfo = props => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const createData = () => {
    let arr = props.hotelList.map((e, i) => {
      return {
        id: e.hotel_id,
        name: e.name,
        address: e.address,
        frontDeskNum: e.front_desk_num,
        reservationNum: e.reservation_num
      };
    });
    return arr;
  };

  useEffect(() => {
    const arr = createData();
    setData(arr);
  }, [props.hotelList]);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleDelete = async id => {
    await axios.delete(`/api/hotel/${id}`);
    props.getHotelListById();
  };

  const handleUpdate = id => {
    props.hotelList.map((e, i) => {
      if (e.hotel_id === id) {
        props.setHotelInfo(e);
        props.setInnerTabs(2);
      }
    });
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby='tableTitle'>
          <HotelTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={data.length} />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                return (
                  <TableRow tabIndex={-1} key={n.id}>
                    <TableCell component='th' scope='row' padding='default'>
                      {n.name}
                    </TableCell>
                    <TableCell align='left' padding='default'>
                      {n.address}
                    </TableCell>
                    <TableCell align='left' padding='default'>
                      {n.frontDeskNum}
                    </TableCell>
                    <TableCell align='left' padding='default'>
                      {n.reservationNum}
                    </TableCell>
                    <TableCell align='left' padding='default'>
                      <IconButton onClick={() => handleDelete(n.id)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton onClick={() => handleUpdate(n.id)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page'
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page'
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    hotelList: state.listReducer.hotelList
  };
};

export default connect(
  mapStateToProps,
  { getHotelListById, setInnerTabs, setHotelInfo }
)(OwnerHotelInfo);
