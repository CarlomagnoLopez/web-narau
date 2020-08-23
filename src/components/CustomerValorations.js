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
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CourseForm from './CourseForm';
import Review from './Review';
// import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import SimpleRating from "../controls/SimpleRating"
import AppBarBlack from "../controls/AppBarBlack"
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
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
import imageBen from '../assets/imageBen.png';
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
    backgroundColor: "#fc5000",
    width: "69%",
    margin: "39px",
    // color: #fff;
    // background-color: #fc5000;
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
    color: "#fc5000",
    fontSize: "20px",
    textTransform: "capitalize",
    fontWeight: "bold"
  },
  nameservice: {
    fontWeight: "bold"
  },
  gridCustom: {

  },
  paperCustomCost: {
    color: "#fc5000",
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
      backgroundColor: "#fc5000",
      margin: theme.spacing(0.5),
      color: "#fff",
      borderRadius: ".6rem"
    },
  },
  avatarHeader: {
    borderColor: "#b3b3b3",
    backgroundRepeat: "no-repeat", backgroundSize: "cover !important",

    // backgroundImage: `url(${imageProfileDynamo})`,
    // backgroundImage: `url(${localStorage.getItem("contentUserAvatarImg")})`,
    backgroundSize: "contain",
    // top: "-6rem",
    // color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#fc5000",
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: "solid"
  },


  rootCompliments: {
    marginTop: "3rem"
  },

  paperSideCompliments: {
    borderRadius: "0rem",
    padding: "1rem",
    '& > *': {
      marginTop: "1rem",
      margin: "auto",
      justifyContent: "center"

    }
  },
  titleName: {
    fontWeight: "bold !important",
    textAlign: "center"
  },
  infoData: {
    textAlign: "center"

  },
  numbers: {
    fontWeight: "bold !important"
  },
  titleCurses: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: "bolder"
  },
  rootList: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  textNameBy: {
    fontWeight: "bold"
  },
  commentBy: {
    color: "#b3b3b3"
  },
  nameServieClass: {
    color: " #ff931e",
    textTransform: "uppercase",
    display: 'inline',
    fontWeight: "bolder"
  },
  en: {
    display: 'inline',
  },
  avatarCustomer: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: "1rem"
  }


}));



export default function CustomerValorations(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(true);

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
    // props.closeForm()
    // console.log("cerradno")
    setTimeout(() => {
      props.setShowCustomerValorations(false)

    }, 300);

  };

  const getValorationsNumber = (data) => {

    if (props.valorations) {
      if (props.valorations.length < 10) {
        return ("0" + props.valorations.length)
      } else {
        return props.valorations.length
      }
    } else {
      return "00"
    }

    // props.valorations ? props.valorations.length : "00"
  }


  const totalValorations = () => {

    // if (props.valorations) {
    let ratings = {
    };

    props.valorations.map((item, index) => {
      ratings["R_" + index] = parseFloat(item.qualification)
    })

    const starTotal = 10;



    let total = 0;
    let sumTotal = 0;
    for (const rating in ratings) {
      // 2
      sumTotal++
      const starPercentage = (ratings[rating] / starTotal) * 100;
      // 3
      // const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
      const starPercentageRounded = ((starPercentage / 10) * 10);
      // 4
      total += starPercentageRounded;

    }

    let showTotal = ((total / sumTotal) / 10)


    // setSumTotal(showTotal)

    // }



    return showTotal


  }

  // const 

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };


  // const addToWishList = () => {
  //   currentDataService.courseId = props.currentDataSortKey;
  //   props.addToWishList(currentDataService)
  //   // props.handleCloseDetail()
  //   // setOpen(false);
  //   handleClose();
  // }


  // const imageService = props.currentDataService.img ? "https://imgcursos.s3.amazonaws.com/" + props.currentDataService.img : "../assets/imgex.jpg"
  // const { currentDataService } = props;
  // const video = currentDataService.video ? currentDataService.video : "https://imgcursos.s3.amazonaws.com/vide_demo.mp4"

  // console.log(currentDataService)
  const completeName = props.currentAccount.firstName + " " + props.currentAccount.lastName;
  const avatarTitle = props.currentAccount.firstName.substring(0, 1).toUpperCase() + props.currentAccount.lastName.substring(0, 1).toUpperCase()

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Dialog fullScreen open={openDialog} onClose={handleClose} TransitionComponent={Transition}>

          <AppBarBlack handleClose={handleClose}>

          </AppBarBlack>

          <Container maxWidth="lg">
            <div className={classes.rootCompliments}>
              <Grid container spacing={4}

              >
                <Grid item xs={12} sm={2}
                >
                  <Paper className={classes.paperSideCompliments} elevation={8} square>

                    <Avatar className={classes.avatarHeader} src={localStorage.getItem("contentUserAvatarImg")} classes={{
                      root: "rootAvatar"
                    }}>

                      {avatarTitle}
                    </Avatar>
                    <Typography>
                      <Typography className={classes.titleName} gutterBottom variant="h5" component="div">

                        {completeName}
                      </Typography>
                    </Typography>
                    <SimpleRating className={classes.ratingTwo} totalValorations={totalValorations} valorations={props.valorations} setFunc={true}/>
                    <div className={classes.infoData}>
                      <Typography variant="h2" color="inherit" className={classes.numbers}>
                        {getValorationsNumber(props.valorations)}
                      </Typography>
                      <Typography variant="subtitile1" color="inherit" className={classes.nubersDown}>
                        Valoraciones
                    </Typography>
                      <Typography variant="h2" color="inherit" className={classes.numbers}>
                        00
                      </Typography>
                      <Typography variant="subtitile1" color="inherit" className={classes.numbersDown}>
                        Servicios impartidos en Narau
                    </Typography>
                      <Typography variant="h2" color="inherit" className={classes.numbers}>
                        {props.getServiceVerified()}
                      </Typography>
                      <Typography variant="subtitile1" color="inherit" className={classes.numbersDown}>
                        Servicios activos
                                    </Typography>

                    </div>


                  </Paper>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" color="inherit" className={classes.titleCurses}>
                    Valoraciones
                    </Typography>
                  <Paper className={classes.paper} elevation={8}>
                    <List className={classes.rootList}>

                      {props.valorations.map((item) => (
                        <div>
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar className={classes.avatarCustomer}>
                                {item.by.substring(0, 1).toUpperCase()}
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <React.Fragment>
                                  <Typography
                                    variant="body2"
                                    className={classes.textNameBy}
                                    color="textPrimary"
                                  >
                                    {item.by}
                                  </Typography>
                                  <Rating name="half-rating" readOnly defaultValue={item.qualification} precision={0.5} />
                                </React.Fragment>
                              }
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    // component="span"
                                    variant="body2"
                                    className={classes.commentBy}
                                    color="textPrimary"
                                  >
                                    {item.comment}
                                  </Typography>


                                  {
                                    <p>
                                      <Typography variant="body2" className={classes.en}>
                                        {"En: "}
                                      </Typography>
                                      <Typography variant="body2" className={classes.nameServieClass}>
                                        {item.nameService}
                                      </Typography>
                                    </p>
                                  }
                                </React.Fragment>
                              }
                            />

                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </div>
                      ))}


                    </List>

                  </Paper>
                </Grid>

              </Grid>
            </div>
          </Container>
        </Dialog>



      </main>
    </React.Fragment >
  );
}
