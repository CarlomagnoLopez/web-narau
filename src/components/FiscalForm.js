import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  rfcField:{
    textTransform: "uppercase"
  }
}));
export default function FiscalForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const classes = useStyles();
  const { invoiceData } = props;
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
        Datos Fiscales.
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              defaultValue={invoiceData.razonSocial}
              id="razonSocial"
              name="razonSocial"
              label="Nombre o razón social"
              fullWidth
              inputRef={register({ required: true})}
              error={errors.razonSocial ? true : false}
            // autoComplete="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              defaultValue={invoiceData.rfc}
              required
              id="rfc"
              name="rfc"
              label="RFC"
              fullWidth
              // classes={{input: classes.rfcField}}
              inputRef={register({ required: true, pattern:/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/ })}
              error={errors.rfc ? true : false}
            // autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={invoiceData.calle}
              required
              id="calle"
              name="calle"
              label="Calle"
              fullWidth
              inputRef={register({ required: true})}
              error={errors.calle ? true : false}
            // autoComplete="billing address-line1"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={invoiceData.numExt}
              // required
              id="numExt"
              name="numExt"
              label="Número exterior"
              fullWidth
              inputRef={register({ required: false})}
              error={errors.numExt ? true : false}
            // autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={invoiceData.numInt}
              // required
              id="numInt"
              name="numInt"
              label="Número interior"
              fullWidth
              inputRef={register({ required: false})}
              error={errors.numInt ? true : false}
            // autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={invoiceData.colonia}
              required
              id="colonia"
              name="colonia"
              label="Colonia"
              fullWidth
              autoComplete="billing address-line2"
              inputRef={register({ required: true})}
              error={errors.colonia ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={invoiceData.cp}
              required
              id="cp"
              name="cp"
              label="Codigo Postal"
              fullWidth
              inputRef={register({ required: true})}
              error={errors.cp ? true : false}
            // autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={invoiceData.state}
              required
              id="state"
              name="state"
              label="Estado"
              fullWidth
              inputRef={register({ required: true})}
              error={errors.state ? true : false}

            // autoComplete="billing country"
            />
          </Grid>
          {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        </Grid>

        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            // onClick={props.handleNext}
            // onClick={validateFields}
            type="submit"
            className={classes.button}
          >
            {'Siguiente'}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
