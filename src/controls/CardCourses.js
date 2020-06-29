import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: theme.spacing(0),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
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
        backgroundColor: "#7175d8ba",
    },
    colorTaller: {
        backgroundColor: "#fc5000ba",
    },
    colorSeminario: {
        backgroundColor: "#ff931eba",
    },
    alignBot: {
        bottom: "1rem",
        position: "absolute"

    }
}));

export default function CardCourses(props) {
    const { infoCourse } = props;
    const classes = useStyles(infoCourse);

    const classCuros = clsx(classes.titleCourse, classes.colorCourse);
    const classTaller = clsx(classes.titleCourse, classes.colorTaller);
    const classSeminario = clsx(classes.titleCourse, classes.colorSeminario);

    const { serviceType } = infoCourse;

    // const defineClass = `class${type}`

    const imageService = infoCourse.img ? "https://imgcursos.s3.amazonaws.com/" + infoCourse.img : "../assets/imgex.jpg"

    return (

        <Grid item xs={4} >
            {/* <Paper className={classes.paperCursos}>{infoCourse.name}</Paper> */}
            <Card raised className={classes.root}>
                <CardActionArea onClick={props.openForm} >
                    <CardMedia 
                        // children = {<div>hola</div>}
                        component="img"
                        // alt="Contemplative Reptile"
                        // height="140"
                        // image="../assets/imgex.jpg"
                        image={imageService}
                    // title="Contemplative Reptile"
                    />
                    {serviceType === "seminario" &&
                        <CardContent className={classCuros}>
                            <Typography gutterBottom variant="h5" component="h2" classes={{ root: classes.alignBot }}>
                                {infoCourse.nameService}
                            </Typography>
                        </CardContent>
                    }
                    {serviceType === "taller" &&
                        <CardContent className={classTaller}>
                            <Typography gutterBottom variant="h5" component="h2" classes={{ root: classes.alignBot }}>
                                {infoCourse.nameService}
                            </Typography>
                        </CardContent>
                    }
                    {serviceType === "asesoria" &&
                        <CardContent className={classSeminario}>
                            <Typography gutterBottom variant="h5" component="h2" classes={{ root: classes.alignBot }}>
                                {infoCourse.nameService}
                            </Typography>
                        </CardContent>
                    }


                </CardActionArea>

            </Card>
        </Grid>
        // <Card>
        //     <CardHeader
        //         title={
        //             <Typography gutterBottom variant="subtitle2" component="div">
        //                 {props.title}
        //             </Typography>
        //         }
        //         action={
        //             <IconButton>
        //                 <EditIcon />
        //             </IconButton>
        //         }
        //     />
        //     <CardContent>
        //         <Typography color="textSecondary" gutterBottom>
        //             {props.text}
        //         </Typography>
        //     </CardContent>
        // </Card>
    );
}


