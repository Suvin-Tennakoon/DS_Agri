
import React, { Component } from 'react';

import axios from 'axios';

class buyerlogin extends React.Component{

    constructor(props) {
        super(props);

        this.setbuyerusername = this.setbuyerusername.bind(this);
        this.setbuyerpassword = this.setbuyerpassword.bind(this);
        this.loginbuyer = this.loginbuyer(this);
       

        this.state = {
           buyeruname:'',
           buyerpasw:''

           
        }
    }

    setbuyerusername(e) {
        this.setState({buyeruname: e.target.value});
    }

    setbuyerpassword(e) {
        this.setState({buyerpasw: e.target.value});
    }

    loginbuyer(e) {
        const loginBuyer = {
            logusername: this.state.buyeruname,
            logpassw: this.state.buyerpasw,
        }

        axios.post('http://localhost:',loginBuyer)
            .then((res) => {
                if(res.data == 'Login Successfull') {
                    
                    window.location = '/#';
                }
                else {
                    document.getElementById("buylog1").className = "form-control is-invalid";
                    document.getElementById("buylog").innerHTML = res.data;
                    document.getElementById("buylog").className = "invalid-feedback";
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
                        <h3>Buyer Login Form</h3>
                        <form onSubmit={this.loginbuyer} >
                        <div className="form-group">
                                <input type="text" 
                                    className="form-control" 
                                    placeholder="UserName *" 
                                    id="famlog1"
                                    value={this.state.buyeruname} 
                                    onChange={this.setbuyerusername}/>
                                <div id="famlog"></div>
                            </div><br/>

                            <div class="input-group form-group">
                                <input type="password" 
                                    className="form-control"
                                    placeholder="Password *" 
                                    id="famlog"
                                    value={this.state.buyerpasw} 
                                    onChange={this.setbuyerpassword}/>
                            </div><br/>

                            <div className="form-group">
                                <input type="submit" href="/f" className="btn btn-primary btn-lg" value="Login" />
                            </div><br/>
                            <div className="form-group">
                                <a href="/" className="ForgetPwd">Don't have an Account? Sign-Up Here..</a>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-1">
                    <img src='https://t4.ftcdn.net/jpg/03/85/07/15/360_F_385071585_SZ8fM8Q6GxUx9CiJBMTUS7EIpIhcM4xe.jpg' width="400px"/>
                    </div>
                </div>
            </div>
              
            </div>

        );
    }
} 
export default buyerlogin;