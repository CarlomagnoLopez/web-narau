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
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import foco from '../assets/foco.png';

import ComputerIcon from '@material-ui/icons/Computer';
import "./styles.css"
import "./stylesOverride.css"

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


    textField: {
        color: "#696969"
    },

    // textFieldunder: {
    //     color: "#696969"
    // }

    rootMode: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StepTwoCreateCourse(props) {
    const classes = useStyles();
    const editServicdeType = props.currentDataService;
    const { currentDataService, payload } = props;
    let modeEdit = currentDataService ? currentDataService.mode : "";
    let objetiveEdit = currentDataService ? currentDataService.objetive : "";
    let nameServiceEdit = currentDataService ? currentDataService.nameService : "";
    let subtitleEDit = currentDataService ? currentDataService.subtitle : "";

    if (!editServicdeType) {
        modeEdit = payload ? payload.mode : "";
        objetiveEdit = payload ? payload.objetive : "";
        nameServiceEdit = payload ? payload.nameService : "";
        subtitleEDit = payload ? payload.subtitle : "";
    }





    const [titleService, setTitleService] = React.useState(nameServiceEdit)
    const [objetive, setObjService] = React.useState(objetiveEdit)
    const [modeService, setMode] = React.useState(modeEdit)
    const [lemaService, setLemaService] = React.useState(subtitleEDit)
    const { typeService } = props;



    const back = () => {
        props.back()
    }
    const next = () => {
        console.log(modeService)
        console.log(titleService)
        let model = [{
            mode: modeService
        },
        {
            nameService: titleService
        },
        {
            objetive: objetive
        },
        {
            subtitle: lemaService
        }
        ]
        props.handleNextStep(model)
    }
    const valueTyping = (value) => {
        // console.log(value)
        setTitleService(value.currentTarget.value)

    }

    const valueTypingObjective = (value) => {
        // console.log(value)
        setObjService(value.currentTarget.value)

    }
    const valueTypingLema = (value) => {
        // console.log(value)
        setLemaService(value.currentTarget.value)

    }



    const selectMode = (data) => {
        setMode(data)

    }


    return (
        <div>



            <Typography variant="h6" className={classes.title}>
                Escribe un título para tu {typeService}
                <div className={classes.subt}>

                </div>
            </Typography>
            <form className={classes.form} noValidate
            // onSubmit={handleSubmit(onSubmit)}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            defaultValue={editServicdeType ? props.currentDataService.nameService : nameServiceEdit}
                            id="nameService"
                            name="nameService"
                            // label="Nombre del Servicio"
                            variant="filled"
                            fullWidth
                            placeholder="Escribe un título aquí"
                            classes={{
                                root: "textFieldOverride",


                            }}
                            onChange={valueTyping}
                        // autoComplete="fname"
                        // inputRef={register({ required: true })}
                        // error={errors.nameService ? true : false}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="md">

                            <div className="boxDescLong borderRoundDesc">


                                <Grid container spacing={2}>
                                    <Grid item>
                                        <img src={foco} />
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography className={classes.titleDesc}>
                                                    ¡Hora de impactar! Te recomendamos que
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2">

                                                    <ul>
                                                        <li>
                                                            El título sea breve y lo más concreto posible.

                                                </li>
                                                        {/* <li>
                                                            Incluyas para quién va dirigido (gerentes, ventas, sistemas, etc.)

                                                        </li> */}
                                                        <li>
                                                            Utilices términos de fácil entendimiento.

                                                        </li>
                                                        <li>
                                                            Excluyas toda palabra que refiera al aprendizaje, tales como: curso, enseñanza,
                                                            conocimiento, taller, etc. ¡Todas nuestras capacitaciones están orientadas a ello!
                                                        </li>
                                                    </ul>



                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </div>
                        </Container>

                    </Grid>

                    <Grid item xs={12}>
                        {modeService &&
                            <Alert variant="outlined" severity="success">
                                Modalidad seleccionada: {modeService.toUpperCase()}
                            </Alert>
                        }
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant="h6" className={classes.title}>
                            ¿En qué modalidad impartiras el {typeService}?
                        <div className={classes.subt}>

                            </div>
                        </Typography>
                    </Grid>


                    <Grid item xs={12} container
                        direction="row"
                        justify="center"
                        alignItems="baseline">
                        <div className={classes.rootMode}>
                            <Paper onClick={() => { selectMode("presencial") }}
                                classes={{
                                    root: "classTypeMode"
                                }}
                            >
                                {/* <IconButton> */}
                                <AccessibilityIcon fontSize="large" />

                                {/* </IconButton> */}
                                <Typography variant="subtitle1">
                                    Presencial
                                </Typography>

                            </Paper  >
                            <Paper onClick={() => { selectMode("online") }} classes={{
                                root: "classTypeModeLow"
                            }}>

                                {/* <IconButton> */}
                                <ComputerIcon fontSize="large" />

                                {/* </IconButton> */}
                                <Typography variant="subtitle1">
                                    Online
                           </Typography>
                            </Paper>
                            <Paper onClick={() => { selectMode("mixto") }} classes={{
                                root: "classTypeMode"
                            }}>

                                {/* <IconButton> */}
                                <ComputerIcon />
                                <AccessibilityIcon />

                                {/* </IconButton> */}
                                <Typography variant="subtitle1">
                                    Mixto
                           </Typography>
                            </Paper>
                        </div>
                    </Grid>





                    <Grid item xs={12}>

                        <Typography variant="h6" className={classes.title}>
                            Cuéntanos sobre el objetivo de tu {typeService}:
                        <div className={classes.subt}>

                            </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="objetivo"
                            name="objetivo"
                            variant="filled"
                            defaultValue={editServicdeType ? props.currentDataService.objetive : objetiveEdit}
                            fullWidth
                            placeholder="Escribe un objetivo aquí"
                            classes={{
                                root: "textFieldOverride",


                            }}
                            onChange={valueTypingObjective}
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="md">

                            <div className="boxDescLong borderRoundDesc">


                                <Grid container spacing={2}>
                                    <Grid item>
                                        <img src={foco} />
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography className={classes.titleDesc}>
                                                    ¡Tu aportación es única! Asegúrate de incluír:
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2">

                                                    <ul>
                                                        <li>
                                                            Una propuesta de valor

                            </li>
                                                        <li>
                                                            Problemática/s a resolver

                            </li>
                                                        <li>
                                                            Objetivos puntuales.

                            </li>
                                                        <li>
                                                            Contextos en donde puede se puede aplicar tu tema.
                            </li>
                                                    </ul>



                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </div>
                        </Container>

                    </Grid>

                    <Grid item xs={12}>

                        <Typography variant="h6" className={classes.title}>
                            Cuentanos como indentificamos tu {typeService}:
                            <div className={classes.subt}>

                            </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="subtitle"
                            name="subtitle"
                            variant="filled"
                            defaultValue={editServicdeType ? props.currentDataService.subtitle : subtitleEDit}

                            fullWidth
                            placeholder="ej: Logra la satisfacción y fidelización de los clientes a través de técnicas y estrategias de clase mundial. "
                            classes={{
                                root: "textFieldOverride",


                            }}
                            onChange={valueTypingLema}
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12} container
                        direction="row"
                        justify="center"
                        alignItems="baseline">

                        <Button onClick={back} variant="contained"

                        >Regresar</Button>

                        {titleService !== "" && modeService !== "" && objetive !== "" && lemaService !== "" &&
                            <Button onClick={next} variant="contained"

                            >Continuar</Button>
                        }




                    </Grid>
                </Grid>


            </form >

        </div>
    );
}
