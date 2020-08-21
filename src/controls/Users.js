import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import shadows from '@material-ui/core/styles/shadows';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import BlockIcon from '@material-ui/icons/Block';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import "../css/stylesGlobalOverRide.css"
import ContactsIcon from '@material-ui/icons/Contacts';

// Generate Order Data
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TablePagination from '@material-ui/core/TablePagination';
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  containerTable: {
    maxHeight: 700,
  },
}));



export default function Users(props) {
  const classes = useStyles();
  const showDetail = (data) => {
    props.showDetail(data);
    console.log(data)
  }


  // console.log(userAllTest)

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [userAllRender, setUserAllTemp] = React.useState();
  const [renderTable, setRenderTable] = React.useState(true)

  let userAllTest = renderTable ? props.usersList : userAllRender;
  const userAllTemp = props.usersList;
  // console.log(userAllTemp)

  const activeUser = (data) => {
    // data.verified = true;
    data["custom-attr"].verified = true;
    props.saveUser(data)
    console.log(data)


  }
  const deActiveUser = (data) => {
    // data.verified = false;
    data["custom-attr"].verified = false;
    props.saveUser(data)
    console.log(data)


  }

  const convertAsciated = (data) => {
    console.log(data)
    data["custom-attr"].isAsociate = true;
    props.saveUser(data)
    console.log(data)
  }

  const unConvertAsciated = (data) => {
    console.log(data)
    data["custom-attr"].isAsociate = false;
    props.saveUser(data)
    console.log(data)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const findOnTable = (value) => {
    let userTrial
    if (value.currentTarget.dataset.optionIndex) {
      userTrial = [userAllTemp[value.currentTarget.dataset.optionIndex]]
    } else {
      userTrial = userAllTemp;
    }

    // userAllTest = userTrial;
    setPage(0)
    setRenderTable(false)
    setUserAllTemp(userTrial)
    // console.log(userAll)
    // console.log(value)
  }
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Consultores
      </Typography>
      <Autocomplete
        id="combo-box-demo"
        options={userAllTest}
        onChange={findOnTable}
        fullWidth
        getOptionLabel={(option) => option["custom-attr"].firstName + " " + option["custom-attr"].lastName}
        // style={{ width: 300 }}
        renderInput={(params) => <TextField fullWidth {...params} label="Busqueda..." placeholder={"Busqueda..."} variant="outlined"
          classes={{
            root: "rootTextFieldAutoComplete"
          }}
        />
        }
      />
      <TableContainer component={Paper} className={classes.containerTable}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              {/* <TableCell>Activo</TableCell> */}
              {/* <TableCell>Publicado</TableCell>*/}
              <TableCell>Acciones</TableCell>

              {/* <TableCell align="right">Sale Amount</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>

            {/* {userAll.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => { */}

            {userAllTest.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row["custom-keys"]}>
                <TableCell>{row["custom-attr"].firstName + " " + row["custom-attr"].lastName}</TableCell>
                <TableCell>{row["custom-attr"].email}</TableCell>
                {/* <TableCell>{row["custom-attr"].verified ? "Si" : "No"}</TableCell> */}
                {/* <TableCell>{row["custom-attr"].mode}</TableCell>
              <TableCell>{(row.verified ? "Si" : "No")}</TableCell> */}
                <TableCell>{

                  <div>
                    <Tooltip title="Ver Detalle" aria-label="detail">
                      <IconButton color="inherit" onClick={() => { showDetail(row) }}>
                        {/* <IconButton color="inherit"> */}
                        <VisibilityIcon></VisibilityIcon>
                      </IconButton>
                    </Tooltip>

                    {row["custom-attr"].verified &&
                      <Tooltip title="Desactivar" aria-label="Desactivar" >
                        <IconButton color="inherit" onClick={() => { deActiveUser(row) }}>
                          {/* <IconButton color="inherit" > */}
                          <BlockIcon></BlockIcon>
                        </IconButton>
                      </Tooltip>
                    }
                    {!row["custom-attr"].verified &&
                      <Tooltip title="Activar" aria-label="Activar">
                        {/* <IconButton color="inherit" > */}
                        <IconButton color="inherit" onClick={() => { activeUser(row) }}>
                          <CheckIcon></CheckIcon>
                        </IconButton>
                      </Tooltip>
                    }

                    {!row["custom-attr"].isAsociate &&
                      <Tooltip title="Ser Asociado" aria-label="Desactivar" >
                        <IconButton color="inherit"
                          onClick={() => { convertAsciated(row) }}
                        >
                          <PersonAddIcon></PersonAddIcon>
                        </IconButton>
                      </Tooltip>
                    }

                    {row["custom-attr"].isAsociate &&
                      <Tooltip title="No ser Asociado" aria-label="Desactivar" >
                        <IconButton color="inherit"
                          onClick={() => { unConvertAsciated(row) }}
                        >
                          {/* <IconButton color="inherit" > */}
                          <PersonAddDisabledIcon></PersonAddDisabledIcon>
                        </IconButton>
                      </Tooltip>
                    }





                  </div>


                }</TableCell>
                {/* // <TableCell>{row.paymentMethod}</TableCell>
              // <TableCell align="right">{row.amount}</TableCell> */}
              </TableRow>


            ))}
            {/* {userAll.map((row) => (
                ))} */}
          </TableBody>

        </Table>

      </TableContainer>
      <TablePagination
        labelRowsPerPage={"Usuarios por pagina:"}
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={userAllTest.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
