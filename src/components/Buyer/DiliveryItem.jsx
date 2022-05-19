import React, { Component } from 'react';
import axios from 'axios';

class Dilivey extends React.Component{

    constructor(props) {
        super(props);

        /*
        *setItemName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
       this.setaddress = this.setaddress.bind(this);
       this.DiliverItems = this.DiliverItems.bind(this);
        

        this.state = {
           address:'',
        }
    }

    //user defined method, takes event input
    setaddress(e){
      this.setState({address:e.target.value});
    }
    
    DiliverItems(e) {

        if(this.state.address==""){
            alert("Item is Not Delivered");
        }

        else{
            axios.get('http://localhost:8080/scad/thirdpt/delivery?Address='+this.state.address)
            .then(()=> {

                alert('Deliver In Progress. Thank you');
                window.location = '/'
            }).catch((err) => {
                alert(err.message);
            });
        
        }
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
          
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Delivery Request</p>
          
                          <form className="mx-1 mx-md-4">
                          
                          <label className="form-label" for="form3Example3c">Enter your Address</label>
                          <input type="text" id="id2" className="form-control" 
                           value={this.state.address}
                           onChange={this.setaddress}/>
                           <br/><br/>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 d-grid gap-10 d-md-block">
                              <button type="button" className="btn btn-primary btn-lg" onClick={this.DiliverItems} >Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>   
            </div>


        );
    


    }   
}

export default Dilivey;