import { useEffect } from "react";
import { useState } from "react";

export default function SearchForm({totalShows, shows, setShows})
{
  //const [input, setInput] = useState("");

  const handleChange = (content) => {

    if(content.target.value != "")
    {
        //setInput(content.target.value);
        //console.log(input);
        //setShows(totalShows.map(show => show?.name === input ? show : null));
        //console.log(shows)
        const filteredShows = totalShows.filter(show => show?.name.toLowerCase().startsWith(content.target.value.toLowerCase()));
        setShows(filteredShows);
    }
    else
    {
        const filteredShows = totalShows.filter(show => show?.name.toLowerCase().startsWith(" "));
        setShows(filteredShows);
    }

  }

  const handleSend = (content) => {
    content.preventDefault(); //no recarga pág.
  }

    // Logs the shows data when it updates
    // useEffect(() => {

    //     console.log(shows);

    // }, [shows]);

  return (<div>
    <form onSubmit = {handleSend} >
      <input
        //className = 'inputToDo'
        type = 'text'
        placeholder = 'Show Name'
        //name = 'newTask'
        //value = {input}
        onChange = {handleChange}
      />
    </form>

    </div>);
}