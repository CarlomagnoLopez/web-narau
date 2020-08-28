import * as React from 'react';
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
import { mainListItems, secondaryListItems } from './listItems';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import CompanyData from './CompanyData';
import ProDataBasic from './ProDataBasic';
import FollowingService from './FollowingService';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import UploadImages from '../../controls/ImageUpload.js';
import logo_login from '../../assets/logos-narau-04.png';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Tooltip from '@material-ui/core/Tooltip';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import UpdateIcon from '@material-ui/icons/Update';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import "../../css/stylesGlobalOverRide.css"
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const sizeTopBar = 95;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  logo: {
    margin: "1rem",
  },
  logoTopBar: {
    width: `${sizeTopBar}px`,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    height: "67px",
    backgroundColor: "#000",
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
  appBarShift: {
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
  itemAvatar: {
    margin: "0 auto"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  itemAlarm:{
    color:"#fff"
  },
  paperAlarm: {
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    color:"#fff",
    backgroundColor:"#f19d2d",
    borderRadius:"6rem"
  },
  fixedHeight: {
    height: 240,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    color: "#fff",
    borderColor: "white",
    backgroundColor: "#ff5722",
    borderStyle: "solid",
    borderWidth: "2px"
  },
  avatarHeader: {
    backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

    // backgroundImage: `url(${imageProfileDynamo})`,
    backgroundImage: `url(${localStorage.getItem("contentUserAvatarImg")})`,
    backgroundSize: "contain",
    // top: "-6rem",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#7074d6",
    width: theme.spacing(14),
    height: theme.spacing(14),
    border: "solid"
  },
  avatarHeaderShift: {
    backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

    // backgroundImage: `url(${imageProfileDynamo})`,
    backgroundImage: `url(${localStorage.getItem("contentUserAvatarImg")})`,
    backgroundSize: "contain",
    // top: "-6rem",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#7074d6",
    width: theme.spacing(5),
    height: theme.spacing(5),
    border: "solid"
  },
  buttonBurger: {
    color: "#fff"
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const avatarTitle = props.currentAccount.empresa.substring(0, 1).toUpperCase();
  const saveImage = () => {
    console.log("image")
    console.log(document.getElementsByClassName("uploadPicture")[0].src);

    props.saveImageProfile(document.getElementsByClassName("uploadPicture")[0].src)
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <img src={logo_login} className={classes.logoTopBar} />
          </div>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {/* Dashboard */}
          </Typography>
          <Tooltip title="Portafolio" aria-label="Portafolio">
            <IconButton color="inherit"
            // onClick={openDrawer} 
            >
              {/* <Badge badgeContent={dataBadge} color="secondary"> */}
              <BusinessCenterIcon fontSize="large"></BusinessCenterIcon>
              {/* </Badge> */}
            </IconButton>
          </Tooltip>
          <Tooltip title={props.currentAccount.empresa} aria-label={props.currentAccount.empresa}>
            <Avatar className={classes.orange} src={JSON.parse(localStorage.getItem("contentUser")).imgProfile}>{props.currentAccount.empresa.substring(0, 1)}</Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <img src={logo_login} className={classes.logoTopBar} />
          </div>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          </Typography>
          <Tooltip title="Portafolio" aria-label="Portafolio">
            <IconButton color="inherit" onClick={openDrawer} >
              <Badge badgeContent={dataBadge} color="secondary">
                <BusinessCenterIcon fontSize="large"></BusinessCenterIcon>
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title={currentAccount.empresa} aria-label={currentAccount.empresa}>
            <Avatar className={classes.orange}>{currentAccount.empresa.substring(0, 1)}</Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar> */}

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose} className={classes.buttonBurger}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {/* <Divider /> */}
        {/* <List>{mainListItems}</List>
        <Divider /> */}
        {/* <List>{secondaryListItems}</List> */}

        <List>
          <div>
            <ListItem>
              <ListItemAvatar className={classes.itemAvatar}>
                {/* <Avatar className={classes.orange}>{props.currentAccount.empresa.substring(0, 1)}</Avatar>
                 */}
                <Avatar
                  className={clsx(classes.avatarHeader, !open && classes.avatarHeaderShift)}
                  // className={classes.avatarHeader} 

                  classes={{
                    root: "rootAvatar"
                  }}>
                  {(JSON.parse(localStorage.getItem("contentUser")).imgProfile ? "" : <Typography gutterBottom variant="body2">
                    {avatarTitle}
                  </Typography>)}

                  <UploadImages saveImage={saveImage}></UploadImages>
                </Avatar>

              </ListItemAvatar>
            </ListItem>
            {/* <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.orange} src={JSON.parse(localStorage.getItem("contentUser")).imgProfile}>
                  <Typography gutterBottom variant="body2">
                    {avatarTitle}
                  </Typography>
                </Avatar>
              </ListItemAvatar>
            </ListItem> */}

            <ListSubheader inset>{props.currentAccount.empresa}</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary="Mi perfil" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary="Reservaciones" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TurnedInNotIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de deseos" />
            </ListItem>
            {/* <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Ajuste de cuenta" />
            </ListItem> */}
            <ListItem button onClick={props.closeSession}>
              <ListItemIcon >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Salir" />
            </ListItem>
          </div>
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography gutterBottom variant="h5">
            {"Mi perfil"}
          </Typography>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={classes.paperAlarm}>
                {/* <Orders /> */}
                <List>
                  <ListItem>
                    <ListItemIcon className={classes.itemAlarm}>
                      <UpdateIcon fontSize={"large"} />
                    </ListItemIcon>
                    <ListItemText primary="Completa tus datos de contacto para que tu perfil sea validado." />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              <Paper className={classes.paper}>
                <ProDataBasic requestUpdateAttribute={props.requestUpdateAttribute} currentAccount={props.currentAccount}/>
              </Paper>
            </Grid>
            {/* Recent ProDataBasic */}
            <Grid item xs={12} md={4} lg={9} >
              <Paper className={fixedHeightPaper}>
                <CompanyData requestUpdateAttribute={props.requestUpdateAttribute} currentAccount={props.currentAccount}/>
              </Paper>
              {/* <Divider />  */}
              <br></br>
              <Paper className={classes.paper}>
                <FollowingService />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}> */}
            {/* <Grid item xs={12} md={4} lg={9}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid> */}
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}
