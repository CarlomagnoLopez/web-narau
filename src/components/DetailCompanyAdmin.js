import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailCompanyAdmin(props) {
  const classes = useStyles();
  const { dataService } = props;
  const { dataServiceId } = props;
  const [open, setOpen] = React.useState(props.show);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.handleCloseDetail()
    setOpen(false);
  };

  const addToWishList = () => {
    dataService.courseId = dataServiceId;
    props.addToWishList(dataService)
    props.handleCloseDetail()
    setOpen(false);
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {dataService.empresa }
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={addToWishList}>
              <AddIcon></AddIcon>
              Añadir a lista de deseos
            </Button> */}
          </Toolbar>
        </AppBar>
        <List>
          <ListItem >
            <ListItemText primary="Contacto" secondary={dataService.firstName + " " + dataService.lastName } />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Correo electornico" secondary={dataService.email} />
          </ListItem>
          <Divider />
          {/* <ListItem >
            <ListItemText primary="Tipo" secondary={dataService.serviceType} />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Dirigido" secondary={dataService.to} />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Beneficios" secondary={dataService.benefits} />
          </ListItem>
          <Divider /> */}
{/* 
          {dataService.topics.map((item, index) => {
            return (
              <ListItem>
                <ListItemText
                  primary={`Tema ${index + 1}`}
                  secondary={item.tema}
                />
              </ListItem>)
          })
          } */}



        </List>
      </Dialog>
    </div>
  );
}
