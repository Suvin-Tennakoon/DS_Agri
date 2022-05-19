import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, useParams, useHistory } from "react-router-dom";

import axios from 'axios';



const FItems = props => {
    
    function Delete(id){
        var result = window.confirm('Confirm to delete this supplier')
        if(result==true){
        axios.delete('http://localhost:8080/scad/webapi/items/'+id)
    .then(()=> {
        alert('Item deleted successfully');
    }).catch((err) => {
        alert(err.message);
    });
}
}

    
    const { id } = useParams()
    const url = '/upfamitem/'

    const data=[props]
    
    

return(
<tr>
            <td scope="col">{props.item.fId}</td>
            <td scope="col">{props.item.name}</td>
                <td scope="col">{props.item.price}</td>
                

    <td scope="col" >

    
    {data.map((upfarmer) => (
            <Link to={url+props.item.id}>
                
     <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}
    >Update</button></Link>
    ))}

        <button type="button" className="btn btn-primary" style={{backgroundColor:"gray"}} onClick={(e) => {
         Delete(props.item.id);
      }}>Delete</button>

      
    </td>
</tr>
);
};


class Itemlist extends React.Component{

    constructor(props){
        super(props);
        this.state = {FItems:[]};
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8280/scad/webapi/items')
            .then(res => {
                
                console.log(res.data);
                this.setState({FItems: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    ItemList() {
        return this.state.FItems.map(currentsupplier => {
            return <FItems item = {currentsupplier}/>;
        })
    }
    

    render(){
        return(
            <div class="table-responsive">
            <h1>View Items</h1><br/><br/>
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
                <a href="/FarmeraddItems" type="submit" class="btn btn-warning btn-lg ms-2"  role="button" aria-pressed="true">ADD ITEMS</a>
            </div>
        );
        
    }
}

export default Itemlist;