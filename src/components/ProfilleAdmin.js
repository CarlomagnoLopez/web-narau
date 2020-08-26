import React from 'react';
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
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../controls/listItems';
import Chart from '../controls/Chart';
import ChartsView from './ChartsView';
import ServiceListView from './ServiceListView';
import UserListView from './UserListView';
import CompanyListView from './CompanyListView';
import Deposits from '../controls/Deposits';
import Orders from '../controls/Orders';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DetailCourseAdmin from "../components/DetailCourseAdmin"
import DetailUserAdmin from "../components/DetailUserAdmin"
import DetailCompanyAdmin from "../components/DetailCompanyAdmin"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DetailUserAdmin from "../components/DetailUserAdmin"
import LaunchCourse from './LaunchCourse';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import CreateCourse from './CreateCourse';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory
} from "react-router-dom";


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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    background: "#000",
    // borderRight:"0px"
  },
  toolbarIcon: {
    background: "#000",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    color: "#fff"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
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
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    borderRight: "0px",
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function ProfileAdmin(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [activeView, setActiveView] = React.useState(1);
  const [openDetailCourse, setOpenDetailCourse] = React.useState(false);
  const [openDetailUser, setOpenDetailUser] = React.useState(false);
  const [openDetailCompany, setOpenDetailCompany] = React.useState(false);
  const [dataService, setDataService] = React.useState();
  const [openSharedList, setOpenSharedList] = React.useState(false);
  const [openAssignList, setOpenAssignList] = React.useState(false);
  const [currentService, setCurrentService] = React.useState();
  const [openCreateCourse, setOpenCreateCourse] = React.useState(false);


  const { serviceAll, userAll, companyAll } = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  let history = useHistory();

  const closeSession = () => {
    // logOut()4
    localStorage.setItem("active", "false");
    history.push("/");
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const onChangeView = (view) => {


    switch (view) {
      case 1:
        props.getService()
        break;
      case 2:
        props.getUser()
        break;
      case 3:
        props.getCompany()
        break;
      case 4:
        // props.getCompany()
        setOpenCreateCourse(true)
        console.log("creando diplomados")
        break;
    }



    setActiveView(view)
  }

  const showDetail = (data) => {
    props.getByUser(data["custom-keys"])
    setDataService(data)
    setTimeout(() => {
      setOpenDetailCourse(true);
    }, 4000);

  }

  const showDetailUser = (data) => {
    setDataService(data)
    // setOpenDetailUser(true);
    props.showUserNoEdit(data)
  }

  const showDetailCompany = (data) => {
    setDataService(data)
    setOpenDetailCompany(true);
  }


  const handleCloseDetail = () => {
    setOpenDetailCourse(false)
  }
  const handleCloseDetailUser = () => {
    setOpenDetailUser(false)
  }

  const handleCloseDetailCompany = () => {
    setOpenDetailCompany(false)
  }
  const closeListUserShared = () => {
    setOpenSharedList(false)
  }

  const closeListUserAsign = () => {
    setOpenAssignList(false)
  }

  const attachConsultant = (value) => {
    console.log(currentService)
    closeListUserShared()
    console.log(value)
    currentService["custom-attr"].notme = false;
    currentService["custom-attr"].editedByConsultant = false;
    currentService["custom-attr"].shared = false;
    let payload = {
      "email": value["custom-attr"].email,
      "pk": value["custom-types"],
      "attr": currentService["custom-attr"],
      "sendEmailAttach": true
    }

    props.saveServiceAttach(payload)



    // let payloadDeletion = {
    //   "pk": localStorage.getItem("partitionKey"),
    //   "email": JSON.parse(localStorage.getItem("contentUser")).email,
    //   "attr":  currentService["custom-attr"],
    //   "sk": sortKey,
    //   "delete": true

    // }

    // props.saveServiceAttach(payloadDeletion)



  }


  const asignConsultant = (value) => {
    console.log(currentService)
    closeListUserAsign()
    console.log(value)
    currentService["custom-attr"].notme = true;
    currentService["custom-attr"].editedByConsultant = false;
    let payload = {
      "email": value["custom-attr"].email,
      "pk": value["custom-types"],
      "attr": currentService["custom-attr"],
      "sendEmailAsign": true
    }
    
    console.log(payload)

    props.saveServiceAttach(payload)

    currentService["custom-attr"].notme = false;
    currentService["custom-attr"].editedByConsultant = false;
    let payloadDeletion = {
      "pk": currentService["custom-types"],
      "email": currentService["custom-keys"].split(" | ")[1],
      "attr": currentService["custom-attr"],
      "sk": currentService["custom-keys"].split(" | ")[2],
      "delete": true

    }
    console.log(payloadDeletion)

    props.saveServiceAttach(payloadDeletion)
  }

  const closeCreateCourse = () => {
    setOpenCreateCourse(false)

  }

  const closeFormCourse = (data, sk) => {
    console.log(data)
    let payload = {
      "pk": localStorage.getItem("partitionKey"),
      "email": JSON.parse(localStorage.getItem("contentUser")).email,
      "attr": data
    }
    if (sk) {
      payload = {
        "pk": localStorage.getItem("partitionKey"),
        "email": JSON.parse(localStorage.getItem("contentUser")).email,
        "attr": data,
        "sk": sk
      }
    }

    props.saveService(payload)
    setOpenCreateCourse(false)
    console.log("show")
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            ADMINISTRADOR
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="LogOut" aria-label="LogOut">
            <IconButton color="inherit" onClick={closeSession}>
              {/* <Badge badgeContent={4} color="secondary"> */}
              <ExitToAppIcon />
              {/* </Badge> */}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Narau
          </Typography>
        </div>
        {/* <Divider /> */}
        <List>{mainListItems(onChangeView)}</List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      {openDetailCourse &&
        // <DetailCourseAdmin
        //   show={openDetailCourse}
        //   dataService={dataService["custom-attr"]}
        //   dataServiceId={dataService["custom-keys"].split(" | ")[2]}
        //   handleCloseDetail={handleCloseDetail}
        // // showDetail={showDetail}

        // // addToWishList={addToWishList}
        // ></DetailCourseAdmin>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* <div>invoices</div> */}
            <LaunchCourse

              // addToWishList={addToWishList}
              // // showReservedService={showReservedService}
              // colorDefault={currentColorService()}
              // byUser={props.byUser}
              // closeForm={handleCloseDetail}
              // currentDataService={dataService}
              // currentDataSortKey={dataServiceId}


              addToWishList={""}
              showReservedService={""}
              role={"admin"}
              byUser={props.byUser}
              // closeFormCourse={""}
              closeForm={handleCloseDetail}
              currentDataService={dataService["custom-attr"]}
              currentDataSortKey={dataService["custom-keys"].split(" | ")[2]}
              addTopic={""}
              deleteTopic={""}
            // topicData={props.topicData}
            ></LaunchCourse>
          </Grid>

        </Container>
      }

      {openDetailUser &&
        <DetailUserAdmin
          show={openDetailUser}
          dataService={dataService["custom-attr"]}
          dataServiceId={dataService["custom-keys"]}
          handleCloseDetail={handleCloseDetailUser}
        // showDetail={showDetailUser}

        // addToWishList={addToWishList}
        ></DetailUserAdmin>
      }

      {openDetailCompany &&
        <DetailCompanyAdmin
          show={openDetailCompany}
          dataService={dataService["custom-attr"]}
          dataServiceId={dataService["custom-keys"]}
          handleCloseDetail={handleCloseDetailCompany}
        // showDetail={showDetailUser}

        // addToWishList={addToWishList}
        ></DetailCompanyAdmin>
      }
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {activeView === 0 &&
          <ChartsView>
          </ChartsView>
        }

        {activeView === 1 &&
          <ServiceListView
            serviceAll={serviceAll}
            showDetail={showDetail}
            saveService={props.saveService}
            openUserList={setOpenSharedList}
            openAssignList={setOpenAssignList}
            currentService={setCurrentService}
          >
          </ServiceListView>
        }

        {activeView === 2 &&
          <UserListView
            userAll={props.userAll}
            showDetail={showDetailUser}
            saveUser={props.saveUser}
          >
          </UserListView>
        }
        {activeView === 3 &&
          <CompanyListView
            companyAll={companyAll}
            showDetail={showDetailCompany}
            saveService={props.saveUser}
          >
          </CompanyListView>
        }
        {activeView === 4 && openCreateCourse &&

          <CreateCourse
            closeCreateCourse={closeCreateCourse}
            closeFormCourse={closeFormCourse}
            images={props.images}
            // closeForm={closeForm}
            // asociated={props.currentAccount.isAsociate}
            diplomado={true}
            serviceAll={serviceAll}
          >

          </CreateCourse>
        }
        {openAssignList &&
          <Dialog open={true} onClose={closeListUserAsign} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Asigna un serivicio a un consultor:</DialogTitle>
            <DialogContent>
              <List>

                {props.userAll.map((row, index) => {
                  // console.log(currentService)
                  let currentOwner = currentService["custom-keys"].split(" | ")[1];
                  if (row["custom-attr"].verified && currentOwner !== row["custom-attr"].email) {
                    return (<ListItem button key={index}
                      onClick={() => { asignConsultant(row) }}
                    >
                      <ListItemIcon key={index}>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary={row["custom-attr"].firstName + " " + row["custom-attr"].lastName} secondary={row["custom-attr"].email} />
                    </ListItem>)
                  }


                }
                )


                }
              </List>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={closeListUserAsign}
                className="btnBack">
                Cancelar
          </Button>
            </DialogActions>
          </Dialog>
        }

        {openSharedList &&
          <Dialog open={true} onClose={closeListUserShared} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Vincula un serivicio a un consultor:</DialogTitle>
            <DialogContent>
              <List>

                {props.userAll.map((row, index) => {
                  let currentOwner = currentService["custom-keys"].split(" | ")[1];

                  if (row["custom-attr"].verified && currentOwner !== row["custom-attr"].email) {
                    return (<ListItem button key={index} onClick={() => { attachConsultant(row) }}>
                      <ListItemIcon key={index}>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary={row["custom-attr"].firstName + " " + row["custom-attr"].lastName} secondary={row["custom-attr"].email} />
                    </ListItem>)
                  }


                }
                )


                }
              </List>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={closeListUserShared}
                className="btnBack">
                Cancelar
          </Button>
            </DialogActions>
          </Dialog>
        }


      </main>
    </div >
  );
}
