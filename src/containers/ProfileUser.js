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
import ProfilleAdmin from "../components/ProfilleAdmin";
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
            loggingOut: false,
            serviceAll: [],
            userAll: [],
            companyAll: [],
            byUser: [],
            topicData: [
                // {
                //     tema: "Tema 1"
                // },
                // {
                //     tema: "Tema 2"
                // },
                // {
                //     tema: "Tema 3"
                // }
            ]
        };
    }


    componentWillMount() {
        if (this.state.currentAccountTemp.role === "admin") {
            this.startAdminLoading();
        } else {
            this.getImages();
            this.startLoading();
        }

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
                    serviceData: data.body.service ? data.body.service : "",
                    dateDisposition: data.body.data["custom-dates"] ? data.body.data["custom-dates"] : [],
                    valorations: data.body.data["custom-valorations"] ? data.body.data["custom-valorations"] : []
                    // dateDisposition: data.body.data["custom-dates"] ? data.body.data["custom-dates"] : []
                    // serviceData: data.body.service ? data.body.service : ""
                })

                localStorage.setItem("partitionKey", this.state.partitionKey);

                this.updateMainDataAttr(data.body.data["custom-attr"]);
                // if (data.body.data["custom-attr"].imgProfile) {
                //     document.getElementsByClassName("uploadPicture")[0].src = data.body.data["custom-attr"].imgProfile;
                // }



            })
            .catch(console.log)
    }

    updateMainDataAttr = (data) => {
        let jsonModel = JSON.stringify(data);

        localStorage.setItem("contentUser", jsonModel);

        localStorage.setItem("contentUserAvatarImg", JSON.parse(localStorage.getItem("contentUser")).imgProfile);

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
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/saveattributes', {
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
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/saveinvoice', {
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

    saveWishList = (data) => {
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
    startAdminLoading = () => {
        this.startLoading();
        this.getService();
        this.getUser();
    }

    getImages = (data) => {
        console.log(data)
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.recoveryPsw(data);

                    // this.startAdminLoading();
                    this.setState({
                        loadingUpdate: false,
                        images: data.body
                    })

                    // console.log(data)
                })
                .catch(console.log)

        })


    }
    editUser = (data) => {
        console.log(data)
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default//verifyuser?verify=' + payload.verifyLink, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.recoveryPsw(data);

                    this.startAdminLoading();
                    this.setState({
                        loadingUpdate: false
                    })

                    // console.log(data)
                })
                .catch(console.log)

        })


    }

    editService = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/serviceall', {
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
                    this.startAdminLoading();
                    this.setState({
                        loadingUpdate: false
                    })

                    // console.log(data)
                })
                .catch(console.log)
        })

    }
    saveService = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/saveservice', {
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

    getCompany = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/companyall', {
                method: 'GET',
                // body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    // this.startLoading();

                    this.setState({
                        companyAll: data.body
                    }, (props, state) => {
                        this.setState({
                            loadingUpdate: false
                        })
                    })


                    console.log(data)
                })
                .catch(console.log)
        })

    }
    getByUser = (data) => {
        let payload = {
            mail: data.split("|")[1].trim()
        }

        console.log(payload)
        this.setState({
            byUser: [],
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/byuser', {
                method: 'POST',
                body: JSON.stringify(payload),
                // body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    // this.startLoading();
                    // const imageProfileDynamo = JSON.parse(localStorage.getItem("contentUser")).imgProfile;
                    localStorage.setItem("contentUserCurrentAvatar", JSON.stringify(data.body["custom-attr"].imgProfile));
                    this.setState({
                        byUser: data.body
                    }, (props, state) => {
                        this.setState({
                            loadingUpdate: false
                        })
                    })


                    console.log(data)
                })
                .catch(console.log)
        })

    }

    getUser = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/userall', {
                method: 'GET',
                // body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    // this.startLoading();

                    this.setState({
                        userAll: data.body
                    }, (props, state) => {
                        this.setState({
                            loadingUpdate: false
                        })
                    })


                    console.log(data)
                })
                .catch(console.log)
        })

    }

    getService = (data) => {
        let payload = data;
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/serviceall', {
                method: 'GET',
                // body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'wD4FjaAoiG4bldvQ0oB6Q6fyIDqZCsfkaXCun0u6'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // this.props.singUp(data.body);

                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    // this.startLoading();

                    this.setState({
                        serviceAll: data.body
                    }, (props, state) => {
                        this.setState({
                            loadingUpdate: false
                        })
                    })


                    console.log(data)
                })
                .catch(console.log)
        })

    }

    addTopic = (data) => {
        // console.log("console log ")
        // console.log(data)
        // data.push({tema:"nuevo tema"})
        this.setState({
            topicData: data
        })
    }

    deleteTopic = (data) => {
        // console.log("console log ")
        // console.log(data)
        // data.push({tema:"nuevo tema"})
        // this.setState({
        //     topicData:data
        // })
        this.setState({
            topicData: data
        })
    }

    refreshDataTopics = (data) => {
        this.setState({
            topicData: data
        })
    }
    saveDispositions = (data) => {
        console.log("saving dispositiosn....")
        console.log(data)
        let payload = {
            pk: localStorage.getItem("partitionKey"),
            attr: data
        };
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/savedisposition', {
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
                    this.startLoading();
                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    this.setState({
                        loadingUpdate: false
                    })

                    // console.log(data)
                })
                .catch(console.log)
        })
    }
    saveImageProfile = (data) => {
        // console.log("saving dispositiosn....")
        console.log(data)
        let payload = {
            pk: localStorage.getItem("partitionKey"),
            attr: data
        };
        this.setState({
            loadingUpdate: true
        }, (state, props) => {
            fetch('https://ob5nizjire.execute-api.us-east-1.amazonaws.com/default/saveimageprofile', {
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
                    this.startLoading();
                    // this.updateMainDataAttr(data.body.dataUpdated["custom-attr"]);
                    this.setState({
                        loadingUpdate: false
                    })

                    // console.log(data)
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
                            valorations={this.state.valorations}
                            saveDispositions={this.saveDispositions}
                            currentAccount={this.state.currentAccountTemp}
                            refreshBasicData={this.refreshBasicData}
                            refreshInvoiceData={this.refreshInvoiceData}
                            saveService={this.saveService}
                            invoiceData={this.state.invoiceData}
                            serviceData={this.state.serviceData}
                            addTopic={this.addTopic}
                            deleteTopic={this.deleteTopic}
                            topicData={this.state.topicData}
                            refreshDataTopics={this.refreshDataTopics}
                            images={this.state.images}
                            dateDisposition={this.state.dateDisposition}
                            saveImageProfile={this.saveImageProfile}
                        ></ProfileConsultant>
                    </div>

                }

                {
    currentRole === "company" &&
    <div>
        {this.state.loadingUpdate &&
            <BussyLoader> </BussyLoader>
        }

        <ProfileCompany
            byUser={this.state.byUser}
            getByUser={this.getByUser}
            currentAccount={this.state.currentAccountTemp}
            refreshBasicData={this.refreshBasicData}
            refreshInvoiceData={this.refreshInvoiceData}
            saveService={this.saveService}
            invoiceData={this.state.invoiceData}
            serviceData={this.state.serviceData}
            saveWishList={this.saveWishList}
            saveImageProfile={this.saveImageProfile}
        ></ProfileCompany>
    </div>

}

{
    currentRole === "admin" &&
    <div>
        {this.state.loadingUpdate &&
            <BussyLoader> </BussyLoader>
        }


        <ProfilleAdmin
            currentAccount={this.state.currentAccountTemp}
            getService={this.getService}
            getUser={this.getUser}
            getCompany={this.getCompany}
            serviceAll={this.state.serviceAll}
            userAll={this.state.userAll}
            companyAll={this.state.companyAll}
            saveService={this.editService}
            saveUser={this.editUser}
        // refreshBasicData={this.refreshBasicData}
        // refreshInvoiceData={this.refreshInvoiceData}
        // saveService={this.saveService}
        // invoiceData={this.state.invoiceData}
        // serviceData={this.state.serviceData}
        // saveWishList={this.saveWishList}

        ></ProfilleAdmin>
    </div>

}

            </div >

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
