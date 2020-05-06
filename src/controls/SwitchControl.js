import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function SwitchControl(props) {

  const [state, setState] = React.useState({
    // checkedA: true,
    checkedB: props.checked,
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    // console.log(props)
    props.changeEvent();

  };

  return (
    <div>
      {/* <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> */}
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {/* <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      /> */}
    </div>
  );
}