import { useEffect } from "react";
import { useState } from "react";

import "./Show.css";
import Modal from "./Modal";

export default function Show({id, name, imgSrc, genres, desc, rating, changeFavStatus})
{
    const [showWindow, setShowWindow] = useState(false);

    useEffect(() => {

      console.log(genres);

    }, []);

    // const handleShowClick = (e) => {
    //     // Prevent clicks on the button from triggering the info popup
    //     if (e.target.tagName.toLowerCase() !== "button") {
    //     setShowWindow(true);
    //     }
    // };

    // const closeModal = () => setShowWindow(false);

    // Modal.setAppElement('#root');

    return(<div className = "showContainer">

        <img className = "showImg" src = {imgSrc} alt = {imgSrc} onClick = {() => setShowWindow(true)}/>
        <p className = "showName">{name}</p>
        <button onClick = {() => changeFavStatus(id)}>❤️</button>

        {showWindow && <Modal 
          setShowWindow = {setShowWindow}
          showName = {name}
          showImgSrc = {imgSrc}
          showDesc = {desc}
          showGenres = {genres}
          showRat = {rating}
          />}

    </div>)
}