import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
}));

export default function PaymentForm(props) {
  const classes = useStyles();
  const { invoiceData } = props;
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    // console.log("data Valjues");
    // data.role = "user"
    // props.validateForm(data);
    props.handleNext(data);
    // console.log(data);
  };

  const onSubmitBack = data => {
    props.handleBack(data);
    // console.log(data);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información de pago
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              // required
              defaultValue={invoiceData.nameCard}
              id="nameCard"
              name="nameCard"
              label="La cuenta esta a nombre"
              fullWidth
              inputRef={register({ required: false })}
              error={errors.razonSocial ? true : false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // required
              defaultValue={invoiceData.bankAccount}
              id="bankAccount"
              name="bankAccount"
              label="Cuenta Clabe"
              fullWidth
              inputRef={register({ required: false })}
              error={errors.razonSocial ? true : false}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              // required
              defaultValue={invoiceData.bankName}
              id="bankName"
              name="bankName"
              label="Institucion bancaria"
              fullWidth
              inputRef={register({ required: false })}
              error={errors.razonSocial ? true : false}
            />
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          {/* {activeStep !== 0 && ( */}
          <Button
            onClick={handleSubmit(onSubmitBack)}
            // type="submit"
            className={classes.button}>
            Atras
            </Button>
          {/* )} */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // onClick={props.handleNext}
            className={classes.button}
          >
            {'Finalizar'}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
