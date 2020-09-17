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
import SimpleRating from "../controls/SimpleRating"
// import LaunchCourse from './LaunchCourse';

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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import presentialImg from '../assets/narau-04-t.png';
import onlineImg from '../assets/narau-05-t.png';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory
} from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ProfileHeader from './ProfileHeader';
import CardLandingChallenge from './CardLandingChallenge';
import InvoicesForm from './InvoicesForm';
import CreateCourse from './CreateCourse';
import LaunchCourse from './LaunchCourse';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import Rating from '@material-ui/lab/Rating';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Narau'}
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
  image: {
    backgroundImage: 'url(https://rescss.s3.amazonaws.com/back-log.png)',
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundColor: "#f19d2d",
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    // object-fit: cover;
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
    width: "100%"
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
  paperShowService: {
    width: "280px",
    height: "380px"
  },
  rootCard: {
    width: "100%",
    height: "100%"
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

  const [serviceAll, setServiceAll] = React.useState(props.serviceAll)
  const [consultantAll, setConsultantAll] = React.useState(props.consultantAll)
  const [bestFourChallenge, setBestFourChallenge] = React.useState(props.bestFourChallenge)
  const [servicesWithOwner, setServicesWithOwner] = React.useState(props.servicesWithOwner)
  const [openDetails, setoOpenDetails] = React.useState(false);
  const [dataService, setDataService] = React.useState();
  const [byUser, setByUser] = React.useState();
  const [dataServiceId, setDataServiceId] = React.useState();
  const [patternSelectedService, setPatternSelectedService] = React.useState([]);

  const renderDataToCard = (bestItem, index) => {
    let itemCard = {};
    if (bestFourChallenge.length !== patternSelectedService.length) {
      patternSelectedService[index] = (Math.floor(Math.random() * Math.floor(bestItem.services.length)));
    }
    itemCard.itemSelected = bestItem.services[patternSelectedService[index]];
    itemCard.imageService = itemCard.itemSelected["custom-attr"].img ? "https://imgcursos.s3.amazonaws.com/" + itemCard.itemSelected["custom-attr"].img : "../assets/imgex.jpg"
    itemCard.coloImg = "colorImg" + itemCard.itemSelected["custom-attr"].serviceType;
    itemCard.mode = itemCard.itemSelected["custom-attr"].mode;
    itemCard.classNameService = "backNameService nameServiceCard" + itemCard.itemSelected["custom-attr"].serviceType;
    itemCard.messageService = "";
    switch (itemCard.itemSelected["custom-attr"].serviceType) {
      case "taller":
        itemCard.messageService = "Taller"
        break;
      case "asesoria":
        itemCard.messageService = "Asesoría"
        break;
      case "conferencia":
        itemCard.messageService = "Conferencia"
        break;
      case "asesoriapersonal":
        itemCard.messageService = "Asesoría personalizada"
        break;
      case "webinar":
        itemCard.messageService = "Aprendizaje online"
        break;
      case "diplomado":
        itemCard.messageService = "Diplomado"
        break;
    }


    return itemCard
  }

  const openDetailCourse = (allData, selectedData) => {
    // 

    console.log(allData, selectedData)
    console.log("click on open details")
    setDataService(selectedData.itemSelected["custom-attr"]);
    setDataServiceId(selectedData.itemSelected["custom-keys"]);
    setByUser(allData.userData);



    setoOpenDetails(true)

  }

  const handleCloseDetail = () => {
    setTimeout(() => {
      setoOpenDetails(false)

    }, 300);
  }

  const currentColorService = () => {

    let color = "#fc5000";
    switch (dataService.serviceType) {
      case "taller":
        color = "#fc5000"
        break;
      case "conferencia":
        color = "#7175d8"
        break
      case "asesoria":
        color = "#ff931e"
        break
      case "asesoriapersonal":
        color = "#2e3059"
        break;
      case "webinar":
        color = "#0186cb"
        break;
      case "diplomado":
        color = "#8627d6"
        break;
      default:
    }
    localStorage.setItem("colorDefaul", color)
    return color
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <img src={logo_login} className={classes.logoTopBar} />
          </div>
          {isMobile &&
            <div className="barButtonLanding">
              <Tooltip >
                <Button variant="contained" className="btnInitLandiingMobile"
                  onClick={props.handleSendRequestOne}
                ><AssignmentIndIcon /></Button>
              </Tooltip>
              <Tooltip >

                <Button variant="contained" className="btnRegisterLandiingMobile"
                  onClick={props.handleSendRequestOne}
                ><PersonAddIcon /></Button>
              </Tooltip>
            </div>
          }
          {!isMobile &&
            <div className="barButtonLanding">
              <Tooltip >
                <Button variant="contained" className="btnInitLandiing"
                  onClick={props.handleSendRequestOne}
                ><AssignmentIndIcon /><span>Iniciar sesión</span> </Button>
              </Tooltip>
              <Tooltip >

                <Button variant="contained" className="btnRegisterLandiing"
                  onClick={props.handleSendRequestOne}
                > <PersonAddIcon /><span>Registrarse</span></Button>
              </Tooltip>
            </div>
          }




        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Box pt={4}>
          <div className="headLanding">
            <Container maxWidth="lg">
              <div className={classes.appBarSpacer} />
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography component="h1" variant="h4" color="inherit" className={classes.title} >
                      Somos la red de desarrollo de talentos más grande de LATAM
                    </Typography>
                    <Typography component="h1" variant="subtitle1" color="inherit" className={classes.subtitle} elevation={0}>
                    </Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <SearchServicesLandingPage
                    // dataFilter={dataCourse} onTypeFilter={onTypeFilter}
                    >

                    </SearchServicesLandingPage>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Box>

        <Box pt={4}>
          <Container maxWidth="lg">
            <div className="secondLanding">
              <Typography component="h1" variant="h5" color="inherit" className="cssTitleSecond" >
                {/* Narau */}
                Desarrolla tu talento con expertos
              </Typography>
              <Typography component="h1" variant="subtitle2" color="inherit" className="cssTitleSecondTitle" >
                {/* Narau */}
                Conoce los servicios mejor valorados
              </Typography>
              <br></br>
              <br></br>
            </div>
            <Grid container spacing={4}>
              {bestFourChallenge.map((bestItem, index) => {
                let itemCard = renderDataToCard(bestItem, index);
                return (
                  <CardLandingChallenge
                    bestItem={bestItem}
                    itemCard={itemCard}
                    index={index}
                    openDetailCourse={openDetailCourse}
                  ></CardLandingChallenge>
                )
              })}
            </Grid>
          </Container>
        </Box>

        <br>
        </br>
        <br>
        </br>
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
                    <img src={imgLanding_2} className={classes.imgServiceDos} onClick={props.handleSendRequestOne} />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0}>
                  <div className={classes.logoDos}>
                    <img src={imgLanding_3} className={classes.imgServiceDos} onClick={props.handleSendRequestOne} />
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
          <Copyright />
        </Box>


        {/* hide components */}
        {openDetails &&
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <LaunchCourse
                // addToWishList={addToWishList}
                addToWishList={""}
                showReservedService={""}
                colorDefault={currentColorService()}
                byUser={byUser}
                closeForm={handleCloseDetail}
                currentDataService={dataService}
                currentDataSortKey={dataServiceId}
              ></LaunchCourse>
            </Grid>
          </Container>
        }
      </main >
    </div >
  );
}

