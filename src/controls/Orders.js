import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import BlockIcon from '@material-ui/icons/Block';
import ShareIcon from '@material-ui/icons/Share';
import TableContainer from '@material-ui/core/TableContainer';
import moment from 'moment'
import 'moment/locale/es';
import HttpsIcon from '@material-ui/icons/Https';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
// Generate Order Data
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
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
  widthTable: {
    width: "30%"
  }
}));


// const momentRe = moment;

export default function Orders(props) {
  const showDetail = (data) => {
    props.showDetail(data);
    console.log(data)
  }


  const esM = moment;
  esM().locale("es")
  // console.log(esM.format('LLLL'))

  // if(serviceAll.length > 0){
  //   console.log(serviceAll[0]["custom-attr"].date)
  // }
  const classes = useStyles();
  // const { serviceAll } = props;

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const [serviceAllRender, setServiceAllTemp] = React.useState();
  const [renderTable, setRenderTable] = React.useState(true)

  let serviceAllTest = renderTable ? props.serviceAll : serviceAllRender;
  const serviceAllTemp = props.serviceAll;

  const activeService = (data) => {
    data.verified = true;
    data.verifiyng =  true;
    props.saveService(data)
    console.log(data)


  }
  const deActiveService = (data) => {
    data.verified = false;
    data.verifiyng =  true;
    props.saveService(data)
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
      let indexService = "";
      let currentSelected = value.currentTarget.innerText.split(" - ")[1];
      serviceAllTemp.filter((item, index) => {
        if (item["custom-keys"].split(" | ")[2] === currentSelected) {
          indexService = index;
          // console.log(index)
          //         return item
        }
      })

      userTrial = [serviceAllTemp[indexService]]
    } else {
      userTrial = serviceAllTemp;
    }

    // userAllTest = userTrial;
    setPage(0)
    setRenderTable(false)
    setServiceAllTemp(userTrial)
    // console.log(userAll)
    // console.log(value)
  }

  const changingSize = (value) => {
    console.log(value)
  }

  const openUserList = (row) => {
    // console.log("si")
    props.currentService(row)
    props.openUserList(true)
  }

  const openAssignList = (row) => {
    // console.log("si")
    props.currentService(row)
    props.openAssignList(true)
  }

  const createItem = (option) => {
    return (<TextField
      id="filled-secondary"
      label="Filled secondary"
      variant="filled"
      color="secondary"
    />)
  }
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Servicios
    </Typography>
      <Autocomplete
        id="combo-box-demo"
        options={serviceAllTest}
        onChange={findOnTable}
        fullWidth
        // id={}
        // getOptionSelected={(option) => "Nombre: " +option["custom-attr"].nameService + ". Email: " +option["custom-keys"].split(" | ")[1]}
        getOptionLabel={(option) => "Nombre: " + option["custom-attr"].nameService + ". Email: " + option["custom-keys"].split(" | ")[1]}
        // renderInput={(option) => (
        //   <React.Fragment>
        //   <ListItem>
        //     <ListItemAvatar>
        //       <Avatar>
        //         <ImageIcon />
        //       </Avatar>
        //     </ListItemAvatar>
        //     <ListItemText primary={option["custom-attr"].nameService} secondary={option["custom-keys"].split(" | ")[1]} />
        //   </ListItem>
        // </React.Fragment>
        // )}
        renderOption={(option) => (
          <React.Fragment>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderSharedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={option["custom-attr"].nameService} secondary={`${option["custom-keys"].split(" | ")[1]} - ${option["custom-keys"].split(" | ")[2]}`} />
            </ListItem>
          </React.Fragment>
        )}
        // (


        // option["custom-attr"].nameService + " " + option["custom-keys"].split(" | ")[1]
        // <List className={classes.root}>
        //   <ListItem>
        //     <ListItemAvatar>
        //       <Avatar>
        //         <ImageIcon />
        //       </Avatar>
        //     </ListItemAvatar>
        //     <ListItemText primary={option["custom-attr"].nameService} secondary={option["custom-keys"].split(" | ")[1]} />
        //   </ListItem>
        // </List>
        // )}
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
              {/* <TableCell>Fecha de creacion</TableCell> */}
              <TableCell className={classes.widthTable}>Titulo del servicio</TableCell>
              <TableCell >Consultor</TableCell>
              <TableCell align="center">Modalidad</TableCell>
              <TableCell align="center">Compartido</TableCell>
              <TableCell align="center">Acciones</TableCell>

              {/* <TableCell align="right">Sale Amount</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceAllTest.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row["custom-keys"]}>
                {/* <TableCell>{row["custom-attr"].date ? esM(row["custom-attr"].date).format("LL") : ""}</TableCell> */}
                <TableCell>{row["custom-attr"].nameService}</TableCell>
                <TableCell>{row["custom-keys"].split(" | ")[1]}</TableCell>
                <TableCell align="center">{row["custom-attr"].mode}</TableCell>
                <TableCell align="center">{(row["custom-attr"].shared ? (
                  <Tooltip title="Vincular consultor" aria-label="Vincular">
                    <IconButton color="inherit"
                      onClick={() => { openUserList(row) }}
                    >
                      <ShareIcon></ShareIcon>
                    </IconButton>

                  </Tooltip>
                ) :

                  (<IconButton color="inherit" disabled={false} onClick={() => { openUserList(row) }}>
                    <HttpsIcon ></HttpsIcon>
                  </IconButton>)
                )}</TableCell>
                <TableCell>{

                  <div>
                    <Tooltip title="Ver Detalle" aria-label="detail">
                      <IconButton color="inherit" onClick={() => { showDetail(row) }}>
                        <VisibilityIcon></VisibilityIcon>
                      </IconButton>
                    </Tooltip>

                    {row.verified &&
                      <Tooltip title="Desactivar" aria-label="Desactivar" >
                        <IconButton color="inherit" onClick={() => { deActiveService(row) }}>
                          <BlockIcon></BlockIcon>
                        </IconButton>
                      </Tooltip>
                    }
                    {!row.verified &&
                      <Tooltip title="Activar" aria-label="Activar">
                        <IconButton color="inherit" onClick={() => { activeService(row) }}>
                          <CheckIcon></CheckIcon>
                        </IconButton>
                      </Tooltip>
                    }
                    {/* <Tooltip title="Activar" aria-label="Borrar">
                      <IconButton aria-label="settings" className={classes.btnIcon} onClick={props.deleteService}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip> */}

                    {/* {row["custom-attr"].shared && */}
                    <Tooltip title="Asignar consultor" aria-label="Vincular" disabled={row["custom-attr"].shared ? true : false}>
                      <IconButton color="inherit"
                        onClick={() => { openAssignList(row) }}
                      >
                        <GroupAddIcon></GroupAddIcon>
                      </IconButton>
                    </Tooltip>
                    {/* } */}



                  </div>


                }</TableCell>
                {/* // <TableCell>{row.paymentMethod}</TableCell>
              // <TableCell align="right">{row.amount}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      <TablePagination
        // onChangeRowsPerPage={changingSize}
        labelRowsPerPage={"Servicios por pagina:"}
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={serviceAllTest.length}
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
    </React.Fragment >
  );
}
