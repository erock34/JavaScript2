import {Component} from "react";
import React from "react";

function Steve(){
    return <h1>FROM STEVEVEEE</h1>
}

class Steve2 extends Component {
    render(){
        const{firstName,lastName}=this.props;
        return(
            <h1>Welcome {firstName} {lastName}</h1>
        )
    }
}
export {Steve, Steve2};