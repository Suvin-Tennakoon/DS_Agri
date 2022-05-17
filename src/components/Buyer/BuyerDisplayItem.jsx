import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, useParams, useHistory } from "react-router-dom";

import axios from 'axios';

// const BItems = props => {
//  const add=()=>{
//     alert(this.state.BItems[0].name)
//  } 

// return(
// <tr>
//             <td scope="col">{props.bitem.fId}</td>
//             <td scope="col">{props.bitem.name}</td>
//                 <td scope="col">{props.bitem.price}</td>
                

//     <td scope="col" >
//     <input type="number" style={{marginRight:"200px"}}></input>
//     <button type="button" className="btn btn-primary" onclick={add()}>ADD</button>

      
//     </td>
// </tr>
// );
// };


class Displaylist extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            BItems:[],
            searchInput:''
        };
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
        return  this.state.BItems.map(currentsupplier => {
            if(this.state.searchInput == '') {
                return <BItems bitem = {currentsupplier}/>;
            }
            else {
                if(currentsupplier.name == this.state.searchInput){
                    return <BItems bitem = {currentsupplier}/>;
                }
            }

        })

        // this.state.BItems.map((itm)=> {
        //     if(itm.name == this.state.searchInput){
        //         alert("sfef")
        //     }
        // })
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
                    </tr>
                </thead>
                <tbody>
                    {this.state.BItems.map(props=>{
                        <tr>
                        <td scope="col">{props.bitem.fId}</td>
                        <td scope="col">{props.bitem.name}</td>
                        <td scope="col">{props.bitem.price}</td>
                        
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
            </div>
        );
        
    }
}

export default Displaylist;