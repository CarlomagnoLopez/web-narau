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

    const [to, setTo] = React.useState("")
    const [benefits, setBenefits] = React.useState("")
    const [topicData, setTopicData] = React.useState([])
    const [topic, setTopic] = React.useState("")

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

    const valueTypingBenefits = (value) => {
        setBenefits(value.currentTarget.value)
    }

    const valueTypingTopics = (value) => {
        setTopic(value.currentTarget.value)
    }
    const deleteTema = (value) => {
        props.countRefresh();
        // let _topicData = 
        topicData.splice(value, 1)
        setTopicData(topicData)
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
                            ¿A quién va dirigido tu  {typeService}?
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
                                required
                                // defaultValue={props.nameService}
                                id="to"
                                name="to"
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
                            ¿Cuáles serán sus beneficios al tomar tu  {typeService}?
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
                                // defaultValue={props.nameService}
                                id="benefits"
                                name="benefits"
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
                            Diseña un temario
                            {/* <div className={classes.subt}>

                            </div> */}
                        </Typography>
                        <Typography variant="body2" className={classes.title}>
                            Conocer los temas a tratar aumenta las probabilidades de venta
                            {/* <div className={classes.subt}>

                            </div> */}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="topics"
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
                        <Fab onClick={addNewTopic} classes={{
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
                                        <IconButton edge="end" aria-label="delete"
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
                    <Grid item xs={12} container
                        direction="row"
                        justify="center"
                        alignItems="baseline">
                        <Button onClick={props.back} variant="contained"

                        >Regresar</Button>
                        {to !== "" && benefits !== "" && topicData.length !== 0 &&
                            <Button onClick={next} variant="contained"

                            >Continuar</Button>
                        }


                    </Grid>
                </Grid>

            </form >

        </div >
    );
}
