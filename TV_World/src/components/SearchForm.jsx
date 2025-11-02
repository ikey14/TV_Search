import { useEffect } from "react";
import { useState } from "react";

export default function SearchForm({totalShows})
{
  const [input, setInput] = useState("");
  const [shows, setShows] = useState(totalShows);

  const handleChange = (content) => {

    setInput(content.target.value); 
    console.log(input);
    setShows(totalShows.map(show => show.name === input ? show : []));
    //console.log(shows)

  }

  const handleSend = (content) => {
    content.preventDefault(); //no recarga pág.
    // const newTask = {
    //   //genera un id único llamando a uuidv4
    //   id: uuidv4(),
    //   taskText: input,
    //   completed: false
    // }
    // setInput("");
    // onFormSubmit(newTask) //onSubmit es una prop
  }

    // Logs the shows data when it updates
    useEffect(() => {

        console.log(shows);

    }, [shows]);

  return (<div>
    <form onSubmit = {handleSend} >
      <input
        //className = 'inputToDo'
        type = 'text'
        placeholder = 'Show Name'
        //name = 'newTask'
        value = {input}
        onChange = {handleChange}
      />
    </form>

    </div>);
}