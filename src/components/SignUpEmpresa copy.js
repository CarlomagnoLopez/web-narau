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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
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

export default function SignUpEmpresa(props) {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up Empresa



        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
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
                label="Last Name"
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
                label="Empresa"
                name="empresa"
                inputRef={register({ required: true, maxLength: 20 })}
                error={errors.empresa ? true : false}
              />
            </Grid>
            <Grid item xs={12}>

              <FormControl id="employ"
                  name="employ" variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel id="employ"
                  name="employ">No. Employees</InputLabel>
                <Select
                  fullWidth
                  labelId="employ"
                  id="employ"
                  name="employ"
                  value={age}
                  onChange={handleChange}
                  label="No. Employees"
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
                label="RFC"
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
                label="Address"
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
                label="Position"
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
                label="Email Address"
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
                label="Password"
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
            className={classes.submit}
          >
            Sign Up Empresa
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
