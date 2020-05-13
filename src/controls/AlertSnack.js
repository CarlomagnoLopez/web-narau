import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    loader: {
        position: "absolute",
        left: "40%",
        top: "165%",
    },
}));

export default function AlertSnack(props) {
    const classes = useStyles();
    const { type, link,text } = props;
    const [state, setState] = React.useState({
        // open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal } = state;

    //   const [open, setOpen] = React.useState(false);

    //   const handleClick = () => {
    //     setOpen(true);
    //   };

    //   const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }

    //     setOpen(false);
    //   };

    return (
        <div className={classes.root}>
            {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
            <Snackbar open={true} anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}

            >
                <div>

                    <Alert severity={type}>
                        {text}
                       {/* {link} */}
                    </Alert>
                    {type === "info" &&
                        <div className={classes.loader}>
                            <CircularProgress color="secondary" />
                        </div>
                    }


                </div>


            </Snackbar>
            {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
        </div>
    );
}