
import React, { Component } from 'react';

import axios from 'axios';


class Farmerlogin extends React.Component{

    constructor(props) {
        super(props);

        this.setFarmerName = this.setFarmerName.bind(this);
        this.setFarmerMobile = this.setFarmerMobile.bind(this);
        this.loginFarmer = this.loginFarmer.bind(this);
       

        this.state = {
            farmerMobile:'',
            farmername:'',

           
        }
    }

    setFarmerMobile(e) {
        this.setState({farmerMobile: e.target.value});
    }

    setFarmerName(e) {
        this.setState({farmername: e.target.value});
    }

    loginFarmer(e) {
        const logFarmer = {
            logMobile: this.state.farmerMobile,
            logname: this.state.farmername
        }

        axios.post('http://localhost:',logFarmer)
            .then((res) => {
                if(res.data == 'Login Successfull') {
                    
                    window.location = '/#';
                }
                else {
                    document.getElementById("famlog1").className = "form-control is-invalid";
                    document.getElementById("famlog").innerHTML = res.data;
                    document.getElementById("famlog").className = "invalid-feedback";
                }
            }).catch((err) => {
                alert(err.message);
            })
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-2">
                        <h3>Farmer Login Form</h3>
                        <form onSubmit={this.loginFarmer} >
                        <div className="form-group">
                                <input type="text" 
                                    className="form-control" 
                                    placeholder="Your First Name....." 
                                    id="famlog1"
                                    value={this.state.farmername} 
                                    onChange={this.setFarmerName}/>
                                <div id="famlog"></div>
                            </div><br/>

                            <div class="input-group form-group">
                                <input type="number" 
                                    className="form-control"
                                    placeholder="Your Mobile Number...." 
                                    id="famlog"
                                    value={this.state.farmerMobile} 
                                    onChange={this.setFarmerMobile}
                                    aria-label="712345678 *" 
                                    aria-describedby="basic-addon1"/>
                            </div><br/>

                            <div className="form-group">
                                <input type="submit" className="btn btn-primary btn-lg" value="Login" />
                            </div><br/>
                            <div className="form-group">
                                <a href="/famreg" className="ForgetPwd">Don't have an Account? Sign-Up Here..</a>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-1">
                    <img src='https://t4.ftcdn.net/jpg/03/85/07/15/360_F_385071585_SZ8fM8Q6GxUx9CiJBMTUS7EIpIhcM4xe.jpg' width="400px"/>
                    </div>
                </div>
            </div><br/><br/><br/>
                
            </div>

        );
    }
} 
export default Farmerlogin;