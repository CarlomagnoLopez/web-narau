import React from "react";
import { connect } from "react-redux";
import { singIn, singUp, recoveryPsw } from "../redux/actions";



class NoMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 

  render() {


    return (
      <div>
        Page under construction
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
  { singIn, singUp, recoveryPsw }
)(NoMatch);
// export default AddTodo;
