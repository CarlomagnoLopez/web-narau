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
    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StepThreeCreateCourse(props) {
    const classes = useStyles();

    const { typeService, countRefresh } = props;

    const editServicdeType = props.currentDataService;
    const { currentDataService, payload } = props;

    let toEdit = currentDataService ? currentDataService.to : "";
    let benefitsEdit = currentDataService ? currentDataService.benefits : "";
    let topicsEdit = currentDataService ? currentDataService.topics : [];
    let deliverableEdit = currentDataService ? currentDataService.deliverables : [];
    if (!editServicdeType) {
        toEdit = payload ? payload.to : "";
        benefitsEdit = payload ? payload.benefits : "";
        topicsEdit = payload.topics ? payload.topics : [];
        deliverableEdit = payload.deliverables ? payload.deliverables : [];
    }



    const [to, setTo] = React.useState(toEdit)
    const [benefits, setBenefits] = React.useState(benefitsEdit)
    const [topicData, setTopicData] = React.useState(topicsEdit)
    const [deliverableData, setDeliverableData] = React.useState(deliverableEdit)
    const [topic, setTopic] = React.useState("")
    const [deliverable, setDeliverable] = React.useState("")
    let notme = false;
    if (props.currentDataService) {
        notme = props.currentDataService.notme;
    }

    // const next = () => {
    //     props.nextStep()
    // }
    const valueTypingTo = (value) => {
        setTo(value.currentTarget.value)
    }
    const addNewTopic = (data) => {

        if (topic !== "") {
            props.countRefresh();
            topicData.push({ tema: topic });
            setTopicData(topicData);
            setTopic("")
            // setTo("")
        }

    }

    const addDeliverable = (data) => {

        if (deliverable !== "") {
            props.countRefresh();
            deliverableData.push({ tema: deliverable });
            setDeliverableData(deliverableData);
            setDeliverable("")
            // setTo("")
        }

    }

    const valueTypingBenefits = (value) => {
        setBenefits(value.currentTarget.value)
    }

    const valueTypingTopics = (value) => {
        setTopic(value.currentTarget.value)
    }
    const valueTypingDeliverables = (value) => {
        setDeliverable(value.currentTarget.value)
    }
    const deleteTema = (value) => {
        props.countRefresh();
        // let _topicData = 
        topicData.splice(value, 1)
        setTopicData(topicData)
        // console.log(value)
    }

    const deleteDeliverable = (value) => {
        props.countRefresh();
        // let _topicData = 
        deliverableData.splice(value, 1)
        setDeliverableData(deliverableData)
        // console.log(value)
    }
    const next = () => {
        // console.log(modeService)
        // console.log(titleService)
        let model = [{
            to: to
        },
        {
            benefits: benefits
        },
        {
            topics: topicData
        }
            ,
        {
            deliverables: deliverableData
        }
        ]
        props.handleNextStep(model)
    }
    // console.log("-->")
    // console.log(topicData.length)
    // console.log(to)
    // console.log(benefits)
    const writeModeService = (value) => {
        switch (value) {
            case "asesoria":
                return "asesoría";
                break;
            case "asesoriapersonal":
                return "asesoría personalizada";
                break;
            case "webinar":
                return "aprendizaje online";
                break;
            default:
                return value
        }
    }
    const writeModeServiceSub = (value) => {
        switch (value) {
            case "asesoria":
                return "la ";
                break;
            default:
                return "el "
        }
    }

    const sectionList = (typeService) => {

        switch (typeService) {
            case "asesoria":
            case "asesoriapersonal":
                return "Actividades Clave"
                break;
            case "webinar":
                return "Ejercicios"

                break;
            default:
                return "Diseña un temario"
                break;
        }
    }


    const validateRules = (typeService) => {
        // (to !== "" && benefits !== "" && topicData.length !== 0 && deliverableData.length !== 0) &&
        if (typeService === "webinar" || typeService === "asesoriapersonal") {
            if (to !== "" && benefits !== "" && topicData.length !== 0 && deliverableData.length !== 0) {
                return true
            }
            return false
        } else {
            if (to !== "" && benefits !== "" && topicData.length !== 0) {
                return true
            }
            return false
        }
    }
    return (
        <div>

            <Typography variant="h6" className={classes.title}>
                Datos específicos
                <div className={classes.subt}>

                </div>
            </Typography>
            <form className={classes.form} noValidate
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="body1" className={classes.title}
                            classes=
                            {{
                                root: classes.typography
                            }}>
                            ¿A quién va dirigido tu  {writeModeService(typeService)}?
                            {/* <div className={classes.subt}>

                            </div> */}
                        </Typography>
                        <Typography variant="body2" className={classes.title}>
                            Escribe área o puesto de trabajo
                            {/* <div className={classes.subt}>

                            </div> */}
                        </Typography>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                disabled={notme}
                                required
                                // defaultValue={props.nameService}
                                id="to"
                                name="to"
                                defaultValue={editServicdeType ? props.currentDataService.to : toEdit}
                                // label="Nombre del Servicio"
                                variant="filled"
                                // value={to}
                                fullWidth
                                placeholder="ej: gerentes, jefes y supervisores en el área de sistemas"
                                classes={{
                                    root: "textFieldOverride",


                                }}
                                onChange={valueTypingTo}
                            />
                        </Grid>


                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1" className={classes.title}
                            classes=
                            {{
                                root: classes.typography
                            }}>
                            ¿Cuáles serán sus beneficios al tomar tu {writeModeService(typeService)}?
                            {/* <div className={classes.subt}>

                            </div> */}
                        </Typography>
                        <Typography variant="body2" className={classes.title}>
                            ¡Impacta con los resultados! No olvides ser realista.
                            {/* <div className={classes.subt}>

                            </div> */}
                        </Typography>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                disabled={notme}

                                // defaultValue={props.nameService}
                                id="benefits"
                                name="benefits"
                                defaultValue={editServicdeType ? props.currentDataService.benefits : benefitsEdit}

                                // label="Nombre del Servicio"
                                variant="filled"
                                fullWidth
                                placeholder="ej: Al finalizar este entrenamiento los participantes podrá identificar oportunidades de mejora y acciones a desarrollar para mejorar sus procesos a través de una metodología de éxito."
                                classes={{
                                    root: "textFieldOverride",


                                }}
                                multiline
                                rows={4}
                                onChange={valueTypingBenefits}
                            />
                        </Grid>


                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" className={classes.title}
                            classes=
                            {{
                                root: classes.typography
                            }}>
                            <span>

                                {sectionList(typeService)}
                            </span>
                        </Typography>
                        <Typography variant="body2" className={classes.title}>
                            Conocer los temas a tratar aumenta las probabilidades de venta
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="topics"
                            disabled={notme}

                            name="topics"
                            fullWidth
                            value={topic}
                            variant="filled"
                            onChange={valueTypingTopics}
                            classes={{
                                root: "textFieldOverride",


                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>

                        <Fab onClick={addNewTopic} disabled={notme} classes={{
                            root: classes.rootFab,

                        }}
                        >
                            <AddIcon fontSize="large" color="action"
                                classes={{
                                    colorAction: classes.colorActionFab
                                }}
                            />
                        </Fab>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <List dense={true}>
                            {topicData && topicData.map((item, index) => {
                                return (<ListItem key={index}>
                                    <ListItemText classes={{
                                        root: classes.rootListText

                                    }}
                                        primary={(index + 1) + ") " + item.tema}
                                    />
                                    <ListItemSecondaryAction >
                                        <IconButton edge="end" aria-label="delete" disabled={notme}
                                            onClick={() => { deleteTema(index) }}
                                        >
                                            <DeleteIcon fontSize="large" color="action"
                                                classes={{
                                                    colorAction: classes.colorActionFab
                                                }} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>)

                            })
                            }
                        </List>
                    </Grid>
                    {(typeService === "webinar" || typeService === "asesoriapersonal") &&
                        <React.Fragment>
                            <Grid item xs={12}>
                                <Typography variant="body1" className={classes.title}
                                    classes=
                                    {{
                                        root: classes.typography
                                    }}>
                                    <span>

                                        {/* {sectionList(typeService)}
                                 */}
                                 Entregables
                            </span>
                                </Typography>
                                <Typography variant="body2" className={classes.title}>
                                    Es importante dejar claro los entregables a tus clientes
                        </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="topics"
                                    disabled={notme}

                                    name="topics"
                                    fullWidth
                                    value={deliverable}
                                    variant="filled"
                                    onChange={valueTypingDeliverables}
                                    classes={{
                                        root: "textFieldOverride",


                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>

                                <Fab onClick={addDeliverable} disabled={notme} classes={{
                                    root: classes.rootFab,

                                }}
                                >
                                    <AddIcon fontSize="large" color="action"
                                        classes={{
                                            colorAction: classes.colorActionFab
                                        }}
                                    />
                                </Fab>
                            </Grid>
                        </React.Fragment>
                        // "este texto"
                    }
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <List dense={true}>
                            {deliverableData && deliverableData.map((item, index) => {
                                return (<ListItem key={index}>
                                    <ListItemText classes={{
                                        root: classes.rootListText

                                    }}
                                        primary={(index + 1) + ") " + item.tema}
                                    />
                                    <ListItemSecondaryAction >
                                        <IconButton edge="end" aria-label="delete" disabled={notme}
                                            onClick={() => { deleteDeliverable(index) }}
                                        >
                                            <DeleteIcon fontSize="large" color="action"
                                                classes={{
                                                    colorAction: classes.colorActionFab
                                                }} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>)

                            })
                            }
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        {/* <Fab classes={{
                            root: classes.rootFab,

                        }}
                        >
                            <AddIcon fontSize="large" color="action"
                                classes={{
                                    colorAction: classes.colorActionFab
                                }}
                            />
                        </Fab> */}
                    </Grid>
                    {(typeService === "webinar" || typeService === "asesoriapersonal") &&
                        < Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">
                            <Button onClick={props.back} variant="contained" className="btnBack"

                            >Regresar</Button>

                            {(to !== "" && benefits !== "" && topicData.length !== 0 && deliverableData.length !== 0) &&
                                <Button onClick={next} variant="contained" className="btnNext"

                                >Continuar</Button>
                            }


                        </Grid>
                    }

                    {(typeService !== "webinar" && typeService !== "asesoriapersonal") &&
                        < Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">
                            <Button onClick={props.back} variant="contained" className="btnBack"

                            >Regresar</Button>

                            {(to !== "" && benefits !== "" && topicData.length !== 0) &&
                                <Button onClick={next} variant="contained" className="btnNext"

                                >Continuar</Button>
                            }


                        </Grid>
                    }

                </Grid>

            </form >

        </div >
    );
}
