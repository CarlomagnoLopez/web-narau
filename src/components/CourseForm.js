import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
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
}));
export default function CoursesForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const classes = useStyles();

  const onSubmit = data => {
    // console.log("data Valjues");
    // data.role = "user"
    // props.validateForm(data);
    props.handleNext(data);
    console.log(data);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Creacion de Servicio
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              defaultValue={props.nameService}
              id="nameService"
              name="nameService"
              label="Nombre del Servicio"
              fullWidth
              // autoComplete="fname"
              inputRef={register({ required: true})}
              error={errors.nameService ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            defaultValue={props.serviceType}
              required
              id="serviceType"
              name="serviceType"
              label="Tipo"
              fullWidth
              // autoComplete="lname"
              inputRef={register({ required: true})}
              error={errors.serviceType ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="mode"
              name="mode"
              label="Modalidad"
              fullWidth
              // autoComplete="lname"
              inputRef={register({ required: true})}
              error={errors.mode ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="subtitle"
              name="subtitle"
              label="Subtitulo"
              fullWidth
              // autoComplete="billing address-line1"
              inputRef={register({ required: true})}
              error={errors.subtitle ? true : false}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="to"
              name="to"
              label="Dirigido a"
              fullWidth
              // autoComplete="fname"
              inputRef={register({ required: true})}
              error={errors.to ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="topics"
              name="topics"
              label="Temario"
              fullWidth
              // autoComplete="lname"
              inputRef={register({ required: true})}
              error={errors.topics ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
              id="relationTopic"
              name="relationTopic"
              label="Temas relacionados"
              fullWidth
              // autoComplete="billing address-line2"
              inputRef={register({ required: true})}
              error={errors.relationTopic ? true : false}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="benefits"
              name="benefits"
              label="Beneficios"
              fullWidth
              // autoComplete="billing postal-code"
              inputRef={register({ required: true})}
              error={errors.benefits ? true : false}
            />
          </Grid>
          {/*    <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Estado"
            fullWidth
            autoComplete="billing country"
          />
        </Grid> */}
          {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}


        </Grid>
        <div className={classes.buttons}>
          {/* {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Atras
            </Button>
          )} */}
          <Button
            variant="contained"
            color="primary"
            // onClick={props.handleNext}
            type="submit"
            className={classes.button}
          >
            Finalizar
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
