import React, {Component} from "react";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    render(){
        return(
            <>
            <h1>Counter</h1>
            <div>Count - {this.state.count}</div>
            <button onClick={() =>this.increment()}>add</button>
            </>
        );
    }
}
export {Counter};