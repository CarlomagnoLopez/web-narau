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
import Slide from '@material-ui/core/Slide';

import logo_sun from '../assets/sun_logo.png';


import "./styles.css"

import ProgressCreateCourse from "../controls/ProgressCreateCourse"
import StepOneCreateCourse from "./StepOneCreateCourse"
import StepTwoCreateCourse from "./StepTwoCreateCourse"
import StepThreeCreateCourse from "./StepThreeCreateCourse"
import StepFourCreateCourse from "./StepFourCreateCourse"
import StepFiveCreateCourse from "./StepFiveCreateCourse"
import StepSixCreateCourse from "./StepSixCreateCourse"
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
    // pointerEvents: "none"
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

    width: "21px",
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
    position: "absolute"
  }


}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateCourse(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [nextStep, setNextStep] = React.useState(0);
  const [typeService, setTypeService] = React.useState();
  const [payload, setPayload] = React.useState({});
  const [count, setCount] = React.useState(0);

  const handleClose = () => {
    // setOpen(false);
    props.closeCreateCourse()
  };

  const handleNextStep = (data) => {
    console.log(data)
    if (data.serviceType) {
      setTypeService(data.serviceType)
    }
    switch (nextStep) {
      case 0:
        payload.serviceType = data.serviceType;
        setTypeService(data.serviceType)
        break;
      case 1:
        payload.mode = data[0].mode;
        payload.nameService = data[1].nameService;
        payload.subtitle = data[3].subtitle;
        payload.objetive = data[2].objetive;
        break;
      case 2:
        payload.to = data[0].to;
        payload.benefits = data[1].benefits;
        payload.topics = data[2].topics;
        break;
      case 3:
        payload.cost = data[0].cost;
        payload.costD = data[1].costD;
        break;
      case 4:
        payload.img = data;
        break;
      case 5:
        handleClose();
        payload.video = data[0].video;
        props.closeFormCourse(payload);

        break;
      default:

        break;
    }

    // payload.push(data)



    setNextStep(nextStep + 1)
  }

  const back = () => {
    setNextStep(nextStep - 1)
  }

  const totalPercent = () => {
    let percent = Math.round(100 / 6);
    let total = percent * nextStep;


    return (<div> {total + "%"}</div>)
  }

  const countRefresh = () => {
    let countP = count + 1;
    // count = count + 1;
    setCount(countP)
  }


  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
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
            <ProgressCreateCourse handleClose={handleClose} currentStep={nextStep} totalPercent={totalPercent}></ProgressCreateCourse>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          {nextStep === 0 &&
            <StepOneCreateCourse handleNextStep={handleNextStep}></StepOneCreateCourse>

          }
          {nextStep === 1 &&
            <StepTwoCreateCourse back={back} typeService={typeService} handleNextStep={handleNextStep}></StepTwoCreateCourse>
          }
          {nextStep === 2 &&
            <StepThreeCreateCourse back={back} typeService={typeService} handleNextStep={handleNextStep} countRefresh={countRefresh}></StepThreeCreateCourse>
          }
          {nextStep === 3 &&
            <StepFourCreateCourse back={back} typeService={typeService} handleNextStep={handleNextStep} countRefresh={countRefresh}></StepFourCreateCourse>
          }
          {nextStep === 4 &&
            <StepFiveCreateCourse back={back} images={props.images} typeService={typeService} handleNextStep={handleNextStep} countRefresh={countRefresh}></StepFiveCreateCourse>
          }

          {nextStep === 5 &&
            <StepSixCreateCourse back={back} typeService={typeService} handleNextStep={handleNextStep} countRefresh={countRefresh}></StepSixCreateCourse>
          }
        </Container>
      </Dialog>
    </div>
  );
}