import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, useParams, useHistory } from "react-router-dom";

import axios from 'axios';



const BItems = props => {

    // const { id } = useParams()
    // const url = '/upfamitem/'

    // const data=[props]
    

return(
<tr>
            <td scope="col">{props.bitem.fId}</td>
            <td scope="col">{props.bitem.name}</td>
                <td scope="col">{props.bitem.price}</td>
                

    <td scope="col" >

    
    {/* {data.map((upfarmer) => (
            <Link to={url+props.item.id}>
                
     <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}
    >ADD</button></Link>
    ))} */}

      
    </td>
</tr>
);
};


class Displaylist extends React.Component{

    constructor(props){
        super(props);
        this.state = {BItems:[]};
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
        return this.state.BItems.map(currentsupplier => {
            return <BItems bitem = {currentsupplier}/>;
        })
    }
    

    render(){
        return(
            <div class="table-responsive">
            <h1>View Items</h1><br/><br/>
            <a href="paymentMethod" className="btn btn-success btn-rounded" role="button" aria-pressed="true">Payment</a>
            <table class="table table-striped table-hover table table-sm">
                <thead>
                    <tr>
                     <th scope="col">Farmer ID</th>   
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.ItemList() }
                </tbody>
            </table>
            </div>
        );
        
    }
}

export default Displaylist;