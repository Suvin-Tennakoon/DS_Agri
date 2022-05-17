import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            farmers:[]
        }
    }

    componentDidMount() {
        const data = {
            name:"ffff",
            mobile:"33333"
        }


        //axios.post("http://localhost:8280/scad/webapi/farmers", data)
        axios.get("http://localhost:8280/scad/webapi/farmers")
            .then(res => this.setState({farmers:res.data}))
    }

    render() {
        return (
            <div>
            <center><h1> e - Agri product online purchasing platform</h1></center>
            <br/>
            <h4> Select an option : </h4>
            <div class="d-grid gap-3">  
                <a href="farmerlogin" class="btn btn-success btn-rounded" role="button" aria-pressed="true">FARMER</a>
                <a href="displayitem" class="btn btn-success btn-rounded" role="button" aria-pressed="true">BUYER</a>
            </div>
                <br/><br/>
                <img src="https://uploads-ssl.webflow.com/610ab869c288d010b689d8bd/617c03826f34d20582cd2a0e_graphic_LF%20precision%20farming%20ecosystem.png" class="img-fluid" alt="Wild Landscape" />
            </div>
        );
    }
}