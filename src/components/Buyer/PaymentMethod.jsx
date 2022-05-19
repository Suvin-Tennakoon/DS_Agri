import React, { Component } from 'react';
import axios from 'axios';

class  PaymentSelection extends React.Component{

    constructor(props) {
        super(props);


        }
    

    render(){
        return(
    
        <div>
            <h1> Select your Payment Method </h1>
            <div className="d-grid gap-3">  
                <a href="/paymenMobileBill" className="btn btn-success btn-rounded" role="button" aria-pressed="true">Bill Payment</a>
                <a href="/paymentCardBill" className="btn btn-success btn-rounded" role="button" aria-pressed="true">Card Payment</a>
            </div>
            
            {/* <div>
                <form name ="f">
                    Payment:<input type="radio" name="gender" value="male" onchange="checkGender()"/>Card
                    <iput type="radio" name="radio" value="check" onclick="checkGender()"/>Bill <br/>
                    <input type="button" name ="btn" value="check" onclick="checkGender()"/>
                </form>
            </div> */}
        </div>

        );
    }
}

export default PaymentSelection;