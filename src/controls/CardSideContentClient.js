import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import "../css/stylesGlobalOverRide.css"

const useStyles = makeStyles((theme) => ({
    TextFieldClass: {
        width: "100%"
    },
    root: {
        // position: "absolute",
        // width: "185px"
    }

}));

export default function CardSideContentClient(props) {
    const classes = useStyles();

    const [isEdit, setTypeCard] = React.useState(false);
    const [textValue, setTextValue] = React.useState(props.text);
    const textChange = "";

    const handleTypeCard = (event) => {
        if (!isEdit) {
            setTypeCard(true);
        } else {
            props.request(textValue, props.referenceRequest);
            setTypeCard(false);
        }

    };

    const handleTypeCardClose = (event) => {
        setTypeCard(false);


    };

    const handleChange = (event) => {

        // props.update(event.target.value);


        console.log(textValue)
        // textChange = event.target.value;
        setTextValue(event.target.value);
    };

    const message = () => {

        if (textValue) {
            return textValue
        }
        return props.palaceHolder
    }

    return (
        <Card elevation={0}>
            <CardHeader
                title={
                    <form className={classes.root} noValidate autoComplete="off">


                        {isEdit &&

                            <TextField

                                id="outlined-multiline-static"
                                label={props.title}
                                // multiline
                                rows={4}
                                // placeholder={props.palaceHolder}
                                // defaultValue="Default Value"
                                variant="outlined"
                                // fullWidth
                                margin="normal"
                                classes={{
                                    root: "rootTextFieldClient"
                                }}
                                value={textValue}
                                onChange={handleChange}
                            />

                        }
                        {!isEdit &&
                            <Typography color="textSecondary" gutterBottom>
                                {
                                    <span>
                                        {message()}
                                    </span>
                                }
                            </Typography>
                        }

                    </form>

                }
                action={!props.noEdit &&
                    // nodeAction(isEdit)

                    <div>

                        <IconButton onClick={handleTypeCardClose}>
                            {isEdit &&
                                <CancelIcon></CancelIcon>

                            }
                        </IconButton>
                        < IconButton onClick={handleTypeCard}>
                            {isEdit &&
                                <SaveIcon></SaveIcon>

                            }
                            {!isEdit &&
                                <EditIcon />
                            }

                        </IconButton>

                    </div>


                }
            />
            {/* <CardContent>

                <form className={classes.root} noValidate autoComplete="off">


                    {isEdit &&

                        <TextField

                            id="outlined-multiline-static"
                            label={props.title}
                            multiline
                            rows={4}
                            // defaultValue="Default Value"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            classes={{
                                root: "rootTextField"
                            }}
                            value={textValue}
                            onChange={handleChange}
                        />

                    }
                    {!isEdit &&
                        <Typography color="textSecondary" gutterBottom>
                            {
                                <span>
                                    {message()}
                                </span>
                            }
                        </Typography>
                    }

                </form>

            </CardContent> */}
        </Card>

    );
}