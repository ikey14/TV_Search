import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import Show from "./Show";

export default function ShowsList({totalShows})
{
    const [shows, setShows] = useState(totalShows);


    return(<>
    
        <div>
            <SearchForm totalShows = {totalShows} shows = {shows} setShows = {setShows} />
        </div>

        <div className = "showsContainer">
        {shows.map((show) => (
            // <ToDo 
            //     key = {task.id} 
            //     id = {task.id} 
            //     taskText = {task.taskText} 
            //     complete = {task.complete}
            //     changeTaskStatus = {ChangeTaskStatus}
            //     killTask = {KillTask}
            // />
            <Show 
                key = {show?.id}
                name = {show?.name} 
            />
        ))}
    </div>
    
    </>)
}