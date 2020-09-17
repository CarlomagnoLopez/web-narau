import React from 'react';
import { connect } from "react-redux";
import { updateAttr } from "../redux/actions";
import Slide from '@material-ui/core/Slide';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
// import { DatePicker } from "@material-ui/pickers";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import CardSideContent from "../controls/CardSideContent"
import CardSideContentInvoices from "../controls/CardSideContentInvoices"
import CardCourses from "../controls/CardCourses"
import CustomerValorations from "../components/CustomerValorations"
import CardAddCourses from "../controls/CardAddCourses"
import SimpleRating from "../controls/SimpleRating"

import StaticCalendar from "../controls/StaticCalendar"
import SearchServicesLandingPage from "../controls/SearchServicesLandingPage"
import logo_login from '../assets/logos-narau-04.png';
import imgLanding1 from '../assets/imgLanding1.png';
import imgLanding2 from '../assets/imgLanding2.png';
import imgLanding3 from '../assets/imgLanding3.png';
import imgLanding4 from '../assets/imgLanding4.png';
import imgLanding_2 from '../assets/imgLanding_2.png';
import imgLanding_3 from '../assets/imgLanding_3.png';
import imgLanding_4 from '../assets/imgLanding_4.png';
import imgLanding_Black from '../assets/imgLanding_Black.png';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import presentialImg from '../assets/narau-04-t.png';
import onlineImg from '../assets/narau-05-t.png';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory
} from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ProfileHeader from './ProfileHeader';
import InvoicesForm from './InvoicesForm';
import CreateCourse from './CreateCourse';
import LaunchCourse from './LaunchCourse';
import Snackbar from '@material-ui/core/Snackbar';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import Rating from '@material-ui/lab/Rating';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
      {/* Your Website */}
      {/* </Link> */}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const sizeTopBar = 95;

