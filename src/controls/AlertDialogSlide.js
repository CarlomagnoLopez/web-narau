import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import "../css/stylesGlobalOverRide.css"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {

    props.handleCloseOpenConf();

    // setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.show}
        TransitionComponent={Transition}
        keepMounted
        classes={{root:"dialogConf"}}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.desc}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{props.title}


          </DialogContentText>
        </DialogContent>
        <DialogActions classes={{ root: "rootActions" }} >
          <Button onClick={handleClose} color="primary" classes={{
            root: "submitbtn"
          }}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}