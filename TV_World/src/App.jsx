import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APICall from './components/APICall'
import FavsList from './components/FavsList'

function App() {
  const [renderState, setRenderState] = useState(0)
  const [favShows, setFavShows] = useState([]);

  return (<>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick = {() => setRenderState(0)}>SEARCH</button>
        <button onClick = {() => setRenderState(1)}>FAVOURITES</button>
    </div>

    {renderState === 0 && <APICall favShows = {favShows} changeFavShows = {setFavShows} />}
    {renderState === 1 && <FavsList favShows = {favShows} changeFavShows = {setFavShows} />}
  
  </>)
}

export default App
