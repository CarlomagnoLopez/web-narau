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
import logo_login from '../assets/logos-narau-04.png';
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
        backgroundColor: "#000"
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
    }
}));


export default function ProfileConsultant(props) {
    const { logOut } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openInvoices, setOpenInvoices] = React.useState(false);
    const [openLaunchCourse, setOpenLaunchCourse] = React.useState(false);
    const [openCreateCourse, setOpenCreateCourse] = React.useState(false);
    const [dataService, setDataService] = React.useState();
    const [dataSortKey, setDataSortKey] = React.useState();
    const [servicesVerified, setServicesVerified] = React.useState(0);
    const [servicesUnverified, setServicesUnverified] = React.useState(0);
    const [disableCal, setDisableCal] = React.useState("disabledCalendar");
    const [dateDis, setDateDis] = React.useState([])
    const [flCont, setFlCont] = React.useState(0)
    const [lastDates, setLastDates] = React.useState(props.dateDisposition)
    const [showCustomerValorations, setShowCustomerValorations] = React.useState(false)

    const { currentAccount } = props;

    let { aboutMe, training, experience, customers } = currentAccount;
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


    // const openFormCourse = () => {
    //     console.log("abriendo form")
    // }

    console.log(props.serviceData);


    const dataCourse = props.serviceData.map((item) => { return item["custom-attr"] })
    const dataCourseId = props.serviceData.map((item) => { return item["custom-keys"].split(" | ")[2] })


    const showFormInvoices = () => {
        setOpenInvoices(true)
        // console.log("show")
    }
    const closeFormInvoices = (data) => {

        let payload = {
            "type": "invoice",
            "email": JSON.parse(localStorage.getItem("contentUser")).email,
            "attr": data
        }
        console.log(payload)

        props.refreshInvoiceData(payload)
        setOpenInvoices(false)
        // console.log("show")
    }

    const closeInvoices = (data) => {

        // let payload = {
        //     "type": "invoice",
        //     "email": JSON.parse(localStorage.getItem("contentUser")).email,
        //     "attr": data
        // }
        // console.log(payload)

        // props.refreshInvoiceData(payload)
        setOpenInvoices(false)
        // console.log("show")
    }

    const createCourse = () => {

        setOpenCreateCourse(true)


    }

    const showFormCourse = (data, sortKey) => {
        // if(data)
        if (data) {
            props.refreshDataTopics(data.topics);
            setDataService(data);
            setDataSortKey(sortKey);
        }
        setOpenLaunchCourse(true)
        // console.log("show")
    }
    const closeFormCourse = (data, sk) => {
        console.log(data)
        let payload = {
            "pk": localStorage.getItem("partitionKey"),
            "email": JSON.parse(localStorage.getItem("contentUser")).email,
            "attr": data
        }
        if (sk) {
            payload = {
                "pk": localStorage.getItem("partitionKey"),
                "email": JSON.parse(localStorage.getItem("contentUser")).email,
                "attr": data,
                "sk": sk
            }
        }

        props.saveService(payload)
        setOpenLaunchCourse(false)
        // console.log("show")
    }

    const closeForm = (data) => {
        setOpenLaunchCourse(false)
        // console.log("show")
    }

    const closeCreateCourse = () => {
        setOpenCreateCourse(false)

    }

    const closeCreateCourseEdit = () => {
        setOpenLaunchCourse(false)

    }


    // const updateAttribute = (data) => {
    //     aboutMe = data;
    // }

    const requestUpdateAttribute = (attr, name) => {

        console.log(attr)
        console.log(props)
        let data = {
            "role": props.currentAccount.role,
            "email": props.currentAccount.email,
            "updateAttribute": {
                "name": name,
                "value": attr
            }

        }
        props.refreshBasicData(data);
        // console.log(data)


    }


    const getServiceunVerified = () => {

        // let serviceVerified = 0;
        let serviceUnverified = 0;

        props.serviceData.map((item) => {
            if (!item.verified) {
                serviceUnverified = serviceUnverified + 1;
            }
            // else {
            //     serviceUnverified = serviceUnverified + 1;
            // }
        })

        // if (serviceVerified <= 9) {
        //     serviceVerified = "0" + serviceVerified;
        // }
        if (serviceUnverified <= 9) {
            serviceUnverified = "0" + serviceUnverified;
        }

        return serviceUnverified

        // setServicesVerified(serviceVerified)
        // setServicesUnverified(serviceUnverified)
    }
    const enableCalendar = () => {
        setDisableCal("enableCal")
    }
    const disbleCalendar = () => {
        setDisableCal("disabledCalendar")
        props.saveDispositions(dateDis)
    }

    const disbleCalendarCancel = () => {
        setDisableCal("disabledCalendar")
        setLastDates(props.dateDisposition)
        let cont = flCont + 1;
        setFlCont(cont)
        // props.saveDispositions(props.dateDisposition)
    }



    const getServiceVerified = () => {

        let serviceVerified = 0;
        // let serviceUnverified = 0;

        props.serviceData.map((item) => {
            if (item.verified) {
                serviceVerified = serviceVerified + 1;
            }
            // else {
            //     serviceUnverified = serviceUnverified + 1;
            // }
        })

        if (serviceVerified <= 9) {
            serviceVerified = "0" + serviceVerified;
        }
        // if (serviceUnverified <= 9) {
        //     serviceUnverified = "0" + serviceUnverified;
        // }

        return serviceVerified

        // setServicesVerified(serviceVerified)
        // setServicesUnverified(serviceUnverified)
    }


    const saveDispositions = (dates) => {
        // dateDis.push(dates)
        setDateDis(dates)
        // console.log(dateDis)
        // props.saveDispositions(dateDis)

    }

    const openCustomerValorations = () => {
        // console.log("open raiting")
        setShowCustomerValorations(true)

    }


    // getStadistics()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo}>
                        <img src={logo_login} className={classes.logoTopBar} />
                    </div>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {/* Narau */}
                    </Typography>
                    <Tooltip title={currentAccount.firstName} aria-label={currentAccount.firstName}>
                        <Avatar className={classes.orange}>{currentAccount.firstName.substring(0, 1).toUpperCase()}</Avatar>
                    </Tooltip>
                    {/* <Tooltip title="LogOut" aria-label="LogOut">
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon></NotificationsIcon>
                            </Badge>
                        </IconButton>
                    </Tooltip> */}
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
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={0}>
                            <ProfileHeader openCustomerValorations={openCustomerValorations} saveImageProfile={props.saveImageProfile} currentAccount={currentAccount} invoiceData={props.invoiceData} ></ProfileHeader>
                        </Paper>
                    </Grid>
                </Grid>

                {/* <Container maxWidth="xl" className={classes.container} > */}

                <Container maxWidth="lg" className={classes.container}>

                    {!openInvoices && !openLaunchCourse &&
                        <Paper spacing={3} elevation={0}>
                            <Grid container spacing={3} className={classes.rootRigthBar}>
                                <Grid item xs={12} md={4} lg={3} container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="center">
                                    <Paper spacing={3} elevation={6} classes={{ root: "rounded" }}>
                                        <CardSideContent
                                            text={aboutMe}
                                            referenceRequest={"aboutMe"}
                                            title={"Sobre mi."}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        {/* </Paper> */}
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={experience}
                                            referenceRequest={"experience"}
                                            title={"Experiencia"}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        {/* </Paper> */}
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={training}
                                            referenceRequest={"training"}
                                            title={"Entrenamiento"}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={customers}
                                            referenceRequest={"customers"}
                                            title={"Clientes"}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContentInvoices showFormInvoices={showFormInvoices}
                                            // text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                            title={"Facturacion"}
                                        ></CardSideContentInvoices>
                                    </Paper>
                                </Grid>
                                {/* <Grid
                                item xs={12} md={8} lg={9} spacing={3}
                                container
                                direction="row"
                                justify="center"
                                alignItems="flex-start">
                             
                            </Grid> */}

                                <Grid
                                    item xs={12} md={8} lg={9} spacing={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start">

                                    <Grid container item xs={12} spacing={3}>
                                        <Paper className={classes.stadistics} elevation={6}>
                                            <Grid
                                                container
                                                direction="row"
                                                justify="space-around"
                                                alignItems="stretch"
                                            >
                                                {/* <Grid item xs={1} >
                                                </Grid> */}
                                                <Grid item xs={3} className={classes.numbersCont}>
                                                    <Typography variant="h2" color="inherit" className={classes.numbers}>
                                                        {getServiceVerified()}
                                                    </Typography>
                                                    <Typography variant="subtitile1" color="inherit" className={classes.numbersDown}>
                                                        Servicios activos
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3} className={classes.numbersCont}>

                                                    <Typography variant="h2" color="inherit" className={classes.numbers}>
                                                        {getServiceunVerified()}
                                                    </Typography>
                                                    <Typography variant="subtitile1" color="inherit" className={classes.numbersDown}>
                                                        Servicios inactivos
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3} className={classes.numbersCont}>
                                                    <Typography variant="h2" color="inherit" className={classes.numbers}>
                                                        00
                                                    </Typography>
                                                    <Typography variant="subtitile1" color="inherit" className={classes.numbersDown}>
                                                        Servicios
                                                        impartidos
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3} className={classes.numbersCont}>
                                                    <Typography variant="h2" color="inherit" className={classes.numbers}>
                                                        00
                                                    </Typography>
                                                    <Typography variant="subtitile1" color="inherit" className={classes.numbersDown}>
                                                        Valoraciones
                                                    </Typography>
                                                </Grid>
                                                {/* <Grid item xs={1} > */}
                                                {/* </Grid> */}
                                            </Grid>

                                        </Paper>
                                    </Grid>

                                    <Grid container item xs={12} spacing={3}>
                                        <Typography variant="h5" color="inherit" className={classes.titleCurses}>
                                            Mis cursos
                                        </Typography>
                                    </Grid>

                                    <Grid container item xs={12} spacing={3}>
                                        <CardAddCourses openForm={createCourse}
                                        >
                                        </CardAddCourses>
                                        {dataCourse.map((infoCourse, index) => (
                                            <CardCourses
                                                // courseId={dataCourseId[index]}
                                                role={"consultant"}
                                                key={index}
                                                openForm={() => { showFormCourse(infoCourse, dataCourseId[index]) }}
                                                // openFormDetail={() => { showInfoCourseDetail(infoCourse, dataCourseId[index]) }}
                                                // openForm={createCourse}
                                                infoCourse={infoCourse}>
                                            </CardCourses>

                                            // </div>
                                        ))}


                                        {/* <Container maxWidth="lg" className={classes.container} >
                                            <Grid item xs={12} container
                                                direction="row"
                                                justify="center"
                                                alignItems="flex-start">

                                                <StaticCalendar></StaticCalendar>
                                            </Grid>


                                        </Container> */}

                                    </Grid>

                                    <Grid container item xs={12} spacing={0}>
                                        <Grid item xs={6}>
                                            {/* <Paper className={classes.paper}> */}
                                            <Typography variant="h5" color="inherit" className={classes.titleCurses}>
                                                Disponibilidad
                                                </Typography>
                                            {/* </Paper> */}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {/* <IconButton onClick={handleTypeCardClose}>
                                                <CancelIcon></CancelIcon>
                                            </IconButton>
                                            < IconButton className={classes.btnEdit}onClick={disbleCalendar}>
                                                <SaveIcon></SaveIcon>
                                            </IconButton> */}


                                            {/* <IconButton className={classes.btnEdit} onClick={enableCalendar}>
                                                    Editar
                                                </IconButton> */}

                                            {disableCal === "disabledCalendar" ?
                                                (
                                                    <IconButton className={classes.btnEdit} onClick={enableCalendar}>
                                                        <EditIcon />

                                                    </IconButton>
                                                ) : (
                                                    <div className={classes.btnEdit}>
                                                        <IconButton className={classes.btnEdit} onClick={disbleCalendarCancel}>
                                                            <CancelIcon></CancelIcon>
                                                        </IconButton>
                                                        < IconButton className={classes.btnEdit} onClick={disbleCalendar}>
                                                            <SaveIcon></SaveIcon>
                                                        </IconButton>
                                                    </div>

                                                )
                                            }
                                        </Grid>

                                    </Grid>

                                    <Grid container item xs={12} spacing={3}>
                                        <Paper className={classes.calendarContainer} elevation={0}>
                                            <Grid
                                                container
                                                direction="row"
                                                justify="space-around"
                                                alignItems="stretch"
                                            >
                                                {/* <Grid item xs={1} >
                                                </Grid> */}
                                                <Grid item xs={12} >
                                                    <Grid item xs={12} container
                                                        direction="row"
                                                        justify="center"
                                                        alignItems="flex-start">

                                                        <StaticCalendar
                                                            classesEnherance={disableCal}
                                                            saveDispositions={saveDispositions}
                                                            // dateDisposition={props.dateDisposition}
                                                            dateDisposition={lastDates}
                                                            flCont={flCont}
                                                        ></StaticCalendar>
                                                    </Grid>
                                                </Grid>
                                                {/* <Grid item xs={3}>


                                                </Grid>
                                                <Grid item xs={3} >

                                                </Grid>
                                                <Grid item xs={3} >

                                                </Grid> */}
                                                {/* <Grid item xs={1} > */}
                                                {/* </Grid> */}
                                            </Grid>

                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Paper>

                    }
                    {openInvoices &&
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>
                                {/* <div>invoices</div> */}
                                <InvoicesForm
                                    closeFormInvoices={closeFormInvoices}
                                    closeInvoices={closeInvoices}
                                    invoiceData={props.invoiceData}
                                ></InvoicesForm>
                            </Grid>

                        </Container>
                    }

                    {openLaunchCourse &&
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>

                                <CreateCourse
                                    closeCreateCourse={closeCreateCourseEdit}
                                    closeFormCourse={closeFormCourse}
                                    images={props.images}
                                    closeForm={closeForm}
                                    currentDataService={dataService}
                                    currentDataSortKey={dataSortKey}

                                // closeCreateCourse={closeCreateCourse}
                                // closeFormCourse={closeFormCourse}
                                // images={props.images}
                                // closeForm={closeForm}
                                >

                                </CreateCourse>
                                {/* <div>invoices</div> */}
                                {/* <LaunchCourse

                                    closeFormCourse={closeFormCourse}
                                    closeForm={closeForm}
                                    currentDataService={dataService}
                                    currentDataSortKey={dataSortKey}
                                    addTopic={props.addTopic}
                                    deleteTopic={props.deleteTopic}
                                    topicData={props.topicData}
                                ></LaunchCourse> */}
                            </Grid>

                        </Container>
                    }

                    {openCreateCourse &&
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>
                                {/* <div>invoices</div> */}
                                <CreateCourse
                                    closeCreateCourse={closeCreateCourse}
                                    closeFormCourse={closeFormCourse}
                                    images={props.images}
                                    closeForm={closeForm}
                                >

                                </CreateCourse>
                                {/* <LaunchCourse
                                        closeFormCourse={closeFormCourse}
                                        closeForm={closeForm}
                                        currentDataService={dataService}
                                        currentDataSortKey={dataSortKey}
                                        addTopic={props.addTopic}
                                        deleteTopic={props.deleteTopic}
                                        topicData={props.topicData}
                                    ></LaunchCourse> */}


                            </Grid>

                        </Container>
                    }

                    {showCustomerValorations &&
                        <CustomerValorations
                            valorations={props.valorations}
                            currentAccount={currentAccount}
                            setShowCustomerValorations={setShowCustomerValorations}
                            getServiceVerified={getServiceVerified}
                            getServiceunVerified={getServiceunVerified}
                        ></CustomerValorations>

                    }





                </Container>

                <Box pt={4}>
                    <Copyright />
                </Box>
                {/* </Container> */}
            </main>
        </div >
    );
}

