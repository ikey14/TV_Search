import { useEffect } from "react";
import { useState } from "react";
import "./Show.css";

export default function Show({id, name, imgSrc, changeFavStatus})
{

    return(<div style={{ display: 'flex', alignItems: 'center' }}>

        <img className = "showImg" src = {imgSrc} alt = {imgSrc}/>
        <p className = "showName">{name}</p>
        <button onClick = {() => changeFavStatus(id)}>❤️</button>

    </div>)
}