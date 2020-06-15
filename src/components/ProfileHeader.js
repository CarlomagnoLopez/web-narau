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
        avatarHeader: {
            top: "-6rem",
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

    const completeName = props.currentAccount.firstName + " " + props.currentAccount.lastName;

    const avatarTitle =  props.currentAccount.firstName.substring(0, 1).toUpperCase() + props.currentAccount.lastName.substring(0, 1).toUpperCase()

    return (
        <Card className={classes.root} >
            {/* <CardActionArea> */}
            <CardMedia
                className={classes.media}
                image="../assets/imgex.jpg"
            //     title={<Typography gutterBottom variant="h5" component="h2">
            //         Lizard
            //  </Typography>}
            />

            <CardHeader
                // classes={classes.content}
                avatar={
                    <Avatar className={classes.avatarHeader}>{avatarTitle}</Avatar>
                }
                title={<Typography className={classes.title} gutterBottom variant="h5" component="div">
                    {completeName}
                    </Typography>}
                subheader={<SimpleRating className={classes.rating} />}
            />
            {/* <CardContent> */}
            {/* <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.paper} > */}
            {/* <Avatar className={classes.avatarHeader}>N</Avatar> */}
            {/* <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                         </Typography> */}
            {/* </Paper>
                </Container> */}

            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /> */}
            {/* <Typography gutterBottom variant="h5" component="h2">
                    Lizard
          </Typography> */}
            {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
            {/* </CardContent> */}
            {/* </CardActionArea> */}
            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
        </Card>
    );
}
