import React, { Component } from 'react';
import axios from 'axios';

class MobileBill extends React.Component{

    constructor(props) {
        super(props);

        this.setPhoneNo = this.setPhoneNo.bind(this);
        this.setPin = this.setPin.bind(this);
        this.setBillAmount = this.setBillAmount.bind(this);
        this.saveBillData = this.saveBillData.bind(this);

        this.state = {
            phoneNo:'',
            pin: 0,
            billamount: 1500,
        }
    }

    //user defined method, takes event input
    setPhoneNo(e){
      this.setState({phoneNo:e.target.value});
    }
    setPin(e){
        this.setState({pin:e.target.value});
    }

    setBillAmount(e) {
        this.setState({billamount:e.target.value});
    }

    saveBillData(e) {
        console.log('Payment Data', this.state);

       
        const MobileBilling = {
            phoneNo : this.state.phoneNo,
            sixDigPin: this.state.pin,
            amount: this.state.billamount,
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
    
            axios.put('http://127.0.0.1:8280/scad/thirdpt/mobilepayment', MobileBilling)
            .then((res)=> {
                alert(res.data);
                if(res.data == 'Successfully Added to Monthly Bill')
                    window.location = '/dilivery';
            }).catch((err) => {
                alert(err.message);
            });
        //after submission, user will redirected here
        //window.location = '/';
    }

    

    render(){
        return(
            <div>
                <section className="vh-50" style={{backgroundcolor:"#eee"}}>
                    <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderradius: "25px"}}>
                            <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Mobile Bill Payment</p>
                
                                <form className="mx-1 mx-md-4">

                                <div>
                                    <label className="form-label" for="form3Example3c">Phone Number</label>
                                    <input type="text" id="id1" className="form-control"
                                    value={this.state.phoneNo}
                                    onChange={this.setPhoneNo} 
                                    required />
                                    <div id="fr"></div>
                                </div> 

                                    
                                <div>
                                    <label className="form-label" for="form3Example3c">6-digit Pin </label>
                                    <input type="text" id="id2" className="form-control"
                                    value={this.state.pin}
                                    onChange={this.setPin} 
                                    required />
                                    <div id="fr"></div>
                                </div>

                            
                                <div>
                                    <label className="form-label" for="form3Example3c">Total Price</label>
                                    <input type="text" id="id3" className="form-control" 
                                    value={this.state.billamount}
                                    onChange={this.setBillAmount}  required/>
                                    <div id="pn"></div>
                                </div>

                                    <br/>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 d-grid gap-10 d-md-block">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={this.saveBillData} > Confirm Payment </button>
                                    </div>
                
                                </form>
                
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section><br/><br/>   
            </div>


        );
    }   
}

export default MobileBill;