import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import Show from "./Show";

export default function ShowsList({totalShows, favShows, changeFavShows})
{
    const [shows, setShows] = useState(totalShows);

    const AddFav = (id) => {
        const newShow = totalShows.find(show => show.id === id);
        if (newShow) 
        {
            // .some() returns true if there is already an object in the array that matches the condition
            const alreadyFavorite = favShows.some(show => show.id === id);
            if (!alreadyFavorite) 
            {
                changeFavShows([...favShows, newShow]);
            }
        }
    }

    return(<>
    
        <div>
            <SearchForm totalShows = {totalShows} shows = {shows} setShows = {setShows} />
        </div>

        <div className = "showsContainer">
        {shows.map((show) => (

            <Show 
                key = {show?.id}
                id = {show?.id}
                name = {show?.name}
                imgSrc = {show?.image?.medium}
                changeFavStatus = {AddFav}
            />
        ))}
    </div>
    
    </>)
}