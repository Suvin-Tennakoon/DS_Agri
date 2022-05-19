import React, {Component} from 'react';

import axios from 'axios';


class Farmerlogin extends React.Component {


    constructor(props) {
        super(props);

        this.setFarmerName = this.setFarmerName.bind(this);
        this.setFarmerMobile = this.setFarmerMobile.bind(this);
        this.loginFarmer = this.loginFarmer.bind(this);


        this.state = {
            farmerMobile: '',
            farmername: '',
            farmers: []


        }
    }

    setFarmerMobile(e) {
        this.setState({farmerMobile: e.target.value});
    }

    setFarmerName(e) {
        this.setState({farmername: e.target.value});
    }

    loginFarmer(e) {

        var flag = 0;
        this.state.farmers.forEach((fam) => {
            if (((this.state.farmername == fam.name) && (this.state.farmerMobile == fam.mobile))) {
                flag = 1;
            }
        });

        if (flag == 1) {
            alert("Login Successfull");
            e.preventDefault();
            window.location = "/FarmerviewItems";
        } else
            alert("Invalid Login");


    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8280/scad/webapi/farmers')
            .then((res) => {
                console.log(res.data);
                this.setState({farmers: res.data});

            }).catch((err) => {
            alert(err.message);
        })

    }

    render() {
        return (
            <div>
                <fieldset>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form-2">
                            <h3>Farmer Login Form</h3>
                            <br/>
                            <form onSubmit={(e)=>{this.loginFarmer(e)}}>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Your First Name....."
                                           value={this.state.farmername}
                                           onChange={this.setFarmerName}/>
                                    <div></div>
                                </div>
                                <br/>

                                <div class="input-group form-group">
                                    <input type="number"
                                           className="form-control"
                                           placeholder="Your Mobile Number...."
                                           value={this.state.farmerMobile}
                                           onChange={this.setFarmerMobile}
                                           aria-label="712345678 *"
                                           aria-describedby="basic-addon1"/>
                                </div>
                                <br/>

                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary btn-lg" value="Login"/>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <a href="/famreg" className="ForgetPwd">Don't have an Account? Sign-Up Here..</a>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 login-form-1">
                            <img
                                src='https://media.istockphoto.com/vectors/smart-agriculture-and-iot-vector-id1192242206?k=20&m=1192242206&s=612x612&w=0&h=J29IUq7EqTHB55u7c9KwwENZlSQG6zZma7UHxuHT2rY='
                                width="400px"/>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                </fieldset>
            </div>

        );
    }
}

export default Farmerlogin;