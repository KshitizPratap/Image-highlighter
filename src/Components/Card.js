import React from "react";
import classes from './Card.module.css';

function Card(props) {
    return(
        <div className = {classes.Container}>
            <p>
                x : {props.x} px <br/>
                y : {props.y} px <br/>
                Width : {props.w} px <br/>
                Height : {props.h} px <br/>
            </p>
        </div>
    )
}

export default Card;