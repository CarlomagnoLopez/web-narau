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
import timeClock from '../assets/narau-25.png';
import viaje from '../assets/viaje.png';
import InputAdornment from '@material-ui/core/InputAdornment';
import ComputerIcon from '@material-ui/icons/Computer';
import "./styles.css"
import "./stylesOverride.css"
import DeleteIcon from '@material-ui/icons/Delete';

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

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StepFourCreateCourse(props) {
    const classes = useStyles();

    const { typeService, countRefresh } = props;

    const editServicdeType = props.currentDataService;
    const { currentDataService } = props;

    const costEdit = currentDataService ? currentDataService.cost : "";
    const costDEdit = currentDataService ? currentDataService.costD : "";
    const timeEstimatedEdit = currentDataService ? currentDataService.timeEstimated : "";

    const [to, setTo] = React.useState("")
    const [cost, setCost] = React.useState(costEdit)
    const [costD, setCostD] = React.useState(costDEdit)
    const [timeEstimated, setTimeEstimated] = React.useState(timeEstimatedEdit)
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
    const valueTimeEstimated = (value) => {
        setTimeEstimated(value.currentTarget.value)
    }

    const next = () => {
        // console.log(modeService)
        // console.log(titleService)
        let model = [{
            cost: cost
        },
        {
            costD: costD
        },
        {
            timeEstimated: timeEstimated
        }
        ]
        props.handleNextStep(model)
    }
    // console.log("-->")
    // console.log(topicData.length)
    // console.log(to)
    // console.log(benefits)

    return (
        <div>

            <Typography variant="h6" className={classes.title}>
                ¡Últimos detalles!
                <div className={classes.subt}>

                </div>
            </Typography>
            <form className={classes.form} noValidate
            >
                <Grid container spacing={3}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img src={timeClock} width={120} />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            Tiempo de tu {typeService}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Estima todas las actividades
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    {/* <Grid item xs> */}
                                    <TextField
                                        required
                                        id="timeEstimated"
                                        name="timeEstimated"
                                        variant="filled"
                                        defaultValue={editServicdeType ? props.currentDataService.timeEstimated : ""}

                                        placeholder="ej: 1:30"
                                        fullWidth
                                        classes={{
                                            root: "textFieldOverrideCost",
                                        }}
                                        onChange={valueTimeEstimated}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">T</InputAdornment>,
                                            endAdornment: <InputAdornment position="end">Hrs.</InputAdornment>
                                        }}
                                    />
                                    {/* </Grid> */}

                                </Grid>

                            </Grid>

                        </Grid>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img src={money} />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            Tarifa por {typeService}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Monetiza tus conocimientos.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="cost"
                                        name="cost"
                                        defaultValue={editServicdeType ? props.currentDataService.cost : ""}
                                        variant="filled"
                                        fullWidth
                                        classes={{
                                            root: "textFieldOverrideCost",
                                        }}
                                        onChange={valueTypingCost}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            endAdornment: <InputAdornment position="end">mxn</InputAdornment>
                                        }}
                                    />
                                </Grid>

                            </Grid>

                        </Grid>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img src={viaje} />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            Agregar tarifa por desplazamiento
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Para distancias mayores a 10km. de tu domicilio
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="costD"
                                        name="costD"
                                        defaultValue={editServicdeType ? props.currentDataService.costD : ""}

                                        variant="filled"
                                        fullWidth
                                        classes={{
                                            root: "textFieldOverrideCost",


                                        }}
                                        onChange={valueTypingCostDes}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            endAdornment: <InputAdornment position="end">mxn</InputAdornment>
                                        }}
                                    />
                                </Grid>

                            </Grid>
                            <Grid item xs={12} container
                                direction="row"
                                justify="center"
                                alignItems="baseline">
                                <Button onClick={props.back} variant="contained"

                                >Regresar</Button>
                                {cost !== "" && costD !== "" && timeEstimated !== "" &&
                                    <Button onClick={next} variant="contained"

                                    >Continuar</Button>
                                }


                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

            </form >

        </div >
    );
}
