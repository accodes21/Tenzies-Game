import React from "react";

function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#bceeff"
    }
    return(
        <>
        <div onClick={props.holdDice}
            className="die-face" style={styles}>
            <h2>{props.value}</h2>
        </div>
        </>
    )
}

export default Die;