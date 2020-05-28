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
import Skeleton from '@material-ui/lab/Skeleton';

// import { useHistory } from "react-router-dom";
import ProfileConsultant from "../components/ProfileConsultant";
import ProfileCompany from "../components/ProfileCompany";
import BussyLoader from "../controls/BussyLoader";


class ProfileUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            activeSession: localStorage.getItem("active") === "true" ? true : false,
            currentAccountTemp: JSON.parse(localStorage.getItem("contentUser")),
            partitionKey: "",
            loadingUpdate: false,
            // currentAccount:"",
            loggingOut: false
        };
    }


    componentWillMount() {
        this.startLoading();
    }

    startLoading = () => {
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

                this.setState({
                    partitionKey: data.body.data["custom-types"],
                    invoiceData: data.body.invoice ? data.body.invoice["custom-attr"] : "",
                    serviceData: data.body.service ? data.body.service : ""
                })

                localStorage.setItem("partitionKey", this.state.partitionKey);

                this.updateMainDataAttr(data.body.data["custom-attr"]);


            })
            .catch(console.log)
    }

    updateMainDataAttr = (data) => {
        let jsonModel = JSON.stringify(data);

        localStorage.setItem("contentUser", jsonModel);

        this.setState({
            currentAccountTemp: JSON.parse(localStorage.getItem("contentUser")),
            loading: true
        })
    }


    refreshBasicData = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default//saveattributes', {
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    this.setState({
                        loadingUpdate: false
                    })

                    console.log(data)
                })
                .catch(console.log)
        })

    }

    refreshInvoiceData = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default//saveinvoice', {
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    this.setState({
                        loadingUpdate: false
                    })

                    console.log(data)
                })
                .catch(console.log)
        })

    }

    saveService = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default//saveservice', {
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    this.startLoading();
                    this.setState({
                        loadingUpdate: false
                    })

                    console.log(data)
                })
                .catch(console.log)
        })

    }


    render() {
        // let { user } = useParams();

        // console.log(this)
        const currentRole = this.state.currentAccountTemp.role ? this.state.currentAccountTemp.role : "";

        if (!this.state.activeSession) {

            // this.setState({
            //     activeSession: true
            // })
            console.log("logging outs")
            return (
                <Redirect
                    push to="/"
                />
            );
        }

        if (!this.state.loading) {
            return (
                <div>
                    <BussyLoader> </BussyLoader>

                </div>

            );

        }

        // if (this.state.loadingUpdate) {
        //     return (
        //         <div>
        //             <Skeleton variant="text" />
        //             <Skeleton variant="circle" width={40} height={40} />
        //             <Skeleton variant="rect" width={210} height={118} />
        //         </div>
        //     );
        // }
        // refreshInvoiceData
        return (
            <div>
                {currentRole === "consultant" &&
                    <div>
                        {this.state.loadingUpdate &&
                            <BussyLoader> </BussyLoader>
                        }

                        <ProfileConsultant
                            currentAccount={this.state.currentAccountTemp}
                            refreshBasicData={this.refreshBasicData}
                            refreshInvoiceData={this.refreshInvoiceData}
                            saveService={this.saveService}
                            invoiceData={this.state.invoiceData}
                            serviceData={this.state.serviceData}
                        ></ProfileConsultant>
                    </div>

                }

                {currentRole === "company" &&
                    <div>
                        {this.state.loadingUpdate &&
                            <BussyLoader> </BussyLoader>
                        }

                        <ProfileCompany 
                            currentAccount={this.state.currentAccountTemp}
                            refreshBasicData={this.refreshBasicData}
                            refreshInvoiceData={this.refreshInvoiceData}
                            saveService={this.saveService}
                            invoiceData={this.state.invoiceData}
                            serviceData={this.state.serviceData}
                        ></ProfileCompany>
                    </div>

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
