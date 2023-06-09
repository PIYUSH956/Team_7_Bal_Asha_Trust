import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "../Css/ChildTable.css"
import ChildrenDetails from "./ChildrenDetails";
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: '#ffe2cb',
    color: "#ff8100",
    fontWeight: 1000,

  },
  hoverRow: {
    '&:hover': {
      backgroundColor: '#ff8100', // Change this to your desired hover color
      cursor: 'pointer',
      '& > *': {
        color: 'white', // Change this to your desired hover text color
      },
    },
  },

}));

const columns = [
  { id: 'caseNumber', label: 'Case Id', minWidth: 120 },
  { id: 'childName', label: 'Name', minWidth: 150 },
  {
    id: 'age',
    label: 'Age',
    minWidth: 120,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 200,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  }
  ,
  {
    id: 'district',
    label: 'District',
    minWidth: 200,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  }
  ,
  {
    id: 'shelter',
    label: 'Shelter',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
];

export default function PendingChildTable() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [flag,setFlag] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const [childData, setChildData] = useState([]);
  var state = useSelector((state) => ({ ...state }));



  useEffect(() => {

    async function fetchData() {
      try {
        if (state.user != null && state.user.role == "manager") {
          const data = await axios.post("http://localhost:4000/api/get-child-data", { status: "notAssigned" });

          setChildData(data.data);
        }

        else if (state.user != null && state.user.role == "root") {

          var data = await axios.post("http://localhost:4000/api/get-assign-case", { assignedWorkerID: state.user._id });
          data = data.data;
          

          var tempArr = [];
          console.log(data);
          for (const item of data) {
            tempArr.push(item.childID);
          }
          setChildData(tempArr);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }
    , []);


  const handleCellClick = (e) => {

    navigate("/profile/" + e._id);
    localStorage.setItem("temp-profile", JSON.stringify(e));

  }



  const handleSort = (e) => {
    console.log(e);
    const sorted = [...childData].sort((a, b) => {
      const aValue = a[e];
      const bValue = b[e];

      if (flag) {
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
      } else {
        if (aValue > bValue) return -1;
        if (aValue < bValue) return 1;
      }
    });

    setChildData(sorted);
    setFlag(!flag);
  }

  console.log(childData.length);




  return (
    <>
      <div className="table-content">
        <Paper sx={{ width: '90%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 580 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead   >
                <TableRow>
                  {columns.length != 0 && columns.map((column) => (
                    <TableCell
                      className={classes.tableHeader}
                      key={column.id}
                      align={column.align}
                      onClick={() => { handleSort(column.id) }}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {childData.length != 0 && childData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((val) => {
                    return (
                      <TableRow

                        className={classes.hoverRow}

                        role="checkbox" tabIndex={-1} key={val.id}>
                        {columns.length != 0 && columns.map((column) => {
                          const value = val[column.id];
                          console.log(column, val);
                          return (
                            <TableCell onClick={() => { handleCellClick(val) }} className={classes.hoverCell} key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })} */}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30, 50]}
            component="div"
            count={childData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}