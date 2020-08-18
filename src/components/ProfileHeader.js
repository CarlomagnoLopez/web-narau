import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import SimpleRating from "../controls/SimpleRating"
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import "../css/stylesGlobalOverRide.css"
// import defaultImage from '../assets/imgex.png';
import defaultImage from '../assets/perfil-img_08.jpg';
import UploadImages from '../controls/ImageUpload.js';

// import "../css/stylesGlobalOverRide.css"


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";





// const imageProfileDynamo = JSON.parse(localStorage.getItem("contentUser")).imgProfile;
// const imageProfileDynamo = localStorage.getItem("contentUserAvatarImg") 

// const imageProfileDynamo = "";
const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: "100%",
            borderRadius: "0px"
        },
        media: {
            width: "100%",
            height: "11rem",
            backgroundColor: "#7175d8"
        },
        // large: {
        //     width: theme.spacing(7),
        //     height: theme.spacing(7),
        // },
        title: {
            // top: "-4rem",
            // maxWidth: "50%",
            position: "relative",
            color: `${(isMobile) ? "#000" : "#fff"}`,
            fontWeight: "bolder"
        },
        avatarHeader: {
            backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

            // backgroundImage: `url(${imageProfileDynamo})`,
            backgroundImage: `url(${localStorage.getItem("contentUserAvatarImg")})`,
            backgroundSize: "contain",
            // top: "-6rem",
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: "#fc5000",
            width: theme.spacing(10),
            height: theme.spacing(10),
            border: "solid"
        },
        container: {
            // paddingTop: theme.spacing(4),
            // paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
        },
        paperPercent: {
            background: "rgb(0,0,0,0)",
            // padding: theme.spacing(0),
            // display: 'flex',
            // overflow: 'inherit',
            // flexDirection: 'column',
            padding: theme.spacing(2),
            margin: "auto",
            marginTop: "4rem",
            textAlign: "end"

            // padding: theme.spacing(2),
            // margin: "auto",
            // maxWidth: "300px"
            // maxWidth: 300
        },
        paper: {
            background: "rgb(0,0,0,0)",
            // padding: theme.spacing(0),
            // display: 'flex',
            // overflow: 'inherit',
            // flexDirection: 'column',
            padding: theme.spacing(2),
            margin: "auto",

            // padding: theme.spacing(2),
            // margin: "auto",
            // maxWidth: "300px"
            // maxWidth: 300
        },
        infoProfile: {
            marginLeft: "-.7rem",
            marginTop: "1rem"
        },
        rating: {
            // top: "-3rem",
            // position: "relative",
            // color: "#fff",
            fontWeight: "bolder"
        },
        ratingTwo: {

        },
        containerInfo: {
            marginTop: "-4rem",
        },
        // content:{
        //     color:"#fff"
        // }
        badgeOwn: {
            // right: -3,
            // top: 13,
            // border: `2px solid ${theme.palette.background.paper}`,
            // padding: '0 4px',

            top: "64px",
            right: "14px",
            border: " 2px solid #fff",
            padding: "0 4px"
        },
        war: {
            borderRadius: "100%",
            backgroundColor: "#ff931e"
        },
        done: {
            borderRadius: "100%",
            backgroundColor: "#66b32e"
        },
        carrHeader: {
            padding: "0px !important"
        },
        warningProfile: {
            color: "#ff931e",
            fontWeight: "bolder"
        },
        greenProfile: {
            color: "#66b32e",
            fontWeight: "bolder"
        }
    })
);

const StyledBadge = withStyles((theme) => ({
    badge: {
        // right: -3,
        // top: 13,
        // border: `2px solid ${theme.palette.background.paper}`,
        // padding: '0 4px',
        // top: 64px;
        // right: 14px;
        // border: 2px solid #fff;

        // padding: 0px 0px !important;
        top: "64px",
        right: "14px",
        // border:"1px solid #fff",
        padding: "0px 0px !important",
        borderRadius: "100%",
        height: "24px",
        width: "24px"
    },
}))(Badge);

