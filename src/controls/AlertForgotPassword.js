import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { useForm } from "react-hook-form";
// import CircularProgress from '@material-ui/core/CircularProgress';
import BussyLoader from '../controls/BussyLoader';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import "../css/stylesGlobalOverRide.css"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import candado from '../assets/narau-21.png';
import greca from '../assets/narau-35.png';

const useStyles = makeStyles((theme) => ({
    backGreca: {
        backgroundImage: "url(" + greca + ")",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        position: "absolute",
        backgroundSize: "cover"
        // width: 100%;
        // height: 100%;
        // top: 0;
        // left: 0;
        // /* z-index: 10000; */
        // /* background-repeat: repeat; */
        // /* background-repeat-x: repeat; */
        // background-size: 37px;
    },
    appBar: {
        position: 'relative',
        backgroundColor: "rgb(255,255,255,0)"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    closeBtn: {
        position: "absolute",
        right: "20px",
        color: "#fff"

    }
}));
export default function AlertForgotPassword(props) {
    //   const [open, setOpen] = React.useState(false);
    const [recoverEmail, setRecoverEmail] = React.useState("");
    const classes = useStyles();
    const onSubmit = () => {
        console.log("data Valjues");
        console.log(recoverEmail);

        if (recoverEmail !== "") {
            let str = recoverEmail;
            let res = str.match(/[\w\.-]+@[\w\.-]+\.\w{2,4}/g);

            if (res) {
                console.log("sisi")
                props.sendToEmail({ email: recoverEmail })
            } else {
                console.log("nono")
            }
        }
        // loading = true;
        // props.sendToEmail(data)
    };

    const typeEmail = (value) => {
        // console.log(value.currentTarget.value)

        setRecoverEmail(value.currentTarget.value)
    }


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <div>

            <Dialog classes={{ root: "dialogBlack" }} fullScreen open={props.open} aria-labelledby="form-dialog-title"

            // TransitionComponent={Transition}
            >
                <div>
                    <div className={classes.backGreca}>
                    </div>
                </div>
                {/* <AppBar className={classes.appBar}>
                    <Toolbar>
                        
                    </Toolbar>
                </AppBar> */}
                {props.loading &&
                    <BussyLoader

                    // showLoader={this.state.showLoader}
                    ></BussyLoader>
                }
                <IconButton edge="end" color="inherit" onClick={props.handleClose} className={classes.closeBtn} aria-label="close">
                    <CloseIcon fontSize="large" />
                </IconButton>
                <Container maxWidth="sm" spacing={2}>
                    <div className={classes.logo}>
                        <img src={candado} style={{ width: "4.5rem", left: "calc(50% - 2.2rem)", position: "relative" }} />

                    </div>
                    <DialogTitle align="center" id="form-dialog-title">Restablecer la contraseña</DialogTitle>
                    {/* <form noValidate> */}
                    <DialogContent>
                        <DialogContentText align="center">
                            Déjanos tu correo de registro. Nos comunicaremos contigo
                            para enviarte tu contraseña.
                        </DialogContentText>


                        <TextField


                            variant="outlined"
                            required
                            id="email"
                            classes={{
                                root: "rootTextFieldGray"
                            }}
                            placeholder="Dirección de correo electrónico"
                            onChange={typeEmail}
                            // value={recoverEmail}
                            // label="Email Address"
                            type="email"
                            name="email"
                            fullWidth
                            // inputRef={register({ required: false})}
                            // error={errors.email ? true : false}

                            autoFocus

                        // classes={{
                        //     root: "rootTextField",
                        //     // primaryColor:"colorOver"
                        // }}

                        />
                    </DialogContent>
                    <DialogActions classes={{ root: "rootActions" }}>
                        {/* <Button onClick={props.handleClose} color="primary">
                            Cancel
                        </Button> */}
                        <Button
                            classes={{
                                root: "submitbtnRounded"
                            }}
                            onClick={onSubmit}
                            // type="submit" 
                            color="primary">
                            Enviar
                        </Button>
                    </DialogActions>
                    {/* </form> */}


                </Container>

            </Dialog>
        </div >
    );
}