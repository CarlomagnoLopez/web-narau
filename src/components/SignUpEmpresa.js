import React from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import logo_login from '../assets/logo_login.png';
import back_log from '../assets/back-log.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchControl from '../controls/SwitchControl';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import "../css/stylesGlobalOverRide.css"

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  loginSquare: {
    backgroundColor: "#f19d2d",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: "#fff"
  },
  imageDevice: {
    backgroundImage: 'url(https://rescss.s3.amazonaws.com/back-log.png)',
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundColor: "#f19d2d",
    backgroundSize: 'contain',
    backgroundPosition: 'top',
    // object-fit: cover;
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
  paper: {
    // margin: theme.spacing(8, 4),
    // marginTop:"30%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperLogDesktop: {
    // margin: theme.spacing(8, 4),
    marginTop: "10%",
    marginLeft: "20%"
  },
  paperdevice: {
    // margin: theme.spacing(8, 4),
    margin: theme.spacing(8, 4),
    marginTop: "50% !important",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  
  },
  primarySwitch: {
    backgroundColor: "#fc5000"
  }
  // rootTextField:{

  // }
}));


export default function SignIn(props) {
  const classes = useStyles();
  // const { register, handleSubmit, watch, errors } = useForm();

  // const { registerForgot, handleSubmitForgot, watchForgot, errorsForgot } = useForm();
  const [age, setAge] = React.useState('');
  const fixedHeightPaper = isMobile ? clsx(classes.paper, classes.paperdevice,) : clsx(classes.paper, classes.paperLogDesktop);
  const fixedHeightPaperGrid = isMobile ? clsx(classes.loginSquare, classes.imageDevice,) : clsx(classes.loginSquare);

  // const classes = useStyles();

  // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    // console.log("data Valjues");
    data.role = "company"
    props.validateForm(data);
    // console.log(data);
  };

  return (


    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square className={fixedHeightPaperGrid}>
        <div className={fixedHeightPaper}>
          {/* <Avatar className={classes.avatar}> */}
          {/* <LockOutlinedIcon />
             */}
          <div className={classes.logo}>
            <img src={logo_login} style={{ width: "44%" }} />

          </div>
          {/* </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2" onClick={props.showForgotPassword}>
                Forgot password?
                </Link>
            </Grid> */}
            <Grid item>
              {"¿Ya tienes cuenta?"}
              <Link href="#" variant="subtitle1" classes={{ root: "link" }} onClick={props.startSignIn}>
                Inicia sesión
              </Link>
            </Grid>
          </Grid>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  // label="First Name"
                  classes={{
                    root: "rootTextField"
                  }}
                  autoFocus
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={errors.firstName ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  // label="Last Name"
                  classes={{
                    root: "rootTextField"
                  }}
                  name="lastName"
                  autoComplete="lname"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={errors.lastName ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="empresa"
                  // label="Empresa"
                  classes={{
                    root: "rootTextField"
                  }}
                  name="empresa"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={errors.empresa ? true : false}
                />
              </Grid>
              <Grid item xs={12}>

                <FormControl id="employ"
                  name="employ" variant="outlined" className={classes.formControl} fullWidth>
                  {/* <InputLabel id="employ"
                    name="employ">No. Employees</InputLabel> */}
                  <Select
                    fullWidth
                    labelId="employ"
                    id="employ"
                    // variant="outlined"
                    name="employ"
                    value={age}
                    onChange={handleChange}
                    // label="No. Employees"
                    classes={{
                      root: "rootSelectField"
                    }}
                  // inputRef={register({ required: true, maxLength: 20 })}
                  // error={errors.employ ? true : false}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>{"<10"}</MenuItem>
                    <MenuItem value={20}>{">10"}</MenuItem>
                    <MenuItem value={30}>{">100"}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="rfc"
                  // label="RFC"
                  classes={{
                    root: "rootTextField"
                  }}
                  name="rfc"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={errors.rfc ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  // label="Address"
                  classes={{
                    root: "rootTextField"
                  }}
                  name="address"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={errors.address ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="puesto"
                  // label="Position"
                  classes={{
                    root: "rootTextField"
                  }}
                  name="puesto"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={errors.puesto ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  // label="Email Address"
                  classes={{
                    root: "rootTextField"
                  }}
                  name="email"
                  autoComplete="email"
                  inputRef={register({ required: true, pattern: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/ })}//eslint-disable-line
                  error={errors.email ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  // label="Password"
                  classes={{
                    root: "rootTextField"
                  }}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={register({ required: true })}
                  error={errors.password ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  // control={<Checkbox value="allowExtraEmails" color="primary" />}
                  control={<SwitchControl
                    changeEvent={props.changeEvent}
                    checked={false}
                  />}
                  label="Soy Instructor"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              classes={{
                root:"submitbtn"
              }}
              className={classes.submit}

            >
              Enviar
          </Button>
            {/* <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={props.startSignIn}>
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
