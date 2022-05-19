import React, { Component } from 'react';

import axios from 'axios';

class Displaylist extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            BItems:[],
            searchInput:'',
            itmNames:[""],
            itmQty:[]
        };
        this.ItemList = this.ItemList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/scad/webapi/items')
            .then(res => {
                
                console.log(res.data);
                this.setState({BItems: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    ItemList() {
        this.state.BItems.map((itm) => {
            if(itm.name == this.state.searchInput){

            }
        })
    }

    addItem(itmName) {
        // alert(itmName)
        // alert(document.getElementById(itmName).value)
        this.state.itmQty.push(document.getElementById(itmName).value);
        this.state.itmNames.push(itmName);
    }
    
    addToCart() {
    
        const itemdata = {
            qty: [1,2,3,4] ,
            items: ["ty","uio","rtyub","po"]
      
            }

            console.log(itemdata);

        axios.post('http://localhost:8080/scad/webapi/carts',itemdata)
        .then(()=> {
            alert('Added to the cart');
            window.location ='/paymentMethod'
        }).catch((err) => {
            alert(err.message);
        });
        

    }

    render(){
        return(
            <div>
                <h1>View Items</h1><br/><br/>

                <div className="input-group" style={{marginLeft:"950px"}}>
                <input type="search"  placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" value={this.state.searchInput} onChange={(e) => {this.setState({searchInput:e.target.value})}}/>
                <button type="button" className="btn btn-outline-primary" onClick={this.ItemList}>search</button>

                </div>
                <br/>

            <div class="table-responsive">
            
            <table class="table table-striped table-hover table table-sm">
                <thead>
                    <tr>
                     <th scope="col">Farmer ID</th>   
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Add</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.BItems.map((itm) => (
                            <tr>
                                <td>{itm.fId}</td>
                                <td>{itm.name}</td>
                                <td>{itm.price}</td>
                                <td><input type={"text"} id={itm.name}/></td>
                                <td><button onClick={()=>{this.addItem(itm.name)}}>Add</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
                <button onClick={this.addToCart}>ADD TO CART</button>
            </div>
        );
        
    }


}

export default Displaylist;