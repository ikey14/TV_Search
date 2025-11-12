import { useEffect } from "react";
import { useState } from "react";

import "./Show.css";
import Modal from "./Modal";

export default function Show({id, name, imgSrc, genres, changeFavStatus})
{
    const [showWindow, setShowWindow] = useState(false);
    const[desc, setDesc] = useState("");
    const [rating, setRating] = useState(0);
    const [hasExtraData, setHasExtraData] = useState(false);

    useEffect(() => {

      console.log(genres);

    }, []);

    const GetExtraData = () => {

        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        //Filter data so that only the fields that have to be present in the modal but aren't in the props are present
        .then(data => {setDesc(data.summary); setRating(data.rating?.average);})
        .catch(error => console.error(error));

        // console.log("Has extra data been fetched?    Answer: " + hasExtraData);
        setHasExtraData(true);
        // console.log("Description: " + desc);
        // console.log("Rating: " + rating);

    }

    // useEffect(() => {

    //   GetExtraData();

    // }, [showWindow]);

    const handleShowWindow = (bool) => {
      hasExtraData?
        setShowWindow(bool)
      :
        GetExtraData()
        setShowWindow(bool);
    } 

    return(<div className = "showContainer">

        <img className = "showImg" src = {imgSrc} alt = {imgSrc} onClick = {handleShowWindow}/>
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