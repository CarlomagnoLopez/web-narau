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
        backgroundColor: "#ff572270",
    },
    colorTaller: {
        backgroundColor: "#ffc522c4",
    },
    colorSeminario: {
        backgroundColor: "#fc22ffc4",
    }
}));

export default function CardCourses(props) {
    const { infoCourse } = props;
    const classes = useStyles(infoCourse);

    const classCuros = clsx(classes.titleCourse, classes.colorCourse);
    const classTaller = clsx(classes.titleCourse, classes.colorTaller);
    const classSeminario = clsx(classes.titleCourse, classes.colorSeminario);

    const { type } = infoCourse;

    // const defineClass = `class${type}`

    return (

        <Grid item xs={4} >
            {/* <Paper className={classes.paperCursos}>{infoCourse.name}</Paper> */}
            <Card className={classes.root} raised>
                <CardActionArea>
                    <CardMedia
                        // children = {<div>hola</div>}
                        component="img"
                        // alt="Contemplative Reptile"
                        // height="140"
                        image="../assets/imgex.jpg"
                    // title="Contemplative Reptile"
                    />
                    {type === "Curos" &&
                        <CardContent className={classCuros}>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {infoCourse.name}
                            </Typography>
                        </CardContent>
                    }
                    {type === "Taller" &&
                        <CardContent className={classTaller}>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {infoCourse.name}
                            </Typography>
                        </CardContent>
                    }
                    {type === "Seminario" &&
                        <CardContent className={classSeminario}>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {infoCourse.name}
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


