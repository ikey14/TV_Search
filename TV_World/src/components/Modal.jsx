import "./Modal.css";

export default function Modal({ setShowWindow, showName, showImgSrc, showGenres, showDesc, showRat }) 
{
  return(<div className = "modalBackground">
      <div className = "modalContainer">
        <div className = "titleCloseBtn">
          <button onClick = {() => {setShowWindow(false);}}>X</button>
        </div>
        <div className = "title">
          <h1>{showName}</h1>
        </div>
        <div>
            <img src = {showImgSrc} className = "modalImg"/>
        </div>
        <div className = "body">
          <h3>{showGenres}</h3>
          {showDesc}
        </div>
        <div className = "footer">
          <p>{showRat}</p>
        </div>
      </div>
    </div>);
}