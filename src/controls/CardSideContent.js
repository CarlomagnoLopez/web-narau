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
const useStyles = makeStyles((theme) => ({
    TextFieldClass: {
        width: "100%"
    }
}));

export default function CardSideContent(props) {
    const classes = useStyles();

    const [isEdit, setTypeCard] = React.useState(false);
    const [textValue, setTextValue] = React.useState(props.text);
    const textChange = "";

    const handleTypeCard = (event) => {
        if (!isEdit) {
            setTypeCard(true);
        } else {
            props.request(textValue, "aboutMe");
            setTypeCard(false);
        }

    };

    const handleChange = (event) => {
        
        // props.update(event.target.value);


        console.log(textValue)
        // textChange = event.target.value;
        setTextValue(event.target.value);
    };

    return (
        <Card elevation={0}>
            <CardHeader
                title={
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {props.title}
                    </Typography>

                }
                action={
                    // nodeAction(isEdit)

                    < IconButton onClick={handleTypeCard}>
                        {isEdit &&
                            <SaveIcon></SaveIcon>

                        }
                        {!isEdit &&
                            <EditIcon />
                        }

                    </IconButton>

                }
            />
            <CardContent>

                <form className={classes.root} noValidate autoComplete="off">


                    {isEdit &&

                        <TextField
                            id="outlined-multiline-static"
                            label={props.title}
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="standard"
                            value={textValue}
                            onChange={handleChange}
                            className={classes.TextFieldClass}
                        />
                        // <TextField id="standard-basic" label={props.title} value={props.text} />

                    }
                    {!isEdit &&
                        <Typography color="textSecondary" gutterBottom>
                            {textValue}
                        </Typography>
                    }

                </form>

            </CardContent>
        </Card>

    );
}