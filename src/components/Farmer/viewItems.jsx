import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, useParams, useHistory } from "react-router-dom";

import axios from 'axios';



const FItems = props => {
    
    function Delete(_id){
        var result = window.confirm('Confirm to delete this supplier')
        if(result==true){
        axios.delete('http://localhost:3001/acceptsupplier/delete/'+_id)
    .then(()=> {
        alert('Item deleted successfully');
    }).catch((err) => {
        alert(err.message);
    });
}
}

    
    const { _id } = useParams()
    const url = '/upfamitem/'

    const data=[props]
    
    

return(
<tr>

            <th scope="col">{props.item.itemname}</th>
                <td scope="col">{props.item.itemprice}</td>
                <td scope="col">{props.item.iemamount}</td>

    <td scope="col" >

    
    {data.map((upfarmer) => (
            <Link to={url+props.supplier._id}>
                
     <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}
    >Update</button></Link>
    ))}

        <button type="button" className="btn btn-primary" style={{backgroundColor:"gray"}} onClick={(e) => {
         Delete(props.supplier._id);
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
        axios.get('http://localhost:3001/acceptsupplier/get')
            .then(res => {
                //get all info about a supplier
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
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
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

export default Itemlist;