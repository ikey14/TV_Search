import { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-modal';

import "./Show.css";

export default function Show({id, name, imgSrc, changeFavStatus})
{
    const [showWindow, setShowWindow] = useState(false);

    const handleShowClick = (e) => {
        // Prevent clicks on the button from triggering the info popup
        if (e.target.tagName.toLowerCase() !== "button") {
        setShowWindow(true);
        }
    };

    const closeModal = () => setShowWindow(false);

    Modal.setAppElement('#root');

    return(<div style = {{ display: 'flex', alignItems: 'center' }} onClick = {handleShowClick}>

        <img className = "showImg" src = {imgSrc} alt = {imgSrc}/>
        <p className = "showName">{name}</p>
        <button onClick = {() => changeFavStatus(id)}>❤️</button>

        <Modal
        isOpen = {showWindow}
        onRequestClose = {closeModal}
        ariaHideApp = {false}
        shouldCloseOnOverlayClick = {true}
        >
            <h2>Hello</h2>
            <button onClick={closeModal}>X</button>
            <div>I am a modal</div>
      </Modal>
        
        {/* {showWindow && (
        <div className = "showInfoPopup">
          <button onClick={closeInfo}>X</button>
          {/* You can render richer info here (e.g. image, description, etc.)}
          <h3>{name}</h3>
          <img src = {imgSrc} alt = {imgSrc} style = {{ width: 80, height: 80 }} />
          <p>Additional information goes here.</p>
        </div>
      )} */}

    </div>)
}