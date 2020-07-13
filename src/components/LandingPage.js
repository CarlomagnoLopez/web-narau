import React from 'react';
import { connect } from "react-redux";
import { updateAttr } from "../redux/actions";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
// import { DatePicker } from "@material-ui/pickers";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import CardSideContent from "../controls/CardSideContent"
import CardSideContentInvoices from "../controls/CardSideContentInvoices"
import CardCourses from "../controls/CardCourses"
import CustomerValorations from "../components/CustomerValorations"
import CardAddCourses from "../controls/CardAddCourses"
import StaticCalendar from "../controls/StaticCalendar"
import SearchServicesLandingPage from "../controls/SearchServicesLandingPage"
import logo_login from '../assets/logos-narau-04.png';
import imgLanding1 from '../assets/imgLanding1.png';
import imgLanding2 from '../assets/imgLanding2.png';
import imgLanding3 from '../assets/imgLanding3.png';
import imgLanding4 from '../assets/imgLanding4.png';
import imgLanding_2 from '../assets/imgLanding_2.png';
import imgLanding_3 from '../assets/imgLanding_3.png';
import imgLanding_4 from '../assets/imgLanding_4.png';
import imgLanding_Black from '../assets/imgLanding_Black.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory
} from "react-router-dom";

import ProfileHeader from './ProfileHeader';
import InvoicesForm from './InvoicesForm';
import CreateCourse from './CreateCourse';
import LaunchCourse from './LaunchCourse';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
      {/* Your Website */}
      {/* </Link> */}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const sizeTopBar = 95;

