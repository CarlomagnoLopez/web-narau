import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import foco from '../assets/foco.png';
import DoneIcon from '@material-ui/icons/Done';
import money from '../assets/money.png';
import viaje from '../assets/viaje.png';
import InputAdornment from '@material-ui/core/InputAdornment';
import ComputerIcon from '@material-ui/icons/Computer';
import "./styles.css"
import "./stylesOverride.css"
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ProgressCreateCourse from "../controls/ProgressCreateCourse"
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        pointerEvents: "none"
    },
    progressBar: {
        backgroundColor: "#000"
    },
    title: {
        marginBottom: "20px",
        textAlign: "center",
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    titleTwo: {
        position: "relative"
    },
    subt: {
        // backgroundColor: "#000",
        // width: "10%",
        // height: "2%"

        width: "30px",
        height: "4px",
        backgroundColor: "#fc5000",
        position: " absolute",
        left: "calc(50% - 10px)"
    },
    rootButton: {

    },
    titleDesc: {
        fontSize: "1rem",
        fontWeight: "bold"
    },

    buttonSelect: {
        top: "83%",
        left: "calc(50% - 34px)",
        position: "absolute"
    },
    textField: {
        color: "#696969"
    },
    rootFab: {
        color: "#696969",
        /* border-radius: 0%; */
        boxShadow: "none",
        backgroundColor: "transparent",
        marginTop: "10px"
    },

    // textFieldunder: {
    //     color: "#696969"
    // }
    colorActionFab: {
        color: "rgb(252, 80, 0)"
    },
    rootMode: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    typography: {
        padding: "10px"
    },
    rootListText: {
        border: "solid #939393",
        borderRadius: ".5rem",
        padding: "5px",
        paddingLeft: "31px"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        marginTop: "30px"
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    rootCard: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    containerImage: {
        marginTop: "14px",
        height: "506px",
        // overflow: "auto",
        paddingTop: "8px",
        background: "white",
        position: "absolute",
        width: "max-content",
        boxShadow: "0px 0px 12px 7px #6969698f",
        borderRadius: "7px"

    },
    backWhite: {

        backgroundColor: "#fff"
    },
    paperRoot: {
        backgroundColor: "#fff"

    },
    containerList: {
        overflow: "auto",
        height: "75%"
    },
    footerBack:{
        marginTop:"15px"
    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StepFiveCreateCourse(props) {
    const classes = useStyles();

    const { typeService, countRefresh } = props;

    const [to, setTo] = React.useState("")
    const [cost, setCost] = React.useState("")
    const [costD, setCostD] = React.useState("")
    // const [topic, setTopic] = React.useState("")

    // const next = () => {
    //     props.nextStep()
    // }
    // const valueTypingTo = (value) => {
    //     setTo(value.currentTarget.value)
    // }
    // const addNewTopic = (data) => {

    //     if (topic !== "") {
    //         props.countRefresh();
    //         topicData.push({ tema: topic });
    //         setTopicData(topicData);
    //         setTopic("")
    //         // setTo("")
    //     }

    // }

    const valueTypingCost = (value) => {
        setCost(value.currentTarget.value)
    }

    const valueTypingCostDes = (value) => {
        setCostD(value.currentTarget.value)
    }

    const next = () => {
        // console.log(modeService)
        // console.log(titleService)
        let model = [{
            cost: cost
        },
            // {
            //     costD: costD
            // }
        ]
        props.handleNextStep(model)
    }
    // console.log("-->")
    // console.log(topicData.length)
    // console.log(to)
    // console.log(benefits)

    const renderCardImage = () => {

        let imgService = props.images.filter((itemImage) => {
            if (itemImage["custom-keys"] === "imgsall") {
                return itemImage["services"]
            }

        })
        // temp1[0].services.map((itemService) => {
        //     console.log(itemService.values)
        // })
        return imgService[0].services.map((itemService) => {
            return (<Grid item xs={4} >
                <Card className={classes.rootCard} raised> 
                    <CardActionArea onClick={() => props.handleNextStep(itemService["values"])}>
                        <CardMedia
                            className={classes.media}
                            image={"https://imgcursos.s3.amazonaws.com/" + itemService["values"]}
                        // title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>)
        })


    }
    return (
        <div className={classes.containerImage}>
            {/* <Paper elevation={8} className={classes.paperRoot}> */}
            {/* <div className={classes.backWhite}>

                </div> */}
            <Typography variant="h6" className={classes.title}>
                Y por último, selecciona una imagen para ilustrar tu tema
                    <div className={classes.subt}>

                </div>
            </Typography>
            {/* <Grid container spacing={3}> */}

            <Container maxWidth="md" className={classes.containerList}>

                <Grid item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid container item xs={12} spacing={3}>
                        {
                            renderCardImage(props.images)
                        }

                        {/* {
                        props.images.map((itemImage) => {
                            console.log(itemImage["services"])

                            if (itemImage["custom-keys"] === "services") {
                                return (<Grid item xs={4} >
                                    <Card className={classes.rootCard}>
                                        <CardActionArea onClick={() => props.handleNextStep(itemImage["services"])}>
                                            <CardMedia
                                                className={classes.media}
                                                image={"https://imgcursos.s3.amazonaws.com/" + itemImage["services"]}
                                            // title="Contemplative Reptile"
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>)
                            }

                        })} */}
                        {/* <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">

                            <Button onClick={props.back} variant="contained"

                            >Regresar</Button>
                        </Grid> */}
                        {/* <Grid item xs={4} >
                            <Card className={classes.rootCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={money}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4} >
                            <Card className={classes.rootCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={money}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4} >
                            <Card className={classes.rootCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={money}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid> */}

                    </Grid>
                </Grid>


            </Container>
            <Grid item xs={12} container
                direction="row"
                justify="center"
                alignItems="baseline" className={classes.footerBack} >

                <Button onClick={props.back} variant="contained" className="btnBack"

                >Regresar</Button>
            </Grid>
            {/* </Paper> */}

        </div >
    );
}
