import React from "react";
import { connect } from "react-redux";
import {
  Redirect,
  useHistory
} from "react-router-dom";
import BussyLoader from '../controls/BussyLoader';
import AlertDialogSlide from '../controls/AlertDialogSlide';
import AlertForgotPassword from '../controls/AlertForgotPassword';
import AlertSendPassword from '../controls/AlertSendPassword';
import { singIn, singUp, recoveryPsw } from "../redux/actions";
import SignIn from "../components/SingIn";
import SignUpIntructor from "../components/SignUpIntructor";
import SignUpEmpresa from "../components/SignUpEmpresa";
import LandingPage from "../components/LandingPage";

localStorage.setItem("contentUserAvatarImg", "");
localStorage.setItem("contentUserCurrentAvatar", "")

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openConf: true,
      openAlertDialogSlide: true,
      // input: "" 
      signupintructor: false,
      signupempresa: false,
      showLoader: false,
      forgotPassword: false,
      loadingRecoveryPassword: false,
      successSendPassword: false,
      // landingPage: false,
      // initLogin: true,
      landingPage: false,
      initLogin:true
    };
  }

  componentDidMount() {
    localStorage.setItem("active", "false");
    localStorage.setItem("contentUser", "");
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
          openAlertDialogSlide: true,
          signupintructor: false,
          signupempresa: false,
          showLoader: false
        })
      })
      .catch(console.log)
  }

  recoveryPassword = (data) => {
    fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/userrecovery?email=' + data.email, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.props.recoveryPsw(data);
        this.setState({
          loadingRecoveryPassword: false,
          forgotPassword: false,
          successSendPassword: true

        })
        // this.setState({
        //   signupintructor: false,
        //   signupempresa: false,
        //   showLoader: false
        // })
      })
      .catch(console.log)
  }


  getServices = (data) => {
    // fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/usersignup', {
    //   method: 'PUT',
    //   // mode: 'CORS',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
    //   }
    // })
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.props.singUp(data.body);
    //     this.setState({
    //       signupintructor: false,
    //       signupempresa: false,
    //       showLoader: false
    //     })

    //     console.log(data)
    //   })
    //   .catch(console.log)
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
  handleCloseForgotPassword = () => {
    this.setState({
      forgotPassword: false
    })
  }

  handleCloseSendPassword = () => {
    this.setState({
      successSendPassword: false
    })
  }

  showForgotPassword = () => {
    this.setState({
      forgotPassword: true
    })

  }

  sendToEmail = data => {
    this.setState({
      loadingRecoveryPassword: true
    })
    console.log(data)
    this.recoveryPassword(data)
    console.log("show it...")
  }

  setContent = contentSignIn => {
    // let history = useHistory();

    let jsonModel = JSON.stringify(contentSignIn);

    localStorage.setItem("contentUser", jsonModel)
    this.props.singIn({});
    return (

      <Redirect
        push to="/profileuser/"
      />
    )
    // history.push("/ProfileUser");
  }
  // resetDialog = () =>{ 

  // }

  handleCloseOpenConf = () => {
    this.setState({
      openConf: false
    })

    window.location.href = "/";
  }

  handleSendRequestOne = () => {
    this.setState({
      initLogin:true,
      landingPage:false
    })
  }

  render() {
    // console.log("props")
    // console.log(this.props)
    // console.log("state")
    // console.log(this.state)
    const { login, created, desc, signin, contentSignIn, recovery } = this.props.api;
    const { signupintructor, signupempresa, showLoader, forgotPassword, successSendPassword } = this.state;

    console.log("App.js")
    // console.log(login)

    // if (signin) {
    //   let history = useHistory();

    //   // function handleClick() {
    //   history.push("/home");
    //   // }
    // }


    return (
      <div>
        {this.state.landingPage &&
          <LandingPage handleSendRequestOne= {this.handleSendRequestOne}>
          </LandingPage>
        }
        {this.state.initLogin &&
          <div>
            <div>
              {showLoader &&
                <BussyLoader

                // showLoader={this.state.showLoader}
                ></BussyLoader>
              }
            </div>

            <div>
              {forgotPassword &&

                <AlertForgotPassword
                  open={forgotPassword}
                  handleClose={this.handleCloseForgotPassword}
                  sendToEmail={this.sendToEmail}
                  loading={this.state.loadingRecoveryPassword}

                ></AlertForgotPassword>
              }
            </div>

            <div>
              {(created || desc === "duplicity") && this.state.openConf &&
                <AlertDialogSlide
                  desc={desc === "duplicity" ? "Error" : "¡Ya casi estás dentro!"}
                  title={desc === "duplicity" ? "El correo ya existe" : "Estamos verificando tu informacion y hemos enviado un correo electrónico de confirmación. "}
                  show={this.state.openConf}
                  handleCloseOpenConf={this.handleCloseOpenConf}
                // resetDialog={this.resetDialog}
                // showLoader={this.state.showLoader}
                ></AlertDialogSlide>
              }
            </div>

            <div>
              {(desc === "noexist") &&
                <AlertDialogSlide
                  desc="No tiene acceso."
                  show={this.state.openAlertDialogSlide}
                  handleCloseOpenConf={() => {
                    this.setState({
                      openAlertDialogSlide: false
                    })
                  }}
                // resetDialog={this.resetDialog}
                // showLoader={this.state.showLoader}
                ></AlertDialogSlide>
              }
            </div>

            <div>
              {(successSendPassword) &&
                <AlertSendPassword
                  // desc={recovery ? "We send an email with your password." : "We don't have that email"}
                  // show={true}
                  open={true}
                  handleClose={this.handleCloseSendPassword}
                // resetDialog={this.resetDialog}
                // showLoader={this.state.showLoader}
                ></AlertSendPassword>
              }
            </div>


            <div>
              {!login && !signupintructor && !signupempresa &&
                <SignIn
                  showForgotPassword={this.showForgotPassword}
                  // signInRequest={this.signInRequest}
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
                this.setContent(contentSignIn)
              }
            </div>
          </div>



        }

      </div>



    );
  }
}
const mapStateToProps = state => {
  // return { activeFilter: state.visibilityFilter };
  return state;
};

export default connect(
  mapStateToProps,
  { singIn, singUp, recoveryPsw }
)(App);
// export default AddTodo;
