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
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo_sun from '../assets/sun_logo.png';
import imgTaller from '../assets/narau-46.png';
import imgAsesoria from '../assets/narau-47.png';
import imgAprendizajeOnline from '../assets/narau-48.png';
import imgAsesoriaPersonalizada from '../assets/narau-49.png';
import imgConferencia from '../assets/narau-50.png';
import imgDiplomado from '../assets/narau-51.png';

import ButtonBase from '@material-ui/core/ButtonBase';
import "./styles.css"

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
    buttonSelect: {
        top: "83%",
        left: "calc(50% - 34px)",
        position: "absolute",
        margin: "10px !important",
        backgroundColor: "#fc5000 !important",
        borderRadius: "1rem !important",
        border: "1px solid !important",
        borderColor: "#fc5000 !important",
        color: "#fff !important"
    },
    root: {
        flexGrow: 1,
        paddingTop: "55px",
        '& > div': {
            paddingLeft: "55px",
        },
    },
    paperTaller: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "250px",
        height: "125px",
        color: theme.palette.text.secondary,
        backgroundColor: "#fc5000",
        borderRadius: "13px"
    },
    paperAsesoria: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "250px",
        height: "125px",
        color: theme.palette.text.secondary,
        backgroundColor: "#ff931e",
        borderRadius: "13px"
    },
    paperAprendizajeOnline: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "250px",
        height: "125px",
        color: theme.palette.text.secondary,
        backgroundColor: "#7175d8",
        borderRadius: "13px"

    },
    paperAsesoriaPersonalizada: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "250px",
        height: "125px",
        color: theme.palette.text.secondary,
        backgroundColor: "#2E3059",
        borderRadius: "13px"
    },
    paperConferencia: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "250px",
        height: "125px",
        color: theme.palette.text.secondary,
        backgroundColor: "#0186CB",
        borderRadius: "13px"

    },
    paperDiplomado: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "250px",
        height: "125px",
        color: theme.palette.text.secondary,
        backgroundColor: "#8627d6",
        borderRadius: "13px"

    },
    image: {
        width: "100%",
        height: "100%",
    },
    img: {
        marginLeft: "auto",
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    backTaller: {
        backgroundColor: "#fc5000"
    },
    titleCard: {
        marginTop: "auto",
        color: "#fff",
        marginLeft: "10px",
        fontWeight: "bolder",
        textAlign: "start"
        // fontWeigtj
    },
    btnContinuar: {
        paddingTop: "20px"
    }


}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StepOneCreateCourse(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const editServicdeType = props.currentDataService;
    const [opneDesc, setOpenDesc] = React.useState(editServicdeType);
    const [openDesc1, setOpenDesc1] = React.useState(false);
    const [openDesc2, setOpenDesc2] = React.useState(false);
    const [openDesc3, setOpenDesc3] = React.useState(false);


    let notme = false;
    if (props.currentDataService2) {
        notme = props.currentDataService2.notme;
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        // setOpen(false);
        props.closeCreateCourse()
    };

    const stopPlanet_1 = (e) => {



        setOpenDesc1(true)

        var planet1 = document.getElementById("planet_1");
        planet1.classList.add("animatePlanet_paused_1")
        planet1.classList.add("borderHover_1")
        var planet2 = document.getElementById("planet_2");
        planet2.classList.add("animatePlanet_paused_2")
        var planet3 = document.getElementById("planet_3");
        planet3.classList.add("animatePlanet_paused_3")
        var desc = document.getElementById("boxDescA");
        console.log(desc)

        // let x = (e.currentTarget.offsetTop - 150) + "px";
        // let y = (e.currentTarget.offsetLeft + 150) + "px";

        // setTimeout(() => {
        //   var desc = document.getElementById("boxDescA");
        //   console.log(desc)

        //   desc.style.left = y;
        //   desc.style.top = x ;
        // }, 200);

    }
    const stopPlanet_2 = (e) => {
        setOpenDesc2(true)


        console.log("2222222")
        var planet1 = document.getElementById("planet_1");
        planet1.classList.add("animatePlanet_paused_1")
        var planet2 = document.getElementById("planet_2");
        planet2.classList.add("animatePlanet_paused_2")
        planet2.classList.add("borderHover_2")
        var planet3 = document.getElementById("planet_3");
        planet3.classList.add("animatePlanet_paused_3")
        var desc = document.getElementById("boxDescT");
        console.log(desc)

        // let x = (e.currentTarget.offsetTop - 150) + "px";
        // let y = (e.currentTarget.offsetLeft + 150) + "px";

        // setTimeout(() => {
        //   var desc = document.getElementById("boxDescT");
        //   console.log(desc)

        //   desc.style.left = y;
        //   desc.style.top = x ;
        // }, 200);


    }

    const stopPlanet_3 = (e) => {
        setOpenDesc3(true)

        console.log("333333")

        var planet1 = document.getElementById("planet_1");
        planet1.classList.add("animatePlanet_paused_1")
        var planet2 = document.getElementById("planet_2");
        planet2.classList.add("animatePlanet_paused_2")
        var planet3 = document.getElementById("planet_3");
        planet3.classList.add("animatePlanet_paused_3")
        planet3.classList.add("borderHover_3")

        // let x = (e.currentTarget.offsetTop - 150) + "px";
        // let y = (e.currentTarget.offsetLeft + 150) + "px";

        // setTimeout(() => {
        //   var desc = document.getElementById("boxDescC");
        //   console.log(desc)

        //   desc.style.left = y;
        //   desc.style.top = x ;
        // }, 200);



    }

    const playPlanet = (e) => {
        setOpenDesc1(false)
        setOpenDesc2(false)
        setOpenDesc3(false)
        // e.currentTarget.classList.remove("animatePlanet_paused")
        var planet1 = document.getElementById("planet_1");
        var planet2 = document.getElementById("planet_2");
        var planet3 = document.getElementById("planet_3");

        planet1.classList.remove("animatePlanet_paused_1")
        planet1.classList.remove("borderHover_1")
        planet2.classList.remove("animatePlanet_paused_2")
        planet2.classList.remove("borderHover_2")
        planet3.classList.remove("animatePlanet_paused_3")
        planet3.classList.remove("borderHover_3")
    }

    const selectService1 = (service) => {
        setOpenDesc(service)
        // stopPlanet_1();
    }


    const next = () => {
        props.handleNextStep({ serviceType: opneDesc })
    }

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
    return (
        <div>

            <Typography variant="h6" className={classes.title}>
                ¿Qué tipo de servicio deseas impartir?
            <div className={classes.subt}>

                </div>
            </Typography>
            {opneDesc &&
                <Typography variant="subtitle1" className={classes.title}>
                    Has seleccionado {writeModeService(opneDesc)}
                </Typography>
            }

            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={4} >
                                <Paper className={classes.paperTaller}>
                                    {/* <div className={classes.backTaller}> */}
                                    <ButtonBase className={classes.image} onClick={() => { selectService1("taller") }} disabled={notme}>
                                        <Typography variant="h6" className={classes.titleCard}>
                                            Taller
                                        </Typography>
                                        <img className={classes.img} alt="complex" src={imgTaller} />
                                    </ButtonBase>
                                    {/* </div> */}

                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperAsesoria}>
                                    <ButtonBase className={classes.image} onClick={() => { selectService1("asesoria") }} disabled={notme}>
                                        <Typography variant="h6" className={classes.titleCard}>
                                            Asesoría
                                        </Typography>
                                        <img className={classes.img} alt="complex" src={imgAsesoria} />
                                    </ButtonBase>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperAprendizajeOnline}>

                                    <ButtonBase className={classes.image} onClick={() => { selectService1("conferencia") }} disabled={notme}>
                                        <Typography variant="h6" className={classes.titleCard}>
                                            Conferencias
                                        </Typography>
                                        <img className={classes.img} alt="complex" src={imgConferencia} />
                                    </ButtonBase>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={4}>
                                <Paper className={classes.paperAsesoriaPersonalizada}>
                                    <ButtonBase className={classes.image} onClick={() => { selectService1("asesoriapersonal") }} disabled={notme}>
                                        <Typography variant="h6" className={classes.titleCard}>
                                            Asesoría
                                            personalizada
                                        </Typography>
                                        <img className={classes.img} alt="complex" src={imgAsesoriaPersonalizada} />
                                    </ButtonBase>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperConferencia}>
                                    <ButtonBase className={classes.image} onClick={() => { selectService1("webinar") }} disabled={notme}>


                                        <Typography variant="h6" className={classes.titleCard}>
                                            Aprendizaje
                                            online
                                        </Typography>
                                        <img className={classes.img} alt="complex" src={imgAprendizajeOnline} />
                                    </ButtonBase>
                                </Paper>
                            </Grid>
                            {/* <Grid item xs={4}>
                                <Paper className={classes.paperDiplomado}>
                                    <ButtonBase className={classes.image}  disabled = {notme}>
                                        <Typography variant="h6" className={classes.titleCard}>
                                            Diplomados
                                        </Typography>
                                        <img className={classes.img} alt="complex" src={imgDiplomado} />
                                    </ButtonBase>
                                </Paper>
                            </Grid> */}
                        </React.Fragment>
                    </Grid>
                </Grid>
                {opneDesc &&


                    <Grid item xs={12} container className={classes.btnContinuar}
                        direction="row"
                        justify="center"
                        alignItems="baseline">
                        <Button onClick={next} variant="contained" className="btnNext"
                        >Continuar</Button>
                    </Grid>

                }

            </div>

            {/* <div className="sun_orbit">
            </div>

            <div className="sun_logo" >
                <img src={logo_sun} />
            </div>
            <div id="planet_1" className="animatePlanet_1" onMouseOver={stopPlanet_1} onMouseLeave={playPlanet}
                onClick={() => { selectService1("asesoria") }} >
            </div>
            <div>
                <div id="planet_2" className="animatePlanet_2" onMouseOver={stopPlanet_2} onMouseLeave={playPlanet}
                    onClick={() => { selectService1("taller") }} >
                </div>
            </div>

            <div id="planet_3" className="animatePlanet_3" onMouseOver={stopPlanet_3} onMouseLeave={playPlanet}
                onClick={() => { selectService1("conferencia") }} >
            </div>
            <div>
                {openDesc1 &&
                    <div id="boxDescA" className="boxDesc colorAsesoria"> Asesoría <br></br><span >Click en continuar para crear un Asesoría</span></div>
                }

                {openDesc3 &&
                    <div id="boxDescC" className="boxDesc colorConferencia"> Conferencia <br></br><span >Click en continuar para crear una conferencia</span></div>
                }
                {openDesc2 &&
                    <div id="boxDescT" className="boxDesc colorTaller"> Taller <br></br><span >Click en continuar para crear un taller</span></div>
                }
            </div> */}



        </div>
    );
}
