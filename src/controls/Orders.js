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
import moment from 'moment'
import 'moment/locale/es';
// Generate Order Data
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
}));


// const momentRe = moment;

export default function Orders(props) {
  const showDetail = (data) => {
    props.showDetail(data);
    console.log(data)
  }
  const { serviceAll } = props;

  const esM = moment;
  esM().locale("es")
  // console.log(esM.format('LLLL'))

  // if(serviceAll.length > 0){
  //   console.log(serviceAll[0]["custom-attr"].date)
  // }
  const classes = useStyles();

  const activeService = (data) => {
    data.verified = true;
    props.saveService(data)
    console.log(data)


  }
  const deActiveService = (data) => {
    data.verified = false;
    props.saveService(data)
    console.log(data)


  }
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Servicios
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de creacion</TableCell>
            <TableCell>Titulo del servicio</TableCell>
            <TableCell>Tipo de servicio</TableCell>
            <TableCell>Publicado</TableCell>
            <TableCell>Acciones</TableCell>

            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {serviceAll.map((row) => (
            <TableRow key={row["custom-keys"]}>
              <TableCell>{row["custom-attr"].date ? esM(row["custom-attr"].date).format("LL")  : "" }</TableCell>
              <TableCell>{row["custom-attr"].nameService}</TableCell>
              <TableCell>{row["custom-attr"].mode}</TableCell>
              <TableCell>{(row.verified ? "Si" : "No")}</TableCell>
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
                        <ClearIcon></ClearIcon>
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



                </div>


              }</TableCell>
              {/* // <TableCell>{row.paymentMethod}</TableCell>
              // <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
