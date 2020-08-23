import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BookIcon from '@material-ui/icons/Book';

import MoreVertIcon from '@material-ui/icons/MoreVert'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
    root: {
        // padding: theme.spacing(0),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        position: "relative",
        maxHeight: "175px",
        height: "175px",
        borderRadius: "1rem"
        // backgroundImage: "url(../assets/imgex.jpg)",

    },
    rootCm: {
        maxHeight: "175px",
        height: "175px",
    },
    titleCourse: {
        position: "absolute",
        color: "#fff",

        // backgroundColor: infoCourse.colorback,
        top: "0%",
        padding: "0px",
        width: "100%",
        height: "100%",

        textAlign: "start",
        maxHeight: "175px",
        // height: "175px",
        padding: theme.spacing(2)
    },
    colorCourse: {
        backgroundColor: "rgba(113, 117, 216, .8)",
    },
    colorTaller: {
        backgroundColor: "rgba(252, 80, 0, .8)",
    },
    colorConferencia: {
        backgroundColor: "rgba(255, 147, 30, .8)",
    },
    colorAsesoriaPersonal: {
        backgroundColor: "rgb(46, 48, 89, .8)",
    },
    colorWebinar: {
        backgroundColor: "rgb(1, 134, 203, .8)",
    },
    cardService: {
        bottom: "0rem",
        position: "absolute",
        fontWeight: "bold !important",
        right: "1rem",
        fontSize: "1.3rem",
        left: "1rem"

    },
    cssCh: {
        position: "absolute",
        zIndex: "100"
    },
    cssCa: {
        pointerEvents: "none",
        height: "100%",
        '& > *': {
            height: "100%",
        }
    }
}));

export default function CardCourses(props) {
    const { infoCourse } = props;
    const classes = useStyles(infoCourse);

    const classCuros = clsx(classes.titleCourse, classes.colorCourse);
    const classTaller = clsx(classes.titleCourse, classes.colorTaller);
    const classConferencia = clsx(classes.titleCourse, classes.colorConferencia);
    const classAsesoriaPersonal = clsx(classes.titleCourse, classes.colorAsesoriaPersonal);
    const classWebinar  = clsx(classes.titleCourse, classes.colorWebinar);

    const { serviceType } = infoCourse;

    // const defineClass = `class${type}`

    const imageService = infoCourse.img ? "https://imgcursos.s3.amazonaws.com/" + infoCourse.img : "../assets/imgex.jpg"

    let classService = "";

    switch (serviceType) {
        case "conferencia":
            classService = classCuros;
            break;
        case "taller":
            classService = classTaller;
            break;
        case "asesoria":
            classService = classConferencia;
            break;
        case "asesoriapersonal":
            classService = classAsesoriaPersonal;
            break;
        case "webinar":
            classService = classWebinar;
            break;


        // default:
        //     break;
    }


    //   const addToWishList = () => {
    //     currentDataService.courseId = props.currentDataSortKey;
    //     props.addToWishList(currentDataService)
    //     // props.handleCloseDetail()
    //     // setOpen(false);
    //     // handleClose();
    //   }

    console.log(props.deleted)

    return (
        <Grid item xs={4} >
            {/* <Paper className={classes.paperCursos}>{infoCourse.name}</Paper> */}

            <Card raised className={classes.root}>

                {!props.role &&
                    <CardHeader className={classes.cssCh}
                        action={

                            <div>
                                <IconButton aria-label="settings" onClick={props.openForm}>
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton aria-label="settings" onClick={props.addToWishList}>
                                    <BookIcon></BookIcon>
                                </IconButton>
                            </div>

                        }
                    />

                }

                {props.role &&
                    <CardHeader className={classes.cssCh}
                        action={

                            <div>
                                <IconButton aria-label="settings" onClick={props.openFormView}>
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton aria-label="settings" onClick={props.openForm}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="settings" onClick={props.deleteService}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>

                        }
                    />

                }


                <CardActionArea onClick={props.openForm} className={classes.cssCa}>
                    <CardMedia
                        component="img"
                        image={imageService}
                    />
                    <CardContent className={classService}>
                        <Typography gutterBottom variant="h5" component="h2" classes={{ root: classes.cardService }}>
                            {infoCourse.nameService}
                        </Typography>
                    </CardContent>

                </CardActionArea>

            </Card>
        </Grid>


    );
}


