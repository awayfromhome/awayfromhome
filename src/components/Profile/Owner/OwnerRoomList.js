import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';

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
    { id: 'reservationNum', label: 'Reservation #' }
  ];

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='default'>Select</TableCell>
        {rows.map(
          row => (
            <TableCell key={row.id} align='left' padding='none' sortDirection={orderBy === row.id ? order : false}>
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

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
}));

const HotelTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  if (numSelected > 0) {
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0
        })}>
        <div className={classes.title}>
          <Typography color='inherit' variant='subtitle1'>
            {numSelected} selected
          </Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          <Tooltip title='Delete'>
            <IconButton aria-label='Delete'>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    );
  } else {
    return null;
  }
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
  const [selected, setSelected] = useState([]);
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

  function handleClick(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const isSelected = id => selected.indexOf(id) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <HotelTableToolbar numSelected={selected.length} />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby='tableTitle'>
          <HotelTableHead numSelected={selected.length} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={data.length} />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const isItemSelected = isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, n.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isItemSelected}>
                    <TableCell padding='checkbox'>
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    <TableCell component='th' scope='row' padding='none'>
                      {n.name}
                    </TableCell>
                    <TableCell align='left' padding='none'>
                      {n.address}
                    </TableCell>
                    <TableCell align='left' padding='none'>
                      {n.frontDeskNum}
                    </TableCell>
                    <TableCell align='left' padding='none'>
                      {n.reservationNum}
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
    hotelList: state.hotelList
  };
};

export default connect(mapStateToProps)(OwnerHotelInfo);