import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(2);

  const clickRaiting = () => {
    // console.log("aca")
    if (props.openCustomerValorations) {
      props.openCustomerValorations()
    }
  }

  return (
    <div>
      {/* <Box component="fieldset" mb={3} borderColor="transparent" className={props.className}> */}
      <Grid container spacing={0} onClick={clickRaiting} className="gridClick">
        {props.openCustomerValorations &&
          <Grid item xs>

            <Typography component="legend">Valoraciones:</Typography>
          </Grid>
        }

        <Grid item xs>
          {/* <IconButton
          ></IconButton> */}
          <Rating
            readOnly
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Grid>
      </Grid>


      {/* </Box> */}
    </div>
  );
}
