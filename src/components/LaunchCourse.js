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

import imageBen from '../assets/imageBen.png';

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
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#000",
    color: "#fff",
    boxShadow: "none",
    // pointerEvents: "none"
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
  gridBen:{
    color:"#fff",
    backgroundColor:"#fc5000",
    width: "69%",
    margin: "39px",
    // color: #fff;
    // background-color: #fc5000;
    borderRadius: "1rem"

  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  paperVideo: {
    marginLeft: "161px",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
      marginTop: theme.spacing(2),
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
  rootCard: {
    maxWidth: 345,
    // marginTop: "53px"
    marginLeft: "49px"

  },
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
    maxWidth: "100%",
  },
  media: {
    width: "100%",
    height: 140,
  },
  typoservice: {
    color: "#fc5000"
  },
  gridCustom: {

  },
  paperCustomCost: {
    color: "#fc5000",
    fontWeight: "bolder"
  },
  buttonCustom: {
    backgroundColor: "#66b32e",
    color: "#fff",
    width: "100%"
  },
  dividerClass:{
    margin:"10px"
  }
}));

const steps = ['Creacion de Servicio'];

function getStepContent(step, handleNext, currentDataService, handleClose, topicData, addTopic, deleteTopic, currentDataSortKey) {
  switch (step) {
    case 0:
      return <CourseForm
        handleNext={handleNext}
        currentDataService={currentDataService}
        currentDataSortKey={currentDataSortKey}
        handleClose={handleClose}
        topicData={topicData}
        addTopic={addTopic}
        deleteTopic={deleteTopic}

      />;
    // case 1:
    //   return <PaymentForm />;
    // case 2:
    //   return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function InvoicesForm(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (data, sk) => {
    if (activeStep === 1) {
      props.closeFormCourse(data, sk)
    } else {
      props.closeFormCourse(data, sk)
      // setActiveStep(activeStep + 1);
    }

  };

  const handleClose = (data) => {
    props.closeForm()

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const convertCapitalize = (data) => {

    if (data) {
      return data.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    }

    return ""


  }


  const imageService = props.currentDataService.img ? "https://imgcursos.s3.amazonaws.com/" + props.currentDataService.img : "../assets/imgex.jpg"
  const { currentDataService } = props;
  const video = currentDataService.video ? currentDataService.video : "https://imgcursos.s3.amazonaws.com/vide_demo.mp4"

  console.log(currentDataService)
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Dialog fullScreen open={true} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" disabled
                // onClick={handleClose}
                aria-label="close">
                {/* <CloseIcon /> */}
                <div>
                  <img src={logo_sun} width="50" />
                </div>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {/* Narau */}
              </Typography>
              <div className={classes.closeIcon}>
                <IconButton edge="start" color="inherit" className={classes.buttonclose}
                  onClick={props.closeForm}
                  aria-label="close">
                  <CloseIcon />

                </IconButton>
              </div>

              {/* <ProgressCreateCourse handleClose={handleClose} currentStep={nextStep} totalPercent={totalPercent}></ProgressCreateCourse> */}
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Card className={classes.rootCard} >
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
              {/* <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid> */}
              <Grid item xs={12} sm={7}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="subtitle2" className={classes.typoservice}>
                    {currentDataService.serviceType.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                  </Typography>
                  <Typography variant="h6">
                    {currentDataService.nameService.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                  </Typography>
                  <Typography variant="subtitle1" >
                    {currentDataService.subtitle.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                  </Typography>

                  <Grid container className={classes.gridCustom}
                    direction="row"
                    justify="space-between"
                    alignItems="center" spacing={0}>
                    <Grid item xs={8} sm={4}>
                      <Paper elevation={0} className={classes.paperCustom}><Typography variant="subtitle1" >
                        {`Modalidad: ${currentDataService.mode.toUpperCase()}`}
                      </Typography></Paper>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <Paper elevation={0} >
                        {`Precio:`} <span className={classes.paperCustomCost} >
                          mxn ${currentDataService.cost}
                        </span>
                        {props.role !== "admin" &&
                          <Button variant="contained" classes={{
                            root: classes.buttonCustom
                          }}
                          >Reservar</Button>
                        }

                      </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      {currentDataService.objetive !== "" &&
                        <Typography variant="subtitle1" >

                          {convertCapitalize(currentDataService.objetive)}
                        </Typography>

                      }
                      <Divider></Divider>
                      <p></p>

                      <Typography variant="h6" >
                        {"Dirigido a: "}
                      </Typography>
                      <Typography variant="subtitle1" >
                        {currentDataService.to.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
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
              <Grid item xs={12} sm={5}>
                <Paper className={classes.paperVideo} elevation={0}>
                  {/* {currentDataService.video  &&
                    // <Card className={classes.rootCard}> */}
                  <video width="320" height="240" controls className={classes.video}>
                    <source src={video} type="video/mp4" />
                  </video>
                  {/* </Card>
                  } */}
                </Paper>
              </Grid>




            </Grid>
          </Container>
        </Dialog>


        {/* <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Creacion de Servicio.
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(activeStep, handleNext, props.currentDataService, handleClose, props.topicData, props.addTopic, props.deleteTopic, props.currentDataSortKey)}

          </React.Fragment>
        </Paper>
        <Copyright /> */}
      </main>
    </React.Fragment >
  );
}
