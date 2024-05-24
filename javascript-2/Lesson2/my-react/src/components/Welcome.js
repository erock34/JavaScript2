import {Component} from "react";
class Welcome extends Component {
    render(){
        return(
          <>      
         <h1>Welcome {this.props.firstName}{this.props.lastName}</h1>
          <p>this is my paragraph</p>
          </>  
        )
    }
}
class Welcome2 extends Component {
    render(){
        const{firstName,lastName}=this.props;
        return(
            <h1>Welcome {firstName} {lastName}</h1>
        )
    }
}
export {Welcome,Welcome2}