const useStyles = makeStyles((theme) => ({
  disabledCalendar: {
    pointerEvents: "none"
  },
  btnEdit: {
    left: "78%"
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "#000",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logoTopBar: {
    width: `${sizeTopBar}px`,
  },
  appBarShift: {
    backgroundColor: "#000",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    fontWeight: "bolder !important",
    width: "60%"
  },
  subtitle: {
    color: "#fff",
    width: "80%"
    // fontWeight: "bold"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: {
    height: "64px",
    // backgroundColor: "#000"
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: "#fff"
  },
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  paperImg: {

  },
  paper: {
    textAlign: 'left',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: "transparent",
    color: "#fff",

  },
  paperSide: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperTitle: {
    padding: theme.spacing(2),
    display: 'flex',

    overflow: 'auto',
    flexDirection: 'column',
    height: "20vh"
  },
  imgTitle: {
    // backgroundImage:"url('../assets/imgex.jpg')",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  fixedHeight: {
    height: "auto",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    border: "solid 2px"
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: "transparent"
  },
  logo: {
    margin: "1rem",
  },
  rigthBar: {
    borderRadius: "1rem !important",
    // rounded:{
    //     borderRadius: "1rem !important",
    // }
  },
  stadistics: {
    width: "100%",
    padding: "10px",
    margin: "14px",
    borderRadius: "1rem"
  },
  calendarContainer: {
    width: "100%",
    // padding: "10px",
    // margin: "14px",
    // borderRadius: "1rem"
  },
  numbers: {
    fontWeight: "bolder"
  },
  numbersDown: {
    color: "rgba(0, 0, 0, 0.54)"
  },
  rootRigthBar: {
    borderRadius: "1rem"
  },
  titleCurses: {
    margin: theme.spacing(2),
    fontWeight: "bolder"
  },
  numbersCont: {
    paddingLeft: "40px",
    height: "175px",
    maxHeight: "175px",
    paddingTop: "40px",
  },
  imgServiceDos: {
    width: "100%",
    height: "100%"
  }


}));


export default function LandingPage(props) {

  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const onTypeFilter = (value) => {
    console.log(value)
  }

  // const handleSendRequestOne = () => {
    
  // }

  // const dataCourse = [];

  // props.serviceData.map((item) => {
  //     if (item.verified) {
  //         dataCourse.push(item["custom-attr"])
  //         return
  //     }
  // })


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <img src={logo_login} className={classes.logoTopBar} />
          </div>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {/* Narau */}
          </Typography>
          {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}> */}
          {/* Narau */}
          {/* </Typography> */}
          <Tooltip >
            <Button variant="contained" className="btnInitLandiing"
            onClick={props.handleSendRequestOne}
            >Iniciar sesión</Button>
          </Tooltip>
          <Tooltip >

            <Button variant="contained" className="btnRegisterLandiing"
            onClick={props.handleSendRequestOne}
            >Registrarse</Button>
          </Tooltip>


        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Box pt={4}>
          <div className="headLanding">
            <Container maxWidth="lg">
              <div className={classes.appBarSpacer} />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography component="h1" variant="h4" color="inherit" className={classes.title} >
                      {/* Narau */}
                      Innovación para los retos del presente
                    </Typography>
                    <Typography component="h1" variant="subtitle1" color="inherit" className={classes.subtitle} elevation={0}>
                      {/* Narau */}
                      Reinventa las estrategias de tu equipo o empresa con el apoyo de los mejores consultores.
                    </Typography>
                    <SearchServicesLandingPage
                    // dataFilter={dataCourse} onTypeFilter={onTypeFilter}
                    >

                    </SearchServicesLandingPage>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={0} ></Paper>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={0}>xs=12 sm=6</Paper>
                </Grid> */}
              </Grid>

            </Container>


          </div>


        </Box>
        <Box pt={4}>
          <Container maxWidth="md">
            <div className="secondLanding">
              <Typography component="h1" variant="h5" color="inherit" className="cssTitleSecond" >
                {/* Narau */}
                Apuesta por el prendizaje contínuo
              </Typography>
              <Typography component="h1" variant="subtitle2" color="inherit" className="cssTitleSecondTitle" >
                {/* Narau */}
                Conoce las capacitaciones mejor valoradas
              </Typography>

            </div>
          </Container>
          <Container maxWidth="lg">
            <Grid container spacing={8}>
              <Grid item xs={3}>
                <Paper className={classes.paperImg} elevation={0}>
                  <div className={classes.logo}>
                    <img src={imgLanding1} className={classes.imgService} onClick={props.handleSendRequestOne}/>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paperImg} elevation={0}>
                  <div className={classes.logo}>
                    <img src={imgLanding2} className={classes.imgService} onClick={props.handleSendRequestOne}/>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paperImg} elevation={0}>
                  <div className={classes.logo}>
                    <img src={imgLanding3} className={classes.imgService} onClick={props.handleSendRequestOne}/>
                  </div></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paperImg} elevation={0}>
                  <div className={classes.logo}>
                    <img src={imgLanding4} className={classes.imgService} onClick={props.handleSendRequestOne}/>
                  </div></Paper>
              </Grid>
            </Grid>

          </Container>

        </Box>


        <Box pt={4} className="secondLandingPage">
          <Container maxWidth="md">
            <div >
              <Typography component="h1" variant="h5" color="inherit" className="cssTitleSecond" >
                {/* Narau */}
                Categorías principales
              </Typography>
              <Typography component="h1" variant="subtitle2" color="inherit" className="cssTitleSecondTitle" >
                {/* Narau */}
                Diversidad de opciones para todo tipo de necesidades
              </Typography>

            </div>
          </Container>
          <br></br>
          <Container maxWidth="lg">
            <Grid container spacing={5} container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={3}>
                <Paper elevation={0}>
                  <div className={classes.logoDos}>
                    <img src={imgLanding_2} className={classes.imgServiceDos} onClick={props.handleSendRequestOne}/>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0}>
                  <div className={classes.logoDos}>
                    <img src={imgLanding_3} className={classes.imgServiceDos} onClick={props.handleSendRequestOne}/>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0}>
                  <div className={classes.logoDos}>
                    <img src={imgLanding_4} className={classes.imgServiceDos} onClick={props.handleSendRequestOne} />
                  </div></Paper>
              </Grid>


            </Grid>


          </Container>

        </Box>

        <Box pt={4} className="secondLandingPageTwo">
          {/* <Container maxWidth="md"> */}
            <div className="bgBlack">
              <img src={imgLanding_Black} />
            </div>
          {/* </Container> */}

        </Box>





        <Box pt={4}>
          {/* <Copyright /> */}
        </Box>
        {/* </Container> */}
      </main >
    </div >
  );
}

