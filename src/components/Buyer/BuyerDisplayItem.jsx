import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, useParams, useHistory } from "react-router-dom";

import axios from 'axios';



class Displaylist extends React.Component{

    constructor(props){
        super(props);
        this.state = {FItems:[]};
        
    }

    componentDidMount() {
        axios.get('http://localhost:8080/scad/webapi/items')
            .then(res => {
                
                console.log(res.data);
                this.setState({FItems: res.data});
            })
            .catch((err)=>{
                console.log(err);
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
                    <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    { }
                </tbody>
            </table>
            </div>
        );
        
    }
}

export default Displaylist;