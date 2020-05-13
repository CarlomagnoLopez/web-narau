import React from "react";
import AlertSnack from "../controls/AlertSnack";
// import { connect } from "react-redux";
// import { singIn, singUp, recoveryPsw } from "../redux/actions";


class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "info",
      text:"We are verifying your user!"
    };
  }

  componentDidMount() {
    fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default//verifyuser?verify=' + this.props.linkVerify, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
      }
    })
      .then(res => res.json())
      .then((data) => {
        // this.props.recoveryPsw(data);

        if (data.body.exist) {
          this.setState({
            type: "success",
            text:"You have been verified"
          })
        }else{
          this.setState({
            type: "error",
            text:"You could not access to Narau"
          })
        }

        // console.log(data)
      })
      .catch(console.log)
  }

  render() {

    // this.getParam()

    // let { id } = useParams();


    return (
      // <div>
      //   {/* <h3>ID: {id}</h3> */}
      //   <h3>ID: {this.props.linkVerify}</h3>
      // </div>
      <AlertSnack
        type={this.state.type}
        link={this.props.linkVerify}
        text={this.state.text}
      ></AlertSnack>

      // <Snackbar open={true}>
      //   <Alert onClose={handleClose} severity="info">
      //     This is a success message! {this.props.linkVerify}
      //   </Alert>
      // </Snackbar>
    );
  }
}


// const mapStateToProps = state => {
//   // return { activeFilter: state.visibilityFilter };
//   return state;
// };

export default Verify;
// export default AddTodo;
