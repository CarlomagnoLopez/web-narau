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
import Button from '@material-ui/core/Button';

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
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
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
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderRadius: "1.5rem"
    },
    avatarCustomer: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginRight: "1rem"
    },
    nameServieClass: {
        color: " #ff931e",
        // textTransform: "uppercase",
        display: 'inline',
        fontWeight: "bolder"
    },
    textNameBy: {
        fontWeight: "bold"
    },
    commentBy: {
        color: "#b3b3b3"
    },
    en: {
        display: 'inline',
    },
    commentBy: {
        color: "#b3b3b3"
    },
    textNameBy: {
        fontWeight: "bold"
    },
    itemAlarm: {
        color: "#fff"
    },
    paperAlarm: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        color: "#fff",
        backgroundColor: "#f19d2d",
        borderRadius: "6rem"
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
    },
    gridHistoty: {
        width: "100%"
    },

}));

export default function History(props) {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(true);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };
    // const avatarTitle = props.currentAccount.empresa.substring(0, 1).toUpperCase();
    // const saveImage = () => {
    //     console.log("image")
    //     console.log(document.getElementsByClassName("uploadPicture")[0].src);

    //     props.saveImageProfile(document.getElementsByClassName("uploadPicture")[0].src)
    // }
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (

        <Grid
            item xs={12} md={8} lg={9} spacing={3}
            container
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Grid container item xs={12} spacing={3}>
                <Grid className={classes.gridHistoty}
                >
                    <Typography
                        variant="h5"
                        color="textPrimary"
                    >
                        Historial de servicios
                        </Typography>
                    <br></br>

                    <Paper className={classes.paper} elevation={8}>
                        <List className={classes.rootList}>

                            {props.historyService && props.historyService.map((item) => (
                                <div>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatarCustomer} src={item.userProvide.imgProfile}>
                                                {item.userProvide.firstName.substring(0, 1).toUpperCase()}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <Typography
                                                        variant="body2"
                                                        className={classes.textNameBy}
                                                        color="textPrimary"
                                                    >
                                                        <span className={classes.commentBy}>Instructor:</span>
                                                        {" " + item.userProvide.firstName + " " + item.userProvide.lastName}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <p>
                                                        <Typography variant="body2" className={classes.nameServieClass}>
                                                            <span className={classes.commentBy}>{"Servicio: "}</span>  {item.serviceProvide.nameService}
                                                        </Typography>
                                                    </p>
                                                    <Button variant="contained" className="btnNext"
                                                        onClick={() => { props.showEvaluation(item) }}

                                                    >Evaluar servicio</Button>

                                                </React.Fragment>
                                            }
                                        />

                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            ))}
                            {!props.historyService &&
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        {/* <Avatar className={classes.avatarCustomer} src={item.userProvide.imgProfile}>
                                            {item.userProvide.firstName.substring(0, 1).toUpperCase()}
                                        </Avatar> */}
                                        <HourglassEmptyIcon fontSize={"large"}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography
                                                    variant="body2"
                                                    className={classes.textNameBy}
                                                    color="textPrimary"
                                                >
                                                    {/* <span className={classes.commentBy}>:</span>
                     */}
                     Todavia no has recibido nuestros servicios. Te estamos esperando

                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <p>
                                                    <Typography variant="body2" className={classes.nameServieClass}>
                                                        Intentalo, no te quedes con las ganas.
                    </Typography>
                                                </p>


                                            </React.Fragment>
                                        }
                                    />

                                </ListItem>



                            }


                        </List>

                    </Paper>
                </Grid>
            </Grid>
        </Grid>


    );
}
