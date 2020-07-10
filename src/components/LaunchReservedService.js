import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CourseForm from './CourseForm';
import Review from './Review';
import TextField from '@material-ui/core/TextField';

// import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import SimpleRating from "../controls/SimpleRating"
import Avatar from '@material-ui/core/Avatar';

// import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import logo_sun from '../assets/sun_logo.png';
// import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
import logo_login from '../assets/logos-narau-04.png';
import "../css/stylesGlobalOverRide.css"
import imageBenTal from '../assets/narau-01.png';
import imageBenSem from '../assets/narau-02.png';
import imageBenAse from '../assets/narau-03.png';
import Chip from '@material-ui/core/Chip';
import StaticCalendarCompany from "../controls/StaticCalendarCompany"
import foco from '../assets/foco_orange.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

// const imageProfileDynamo = JSON.parse(localStorage.getItem("contentUserCurrentAvatar"));

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#000",
    color: "#fff",
    boxShadow: "none",
    // pointerEvents: "none"
  },
  infoProfile: {
    paddingTop: "10px"
  },
  infoProfileName: {
    fontWeight: "bold",
    fontSize: "1rem"
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  gridBen: {
    color: "#fff",
    backgroundColor: localStorage.getItem("colorDefaul"),
    width: "69%",
    margin: "39px",
    // color: #fff;
    // background-color:localStorage.getItem("colorDefaul")
    borderRadius: "1rem"

  },
  paper: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  paperVideo: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
    },
  },

  paperVideoLeft: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
    },
  },
  paperCustom: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
    },
  },
  // rootCard: {
  //   maxWidth: 345,
  //   // marginTop: "53px"
  //   // marginLeft: "49px"

  // },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  closeIcon: {
    position: "absolute",
    // marginLeft: "0px"
    width: "100%"
  },
  buttonclose: {
    marginLeft: "94%"
  },
  rootCard: {
    width: "100%",
  },
  media: {
    width: "100%",
    height: 180,
  },
  typoservice: {
    color: localStorage.getItem("colorDefaul"),
    fontSize: "20px",
    textTransform: "capitalize",
  },
  nameservice: {
    fontWeight: "bold"
  },
  nameserviceType: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: "1rem",
    textAlign: "center"
  },
  gridCustom: {

  },
  paperCustomCost: {
    color: localStorage.getItem("colorDefaul"),
    fontWeight: "bolder"
  },
  buttonCustom: {
    // backgroundColor: "#66b32e",
    // color: "#fff",
    // width: "100%",
    // borderRadius: ".6rem",
    // 'hover': {
    //   backgroundColor: "#66b32e",
    //   // width: "100%",
    //   // color: "#fff",
    // },
  },
  dividerClass: {
    margin: "10px"
  },
  logo: {
    margin: "1rem",
  },
  logoTopBar: {
    width: `95px`,
  },
  imageContainer: {
    maxWidth: "100%",
    padding: "0px"
  },
  imageCardContainer: {
    borderRadius: "0px"
  },
  rootChipRlation: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    marginTop: "1rem",
    marginBottom: "1rem",
    '& > *': {
      backgroundColor: "#b3b3b3",
      margin: theme.spacing(0.5),
      color: "#fff",
      borderRadius: ".6rem"
    },
  },
  rootChip: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    marginTop: "1rem",
    marginBottom: "1rem",
    '& > *': {
      backgroundColor: localStorage.getItem("colorDefaul"),
      margin: theme.spacing(0.5),
      color: "#fff",
      borderRadius: ".6rem"
    },
  },

  avatarHeaderMessage: {
    position: "relative",
    margin: "0 auto",
    backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

    // backgroundImage: `url(${imageProfileDynamo})`,
    backgroundImage: `url(${localStorage.getItem("contentUserCurrentAvatar")})`,
    backgroundSize: "contain",
    // top: "-6rem",
    // color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: localStorage.getItem("colorDefaul"),
    width: theme.spacing(12),
    height: theme.spacing(12),
    border: "solid"
  },
  avatarHeader: {
    backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

    // backgroundImage: `url(${imageProfileDynamo})`,
    backgroundImage: `url(${localStorage.getItem("contentUserCurrentAvatar")})`,
    backgroundSize: "contain",
    // top: "-6rem",
    // color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: localStorage.getItem("colorDefaul"),
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: "solid"
  },
  paper: {
    padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    // whiteSpace: 'nowrap',
    marginTop: "30%",
    marginBottom: theme.spacing(1),
  },
  paperCal: {
    padding: theme.spacing(1),
    // textTransform: "capitalize",
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    // marginTop: "10%",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  titleDesc: {
    fontSize: "1rem",
    fontWeight: "bold"
  },
  rootMessage: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paperMessage: {
    whiteSpace: "pre-wrap",
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    textAlign: "left",
    backgroundColor: "#ff931e",
    borderRadius: "1rem",
    color: "#fff"
  },
  paperCardCourse: {
    padding: theme.spacing(1.2),
    borderRadius: "1.3rem",
    // maxWidth
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }

}));



