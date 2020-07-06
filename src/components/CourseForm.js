import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from "react-hook-form";
import ListIcon from '@material-ui/icons/List';
import CustomInputSelect from "../controls/CustomInputSelect"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    width: "100%"
  },
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
  // extendedIcon: {
  //   marginRight: theme.spacing(1),
  // },
}));
// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }


// function addSelectController(nodeComponent, control, errors, nameId) {
//   return <Controller
//     as={nodeComponent}
//     id={nameId}
//     name={nameId}
//     control={control}
//     required
//     rules={({ required: true })}
//     error={errors.serviceType ? true : false}
//   />
// }

export default function LaunchCourse(props) {
  const { register, handleSubmit, watch, errors, control, setValue } = useForm({
    defaultValues: {
      nameService: props.currentDataService.nameService,
      serviceType: props.currentDataService.serviceType,
      mode: props.currentDataService.mode,
      subtitle: props.currentDataService.subtitle,
      to: props.currentDataService.to,
      benefits: props.currentDataService.benefits,
      // benefits: props.currentDataService.benefits,
      // lastName: "luo",
      // email: "bluebill1049@hotmail.com",
      // pets: ['dog', 'cat']
    }
  });
  const [type, setType] = React.useState('');
  const [mode, setMode] = React.useState('');


  const { topicData } = props;

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  const classes = useStyles();

  const onSubmit = data => {
    // console.log("data Valjues");
    // data.role = "user"
    // props.validateForm(data);
    data.topics = topicData;
    if (props.currentDataSortKey) {
      props.handleNext(data, props.currentDataSortKey);
    } else {
      props.handleNext(data);
    }

    // 

    // console.log(data);
  };



  const deleteTema = (item, index) => {

    // console.log(item, index)

    // let newArr = item.splice(index,1)
    item.splice(index, 1)
    props.deleteTopic(item);
  }

  const addNewTopic = (data) => {
    // console.log(watch("topics"));
    let _data =  data ? data : [];

    _data.push({ tema: watch("topics") })
    setValue("topics", "")
    props.addTopic(_data)
  }

  const modelReq = () => {

    if (topicData) {
      if (topicData.length === 0) {
        return { required: true }
      }
    }


    return { required: false }
  }

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
              inputRef={register({ required: true })}
              error={errors.nameService ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>

            <CustomInputSelect
              nodeComponent={
                <TextField
                  value={type}
                  select
                  label="Tipo"
                  onChange={handleChange}
                  className={classes.select}
                >
                  <MenuItem value={"asesoria"}>Asesoría</MenuItem>
                  <MenuItem value={"taller"}>Taller</MenuItem>
                  <MenuItem value={"conferencia"}>Conferencia</MenuItem>
                </TextField>
              }
              control={control}
              errors={errors}
              nameId="serviceType"
              required={true}

            ></CustomInputSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputSelect
              nodeComponent={
                <TextField
                  value={mode}
                  select
                  label="Modalidad"
                  onChange={handleChangeMode}
                  className={classes.select}
                >
                  <MenuItem value={"presencial"}>Presencial</MenuItem>
                  <MenuItem value={"online"}>On Line</MenuItem>
                </TextField>
              }
              control={control}
              errors={errors}
              nameId="mode"
              required={true}

            ></CustomInputSelect>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="subtitle"
              name="subtitle"
              label="Lema"
              fullWidth
              inputRef={register({ required: true })}
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
              multiline
              rows={4}
              inputRef={register({ required: true })}
              error={errors.to ? true : false}
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
              inputRef={register({ required: true })}
              error={errors.benefits ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="topics"
              name="topics"
              label="Temario"
              fullWidth
              // inputRef={register({ required: `${false}` })}
              inputRef={register(modelReq())}
              error={errors.topics ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fab variant="extended"
              disableRipple={watch("topics") ? false : true}
              disabled={watch("topics") ? false : true}
              disableFocusRipple={watch("topics") ? false : true}
            >
              <IconButton
                // disabled={watch("topics") ? false : true}
                onClick={() => { addNewTopic(topicData) }}>
                <AddIcon
                  className={classes.extendedIcon}
                // disabled={watch("topics") ? false : true}
                />
                 Nuevo tema
            </IconButton>
            </Fab>
          </Grid>

        </Grid>
        <Grid item xs={12} container
          direction="column"
          justify="space-around"
          alignItems="center">
          <List dense={true}>
            {topicData && topicData.map((item, index) => {
              return (<ListItem>
                <ListItemAvatar>
                  <DoneIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={(index + 1) + " " + item.tema}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => { deleteTema(topicData, index) }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>)

            })
            }
          </List>
        </Grid >

        {/* <Grid item xs={12}>
            <TextField
              required
              id="relationTopic"
              name="relationTopic"
              label="Temas relacionados"
              fullWidth
              // autoComplete="billing address-line2"
              inputRef={register({ required: true })}
              error={errors.relationTopic ? true : false}
            />
          </Grid> */}

        < div className={classes.buttons} >
          <Button
            onClick={props.handleClose}
            // type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}>
            Cancelar
            </Button>
          <Button
            variant="contained"
            color="primary"
            // onClick={props.handleNext}
            type="submit"
            className={classes.button}
          >
            Finalizar
          </Button>
        </div >
      </form >
    </React.Fragment >
  );
}
