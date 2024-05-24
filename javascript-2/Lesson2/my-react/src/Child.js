function Child(props){
    return(
        <div>
            <button onClick={props.greetHandler}>
                Greetings</button>
        </div>
    );
}
export default Child;