export default function LaunchReservedService(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(true);
  const [imageBase, setImage] = React.useState(localStorage.getItem("contentUserCurrentAvatar"))
  const [flCont, setFlCont] = React.useState(0)
  const [showNextButton, setEnableButton] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const [valueMessage, setValueMessage] = React.useState("")
  const [selectedCustomerDate, setSelectedDate] = React.useState("")
  const [lastDates, setLastDates] = React.useState(props.byUser["custom-dates"])



  // const handleNext = (data, sk) => {
  //   if (activeStep === 1) {
  //     props.closeFormCourse(data, sk)
  //   } else {
  //     props.closeFormCourse(data, sk)
  //     // setActiveStep(activeStep + 1);
  //   }

  // };

  const handleClose = (data) => {
    setOpenDialog(false)
    props.closeForm()

  };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  const convertCapitalize = (data) => {

    if (data) {
      return data.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    }

    return ""


  }
  const reservedService = () => {
    currentDataService.courseId = props.currentDataSortKey;
    props.reservedService(currentDataService);
  }

  const addToWishList = () => {
    currentDataService.courseId = props.currentDataSortKey;
    props.addToWishList(currentDataService)
    // props.handleCloseDetail()
    // setOpen(false);
    handleClose();
  }




  const imageService = props.currentDataService.img ? "https://imgcursos.s3.amazonaws.com/" + props.currentDataService.img : "../assets/imgex.jpg"
  const { currentDataService } = props;
  const video = currentDataService.video ? currentDataService.video : "https://imgcursos.s3.amazonaws.com/vide_demo.mp4"

  let modeService = "";


  switch (currentDataService.mode) {
    case "presencial":
      modeService = "Presencial";
      break;
    case "mixto":
      modeService = "Mixto";

      break;
    case "online":
      modeService = "En linea";
      break;
  }
  let imgClass = "";
  let imageBen = "";
  switch (currentDataService.serviceType) {
    case "conferencia":
      // if(currentDataService.mode === "mixto"){
      //   imgClass = "imgSemonline imgSempresencial"
      // }else{
      imageBen = imageBenSem;
      imgClass = "imgSem" + currentDataService.mode
      // }

      break;
    case "taller":
      // if(currentDataService.mode === "mixto"){
      //   imgClass = "imgTalonline imgTalpresencial"
      // }else{
      imageBen = imageBenTal;

      imgClass = "imgTal" + currentDataService.mode
      // }

      break;
    case "asesoria":
      // if(currentDataService.mode === "mixto"){
      //   imgClass = "imgAseonline imgAsepresencial"
      // }else{
      imageBen = imageBenAse;

      imgClass = "imgAse" + currentDataService.mode
      // }
      break;
  }


  const enableButton = (value) => {
    setEnableButton(value)

  }

  const handleContinue = () => {

    setEnableButton(false)
    setCurrentStep(1)
  }

  const handleSendRequest = () => {

      let payloadServiceRequest = {
         date: selectedCustomerDate,
         message:valueMessage,  
         byUser:props.byUser,
         serviceKey: props.currentDataSortKey      
      } 
      props.sendServiceRequest(payloadServiceRequest)
      handleClose();
  }

  const valueTyping = (value) => {
    if (value.currentTarget.value !== "") {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
    setValueMessage(value.currentTarget.value)
  }
  // currentDataService.mode ? 

  console.log(currentDataService)

  const saveDate = (selectedDate) => {

    setSelectedDate(selectedDate.toISOString())
    // console.log(selectedDate)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Dialog fullScreen open={openDialog} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" disabled
                aria-label="close">
                <div className={classes.logo}>
                  <img src={logo_login} className={classes.logoTopBar} />
                </div>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {/* Narau */}
              </Typography>
              <div className={classes.closeIcon}>
                <IconButton edge="start" color="inherit" className={classes.buttonclose}
                  onClick={handleClose}
                  aria-label="close">
                  <CloseIcon />

                </IconButton>
              </div>

            </Toolbar>
          </AppBar>
          {/* <Container className={classes.imageContainer}>
            <Card className={classes.imageCardContainer}>
              <CardMedia
                className={classes.media}
                image={imageService}
              />
            </Card>
          </Container> */}
          <Container maxWidth="lg">

            {currentStep === 0 &&
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={12} sm={5}>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="h5" className={classes.nameservice}>
                        El servicio se recibira en la modalidad:
                       </Typography>
                      <Typography variant="h4" className={classes.nameserviceType}>
                        {currentDataService.mode}
                      </Typography>
                    </Paper>

                  </Grid>



                  <Grid item xs={12} sm={7} >
                    <Paper className={classes.paperCal} elevation={0}>

                      <Typography variant="h6" className={classes.nameservice}>
                        Selecciona los días
                      </Typography>

                      <Typography variant="subtitle1">
                        Disponibilidad del consultor
                     </Typography>
                      <StaticCalendarCompany
                        // classesEnherance={disableCal}
                        // saveDispositions={saveDispositions}
                        // dateDisposition={props.dateDisposition}
                        saveDate={saveDate}
                        enableButton={enableButton}
                        dateDisposition={lastDates}
                        flCont={flCont}
                      ></StaticCalendarCompany>
                      {/* <Paper> */}
                      <div className={classes.rootMessage}>
                        <Paper className={classes.paperMessage} elevation={8}>
                          <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                              <img src={foco} width="90" />
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                En tu reservación, considera que esta servicio tiene
                              una duración promedio de {currentDataService.timeEstimated ? currentDataService.timeEstimated : "0"} horas.
                            </Typography>
                            </Grid>
                          </Grid>
                        </Paper>
                      </div>

                    </Paper>
                    {/* </Paper> */}
                  </Grid>
                </Grid>

                <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="baseline" className="gridButtons">
                  <Button variant="contained" onClick={handleClose} className="btnBack"
                  >Regresar</Button>
                  {showNextButton &&
                    <Button variant="contained" className="btnNext" onClick={handleContinue}
                    >Continuar</Button>
                  }

                </Grid>


              </div>


            }

            {currentStep === 1 &&
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="h6" className={classes.nameservice}>
                        Estás reservando:
                      </Typography>
                      <br></br>
                      <Paper elevation={8} className={classes.paperCardCourse} >
                        <Typography variant="subtitle2" className={classes.typoservice}>
                          {currentDataService.serviceType}
                        </Typography>
                        <Typography variant="h5" className={classes.nameservice}>
                          {currentDataService.nameService}
                        </Typography>
                        <Typography variant="subtitle1" >
                          {currentDataService.subtitle}
                        </Typography>
                        <Grid container spacing={2} xs={12}
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start">
                          <Grid item>
                            <Avatar className={classes.avatarHeader} classes={{
                              root: "rootAvatar"
                            }}>
                              {localStorage.getItem("contentUserCurrentAvatar") === "undefined" ? props.byUser["custom-attr"].firstName.substring(0, 1).toUpperCase() : ""}
                            </Avatar>


                          </Grid>
                          <Grid item>
                            <Typography gutterBottom variant="body2" className={classes.infoProfileName}>
                              {props.byUser["custom-attr"].firstName + " " + props.byUser["custom-attr"].lastName}
                            </Typography>
                            <SimpleRating className={classes.ratingTwo} />
                          </Grid>

                        </Grid>
                      </Paper>


                    </Paper>

                  </Grid>

                  <Grid item xs={12} sm={1}>
                  </Grid>

                  <Grid item xs={12} sm={8}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Paper className={classes.paperCal} elevation={0}>

                      <Grid item>
                        <Avatar className={classes.avatarHeaderMessage} classes={{
                          root: "rootAvatar"
                        }}>
                          {localStorage.getItem("contentUserCurrentAvatar") === "undefined" ? props.byUser["custom-attr"].firstName.substring(0, 1).toUpperCase() : ""}
                        </Avatar>
                        <Typography gutterBottom variant="h5" className={classes.nameservice} >
                          Finaliza la solicitud enviando un mensaje a  {props.byUser["custom-attr"].firstName}
                        </Typography>

                        <TextField
                          required
                          // defaultValue={editServicdeType ? props.currentDataService.nameService : ""}
                          id="nameService"
                          name="nameService"
                          // label="Nombre del Servicio"
                          variant="filled"
                          fullWidth
                          placeholder="Recuerda presentarte, comentar las necesidades de tu equipo/empresa y ultimar detalles sobre los horarios y fechas de las sesiones.
                          ¡Pronto recibirás respuesta!"
                          multiline
                          rows={8}
                          classes={{
                            root: "textFieldOverride",


                          }}
                          onChange={valueTyping}
                        // autoComplete="fname"
                        // inputRef={register({ required: true })}
                        // error={errors.nameService ? true : false}
                        />


                      </Grid>

                    </Paper>
                    {/* </Paper> */}
                  </Grid>
                </Grid>
                <br></br>
                <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="baseline" className="gridButtons">

                  <Typography gutterBottom variant="body1" >
                    Al dar click en Enviar, tu información de contacto será compartida con el consultor para que puedan establecer comunicación.
                  </Typography>
                </Grid>
                <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="baseline" className="gridButtons">
                  <Button variant="contained" onClick={handleClose} className="btnBack"
                  >Regresar</Button>
                  {showNextButton &&
                    <Button variant="contained" className="btnNext" onClick={handleSendRequest}
                    >Enviar solicitud</Button>
                  }

                </Grid>


              </div>




            }
          </Container>
        </Dialog>



      </main>
    </React.Fragment >
  );
}
