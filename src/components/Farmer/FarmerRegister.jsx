import React, { Component } from 'react';

import axios from 'axios';

class FamRegistration extends React.Component{

    constructor(props) {
        super(props);

        this.setFarmerfName = this.setFarmerfName.bind(this);
        this.setFarmerPhone = this.setFarmerPhone.bind(this);
        this.saveData = this.saveData.bind(this);

        this.state = {

            fname: '',
            phone: '',
           
           
        }
    }

    //user defined method, takes event input
    setFarmerfName(e){
        this.setState({fname:e.target.value});
    }

   
    setFarmerPhone(e) {
        this.setState({phone: e.target.value});
    }
    

    saveData(e) {
        console.log('Farmer Data', this.state);

       
        const Farmerdata = {
            name: this.state.fname, 
            mobile: this.state.phone,
      
            }

        

        axios.post('http://localhost:8080/scad/webapi/farmers', Farmerdata)
        .then(()=> {
            alert('Data are Successfuly Inserted ');
        }).catch((err) => {
            alert(err.message);
        });
        
    }

    render(){
        return(
            <div>
              <br/> <br/> <br/>
            <section className="vh-50" style={{backgroundcolor:"#eee"}}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
          
                          <form className="mx-1 mx-md-4">

                            
                          <div>
                            <label className="form-label" for="form3Example3c" >Your Name</label>
                            <input type="text"
                            maxlength ="8" minlength="4"
                             id="id1" className="form-control"
                            value={this.state.fname}
                            onChange={this.setFarmerfName} 
                            required />
                            <div id="fr"></div>
                        </div> <br/>

                      
                        <div>
                            <label className="form-label" for="form3Example3c">Your Phone Number</label>
                            <input type="text" 
                            id="id4" className="form-control" 
                            value={this.state.phone}
                            onChange={this.setFarmerPhone}  required/>
                            <div id="pn"></div>
                        </div> <br/>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" className="btn btn-primary btn-lg" onClick={this.saveData}>Register</button>
                            </div>
          
                          </form>
          
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
          
                          <img src="https://www.pngitem.com/pimgs/m/20-203266_sign-up-registration-website-icon-account-sign-up.png" class="img-fluid" alt="Sample image"/>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
          <br/> <br/> <br/>  
          </div>

  );
    


    }   
}

export default FamRegistration;