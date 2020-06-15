import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import ItemCart from '../controls/ItemCart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 500,
    },
    fullList: {
        width: 'auto',
    },
    total: {
        top: "80%",
        height: "10%",
        // position: "relative"

    },
    listItems: {
        top: "0%",
        height: "81%",
        // position:"relative"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));

export default function ShoppingCart(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: true,
    });
    const { shoppingCart } = props;

    const proceedToRequest = () => {
        if (shoppingCart.length > 0) {
            props.proceed(shoppingCart)
        }

    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {


            return;
        }
        if (!open) {
            props.closeDrawer();
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant="h6" align="center">
                Carrito de compra
            </Typography>
            <Divider />
            <List>
                {shoppingCart.map((item, index) => (
                    <ItemCart
                        item={item}
                        index={index}
                        deleteToCart={props.deleteToCart}
                    ></ItemCart>
                    // <ListItem key={item.nameService}>
                    //     <ListItemText primary={`Tema: ${item.nameService}`} secondary={`Modalidad: ${item.mode.toUpperCase()}`} />
                    //     <ListItemText secondary={`Costo: $0.00`} />
                    // </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
            <React.Fragment key={"right"}>
                <Button onClick={toggleDrawer("right", true)}>{"right"}</Button>
                <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                    <div className={classes.listItems}>
                        {list("right")}
                    </div>
                    <div className={classes.total}>
                        <Divider />
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h6">
                                                {" Gran total:"}
                                            </Typography>
                                        </Grid>
                                        <Grid item spacing={2}>
                                            <Button variant="contained" color="primary" fullWidth onClick={proceedToRequest} disabled={shoppingCart.length > 0 ? false : true}>
                                                Proceder
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6">$0.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                </Drawer>
            </React.Fragment>
            {/* ))} */}
        </div>
    );
}