const useStyles = makeStyles((theme) => ({
  disabledCalendar: {
    pointerEvents: "none"
  },
  btnEdit: {
    left: "78%"
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  image: {
    backgroundImage: 'url(https://rescss.s3.amazonaws.com/back-log.png)',
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundColor: "#f19d2d",
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    // object-fit: cover;
  },
  appBar: {
    backgroundColor: "#000",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logoTopBar: {
    width: `${sizeTopBar}px`,
  },
  appBarShift: {
    backgroundColor: "#000",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    fontWeight: "bolder !important",
    width: "100%"
  },
  subtitle: {
    color: "#fff",
    width: "80%"
    // fontWeight: "bold"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: {
    height: "64px",
    // backgroundColor: "#000"
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: "#fff"
  },
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  paperImg: {

  },
  paperShowService: {
    width: "280px",
    height: "380px"
  },
  rootCard: {
    width: "100%",
    height: "100%"
  },
  rootCardMessage: {
    width: "100%",
    height: "100%"
  },

  paper: {
    textAlign: 'left',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: "transparent",
    color: "#fff",

  },
  paperSide: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperTitle: {
    padding: theme.spacing(2),
    display: 'flex',

    overflow: 'auto',
    flexDirection: 'column',
    height: "20vh"
  },
  imgTitle: {
    // backgroundImage:"url('../assets/imgex.jpg')",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  fixedHeight: {
    height: "auto",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    border: "solid 2px"
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: "transparent"
  },
  logo: {
    margin: "1rem",
  },
  rigthBar: {
    borderRadius: "1rem !important",
    // rounded:{
    //     borderRadius: "1rem !important",
    // }
  },
  stadistics: {
    width: "100%",
    padding: "10px",
    margin: "14px",
    borderRadius: "1rem"
  },
  calendarContainer: {
    width: "100%",
    // padding: "10px",
    // margin: "14px",
    // borderRadius: "1rem"
  },
  numbers: {
    fontWeight: "bolder"
  },
  numbersDown: {
    color: "rgba(0, 0, 0, 0.54)"
  },
  rootRigthBar: {
    borderRadius: "1rem"
  },
  titleCurses: {
    margin: theme.spacing(2),
    fontWeight: "bolder"
  },
  numbersCont: {
    paddingLeft: "40px",
    height: "175px",
    maxHeight: "175px",
    paddingTop: "40px",
  },
  imgServiceDos: {
    width: "100%",
    height: "100%"
  }


}));


export default function CardLandingChallenge(props) {

  const classes = useStyles();
  const bestItem = props.bestItem;
  const { itemSelected, imageService, coloImg, mode, classNameService, messageService } = props.itemCard;
  const index = props.index;
  const [currentValoration, setCurrentValoration] = React.useState();
  const [showValoration, setShowValoration] = React.useState(false);

  const totalStars = (valorations) => {
    let ratings = {
    };
    valorations.map((item, index) => {
      ratings["R_" + index] = parseFloat(item.qualification)
    })
    const starTotal = 10;
    let total = 0;
    let sumTotal = 0;
    for (const rating in ratings) {
      sumTotal++
      const starPercentage = (ratings[rating] / starTotal) * 100;
      const starPercentageRounded = ((starPercentage / 10) * 10);
      total += starPercentageRounded;
    }
    let showTotal = ((total / sumTotal) / 10)
    return showTotal
  }

  const showOneValoration = (valorations) => {
    if (showValoration) {
      setShowValoration(false)
      setCurrentValoration("")
      return
    }
    let selectedOne = valorations[Math.floor(Math.random() * Math.floor(valorations.length))];
    if (selectedOne) {
      setShowValoration(true)
      setCurrentValoration(selectedOne)
    }
  }

  const sendDataCourse = () => {
    // console.log(bestItem)
    // console.log(props.itemCard)
    props.openDetailCourse(bestItem, props.itemCard)
  }

  return (

    <Grid item xs={3} key={index}>

      <Paper className={classes.paperShowService} elevation={4} >

        <Card className={classes.rootCard}>
          <CardMedia
            component="img"
            height="130"
            image={imageService}

          // classes="blockCardMedia"
          ></CardMedia>
          <CardActionArea
            onClick={() => { sendDataCourse() }}
          >

            <div className={classNameService}>
              <Typography variant="body2" color="inherit" component="p" className="cssTypeServiceCard">
                {messageService}
              </Typography>
            </div>
            {showValoration &&
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <CardContent className="cardContentService">
                  <Typography gutterBottom variant="subtitle2" component="h2" color="inherit" className="cssTitleCard">
                    {/* {itemSelected["custom-attr"].nameService} */}
                    Empresa: {" " + currentValoration.by}
                  </Typography>
                  {/* <Typography variant="body2" color="textPrimary" component="p" className="cssNameValorationCard">
                    Empresa: {" " + currentValoration.by}
                  </Typography> */}
                  <Rating
                    className="ratingCard"
                    readOnly
                    precision={0.5}
                    value={parseFloat(currentValoration.qualification)}
                  />
                  <Typography variant="body2" color="textSecondary" component="p" className="cssCommentValorationCard">
                    Comentario: {" " + currentValoration.comment}
                  </Typography>

                </CardContent>
              </Slide>

            }
            {!showValoration &&
              <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <CardContent className="cardContentService">
                  <Typography gutterBottom variant="subtitle2" component="h2" color="inherit" className="cssTitleCard">
                    {itemSelected["custom-attr"].nameService}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className="cssObjectiveCard">
                    {itemSelected["custom-attr"].objetive}
                  </Typography>
                  <p>
                    <div className="divMode">
                      {(mode === "presencial" || mode === "mixto") &&
                        <div className="classIner">
                          <img src={presentialImg} className={coloImg} />
                          <Typography variant="body2" for color="textSecondary" className="cssModeCard">
                            Presencial
                        </Typography>
                        </div>
                      }
                      {(mode === "online" || mode === "mixto") &&
                        <div className="classIner">
                          <img src={onlineImg} className={coloImg} />
                          <Typography variant="body2" color="textSecondary" className="cssModeCard">
                            On Line
                         </Typography>
                        </div>
                      }
                      <div className="classClock">
                        <QueryBuilderIcon fontSize="inherit"></QueryBuilderIcon>
                        <Typography variant="body2" color="textSecondary" className="cssModeCard">
                          {(itemSelected["custom-attr"].timeEstimated ? itemSelected["custom-attr"].timeEstimated : 0) + " hrs."}
                        </Typography>
                      </div>
                    </div>
                  </p>
                  {/* <Divider></Divider> */}
                </CardContent>
              </Slide>
            }
            <Divider></Divider>
          </CardActionArea>
          <CardActions className="cardFooterService">
            <Button size="small" color="primary" onClick={() => { showOneValoration(bestItem.userData["custom-valorations"]) }}>
              {!showValoration &&
                < Rating
                  readOnly
                  precision={0.5}
                  value={totalStars(bestItem.userData["custom-valorations"])}
                />
              }
              {showValoration &&
                <KeyboardBackspaceIcon className="btnBackCard"></KeyboardBackspaceIcon>
              }

            </Button>
            <Typography variant="h5" component="h2" color="inherit" className="cssCostCard">
              <span className="prefixMx">MX</span> {"$" + (itemSelected["custom-attr"].cost ? itemSelected["custom-attr"].cost : 0)}
            </Typography>
          </CardActions>
        </Card>
      </Paper>
    </Grid>

  );
}

