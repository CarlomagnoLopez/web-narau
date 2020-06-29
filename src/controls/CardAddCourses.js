import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles((theme) => ({
    paperCursos: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#f8a18366",
        height:"175px",
        maxHeight: "175px",

    },
    root: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:"175px",
        maxHeight: "175px",
        borderRadius:"1rem"
        // backgroundImage: "url(../assets/imgex.jpg)",

    },
    paperCursosIcon:{
        fontSize:"118px"
    }
}));

export default function CardAddCourses(props) {
    const classes = useStyles();

    // const { infoCourse } = props;

    return (

        <Grid item xs={4} >

            <Card className={classes.root} > 
                <CardActionArea onClick={props.openForm}>
                  
                    <CardContent className={classes.paperCursos}>
                        <Typography gutterBottom variant="h5" component="h2" >
                            <AddIcon className={classes.paperCursosIcon} fontSize="large"></AddIcon>
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            {/* <Paper className={classes.paperCursos} onClick={props.openForm}> */}
            {/* <IconButton color="inherit" onClick={props.openForm}> */}
            {/* <Badge badgeContent={4} color="secondary"> */}
            {/* <AddIcon fontSize="large"></AddIcon> */}
            {/* </Badge> */}
            {/* </IconButton> */}

            {/* </Paper> */}
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


