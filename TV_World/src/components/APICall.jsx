import { useEffect } from "react";
import { useState } from "react";

export default function APICall()
{
    const [shows, setShows] = useState([]);

    const SaveRegister = () => {

    // Fetch info from API url
    fetch("https://api.tvmaze.com/shows")
    // Wait for response, when results are in put them in JSON format
    .then(response => response.json())
    // Since this is also promise based, we need to wait again.
    // once we have the JSON, we take the important info of the first 10 elements
    .then(data => setShows(data))
    .catch(error => console.error(error));

    }

    useEffect(() => {

        SaveRegister();
        //console.log(shows);

    }, []);

    // Logs the shows data when it updates
    useEffect(() => {

        console.log(shows);

    }, [shows]);
}