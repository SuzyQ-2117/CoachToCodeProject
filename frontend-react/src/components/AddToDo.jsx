import { useState } from "react";
import { url } from "../url";

export default function AddToDo({ title, setTitle, description, setDescription, dueDate, setDueDate, dueTime, setDueTime, fetchData, setIsAdding, isActive }) {

    const [status, setStatus] = useState("Not Started");

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`
    }

    const handleSubmit = (e) => {
        // All your handleSubmit logic needs to go here. Are you going to check that the same task already exists? Probably not
        // all you'll really need to do in this function is package the fields into a variable, perform your fetch request, clear your inputs from the form, call the handleClose function and perform the re-render. Maybe useEffect on the ToDoPage and watch for setShow being changed to false? something like that 
        e.preventDefault();

        //get today's date
        const currentDate = getCurrentDate();
        //compare today's date with the date the user entered. If the user has selected a previous date, an error will display. 
        if(dueDate < currentDate) {
            alert("You cannot add a ToDo with a date in the past.");
            return;
        }

        const toDo = {
            title, 
            description,
            dueDate,
            dueTime,
            status
        };
        fetch(`${url}/task/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(toDo),
        })
        .then(() => {
            alert("ToDo added!");
            setTitle("");
            setDescription("");
            setDueDate("");
            setDueTime("");
            fetchData();
            handleCloseAdd();
        })
    }

    const handleCloseAdd = () => setIsAdding(false);

    return (
        <div className={`add-todo-form color5 ${isActive ? 'active' : ''}`}>
            {/* This is where my form needs to go for all the ToDo components */}
            <form onSubmit={handleSubmit} >
                <div className="flex">
                    <h4>Title: </h4>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <div className="flex">
                    <h4>Description: </h4>
                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br />
                <div className="flex">
                    <h4>Date: </h4>
                    <input type="date" required value={dueDate} min={getCurrentDate()} onChange={(e) => setDueDate(e.target.value)} />
                    <h4>Time (optional)</h4>
                    <input type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} />
                </div>
                <br />
                <div className="flex">
                    <button variant="secondary" className="add-btn" onClick={handleCloseAdd}>Cancel</button>
                    <button variant="primary" className="add-btn" onClick={handleSubmit}>Add To Do!</button>
                </div>
            </form> 
        </div>
    )
}
