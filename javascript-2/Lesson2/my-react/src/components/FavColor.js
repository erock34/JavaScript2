import React,{useState}from"react";
import "../App.css";
function FavColor(){
    const[color,setColor]=useState("red");
    return(
        <>
        <h1>
            my fav color <span className={color}>{color}</span>

        </h1>
        <button className="favColor" onClick={() =>setColor("green")}>
            GRRRREEEEEEEEEEE
        </button>
        <button onClick={() => setColor("blue")}>Blueee</button>
        <button onClick={() => setColor("yellosss")}>YELLOW</button>
        <button onClick={() => setColor("REDDDD")}>REDDD</button>

        </>
    );
}
export default FavColor;