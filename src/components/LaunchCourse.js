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
  return <Slide direction="up" ref={ref} {...props} />;
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
    fontSize: "20px"
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
  avatarHeader: {
    backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

    // backgroundImage: `url(${imageProfileDynamo})`,
    backgroundImage: `url(${localStorage.getItem("contentUserCurrentAvatar")})`,
    backgroundSize: "contain",
    // top: "-6rem",
    // color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: localStorage.getItem("colorDefaul"),
    width: theme.spacing(10),
    height: theme.spacing(10),
    border: "solid"
  },

}));



export default function InvoicesForm(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(true);
  const [imageBase, setImage] = React.useState(localStorage.getItem("contentUserCurrentAvatar"))

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
    props.showReservedService(currentDataService);
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
    case "Conferencia":
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



  // currentDataService.mode ? 

  console.log(currentDataService)
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
          <Container className={classes.imageContainer}>
            <Card className={classes.imageCardContainer}>
              {/* <CardActionArea> */}
              <CardMedia
                className={classes.media}
                image={imageService}
              />
            </Card>
          </Container>
          <Container maxWidth="lg">

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={7}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="subtitle2" className={classes.typoservice}>
                    {currentDataService.serviceType}
                  </Typography>
                  <Typography variant="h5" className={classes.nameservice}>
                    {currentDataService.nameService}
                  </Typography>
                  <Typography variant="subtitle1" >
                    {currentDataService.subtitle}
                  </Typography>
                  <div className={classes.rootChip}>
                    <Chip label="Habilidades soft" />
                    <Chip label="Calidad" />
                  </div>
                  <Grid container className={classes.gridCustom}
                    direction="row"
                    justify="space-between"
                    alignItems="center" spacing={0}>

                    <Grid item xs={8} sm={4}>
                      <Paper elevation={0} className={classes.paperCustom}>
                        <Typography variant="subtitle1" className={classes.nameservice} >
                          <span className="contentText">
                            {/* {
                              currentDataService.mode === "presencial" ? */}
                            <div className="contentTextContainer">{"Modalidad: "}<div className={imgClass}></div>
                              <span>{modeService}</span></div>
                            {/* :
                                <div className="contentTextContainer">{"Modalidad: "}<div className="imgLine" ></div>
                                  <span>En linea</span></div> */}
                            {/* } */}
                          </span>
                          {/* ${currentDataService.mode.toUpperCase()} */}
                        </Typography>
                      </Paper>
                      <Paper elevation={0} className={classes.paperCustom}>
                        <Typography variant="subtitle1" className={classes.nameservice} >
                          {"Tiempo estimado: "} {currentDataService.timeEstimated ? currentDataService.timeEstimated : ""}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <Paper elevation={0} >
                        {`Precio por servicio:`} <span className={classes.paperCustomCost} >
                          MX ${currentDataService.cost}
                        </span>
                        {props.role !== "admin" &&
                          <Button variant="contained" onClick={reservedService} classes={{
                            root: "buttonCustom"
                          }}
                          >Reservar</Button>
                        }

                      </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      {currentDataService.objetive !== "" &&
                        <Typography variant="subtitle1" >

                          {/* {convertCapitalize(currentDataService.objetive)} */}
                          {(currentDataService.objetive)}
                        </Typography>

                      }
                      <Divider></Divider>
                      <p></p>

                      <Typography variant="h6" >
                        {"Dirigido a: "}
                      </Typography>
                      <Typography variant="subtitle1" >
                        {currentDataService.to}
                      </Typography>
                      <Divider></Divider>
                      <p></p>
                      <Typography variant="h6" >
                        {"Temario: "}
                      </Typography>
                      <List dense={true}>
                        {currentDataService.topics && currentDataService.topics.map((item, index) => {
                          return (
                            <div>


                              <ListItem key={index}>
                                {/* <ListItemAvatar>
                              <DoneIcon />
                            </ListItemAvatar> */}
                                <ListItemText
                                  primary={(index + 1) + " " + item.tema}
                                />

                                {/* <ListItemSecondaryAction>
                              <IconButton edge="end" aria-label="delete" onClick={() => { deleteTema(topicData, index) }}>
                                <DeleteIcon />
                              </IconButton>
                            </ListItemSecondaryAction> */}
                              </ListItem>
                              <Divider></Divider>
                            </div>

                          )

                        })
                        }
                      </List>
                      <p></p>
                      <p></p>
                      <Grid container spacing={2} className={classes.gridBen}>
                        <Grid item>
                          <img src={imageBen} width={"80px"} />
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Divider orientation="vertical" flexItem className={classes.dividerClass}></Divider>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography variant="h6" className={classes.titleDesc}>
                                Beneficios
                                                </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body2">

                                {currentDataService.benefits}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                    </Grid>
                  </Grid>
                </Paper>
              </Grid>



              <Grid item xs={12} sm={5} >
                <Paper className={classes.paperVideoLeft} elevation={0}>
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

                  <Grid item>
                    <Typography gutterBottom variant="body2" className={classes.infoProfile}>
                      {props.byUser["custom-attr"].aboutMe}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <div className={classes.rootChip}>
                      <Chip label="Ver perfil completo" />
                    </div>
                  </Grid>
                </Paper>
                <Paper className={classes.paperVideo} elevation={0}>
                  <Grid container spacing={2} xs={12}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">

                    <Grid item>
                      <video width="320" height="240" controls className={classes.video}>
                        <source src={video} type="video/mp4" />
                      </video>


                    </Grid>

                    <Grid item>
                      <Typography gutterBottom variant="body2" className={classes.infoProfileName}>
                        Temas relacionados
                      </Typography>
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                      <div className={classes.rootChipRlation}>
                        <Chip label="Solución de problemas" />
                        <Chip label="Trabajo en equipo" />
                        <Chip label="Cultura organizacional" />
                      </div>
                    </Grid>
                  </Grid>

                  {/* </Card>
                  } */}
                </Paper>
              </Grid>




            </Grid>
          </Container>
        </Dialog>



      </main>
    </React.Fragment >
  );
}
