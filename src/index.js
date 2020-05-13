import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./containers/App";
import Verify from "./containers/Verify";
import NoMatch from "./containers/NoMatch";
import 'typeface-roboto';
// import { BrowserRouter as Router, Route,browserHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
// import {  browserHistory } from 'react-router'
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        
        {/* <Route path="/recovery/:id"> */}
        <Route path="/verify/:id" children={<ChildRecovery />} >
        </Route>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    {/* <App /> */}
  </Provider>,
  rootElement
);


function ChildRecovery() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
     <Verify linkVerify = {id}/> 
  );
}
