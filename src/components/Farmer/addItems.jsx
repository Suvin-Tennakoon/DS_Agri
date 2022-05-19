import React, { Component } from 'react';
import axios from 'axios';

class AddItems extends React.Component{

    constructor(props) {
        super(props);

        /*
        *setItemName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
       this.setID = this.setID.bind(this);
        this.setItemName = this.setItemName.bind(this);
        this.setItemPrice = this.setItemPrice.bind(this);
        this.saveItemsData = this.saveItemsData.bind(this);

        this.state = {
            id:0,
            item: '',
            price: '',
           

        }
    }

    //user defined method, takes event input
    setID(e){
      this.setState({id:e.target.value});
    }
    setItemName(e){
        this.setState({item:e.target.value});
    }

    setItemPrice(e) {
        this.setState({price:e.target.value});
    }

    setItemAmount(e) {
        this.setState({ amount: e.target.value});
    }

    saveItemsData(e) {
        console.log('Farmer Item Data', this.state);

       
        const Farmer = {
            fId : this.state.id,
            name: this.state.item, 
            price: this.state.price,
       
            
            
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
    
            axios.post('http://127.0.0.1:8280/scad/webapi/items', Farmer)
            .then(()=> {
                alert('Farmer Iteams Data Successfuly Inserted');
                window.location = '/FarmerviewItems'
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
          
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD ITEMS</p>
          
                          <form className="mx-1 mx-md-4">

                          <div>
                            <label className="form-label" for="form3Example3c">Farmer ID</label>
                            <input type="number" id="id1" className="form-control"
                            value={this.state.id}
                            onChange={this.setID} 
                            required />
                            <div id="fr"></div>
                        </div> 

                            
                          <div>
                            <label className="form-label" for="form3Example3c">Item Name</label>
                            <input type="text" id="id2" className="form-control"
                            value={this.state.item}
                            onChange={this.setItemName} 
                            required />
                            <div id="fr"></div>
                        </div>

                       
                        <div>
                            <label className="form-label" for="form3Example3c">Item Price</label>
                            <input type="text" id="id3" className="form-control" 
                            value={this.state.price}
                            onChange={this.setItemPrice}  required/>
                            <div id="pn"></div>
                        </div>

                            <br/>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 d-grid gap-10 d-md-block">
                              <button type="button" className="btn btn-primary btn-lg" onClick={this.saveItemsData} > Add Items </button>
                            </div>
          
                          </form>
          
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
          
                          <img src="https://st4.depositphotos.com/1007989/30282/i/600/depositphotos_302826628-stock-photo-senior-man-wooden-crate-illustration.jpg" class="img-fluid" alt="Sample image"/>
          
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

export default AddItems;