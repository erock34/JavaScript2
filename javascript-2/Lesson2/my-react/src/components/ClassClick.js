import React, {Component} from "react";
class ClassClick extends Component{
    clickHandler(){
        alert("Classe click");
        console.log("class logged");
}
render(){
    return(
        <>
        <button onClick={this.clickHandler}>Class Click</button>;
        </>
    );
    }
}
export default ClassClick;