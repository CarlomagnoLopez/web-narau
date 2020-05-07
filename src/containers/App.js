import React from "react";
import { connect } from "react-redux";
import { singIn, singUp } from "../redux/actions";
import SignIn from "../components/SingIn";
import SignUpIntructor from "../components/SignUpIntructor";
import SignUpEmpresa from "../components/SignUpEmpresa";
import Album from "../components/Album";

import BussyLoader from '../controls/BussyLoader';
import AlertDialogSlide from '../controls/AlertDialogSlide';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: "" 
      signupintructor: false,
      signupempresa: false,
      showLoader: false
    };
  }

  signInRequest = (data) => {
    fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/userslogin?user=' + data.email + '&psw=' + data.password, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.props.singIn(data.body);
        this.setState({
          signupintructor: false,
          signupempresa: false,
          showLoader: false
        })
      })
      .catch(console.log)
  }

  signUppRequest = (data) => {
    fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/usersignup', {
      method: 'PUT',
      // mode: 'CORS',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.props.singUp(data.body);
        this.setState({
          signupintructor: false,
          signupempresa: false,
          showLoader: false
        })

        console.log(data)
      })
      .catch(console.log)
  }

  startSignUp = () => {
    this.setState({
      signupintructor: true,
      signupempresa: false
    })
  }

  startSignIn = () => {
    this.setState({
      signupintructor: false,
      signupempresa: false
    })
  }

  startSignUpEmpresa = () => {
    this.setState({
      signupintructor: false,
      signupempresa: true
    })
  }

  validateForm = data => {
    console.log("data")
    console.log(data)
    this.setState({
      showLoader: true
    })
    this.signUppRequest(data)

  }
  validateFormSignIn = data => {
    console.log("data")
    console.log(data)
    this.setState({
      showLoader: true
    })
    this.signInRequest(data)

  }

  // resetDialog = () =>{ 

  // }

  render() {
    // console.log("props")
    // console.log(this.props)
    // console.log("state")
    // console.log(this.state)
    const { login, created, desc, signin, contentSignIn } = this.props.api;
    const { signupintructor, signupempresa, showLoader } = this.state;

    // this.signInRequest();
    console.log("login")
    console.log(login)


    return (
      <div>
        <div>
          {showLoader &&
            <BussyLoader

            // showLoader={this.state.showLoader}
            ></BussyLoader>
          }
        </div>

        <div>
          {(created || desc === "duplicity") &&
            <AlertDialogSlide
              desc={desc === "duplicity" ? "The email is already exist" : "We are verifing your information, We will send an email verification"}
              show={true}
            // resetDialog={this.resetDialog}
            // showLoader={this.state.showLoader}
            ></AlertDialogSlide>
          }
        </div>

        <div>
          {(desc === "noexist") &&
            <AlertDialogSlide
              desc="You don't have access."
              show={true}
            // resetDialog={this.resetDialog}
            // showLoader={this.state.showLoader}
            ></AlertDialogSlide>
          }
        </div>


        <div>
          {!login && !signupintructor && !signupempresa &&
            <SignIn
              signInRequest={this.signInRequest}
              startSignUp={this.startSignUp}
              validateForm={this.validateFormSignIn}
            ></SignIn>
          }
        </div>

        <div>
          {signupintructor && !signupempresa &&
            <SignUpIntructor
              startSignIn={this.startSignIn}
              changeEvent={this.startSignUpEmpresa}
              validateForm={this.validateForm}
            ></SignUpIntructor>
          }
        </div>
        <div>
          {!signupintructor && signupempresa &&
            <SignUpEmpresa
              startSignIn={this.startSignIn}
              changeEvent={this.startSignUp}
              validateForm={this.validateForm}
            // startSignUpEmpresa={this.startSignUpEmpresa}
            ></SignUpEmpresa>
          }
        </div>

        <div>
          {signin &&
            <Album
              // startSignIn={this.startSignIn}
              // changeEvent={this.startSignUp}
              // validateForm={this.validateForm}
              // startSignUpEmpresa={this.startSignUpEmpresa}

              contentUser={contentSignIn}
            ></Album>
          }
        </div>
      </div>


      // <div>
      //   <input
      //     onChange={e => this.updateInput(e.target.value)}
      //     value={this.state.input}
      //   />
      //   <button className="add-todo" onClick={this.handleAddTodo}>
      //     Add Todo
      //   </button>
      // </div>
    );
  }
}
const mapStateToProps = state => {
  // return { activeFilter: state.visibilityFilter };
  return state;
};

export default connect(
  mapStateToProps,
  { singIn, singUp }
)(App);
// export default AddTodo;
