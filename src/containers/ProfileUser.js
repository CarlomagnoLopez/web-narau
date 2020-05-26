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
import ProfileConsultant from "../components/ProfileConsultant";


class ProfileUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSession: localStorage.getItem("active") === "true" ? true : false,
            currentAccountTemp: JSON.parse(localStorage.getItem("contentUser")),
            currentAccount:"",
            loggingOut: false
        };
    }

     
    componentWillMount() {
        fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/userdetail?role=' + this.state.currentAccountTemp.role + "&email=" + this.state.currentAccountTemp.email, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
            }
        })
            .then(res => res.json())
            .then((data) => {

                console.log(data)

                let jsonModel = JSON.stringify(data.body.data["custom-attr"]);

                localStorage.setItem("contentUser", jsonModel);

                this.setState({
                    currentAccountTemp: JSON.parse(localStorage.getItem("contentUser"))
                })
                // this.props.recoveryPsw(data);
                // this.setState({
                //     loadingRecoveryPassword: false,
                //     forgotPassword: false,
                //     successSendPassword: true

                // })
                // this.setState({
                //   signupintructor: false,
                //   signupempresa: false,
                //   showLoader: false
                // })
            })
            .catch(console.log)
    }



    render() {
        // let { user } = useParams();

        // console.log(this)
        const currentRole = this.state.currentAccountTemp.role ? this.state.currentAccountTemp.role : "";

        if (!this.state.activeSession || currentRole === "") {

            this.setState({
                activeSession: true
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
                {currentRole === "consultant" &&
                    <ProfileConsultant currentAccount={this.state.currentAccountTemp}></ProfileConsultant>
                }

            </div>

        );

    }
}
// const mapStateToProps = state => {
//   // return { activeFilter: state.visibilityFilter };
//   return state;
// };

export default ProfileUser

// const mapStateToProps = state => {
//     // return { activeFilter: state.visibilityFilter };
//     return state;
// };

// export default connect(
//     mapStateToProps,
//     { singIn }
// )(ProfileUser);


// connect(
//   mapStateToProps,
//   { singIn, singUp, recoveryPsw }
// )(ProfileUser);
