import React from "react";

function Greet(props){
    console.log(props);
    return (
        <>
        <h1>Greetings {props.firstName}</h1>
        </>
    )
        
}
const Greet2 = ({firstName,lastName}) => {
    return(
        <h1>
            hello {firstName} {lastName}
        </h1>

    ) ;
};
export {Greet,Greet2};