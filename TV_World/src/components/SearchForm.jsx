import { useEffect } from "react";
import { useState } from "react";

export default function SearchForm({totalShows, setShows})
{
  //const [input, setInput] = useState("");

  const showGenres = ["Drama", "Comedy", "Action", "Thriller", "Fantasy", "Crime",
     "Romance", "Horror", "Anime", "Science-Fiction", "Family", "Supernatural",
     "Medical", "Legal", "Western"];

  function isNum(str)
  {
    return !isNaN(Number(str));
  }

  const isGenre = (str) => {
    let isGenre = false;
    showGenres.map(genre => str.toLowerCase() === genre.toLowerCase()? isGenre = true : isGenre = isGenre);
    return isGenre;
  }

  const handleChange = (content) => {

    if(content.target.value != "")
    {
        let filteredShows;
        
        isNum(content.target.value)? 
          //Searches by ID (strict)
          filteredShows = totalShows.filter(show => show?.id == (content.target.value))
        :
          isGenre(content.target.value)?
            //Searches by genre (Must type it with the right upper and lower case letters)
            filteredShows = totalShows.filter(show => show?.genres.includes(content.target.value))
          :
            //Regular search, AKA search by name
            filteredShows = totalShows.filter(show => show?.name.toLowerCase().startsWith(content.target.value.toLowerCase()))
        
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