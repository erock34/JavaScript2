import { Component } from "react";
import Child from "./Child";
class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            parentName: "Parent",
        };
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <div>
                <Child greetHandler={()=>this.greetParent("BOBBY")}/>
            </div>
        );
    }
}
export default Parent;