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

            <div class="d-grid gap-2">  
           <button class="btn btn-primary" type="button"> <a href="farmerlogin">FARMER</a></button>
            <button class="btn btn-primary" type="button"><Link to="FarmerviewItems">BUYER</Link></button>
            </div>

            </div>
        );
    }
}