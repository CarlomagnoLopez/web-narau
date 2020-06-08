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
// import { mainListItems, secondaryListItems } from 'listItems';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
// import { DatePicker } from "@material-ui/pickers";

import CardSideContent from "../controls/CardSideContent"
import CardSideContentInvoices from "../controls/CardSideContentInvoices"
import CardCourses from "../controls/CardCourses"
import CardAddCourses from "../controls/CardAddCourses"
import DetailCourse from "../components/DetailCourse"
import WishList from "../components/WishList"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams,
    useHistory
} from "react-router-dom";

import { mainListItems, secondaryListItems } from '../controls/listItems';
import ProfileHeaderCompany from './ProfileHeaderCompany';
import InvoicesForm from './InvoicesForm';
import LaunchCourse from './LaunchCourse';
import CardCoursesCompany from '../controls/CardCoursesCompany';
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



// export default connect(
//     mapStateToProps,
//     { updateAttr }
// )(ProfileConsultant);

// const mapStateToProps = state => {
//     // return { activeFilter: state.visibilityFilter };
//     return state;
// };
export default function ProfileCompany(props) {
    const { logOut } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openInvoices, setOpenInvoices] = React.useState(false);
    const [openLaunchCourse, setOpenLaunchCourse] = React.useState(false);
    const [openDetailCourse, setOpenDetailCourse] = React.useState(false);
    const [dataService, setDataService] = React.useState();
    const [dataBadge, setDataBagde] = React.useState(0);
    const [openWhishList, setOpenWhishList] = React.useState(false);
    const [whishList, setWhishList] = React.useState([]);

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




    // const dataCourse = [
    //     {
    //         name: "Calidad y gestion de recursos",
    //         type: "Curos"
    //     },
    //     {
    //         name: "Diseño y actualizacion paramétrica",
    //         type: "Taller"
    //     }, {
    //         name: "Ciencia de datos",
    //         type: "Seminario"
    //     }
    // ]

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

    const showInfoCourse = (data) => {
        // if(data)
        // if(data){
        setDataService(data)
        // }
        setOpenDetailCourse(true)
        console.log("show")
    }
    const closeFormCourse = (data) => {
        console.log(data)
        let payload = {
            "pk": localStorage.getItem("partitionKey"),
            "email": JSON.parse(localStorage.getItem("contentUser")).email,
            "attr": data
        }
        props.saveService(payload)
        setOpenLaunchCourse(false)
        // console.log("show")
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

    const handleCloseDetail = () => {
        setOpenDetailCourse(false)
    }

    const openDrawer = () => {
        setOpenWhishList(true)
    }
    const closeDrawer = () => {
        setOpenWhishList(false)
    }


    const addToWishList = (dataService) => {
        whishList.push(dataService);
        setWhishList(whishList)
        let totalItems = dataBadge + 1;
        setDataBagde(totalItems)
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Narau
                    </Typography>
                    <Tooltip title={currentAccount.empresa} aria-label={currentAccount.empresa}>
                        <Avatar className={classes.orange}>{currentAccount.empresa.substring(0, 1)}</Avatar>
                    </Tooltip>
                    <Tooltip title="Lista de deseos" aria-label="Lista de deseos">
                        <IconButton color="inherit" onClick={openDrawer}>
                            <Badge badgeContent={dataBadge} color="secondary">
                                <ShoppingBasketIcon></ShoppingBasketIcon>
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
                                <ProfileHeaderCompany currentAccount={currentAccount}></ProfileHeaderCompany>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Container maxWidth="lg" className={classes.container}>

                        {!openInvoices && !openLaunchCourse &&
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} lg={3} container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="center">
                                    <Paper spacing={3} elevation={2}>
                                        <CardSideContent
                                            text={aboutMe}
                                            referenceRequest={"aboutMe"}
                                            title={"Sobre mi empresa."}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        {/* </Paper> */}
                                        <Divider variant="middle" className={classes.divider} />
                                        {/* <Paper spacing={3} elevation={0}> */}
                                        <CardSideContent
                                            text={experience}
                                            referenceRequest={"experience"}
                                            title={"Experiencia empresarial"}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        {/* </Paper> */}
                                        <Divider variant="middle" className={classes.divider} />
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

                                <Grid
                                    item xs={12} md={8} lg={9} spacing={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start">
                                    <Grid container item xs={12} spacing={3}>
                                        {dataCourse.map((infoCourse, index) => (
                                            <CardCoursesCompany
                                                key={index}
                                                openForm={() => { showInfoCourse(infoCourse) }}
                                                infoCourse={infoCourse}>
                                            </CardCoursesCompany>

                                            // </div>


                                        ))}
                                        {/* <CardAddCourses openForm={showFormCourse}>
                                        </CardAddCourses> */}

                                        {/* <Container maxWidth="lg" className={classes.container} >
                                            <Grid item xs={12} container
                                                direction="row"
                                                justify="center"
                                                alignItems="flex-start">
                                                <StaticCalendar></StaticCalendar>
                                            </Grid>
                                        </Container> */}
                                    </Grid>
                                </Grid>
                            </Grid>

                        }
                        {openInvoices &&
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={3}>
                                    {/* <div>invoices</div> */}
                                    <InvoicesForm
                                        closeFormInvoices={closeFormInvoices}
                                        invoiceData={props.invoiceData}
                                    ></InvoicesForm>
                                </Grid>

                            </Container>
                        }
                        {openDetailCourse &&
                            <DetailCourse
                                show={openDetailCourse}
                                dataService={dataService}
                                handleCloseDetail={handleCloseDetail}
                                addToWishList={addToWishList}
                            ></DetailCourse>
                        }

                        {openWhishList &&
                            <WishList
                                closeDrawer={closeDrawer}
                                whishList={whishList}
                            // open={true}
                            ></WishList>
                        }


                        {/* {openLaunchCourse &&
                       
                        
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={3}>
                                    <LaunchCourse
                                        closeFormCourse={closeFormCourse}
                                        currentDataService={dataService}
                                    ></LaunchCourse>
                                </Grid>
                            </Container>
                        } */}





                    </Container>

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div >
    );
}

