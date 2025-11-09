import { useEffect } from "react";
import "./Modal.css";

export default function Modal({ setShowWindow, showName, showImgSrc, showGenres, showDesc, showRat }) 
{
    useEffect(() => {
    
        console.log(showGenres);
    
    }, []);

  return(<div className = "modalBackground">
      <div className = "modalContainer">
        <div className = "closeBtn">
          <button onClick = {() => {setShowWindow(false);}}>X</button>
        </div>
        <div className = "title">
          <h1>{showName}</h1>
        </div>
        <div>
            <img src = {showImgSrc} className = "modalImg"/>
        </div>
        <div className = "upperBody">
            {showGenres.map((genre) => (<p className = "genre">{genre}</p>))}
        </div>
        <div className = "body" >
          <div dangerouslySetInnerHTML={{ __html: showDesc }}></div>
        </div>
        <div className = "footer">
          <p className = "rating">{showRat} / 10</p>
        </div>
      </div>
    </div>);
}