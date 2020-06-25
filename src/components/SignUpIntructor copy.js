import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import SwitchControl from '../controls/SwitchControl';
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpIntructor(props) {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    // console.log("data Valjues");
    data.role = "consultant"
    props.validateForm(data);
    // console.log(data);
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up Instructor
        </Typography>
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
                id="phone"
                // label="Phone Contact"
                classes={{
                  root: "rootTextField"
                }}
                name="phone"
                inputRef={register({ required: true, maxLength: 12, pattern: /^[0-9]*$/ })}
                error={errors.phone ? true : false}
              // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* <Grid container justify="space-around"> */}
                <KeyboardDatePicker
                  inputVariant="outlined"
                  required
                  inputRef={register({ required: true })}
                  error={errors.dateofbirth ? true : false}
                  fullWidth
                  id="dateofbirth"
                  name="dateofbirth"
                  // label="Date of birth"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  disableFuture
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                {/* </Grid> */}
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                // label="City"
                classes={{
                  root: "rootTextField"
                }}
                name="city"
                inputRef={register({ required: true })}
                error={errors.city ? true : false}
              // autoComplete="email"
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
                inputRef={register({ required: true })}
                error={errors.password ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                // control={<Checkbox value="allowExtraEmails" color="primary" />}
                control={<SwitchControl
                  checked={true}
                  changeEvent={props.changeEvent}
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
            className={classes.submit}
          >
            Sign Up Instructor
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={props.startSignIn}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
