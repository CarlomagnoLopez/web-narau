import React from "react";
import { connect } from "react-redux";
import { singIn } from "../redux/actions";
import SignIn from "../components/SingIn";
import SignUp from "../components/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: "" 
      signup: false
    };
  }

  // updateInput = input => {
  //   this.setState({ input });
  // };

  // handleAddTodo = () => {
  //   // this.props.addTodo(this.state.input);
  //   this.fetchTodoList(this.state.input);
  //   this.setState({ input: "" });
  // };


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
      signup: true
    })
  }

  startSignIn = () => {
    this.setState({
      signup: false
    })
  }


  render() {
    // console.log("props")
    // console.log(this.props)
    // console.log("state")
    // console.log(this.state)
    const { login } = this.props.api;
    const { signup } = this.state;

    // this.signInRequest();



    return (
      <div>
        <div>

          {!login && !signup &&
            <SignIn
              signInRequest={this.signInRequest}
              startSignUp={this.startSignUp}
            ></SignIn>
          }
        </div>

        <div>
          {signup &&
            <SignUp
              startSignIn={this.startSignIn}
            ></SignUp>
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
