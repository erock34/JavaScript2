import React, {Component} from "react";
export class EventBind extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:"Hello",
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            message:"Goodbye",
        });
    }
    render(){
        return(
            <>
            <h1>{this.state.messgage}</h1></>
        )
    }
}

