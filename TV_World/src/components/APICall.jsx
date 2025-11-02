import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import ShowsList from "./ShowsList";

export default function APICall({favShows, changeFavShows})
{
    const [shows, setShows] = useState([]);

    const SaveRegister = () => {

    // Fetch info from API url
    fetch("https://api.tvmaze.com/shows")
    // Wait for response, when results are in put them in JSON format
    .then(response => response.json())
    // Since this is also promise based, we need to wait again.
    .then(data => setShows(data))
    .catch(error => console.error(error));

    }

    useEffect(() => {

        SaveRegister();

    }, []);

    // Logs the shows data when it updates
    useEffect(() => {

        console.log(shows);

    }, [shows]);

    return(<>

        {/* <SearchForm totalShows = {shows} /> */}
        <ShowsList totalShows = {shows} favShows = {favShows} changeFavShows = {changeFavShows} />

    </>)
}