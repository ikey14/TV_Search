import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import ShowsList from "./ShowsList";

export default function APICall({favShows, changeFavShows})
{
    const [shows, setShows] = useState([]);

    const GetShows = () => {

        fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        //Filter data so that only the fields that are relevant for searching and rendering are present
        .then(data => {
            const filteredShows = data.map(show => ({
            id: show.id,
            name: show.name,
            img: show.image?.medium,
            genres: show.genres
            }));
            setShows(filteredShows);
        })
        .catch(error => console.error(error));

    }

    useEffect(() => {

        GetShows();

    }, []);

    //Logs the shows data when it updates
    useEffect(() => {

        console.log(shows);

    }, [shows]);

    return(<>

        {/* <SearchForm totalShows = {shows} /> */}
        <ShowsList totalShows = {shows} favShows = {favShows} changeFavShows = {changeFavShows} />

    </>)
}