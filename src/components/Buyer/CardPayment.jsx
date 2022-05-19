import React, { Component } from 'react';
import axios from 'axios';

class  CardBill extends React.Component{

    constructor(props) {
        super(props);

        /*
        *setItemName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setcardNo = this.setcardNo.bind(this);
        this.setCardHolder = this.setCardHolder.bind(this);
        this.setcvcNumber = this.setcvcNumber.bind(this);
        this.setcardAmount = this.setcardAmount.bind(this);
        this.savecardData = this.savecardData.bind(this);

        this.state = {
            cardno:0,
            cardholder: '',
            cvc: '',
            camount:0,

        }
    }

    //user defined method, takes event input
    setcardNo(e){
      this.setState({cardno:e.target.value});
    }
    setCardHolder(e){
        this.setState({cardholder:e.target.value});
    }

    setcvcNumber(e) {
        this.setState({cvc:e.target.value});
    }
    setcardAmount(e) {
        this.setState({camount: e.target.value});
    }

    savecardData(e) {
        console.log('Card Paymnet Data', this.state);

       
        const CardPaymnetBilling = {
            fId : this.state.id,
            name: this.state.item, 
            price: this.state.price,
            price: this.state.price,
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
    
            axios.post('http://localhost:8080/scad/thirdpt/paymentgateway', CardPaymnetBilling)
            .then(()=> {
                alert('Payment Data Successfuly Inserted');
                window.location = '/dilivery'
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
                
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Card Payment</p>
                
                                <form className="mx-1 mx-md-4">

                                <div>
                                <label className="form-label" for="form3Example3c">Card Number</label>
                                    <input type="text" id="id1" className="form-control"
                                    value={this.state.cardno}
                                    onChange={this.setcardNo} 
                                    required />
                                    <div id="fr"></div>
                                </div> 

                                    
                                <div>
                                    <label className="form-label" for="form3Example3c">Card Holder</label>
                                    <input type="text" id="id2" className="form-control"
                                    value={this.state.cardholder}
                                    onChange={this.setCardHolder} 
                                    required />
                                    <div id="fr"></div>
                                </div>

                            
                                <div>
                                    <label className="form-label" for="form3Example3c">CVC Number</label>
                                    <input type="text" id="id3" className="form-control" 
                                    value={this.state.cvc}
                                    onChange={this.setcvcNumber}  required/>
                                    <div id="pn"></div>
                                </div>

                                <div>
                                    <label className="form-label" for="form3Example3c">Total Amount</label>
                                    <input type="text" id="id4" className="form-control" 
                                    value={this.state.camount}
                                    onChange={this.setcardAmount}  required/>
                                    <div id="pn"></div>
                                </div>

                                    <br/>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 d-grid gap-10 d-md-block">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={this.savecardData} > Add Items </button>
                                    </div>
                
                                </form>
                
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section> <br/><br/>

        </div>


        );
    


    }   
}

export default CardBill;