import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import Show from "./Show";

export default function FavsList({favShows, changeFavShows})
{
    const RemoveFav = (id) => {changeFavShows(favShows.filter(show => show.id != id))}

    return(<>

        <div className = "showsContainer">
        {favShows.map((show) => (

            <Show 
                key = {show?.id}
                id = {show?.id}
                name = {show?.name}
                imgSrc = {show?.image?.medium}
                changeFavStatus = {RemoveFav}
            />
        ))}
    </div>
    
    </>)
}