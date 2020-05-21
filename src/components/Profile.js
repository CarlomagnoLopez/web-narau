import React from 'react';
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
// import { mainListItems, secondaryListItems } from 'listItems';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
// import { DatePicker } from "@material-ui/pickers";

import CardSideContent from "../controls/CardSideContent"
import CardSideContentInvoices from "../controls/CardSideContentInvoices"
import CardCourses from "../controls/CardCourses"
import CardAddCourses from "../controls/CardAddCourses"
import StaticCalendar from "../controls/StaticCalendar"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams,
    useHistory
} from "react-router-dom";

import { mainListItems, secondaryListItems } from '../controls/listItems';
import ProfileHeader from './ProfileHeader';
import InvoicesForm from './InvoicesForm';
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

const useStyles = makeStyles((theme) => ({
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
    appBarSpacer: {
        height: "64px"
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
    paper: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
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
    },
    divider: {
        margin: theme.spacing(2, 0),
        backgroundColor: "transparent"
    },
}));

export default function Profile(props) {
    const { logOut } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openInvoices, setOpenInvoices] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    let history = useHistory();
    const closeSession = () => {
        // logOut()4
        localStorage.setItem("active", "false");
        history.push("/");
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaperSide = clsx(classes.paperSide, classes.fixedHeight);


    const openFormCourse = () => {
        console.log("abriendo form")
    }

    const dataCourse = [
        {
            name: "Calidad y gestion de recursos",
            type: "Curos"
        },
        {
            name: "Diseño y actualizacion paramétrica",
            type: "Taller"
        }, {
            name: "Ciencia de datos",
            type: "Seminario"
        }
    ]

    const showFormInvoices = () => {
        setOpenInvoices(true)
        // console.log("show")
    }
    const closeFormInvoices = () => {
        setOpenInvoices(false)
        // console.log("show")
    }

    
    // const editCard = (isEdit) => {
    //     if (isEdit) {
    //         // setTypeCard(true);
    //     } else {
    //         // setTypeCard(false);
    //     }
    // }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" classes className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    {/* <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Narau
                    </Typography>
                    <Avatar className={classes.orange}>N</Avatar>
                    <Tooltip title="LogOut" aria-label="LogOut">
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon></NotificationsIcon>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LogOut" aria-label="LogOut">
                        <IconButton color="inherit" onClick={closeSession}>
                            {/* <Badge badgeContent={4} color="secondary"> */}
                            <ExitToAppIcon />
                            {/* </Badge> */}
                        </IconButton>
                    </Tooltip>


                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={0}>
                                <ProfileHeader></ProfileHeader>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Container maxWidth="lg" className={classes.container}>

                        {!openInvoices &&
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} lg={3}
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="center">
                                    <Paper spacing={3} elevation={2}>
                                        <CardSideContent
                                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                            title={"Sobre mi."}
                                        // action={editCard}
                                        // action={}
                                        ></CardSideContent>
                                        {/* </Paper> */}
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                            title={"Experiencia."}
                                        ></CardSideContent>
                                        {/* </Paper> */}
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                            title={"Entrenamientos."}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                            title={"Clientes."}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContentInvoices showFormInvoices={showFormInvoices}
                                            // text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                            title={"Facturacion"}
                                        ></CardSideContentInvoices>
                                    </Paper>
                                </Grid>

                                <Grid
                                    item xs={12} md={8} lg={9} spacing={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start">
                                    <Grid container item xs={12} spacing={3}>
                                        {dataCourse.map((infoCourse) => (
                                            // <div
                                            <CardCourses
                                                infoCourse={infoCourse}>
                                            </CardCourses>

                                            // </div>


                                        ))}
                                        <CardAddCourses openForm={openFormCourse}
                                        >
                                        </CardAddCourses>

                                        <Container maxWidth="lg" className={classes.container} >
                                            {/* <Paper className={fixedHeightPaper} > */}
                                            <Grid item xs={12} container
                                                direction="row"
                                                justify="center"
                                                alignItems="flex-start">

                                                <StaticCalendar></StaticCalendar>
                                            </Grid>

                                            {/* </Paper> */}

                                        </Container>

                                    </Grid>

                                    {/* <Grid container item xs={12} spacing={3}>

                                    <Container maxWidth="lg" className={classes.container} >
                                        <Grid item xs={12} container
                                            direction="row"
                                            justify="center"
                                            alignItems="flex-start">

                                            <StaticCalendar></StaticCalendar>
                                        </Grid>


                                    </Container>

                                </Grid> */}
                                </Grid>
                            </Grid>

                        }
                        {openInvoices &&
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={3}>
                                    {/* <div>invoices</div> */}
                                    <InvoicesForm  closeFormInvoices={closeFormInvoices}></InvoicesForm>
                                </Grid>

                            </Container>
                        }





                    </Container>

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div >
    );
}
