import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import SwitchControlShare from '../controls/SwitchControlShare';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
import { Container, Link } from '@material-ui/core';
import { Player } from 'video-react';
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
        marginTop: "53px"

    },
    media: {
        height: 140,
    },
    containerImage: {
        paddingTop: "24px"
    },
    margins: {
        marginTop: "20px"
    },
    video: {
        width: "100%",
        height: "100%",
        // marginTop:"60px"
    },
    switchClass: {
        flexDirection: "row-reverse"
    }


}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StepSixCreateCourse(props) {
    const classes = useStyles();

    const { typeService, countRefresh } = props;
    const editServicdeType = props.currentDataService;
    const { currentDataService, payload } = props;

    let videoEdit = currentDataService ? currentDataService.video : "";

    if (editServicdeType && payload.video) {
        videoEdit = payload ? payload.video : "";

    }

    const [to, setTo] = React.useState("")
    const [cost, setCost] = React.useState("")
    const [video, setVideo] = React.useState(videoEdit)
    const [sharedService, setSharedService] = React.useState(false)
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


    const valueTypingVideo = (value) => {
        setVideo(value.currentTarget.value)

    }


    // const valueTypingCostDes = (value) => {
    //     setCostD(value.currentTarget.value)
    // }

    const next = () => {
        // console.log(modeService)
        // console.log(titleService)
        let model = [
            {
                video: video
            },
            {
                shared:sharedService
            }
        ]
        props.handleNextStep(model)
    }
    // console.log("-->")
    // console.log(topicData.length)
    // console.log(to)
    // console.log(benefits)

    const sharedServiceByUser = (value) => {
        setSharedService(value)
        // console.log(value)
    }
    const preventDefault = (event) => event.preventDefault();

    return (
        <div>

            <Typography variant="h6" className={classes.title}>
                Añade un video para tu presentación
                 {/* {typeService} */}
                <div className={classes.subt}>

                </div>
            </Typography>
            {/* <Grid container spacing={3}> */}
            <Container maxWidth="md" className={classes.containerImage}>

                <Grid item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} container
                        direction="row"
                        justify="center"
                        alignItems="baseline">
                        <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">


                        </Grid>

                        <FormControlLabel className={classes.switchClass}
                            // control={<Checkbox value="allowExtraEmails" color="primary" />}
                            control={
                                <Typography className={classes.root}>
                                    <Link href="https://faqsnarau.s3.amazonaws.com/Como_agregar_un_video_a_Narau.pdf" target="_blank"
                                    // onClick={preventDefault}
                                    >
                                        {`¿Quieres aprender como subir un video? Clic aqui.`}
                                        {/* {" "} */}
                                    </Link>
                                </Typography>}
                        // label=""
                        />

                    </Grid>
                    <Grid container item xs={12} spacing={3}>

                        <TextField
                            required
                            id="video"
                            name="video"
                            defaultValue={editServicdeType ? props.currentDataService.video : videoEdit}

                            fullWidth
                            value={video}
                            variant="filled"
                            onChange={valueTypingVideo}
                            classes={{
                                root: "textFieldOverride",


                            }}
                        />
                    </Grid>
                    <Grid item xs={4} >
                        {video !== "" && video &&
                            <Card className={classes.rootCard}>
                                {/* <video width="320" height="240" controls className={classes.video}>
                                    <source src="https://www.youtube.com/watch?v=XH2UBlyiLOI" 
                                    controls="controls" 
                                    class="video-stream" 
                                    x-webkit-airplay="allow"  />
                                    <source src={video} type="video/mp4" />
                                </video> */}
                                <iframe width="320" height="240" className={classes.video}
                                    src={video}>
                                </iframe>
                            </Card>
                        }

                        {/* <Card className={classes.rootCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://imgcursos.s3.amazonaws.com/imgex.jpg"
                                        title="Contemplative Reptile"
                                    >
                                </CardActionArea>
                            </Card> */}
                    </Grid>
                    <br></br>
                    {props.asociated &&
                        <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">
                            <Grid item xs={12} container
                                direction="row"
                                justify="center"
                                alignItems="baseline">


                            </Grid>

                            <FormControlLabel className={classes.switchClass}
                                // control={<Checkbox value="allowExtraEmails" color="primary" />}
                                control={<SwitchControlShare
                                    changeEvent={sharedServiceByUser}
                                    checked={false}
                                />}
                                label="¿Es un servicio compartido?"
                            />

                        </Grid>
                    }
                    <Grid item xs={12} container
                        direction="row"
                        justify="center"
                        alignItems="baseline">
                        <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">


                        </Grid>
                        <Button onClick={props.back} variant="contained" className="btnBack"

                        >Regresar</Button>
                        {/* {to !== "" && benefits !== "" && topicData.length !== 0 && */}
                        <Button onClick={next} variant="contained" className={classes.margins} className="btnNext"

                        >Continuar</Button>
                        {/* } */}


                    </Grid>
                </Grid>


            </Container>

        </div >
    );
}
