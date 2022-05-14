import React, {Component} from "react";
import axios from "axios";

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

                {this.state.farmers.map((fr) => (
                    <p key={fr.id}>{fr.name}</p>
                ))
                }
            </div>
        );
    }
}