import React from "react";
import { connect } from "react-redux";
import { singIn } from "../redux/actions";
import SignIn from "../components/SingIn";
import SignUpIntructor from "../components/SignUpIntructor";
import SignUpEmpresa from "../components/SignUpEmpresa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: "" 
      signupintructor: false,
      signupempresa: false
    };
  }

  signInRequest = () => {
    fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/userslogin?user=carlo-magno@live.com.mx&psw=carlo2020', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.props.singIn(data.body);
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
  }

  render() {
    // console.log("props")
    // console.log(this.props)
    // console.log("state")
    // console.log(this.state)
    const { login } = this.props.api;
    const { signupintructor, signupempresa } = this.state;

    // this.signInRequest();



    return (
      <div>
        <div>

          {!login && !signupintructor && !signupempresa &&
            <SignIn
              signInRequest={this.signInRequest}
              startSignUp={this.startSignUp}
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
              // startSignUpEmpresa={this.startSignUpEmpresa}
            ></SignUpEmpresa>
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
  { singIn }
)(App);
// export default AddTodo;