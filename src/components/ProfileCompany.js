import React from 'react';
import { connect } from "react-redux";
import { updateAttr } from "../redux/actions";
// import Avatar from '@material-ui/core/Avatar';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
import BookIcon from '@material-ui/icons/Book';
import CardSideContent from "../controls/CardSideContent"
import SearchServices from "../controls/SearchServices"
import CardSideContentInvoices from "../controls/CardSideContentInvoices"
import CardCourses from "../controls/CardCourses"
import CardAddCourses from "../controls/CardAddCourses"
import DetailCourse from "../components/DetailCourse"
import WishList from "../components/WishList"
import ShoppingCart from "../components/ShoppingCart"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams,
    useHistory
} from "react-router-dom";

import logo_login from '../assets/logos-narau-04.png';

import ProfileHeaderCompany from './ProfileHeaderCompany';
import InvoicesForm from './InvoicesForm';
import LaunchCourse from './LaunchCourse';
import LaunchReservedService from './LaunchReservedService';
import CardCoursesCompany from '../controls/CardCoursesCompany';
import Rating from '@material-ui/lab/Rating';
import { ListItemText } from '@material-ui/core';
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

// const drawerWidth = 240;
const drawerWidth = 240;
const sizeTopBar = 95;
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    rootalert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
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
        })
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
    },
    divider: {
        margin: theme.spacing(2, 0),
        backgroundColor: "transparent"
    },
    logo: {
        margin: "1rem",
    },
    logoTopBar: {
        width: `${sizeTopBar}px`,
    },
    gridHistoty: {
        width: "100%"
    },
    avatarCustomer: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginRight: "1rem"
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
    nameServieClass: {
        color: " #ff931e",
        // textTransform: "uppercase",
        display: 'inline',
        fontWeight: "bolder"
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
    const [openEvaluation, setOpenEvaluation] = React.useState(false);
    const [openLaunchCourse, setOpenLaunchCourse] = React.useState(false);
    const [openDetailCourse, setOpenDetailCourse] = React.useState(false);
    const [dataService, setDataService] = React.useState();
    const [dataServiceId, setDataServiceId] = React.useState();
    const [dataBadge, setDataBagde] = React.useState(0);
    const [dataBadgeCart, setDataBagdeCart] = React.useState(0);
    const [openWhishList, setOpenWhishList] = React.useState(false);
    const [openShoppingCart, setOpenShoppingCart] = React.useState(false);
    const [whishList, setWhishList] = React.useState([]);
    const [shoppingCart, setShoppingCart] = React.useState([]);
    const [reservedService, setReservedService] = React.useState([]);
    const [openReservedService, setOpenReservedService] = React.useState(false);
    const [noDates, setNoDates] = React.useState(false);

    const [currentEvaluation, setCurrentEvaluation] = React.useState("");
    const [currentRaiting, setCurrentRaiting] = React.useState("");
    const [currentComment, setCurrentComment] = React.useState("");

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


    const dataCourse = [];

    props.serviceData.map((item) => {
        if (item.verified) {
            dataCourse.push(item["custom-attr"])
            return
        }
    })
    const dataCourseId = [];
    props.serviceData.map((item) => {
        if (item.verified) {
            dataCourseId.push(item["custom-keys"])
            return item["custom-keys"]
        }
    })
    // const dataCourseId = props.serviceData.map((item) => { return item["custom-keys"] })





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

    const showInfoCourse = (data, dataId) => {
        // if(data)
        // if(data){

        props.getByUser(dataId)
        // if (props.byUser) {
        // setTimeout(() => {
        setDataService(data)
        setDataServiceId(dataId)

        // }
        setOpenDetailCourse(true)
        console.log("show")
        // }, 1500);

        // }

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
        setTimeout(() => {
            setOpenDetailCourse(false)

        }, 300);
    }
    const handleCloseReservered = () => {
        setTimeout(() => {
            setOpenReservedService(false)

        }, 300);
    }
    const openDrawer = () => {
        setOpenWhishList(true)
    }
    const closeDrawer = () => {
        setOpenWhishList(false)
    }

    const openDrawerCart = () => {
        setOpenShoppingCart(true)
    }
    const closeDrawerCart = () => {
        setOpenShoppingCart(false)
    }

    const proceed = (dataToRequest) => {
        console.log("proceed")
    }

    const addToModelCart = (dataService) => {
        shoppingCart.push(dataService);
        setShoppingCart(shoppingCart)
        let totalItems = dataBadgeCart + 1;
        setDataBagdeCart(totalItems)
    }
    const addToWishList = (dataService, id) => {
        dataService.courseId = id;
        whishList.push(dataService);
        setWhishList(whishList)
        let totalItems = dataBadge + 1;
        setDataBagde(totalItems)
    }
    const showReservedService = (reserveServioce) => {
        if (props.byUser["custom-dates"]) {
            setReservedService(reserveServioce)
            setOpenReservedService(true)
        } else {
            // return ()
            setOpenDetailCourse(false)
            // setTimeout(() => {

            setNoDates(true)

            // }, 300);
        }

        // console.log("open reservations")

    }

    const deleteToWishList = (itemDelete, add) => {



        if (add) {
            console.log("deleting...");
            console.log(itemDelete)
            let addCart = whishList.splice(itemDelete, 1);
            addToModelCart(addCart[0])
            setWhishList(whishList)
            let totalItems = dataBadge - 1;
            setDataBagde(totalItems)

        } else {
            console.log("deleting...");
            console.log(itemDelete)
            whishList.splice(itemDelete, 1);
            setWhishList(whishList)
            let totalItems = dataBadge - 1;
            setDataBagde(totalItems)
        }
    }

    const deleteToCart = (itemDelete) => {




        console.log("deleting...");
        console.log(itemDelete)
        shoppingCart.splice(itemDelete, 1);
        setWhishList(shoppingCart)
        let totalItems = dataBadgeCart - 1;
        setDataBagde(totalItems)

    }
    const addToCart = (item) => {
        // addToModelCart(item)
        deleteToWishList(item, true)


    }

    const onTypeFilter = (value) => {
        console.log(value)
    }
    const getFiltering = () => {

        let arrFilter = []
        props.serviceData.map((item) => {
            if (item.verified) {
                arrFilter.push(item["custom-attr"])
            }

        })
        return arrFilter
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


        }

        localStorage.setItem("colorDefaul", color)
        return color

    }

    const sendServiceRequest = (payload) => {
        console.log(payload);
        payload.customerPk = localStorage.getItem("partitionKey");
        handleCloseDetail();

        props.sendServideRequest(payload)

    }
    const vertical = 'top';
    const horizontal = 'center';

    const showEvaluation = (item) => {
        setCurrentEvaluation(item)
        setOpenEvaluation(true)
    }
    const closeEvaluation = () => {
        setOpenEvaluation(false)
    }

    const sendEvaluation = () => {
        console.log(currentEvaluation)
        console.log(currentComment)
        console.log(currentRaiting)
        setOpenEvaluation(false)
        let payload = {
            comment: currentComment,
            raiting: currentRaiting,
            relatedInfo:currentEvaluation,
            relatedCompanyInfo:props.currentAccount
        }
        console.log(payload)

        props.addValoration(payload)
        

    }

    const changeComment = (value) => {
        console.log(currentEvaluation)
        console.log(value.currentTarget.value)
        setCurrentComment(value.currentTarget.value)

        // set
    }


    const changeRaiting = (value) => {
        console.log(currentEvaluation)
        console.log(value.currentTarget.value)
        setCurrentRaiting(value.currentTarget.value)

        // set
    }

    // const requestHistory = () => {
    //     props.historyService(currentAccount)
    // }
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
                    <Tooltip title={currentAccount.empresa} aria-label={currentAccount.empresa}>
                        <Avatar className={classes.orange}>{currentAccount.empresa.substring(0, 1)}</Avatar>
                    </Tooltip>
                    <Tooltip title="Lista de deseos" aria-label="Lista de deseos">
                        <IconButton color="inherit" onClick={openDrawer}>
                            <Badge badgeContent={dataBadge} color="secondary">
                                {/* <ShoppingBasketIcon></ShoppingBasketIcon> */}
                                <BookIcon></BookIcon>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Carrito de compras" aria-label="Carrito de compras">
                        <IconButton color="inherit" onClick={openDrawerCart}>
                            <Badge badgeContent={dataBadgeCart} color="secondary">
                                <ShoppingBasketIcon></ShoppingBasketIcon>
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
                {/* <Container maxWidth="xl" className={classes.container} > */}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={0}>
                            {/* <ProfileHeaderCompany currentAccount={currentAccount}></ProfileHeaderCompany> */}
                            <ProfileHeaderCompany saveImageProfile={props.saveImageProfile} currentAccount={currentAccount} >

                            </ProfileHeaderCompany>

                        </Paper>
                    </Grid>
                </Grid>

                <Container maxWidth="lg" className={classes.container}>

                    {!openInvoices && !openLaunchCourse &&
                        <Paper spacing={3} elevation={0}>
                            <Grid container spacing={3} className={classes.rootRigthBar}>
                                {/* <Grid item xs={12} md={4} lg={3} container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="center">
                                    <Paper spacing={3} elevation={6} classes={{ root: "rounded" }}>
                                        <CardSideContent
                                            text={aboutMe}
                                            referenceRequest={"aboutMe"}
                                            title={"Sobre mi empresa."}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        <CardSideContent
                                            text={experience}
                                            referenceRequest={"experience"}
                                            title={"Experiencia empresarial"}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        <CardSideContent
                                            text={customers}
                                            referenceRequest={"customers"}
                                            title={"Clientes"}
                                            request={requestUpdateAttribute}
                                        ></CardSideContent>
                                        <Divider variant="middle" className={classes.divider} />
                                        <CardSideContentInvoices showFormInvoices={showFormInvoices} title={"Facturacion"}
                                        ></CardSideContentInvoices>
                                    </Paper>
                                </Grid> */}

                                <Grid
                                    item xs={12} md={8} lg={9} spacing={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start">
                                    <Grid container item xs={12} spacing={3}>
                                        {/* <SearchServices dataFilter={dataCourse} onTypeFilter={onTypeFilter}></SearchServices> */}
                                        <Grid className={classes.gridHistoty}
                                        // item xs={12}  container
                                        //     direction="row"
                                        //     justify="center"
                                        //     alignItems="baseline"
                                        >
                                            <Typography
                                                // component="span"
                                                variant="h5"
                                                // className={classes.commentBy}
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
                                                                {/* <ListItemText></ListItemText> */}
                                                                <ListItemText
                                                                    primary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                variant="body2"
                                                                                className={classes.textNameBy}
                                                                                color="textPrimary"
                                                                            >
                                                                                <span className={classes.commentBy}>Instrcutor:</span>
                                                                                {" " + item.userProvide.firstName + " " + item.userProvide.lastName}
                                                                            </Typography>
                                                                            {/* <Rating name="half-rating"  /> */}
                                                                            {/* <Rating></Rating> */}
                                                                        </React.Fragment>
                                                                    }
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            {/* <Typography
                                                                                // component="span"
                                                                                variant="body2"
                                                                                className={classes.commentBy}
                                                                                color="textPrimary"
                                                                            >
                                                                                {item.comment}
                                                                            </Typography> */}



                                                                            <p>
                                                                                {/* <Typography variant="body2" className={classes.en}>
                                                                                        {"En: "}
                                                                                    </Typography> */}
                                                                                <Typography variant="body2" className={classes.nameServieClass}>
                                                                                    <span className={classes.commentBy}>{"Servicio: "}</span>  {item.serviceProvide.nameService}
                                                                                </Typography>
                                                                            </p>
                                                                            <Button variant="contained" className="btnNext"
                                                                                onClick={() => { showEvaluation(item) }}

                                                                            >Evaluar servicio</Button>

                                                                        </React.Fragment>
                                                                    }
                                                                />

                                                            </ListItem>
                                                            <Divider variant="inset" component="li" />
                                                        </div>
                                                    ))}


                                                </List>

                                            </Paper>



                                            {/* <Button variant="contained" className="btnBack"

                                            >Historial de servicios</Button> */}
                                        </Grid>
                                    </Grid>
                                    {/* <Grid container item xs={12} spacing={3}>
                                        {dataCourse.map((infoCourse, index) => (
                                            // <CardCoursesCompany
                                            <CardCourses
                                                key={index}
                                                addToWishList={() => { addToWishList(infoCourse, dataCourseId[index]) }}
                                                openForm={() => { showInfoCourse(infoCourse, dataCourseId[index]) }}
                                                infoCourse={infoCourse}>
                                            </CardCourses>
                                            // </CardCoursesCompany>

                                            // </div>


                                        ))}
                                    </Grid> */}
                                </Grid>
                            </Grid>

                        </Paper>

                    }


                    {openEvaluation &&

                        <Dialog open={true} onClose={closeEvaluation} aria-labelledby="form-dialog-title">
                            {/* <Dialog></Dialog> */}
                            <DialogTitle id="form-dialog-title">Ayudanos a mejorar:</DialogTitle>

                            {/* <DialogContent></DialogContent> */}
                            <DialogContent>
                                <DialogContentText>
                                    Calificalo:
                                </DialogContentText>
                                <Rating name="half-rating" onChange={(value) => { changeRaiting(value) }} />
                                <TextField


                                    // autoComplete="fname"
                                    name="comentario"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="comentario"
                                    // label="Comentanos:"
                                    placeholder="Comentario"
                                    classes={{
                                        root: "rootTextField"
                                    }}
                                    onChange={(value) => { changeComment(value) }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={sendEvaluation} className="btnNext">
                                    Enviar
                                </Button>
                                <Button onClick={closeEvaluation} className="btnBack">
                                    CANCELAR
                                </Button>
                            </DialogActions>
                        </Dialog>
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
                    {openDetailCourse && props.byUser["custom-attr"] &&
                        // <DetailCourse
                        //     show={openDetailCourse}
                        //     dataService={dataService}
                        //     dataServiceId={dataServiceId}
                        //     handleCloseDetail={handleCloseDetail}
                        //     addToWishList={addToWishList}
                        // ></DetailCourse>
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>
                                <LaunchCourse
                                    addToWishList={addToWishList}
                                    // closeFormCourse={closeFormCourse}
                                    // closeForm={closeForm}
                                    showReservedService={showReservedService}
                                    colorDefault={currentColorService()}
                                    byUser={props.byUser}
                                    closeForm={handleCloseDetail}
                                    currentDataService={dataService}
                                    currentDataSortKey={dataServiceId}
                                // addTopic={props.addTopic}
                                // deleteTopic={props.deleteTopic}
                                // topicData={props.topicData}
                                ></LaunchCourse>
                            </Grid>

                        </Container>

                    }

                    {openReservedService &&
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>
                                <LaunchReservedService
                                    addToWishList={addToWishList}
                                    // showReservedService={showReservedService}
                                    sendServiceRequest={sendServiceRequest}
                                    colorDefault={currentColorService()}
                                    byUser={props.byUser}
                                    closeForm={handleCloseReservered}
                                    currentDataService={dataService}
                                    currentDataSortKey={dataServiceId}
                                ></LaunchReservedService>
                            </Grid>

                        </Container>

                    }
                    {noDates &&
                        <div className={classes.rootalert}>
                            <Snackbar anchorOrigin={{ vertical, horizontal }} open={true} autoHideDuration={6000} onClose={() => { setNoDates(false) }}>
                                <Alert onClose={() => { setNoDates(false) }} severity="warning">
                                    El consultor no tiene fechas disponibles.
                                </Alert>
                            </Snackbar>
                        </div>
                    }

                    {openWhishList &&
                        <WishList
                            deleteToWishList={deleteToWishList}
                            addToCart={addToCart}
                            closeDrawer={closeDrawer}
                            whishList={whishList}
                        // proceed={proceed}
                        ></WishList>
                    }
                    {openShoppingCart &&
                        <ShoppingCart
                            deleteToCart={deleteToCart}
                            closeDrawer={closeDrawerCart}
                            shoppingCart={shoppingCart}
                        // proceed={proceed}
                        ></ShoppingCart>
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

