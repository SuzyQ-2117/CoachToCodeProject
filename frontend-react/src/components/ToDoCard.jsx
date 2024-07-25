import { useState } from "react";
import { url } from "./url";
import addConfetti from "./AddConfetti";


// function to randomly assign one of four colour schemes to each ToDoCard when it renders
const getRandomClass = () => {
    const classes = ['color1', 'color2', 'color3', 'color4', 'color5'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
};

const ToDoCard = ({ id, title, description, dueDate, dueTime, status, fetchData, onEdit }) => {

    // assigns the variable to a call of the function (which will return one of the className names)
    const [randomClass] = useState(getRandomClass());

    // format time to HH:MM
    const formatTime = (time) => {
        if (!time) return '';
        return time.substring(0, 5); // only get the HH:MM part
    }

    // Deletes the selected ToDo - confirm box will ensure no accidental deletions
    const deleteToDo = () => {
        console.log("Task ID: " + id);
        if (window.confirm("Are you sure you want to delete this ToDo?")) {
            fetch(`${url}/task/remove/${id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        // Only fetch data if delete was successful
                        alert("ToDo deleted");
                        fetchData();
                    } else {
                        // Handle errors (e.g., show an alert or log the error)
                        console.error("Failed to delete ToDo");
                        alert("Failed to delete ToDo. Please try again.");
                    }
                })
                .catch(error => {
                    // Handle network or other errors
                    console.error("Error:", error);
                    alert("An error occurred. Please try again.");
                });
        }
    }

    const completeToDo = (e) => {
        e.preventDefault();
        fetch(`${url}/task/update/${id}?status=Complete`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        })
        addConfetti()
        fetchData();
    }

    const classStatus = status.toLowerCase();

    return (
        <div className={`todo-card grow ${randomClass} ${classStatus}`}>
            <div className="todo-container">
                <div className="todo-title">
                    <h4>{title}</h4>
                </div>
                <div className="todo-status">
                    <div className="todo-status-area">
                        <p>Status: {status}</p>
                    </div>
                </div>
                <div className="todo-description">
                    <p>{description}</p>
                </div>
                <div className="todo-datetime">
                    <div className="todo-date">
                        <div className="todo-date-heading">
                            <p>Due Date: </p>
                        </div>
                        <div className="todo-date-value">
                            <p>{dueDate}</p>
                        </div>
                    </div>
                    {dueTime && <div className="todo-time">
                        <div className="todo-time-heading">
                            <p>Due Time: </p>
                        </div>
                        <div className="todo-time-value">
                            <p>{formatTime(dueTime)}</p>
                        </div>
                    </div>}
                </div>
                <div className="todo-edit-btn">
                    <button onClick={onEdit}>Edit</button>
                </div>
                <div className="todo-complete-btn">
                    <button onClick={completeToDo}>Mark as complete!</button>
                </div>
                <div className="todo-delete-btn">
                    <button onClick={deleteToDo}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoCard;