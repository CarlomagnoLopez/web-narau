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
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import Avatar from '@material-ui/core/Avatar';
import ComputerIcon from '@material-ui/icons/Computer';
import "./styles.css"
import "./stylesOverride.css"
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    let modulesEdit = currentDataService ? currentDataService.modules : [];
    if (!editServicdeType) {
        toEdit = payload ? payload.to : "";
        benefitsEdit = payload ? payload.benefits : "";
        topicsEdit = payload.topics ? payload.topics : [];
        deliverableEdit = payload.deliverables ? payload.deliverables : [];
        modulesEdit = payload.modules ? payload.modules : [];
    }



    const [to, setTo] = React.useState(toEdit)
    const [benefits, setBenefits] = React.useState(benefitsEdit)
    const [topicData, setTopicData] = React.useState(topicsEdit)
    const [deliverableData, setDeliverableData] = React.useState(deliverableEdit)
    const [modules, setModules] = React.useState(modulesEdit)
    const [topic, setTopic] = React.useState("")
    const [deliverable, setDeliverable] = React.useState("")
    const [currentModule, setCurrentModule] = React.useState("")
    let notme = false;
    let notEditTopics = false;
    // if (props.currentDataService) {
    //     notme = props.currentDataService.notme;
    // }

    if (props.currentDataService) {
        if (typeService !== "diplomado") {
            notme = props.currentDataService.notme;
        }
        if (typeService === "diplomado") {
            notEditTopics = true;
            notme = false;
        }
    }

    // const next = () => {
    //     props.nextStep()
    // }
    const valueTypingTo = (value) => {
        setTo(value.currentTarget.value)
    }

    const addNewModule = () => {

        console.log("add module")
        if (currentModule !== "") {
            props.countRefresh();

            let serviceData = ""
            props.serviceAll.filter((item) => {
                if (item["custom-keys"].split(" | ")[2] === currentModule.split(" - ")[1]) {
                    serviceData = item;//console.log(item)
                }
            })

            modules.push({
                tema: currentModule,
                serviceData: serviceData
            });
            setModules(modules);
            setCurrentModule("")
            // setTo("")
        }

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

    const deleteModule = (value) => {
        props.countRefresh();
        // let _topicData = 
        modules.splice(value, 1)
        setModules(modules)
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
        },
        {
            deliverables: deliverableData
        },
        {
            modules: modules,
            // completeServiceData:

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
            case "diplomado":
                return "Diseña tu diplomado"

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

    const changeModules = (value) => {

        setCurrentModule(value.currentTarget.innerText.split(" - ")[0] + " - " + value.currentTarget.innerText.split(" - ")[1]);
        // console.log(value)
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


                    {(typeService !== "diplomado") &&

                        <React.Fragment>
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

                        </React.Fragment>
                    }


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


                    {(typeService === "diplomado") &&

                        <React.Fragment>
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
                                    Conocer los modulos a tratar aumenta las probabilidades de venta
                               </Typography>
                            </Grid>
                            {/* <Grid item xs={12} sm={3}>
                            </Grid> */}
                            <Grid item xs={12} sm={11}>
                                {/* <TextField
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
                                /> */}
                                <Autocomplete
                                    disabled={notEditTopics}
                                    id="combo-box-demo"
                                    options={props.serviceAll}
                                    onChange={changeModules}
                                    fullWidth
                                    getOptionLabel={(option) => option["custom-attr"].nameService + " - " + option["custom-keys"].split(" | ")[1]}
                                    renderOption={(option) => (
                                        <React.Fragment>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <FolderSharedIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={option["custom-attr"].nameService} secondary={`${option["custom-keys"].split(" | ")[1]} - ${option["custom-keys"].split(" | ")[2]}`} />
                                            </ListItem>
                                        </React.Fragment>
                                    )}
                                    renderInput={(params) => <TextField fullWidth {...params} placeholder={"Selecciona los modulos disponibles"} variant="filled"
                                        classes={{
                                            root: "textFieldOverride"
                                        }}
                                    />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={1} style={{ textAlign: "center" }}>

                                <Fab
                                    onClick={addNewModule} disabled={notEditTopics} classes={{
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
                    }


                    {/* <Grid item xs={12} sm={3}>
                    </Grid> */}
                    <Grid item xs={12} sm={11}>
                        <List dense={true}>
                            {modules && modules.map((item, index) => {
                                return (<ListItem key={index}>
                                    <ListItemText classes={{
                                        root: classes.rootListText

                                    }}
                                        primary={(index + 1) + ") " + item.tema}
                                    />
                                    <ListItemSecondaryAction >
                                        <IconButton edge="end" aria-label="delete" disabled={notEditTopics}
                                            onClick={() => { deleteModule(index) }}
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
                    <Grid item xs={12} sm={1}>
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

                    {(typeService !== "webinar" && typeService !== "asesoriapersonal" && typeService !== "diplomado") &&
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


                    {(typeService === "diplomado") &&
                        < Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="baseline">
                            <Button onClick={props.back} variant="contained" className="btnBack"

                            >Regresar</Button>

                            {(to !== "" && benefits !== "" && modules.length !== 0) &&
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
