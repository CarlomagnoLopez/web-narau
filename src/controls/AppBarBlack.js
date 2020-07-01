import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import CourseForm from './CourseForm';
// import Review from './Review';
// import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import SimpleRating from "../controls/SimpleRating"
import Avatar from '@material-ui/core/Avatar';

// import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import logo_sun from '../assets/sun_logo.png';
// import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
import logo_login from '../assets/logos-narau-04.png';
import "../css/stylesGlobalOverRide.css"
import imageBen from '../assets/imageBen.png';
import Chip from '@material-ui/core/Chip';
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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// const imageProfileDynamo = JSON.parse(localStorage.getItem("contentUserCurrentAvatar"));

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: "#000",
        color: "#fff",
        // boxShadow: "none",
        height:"64px"
        // pointerEvents: "none"
    },
    infoProfile: {
        paddingTop: "10px"
    },
    infoProfileName: {
        fontWeight: "bold",
        fontSize: "20px"
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    gridBen: {
        color: "#fff",
        backgroundColor: "#fc5000",
        width: "69%",
        margin: "39px",
        // color: #fff;
        // background-color: #fc5000;
        borderRadius: "1rem"

    },
    paper: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    paperVideo: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0),
        [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
        },
    },

    paperVideoLeft: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0),
        [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
        },
    },
    paperCustom: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
        },
    },
    // rootCard: {
    //   maxWidth: 345,
    //   // marginTop: "53px"
    //   // marginLeft: "49px"

    // },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    closeIcon: {
        position: "absolute",
        // marginLeft: "0px"
        width: "100%"
    },
    buttonclose: {
        marginLeft: "94%"
    },
    rootCard: {
        width: "100%",
    },
    media: {
        width: "100%",
        height: 180,
    },
    typoservice: {
        color: "#fc5000",
        fontSize: "20px",
        textTransform: "capitalize",
    },
    nameservice: {
        fontWeight: "bold"
    },
    gridCustom: {

    },
    paperCustomCost: {
        color: "#fc5000",
        fontWeight: "bolder"
    },
    buttonCustom: {
        // backgroundColor: "#66b32e",
        // color: "#fff",
        // width: "100%",
        // borderRadius: ".6rem",
        // 'hover': {
        //   backgroundColor: "#66b32e",
        //   // width: "100%",
        //   // color: "#fff",
        // },
    },
    dividerClass: {
        margin: "10px"
    },
    logo: {
        margin: "1rem",
    },
    logoTopBar: {
        width: `95px`,
    },
    imageContainer: {
        maxWidth: "100%",
        padding: "0px"
    },
    imageCardContainer: {
        borderRadius: "0px"
    },
    rootChipRlation: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        marginTop: "1rem",
        marginBottom: "1rem",
        '& > *': {
            backgroundColor: "#b3b3b3",
            margin: theme.spacing(0.5),
            color: "#fff",
            borderRadius: ".6rem"
        },
    },
    rootChip: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        marginTop: "1rem",
        marginBottom: "1rem",
        '& > *': {
            backgroundColor: "#fc5000",
            margin: theme.spacing(0.5),
            color: "#fff",
            borderRadius: ".6rem"
        },
    },
    avatarHeader: {
        backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

        // backgroundImage: `url(${imageProfileDynamo})`,
        backgroundImage: `url(${localStorage.getItem("contentUserCurrentAvatar")})`,
        backgroundSize: "contain",
        // top: "-6rem",
        // color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: "#fc5000",
        width: theme.spacing(10),
        height: theme.spacing(10),
        border: "solid"
    },

}));



export default function AppBarBlack(props) {
    const classes = useStyles();


    const handleClose = () => {
        props.handleClose(false)
        // props.closeForm()

    };



    return (

        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" disabled
                    aria-label="close">
                    <div className={classes.logo}>
                        <img src={logo_login} className={classes.logoTopBar} />
                    </div>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {/* Narau */}
                </Typography>
                <div className={classes.closeIcon}>
                    <IconButton edge="start" color="inherit" className={classes.buttonclose}
                        onClick={handleClose}
                        aria-label="close">
                        <CloseIcon />

                    </IconButton>
                </div>

            </Toolbar>
        </AppBar>
    );
}
