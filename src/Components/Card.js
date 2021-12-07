import React from "react";
import classes from './Card.module.css';

function Card(props) {
    return(
        <div className = {isNaN(props.w) ? classes.NoDiplay : classes.Container}>
            <p>
                x : {props.x} px <br/>
                y : {props.y} px <br/>
                Width : {Math.abs(props.w)} px <br/>
                Height : {Math.abs(props.h)} px <br/>
            </p>
        </div>
    )
}

export default Card;