const colorWarning = "#ff931e";
export default function ProfileHeader(props) {
    const classes = useStyles();

    const { completedProfile } = props.currentAccount;
    const { currentAccount } = props;

    const [sumTotal, setSumTotal] = React.useState(0)

    const getPercent = (values) => {
        let large = values.length;
        let cont = 0;
        values.map((item) => {
            if (item) {
                if (item.rfc) {
                    if (item.rfc !== "" && item.razonSocial !== "") {
                        cont++
                    }
                    return
                }
                cont++
            }
        })

        // if (cont === large) {
        //     return 100;
        // } else {
        let percent = ((cont * 100) / large);
        return Math.round(percent)
        // }

    }

    const vaidatePercentProfile = () => {

        let percent = getPercent([currentAccount.aboutMe, currentAccount.experience, currentAccount.training, currentAccount.customers, props.invoiceData, currentAccount.completedProfile])
        // console.log(currentAccount)
        // currentAccount.aboutMe experience training disponibilidad customers invoices

        let cssClass = currentAccount.completedProfile ? "greenProfile" : "warningProfile";

        return (<Typography className={classes[cssClass]} gutterBottom variant="body1" component="div">
            {`PERFIL ${percent}%`}
        </Typography>)
    }

    const completeName = props.currentAccount.firstName + " " + props.currentAccount.lastName;

    const avatarTitle = props.currentAccount.firstName.substring(0, 1).toUpperCase() + props.currentAccount.lastName.substring(0, 1).toUpperCase()

    const { createdDate } = props.currentAccount;

    const dateCreatedRender = ((createdDate).split(",")[0].split("/")[1] + "/" +
        ((createdDate).split(",")[0].split("/")[0] > 9 ? (createdDate).split(",")[0].split("/")[0] : ("0" + (createdDate).split(",")[0].split("/")[0]))
        + "/" + (createdDate).split(",")[0].split("/")[2])


    const saveImage = () => {
        console.log("image")
        console.log(document.getElementsByClassName("uploadPicture")[0].src);

        props.saveImageProfile(document.getElementsByClassName("uploadPicture")[0].src)
    }



    const totalValorations = () => {

        // if (props.valorations) {
        let ratings = {
        };

        props.valorations.map((item, index) => {
            ratings["R_" + index] = parseInt(item.qualification)
        })

        const starTotal = 10;



        let total = 0;
        let sumTotal = 0;
        for (const rating in ratings) {
            // 2
            sumTotal++
            const starPercentage = (ratings[rating] / starTotal) * 100;
            // 3
            // const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
            const starPercentageRounded = (Math.round(starPercentage / 10) * 10);
            // 4
            total += starPercentageRounded;

        }

        let showTotal = Math.round((total / sumTotal) / 10)


        // setSumTotal(showTotal)

        // }



        return showTotal


    }
    // totalValorations();



    // const total = totalValorations();

    // console.log(total)

    return (
        <div>


            <Card className={classes.root} >
                <CardMedia
                    className={classes.media}
                    // image="https://imgcursos.s3.amazonaws.com/img2.jpg"
                    image={defaultImage}
                />
            </Card>
            <Container maxWidth="lg" className={classes.containerInfo}>

                <Grid container spacing={0}>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container spacing={2} xs={12} sm={6}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid item>
                                    <StyledBadge
                                        badgeContent={
                                            completedProfile ?
                                                <DoneIcon className={classes.done} fontSize="medium"></DoneIcon> :
                                                <AccessTimeIcon className={classes.war} fontSize="medium"></AccessTimeIcon>
                                        } color="secondary">
                                        <Avatar className={classes.avatarHeader}
                                            // src={JSON.parse(localStorage.getItem("contentUser")).imgProfile}
                                            classes={{
                                                root: "rootAvatar"
                                            }}>
                                            {(JSON.parse(localStorage.getItem("contentUser")).imgProfile ? "" : <Typography gutterBottom variant="body2">
                                                {avatarTitle}
                                            </Typography>)}

                                            {/* <Typography gutterBottom variant="body2">
                                                {avatarTitle}
                                            </Typography> */}
                                            <UploadImages saveImage={saveImage}></UploadImages>
                                        </Avatar>

                                    </StyledBadge>
                                    <Typography gutterBottom variant="body2" className={classes.infoProfile}>
                                        {completedProfile ? "Perfil Aprobado" : "Solicitud en proceso"}
                                    </Typography>

                                </Grid>
                                <Grid item>
                                    <Typography className={classes.title} gutterBottom variant="h5" component="div" >

                                        {completeName.substring(0, 15)}

                                        {/* {props.currentAccount.firstName} */}

                                    </Typography>

                                    <p>
                                        <br></br>
                                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.rating}>
                                            {`Miembro desde: ${dateCreatedRender}`}
                                        </Typography>
                                    </p>
                                    <SimpleRating totalValorations={totalValorations} valorations={props.valorations} className={classes.ratingTwo} openCustomerValorations={props.openCustomerValorations} setFunc={true}/>

                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paperPercent} elevation={0}>{vaidatePercentProfile()}</Paper>
                    </Grid>
                </Grid>



            </Container>

        </div>
    );
}
