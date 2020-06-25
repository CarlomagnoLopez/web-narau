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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

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
    marginTop: "30%",
    marginLeft: "20%"
  },
  paperdevice: {
    // margin: theme.spacing(8, 4),
    margin: theme.spacing(8, 4),
    marginTop: "70% !important",
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
    backgroundColor:"#fc5000",
    color:"#fff"
  },
  // rootTextField:{

  // }
}));


export default function SignIn(props) {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  // const { registerForgot, handleSubmitForgot, watchForgot, errorsForgot } = useForm();

  const fixedHeightPaper = isMobile ? clsx(classes.paper, classes.paperdevice, ) : clsx(classes.paper, classes.paperLogDesktop);
  const fixedHeightPaperGrid = isMobile ? clsx(classes.loginSquare, classes.imageDevice, ) : clsx(classes.loginSquare);

  const onSubmit = data => {
    // console.log("data Valjues");
    // data.role = "user"
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
              {"¿Eres un nuevo usuario?"}
              <Link href="#" variant="subtitle1" classes={{ root: "link" }} onClick={props.startSignUp}>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              classes={{
                root: "rootTextField"
              }}
              label="Dirección de correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register({ required: true, pattern: /[\w\.-]+@[\w\.-]+\.\w{2,4}/ })}
              error={errors.email ? true : false}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              classes={{
                root: "rootTextField"
              }}
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register({ required: true, maxLength: 20 })}
              error={errors.password ? true : false}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // color="primary"
              classes={{
                root:"submitbtn"
              }}
              className={classes.submit}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="subtitle1" classes={{ root: "linkForgo" }} onClick={props.showForgotPassword}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2" onClick={props.startSignUp}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
