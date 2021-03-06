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
import SimpleRating from "../controls/SimpleRating"

const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: "100%",
        },
        media: {
            width: "100%",
            height: 140,
        },
        // large: {
        //     width: theme.spacing(7),
        //     height: theme.spacing(7),
        // },
        title: {
            top: "-4rem",
            position: "relative",
            color: "#fff",
            fontWeight: "bolder"
        },
        subTitle: {
            top: "-2rem",
            position: "relative",
            color: "#000",
            fontWeight: "bolder"
        },
            avatarHeader: {
backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

            top: "-4rem",
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
            width: theme.spacing(10),
            height: theme.spacing(10),
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
            overflow: 'inherit',
            flexDirection: 'column',
        },
        rating: {
            top: "-3rem",
            position: "relative",
            // color: "#fff",
            fontWeight: "bolder"
        }
        // content:{
        //     color:"#fff"
        // }
    })
);

export default function ProfileHeader(props) {
    const classes = useStyles();

    const empresa = props.currentAccount.empresa; 
    const nombreContacto = props.currentAccount.firstName +" " + props.currentAccount.lastName; 

    const avatarTitle =  props.currentAccount.empresa.substring(0, 1) 

    return (
        <Card className={classes.root} >
            <CardMedia
                className={classes.media}
                image = "https://imgcursos.s3.amazonaws.com/img3.jpg"
            />

            <CardHeader
                // classes={classes.content}
                avatar={
                    <Avatar className={classes.avatarHeader}>{avatarTitle}</Avatar>
                }
                title={<Typography className={classes.title} gutterBottom variant="h5" component="div">
                    {empresa}
                    </Typography>}
                subheader={<Typography className={classes.subTitle} gutterBottom variant="h5" component="div">{nombreContacto}</Typography>}
            />

        </Card>
    );
}
