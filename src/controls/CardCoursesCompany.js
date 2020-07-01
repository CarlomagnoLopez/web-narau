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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NoteIcon from '@material-ui/icons/Note';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // backgroundImage: "url(../assets/imgex.jpg)",

    },
    titleCourse: {
        position: "absolute",
        color: "#fff",

        // backgroundColor: infoCourse.colorback,
        top: "0%",
        // padding: "0px",
        width: "100%",
        height: "100%",
        textAlign: "start",
        paddingTop: "6rem"
    },
    colorCourse: {
        backgroundColor: "rgba(113, 117, 216, 0.8)",
    },
    colorTaller: {
        backgroundColor: "rgba(252, 80, 0, .8)",
    },
    colorSeminario: {
        backgroundColor: "rgba(255, 147, 30, 0.8)",
    }
    , btnAddToCart: {
        position: "inherit",
        top: "10%",
        left: "73%"
    }
}));

export default function CardCoursesCompany(props) {
    const { infoCourse } = props;
    const classes = useStyles(infoCourse);

    const classCuros = clsx(classes.titleCourse, classes.colorCourse);
    const classTaller = clsx(classes.titleCourse, classes.colorTaller);
    const classSeminario = clsx(classes.titleCourse, classes.colorSeminario);

    const { serviceType } = infoCourse;

    // const defineClass = `class${type}`

    return (

        <Grid item xs={4} >
            {/* <Paper className={classes.paperCursos}>{infoCourse.name}</Paper> */}
            <Card className={classes.root} raised>
                <CardActionArea
                    onClick={props.openForm}
                >   
                    <CardMedia
                        // children = {<div>hola</div>}
                        component="img"
                        // alt="Contemplative Reptile"
                        // height="140"
                        image="../assets/imgex.jpg"
                    // title="Contemplative Reptile"
                    />
                    {serviceType === "seminario" &&
                        <CardContent className={classCuros}>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {infoCourse.nameService}
                            </Typography>
                            <Fab className={classes.btnAddToCart} color="primary" aria-label="add">
                                <NoteIcon />
                            </Fab>
                        </CardContent>
                    }
                    {serviceType === "taller" &&
                        <CardContent className={classTaller}>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {infoCourse.nameService}
                            </Typography>
                            <Fab className={classes.btnAddToCart} color="primary" aria-label="add">
                                <NoteIcon />
                            </Fab>
                        </CardContent>
                    }
                    {serviceType === "asesoria" &&
                        <CardContent className={classSeminario}>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {infoCourse.nameService}
                            </Typography>
                            <Fab className={classes.btnAddToCart} color="primary" aria-label="add">
                                <NoteIcon />
                            </Fab>
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


