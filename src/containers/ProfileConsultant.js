import React from "react";
import { connect } from "react-redux";
import { singIn, singUp, recoveryPsw } from "../redux/actions";
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useHistory
} from "react-router-dom";

// import { useHistory } from "react-router-dom";
import Profile from "../components/Profile";


class ProfileConsultant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSession: localStorage.getItem("active") === "true" ? true : false,
            loggingOut: false
        };
    }



    render() {
        // let { user } = useParams();

        // console.log(this)

        if (!this.state.activeSession) {

            this.setState({
                activeSession:true
            })
            console.log("logging outs")
            return (
                <Redirect
                    push to="/"
                />
            );
        }
        return (
            <div>
                <Profile ></Profile>

            </div>

        );

    }
}
// const mapStateToProps = state => {
//   // return { activeFilter: state.visibilityFilter };
//   return state;
// };

export default ProfileConsultant

// connect(
//   mapStateToProps,
//   { singIn, singUp, recoveryPsw }
// )(ProfileConsultant);
