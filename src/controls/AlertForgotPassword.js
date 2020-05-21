import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
// import CircularProgress from '@material-ui/core/CircularProgress';
import BussyLoader from '../controls/BussyLoader';
export default function AlertForgotPassword(props) {
    //   const [open, setOpen] = React.useState(false);

    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    //   const handleClose = () => {
    //     setOpen(false);
    //   };
    const { register, handleSubmit, watch, errors } = useForm();
    // let loading = false;
    const onSubmit = data => {
        // console.log("data Valjues");
        // data.role = "user"
        // props.validateForm(data);
        // console.log(data);
        // loading = true;
        props.sendToEmail(data)
    };

    

    return (
        <div>

            <Dialog open={true} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                {props.loading &&
                    <BussyLoader

                    // showLoader={this.state.showLoader}
                    ></BussyLoader>
                }
                <DialogTitle id="form-dialog-title">Forgot your password?</DialogTitle>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <DialogContentText>
                            To send your password, please enter your email address here.
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            name="email"
                            fullWidth
                            inputRef={register({ required: true, pattern: /[\w\.-]+@[\w\.-]+\.\w{2,4}/ })}//eslint-disable-line
                            error={errors.email ? true : false}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Send password
                        </Button>
                    </DialogActions>
                </form>


            </Dialog>
        </div >
    );
}