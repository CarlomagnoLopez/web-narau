import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ItemCart(props) {
    const classes = useStyles();
    const { item } = props;
    const { index } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {`Tema: ${item.nameService}`}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {`Lema: ${item.subtitle}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {`Modalidad: ${item.mode.toUpperCase()}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="secondary" onClick={() => {props.deleteToCart(index)}}>
                                    Eliminar
                                </Button>
                                {/* <Button variant="contained" color="primary" onClick={() => {props.addToCart(index)}}>
                                    Agregar al carrito
                                </Button> */}
                            </Grid>
                            {/* <Grid item>
                                <Button variant="contained" color="default" onClick={() => {props.addToCart(index)}}>
                                    Agregar al carrito
                                </Button>
                            </Grid> */}
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$0.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
