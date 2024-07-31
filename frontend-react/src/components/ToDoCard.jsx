import { useState } from "react";
import { url } from "../url";
import addConfetti from "./AddConfetti";
import { formatDate, formatTime } from "../formatDateTime";

// function to randomly assign one of four colour schemes to each ToDoCard when it renders
const getRandomClass = () => {
    const classes = ['color1', 'color2', 'color3', 'color4', 'color5'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
};

const ToDoCard = ({ id, title, description, dueDate, dueTime, status, fetchData, isEditing, handleEditMode, handleCancelEdit }) => {
 
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [editDueDate, setEditDueDate] = useState(dueDate);
    const [editDueTime, setEditDueTime] = useState(dueTime);
    const [editStatus, setEditStatus] = useState(status);

    // assigns the variable to a call of the function (which will return one of the classNames)
    const [randomClass] = useState(getRandomClass());

    //function to handle the edit submission logic
    const handleEditSubmit = (e) => {
            e.preventDefault();
            // packs the edited data into a variable called queryParams
            const updateParams = {
              title: editTitle,
              description: editDescription,
              dueDate: editDueDate,
              status: editStatus
            };
            //if editDueTime is truthy (i.e. not null) then this will be appended to the queryParams variable
            if (editDueTime) {
              updateParams.dueTime = editDueTime;
            }
            // converts the queryParams to a string
            const queryParams = new URLSearchParams(updateParams).toString();
            //prints the string
            console.log("Updating task with query params:", queryParams);
        // the fetch request has the ToDo id and the queryParams appended to the URL
        fetch(`${url}/task/update/${id}?${queryParams}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log("Response status:", response.status);
                if (response.ok) {
                    console.log("fetching");
                    //fetchData() is only called if the update was successful
                    fetchData();
                    handleCancelEdit();
                } else {
                    alert("Failed to update ToDo. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
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
                        alert("ToDo deleted");
                        // Only fetch data if delete was successful
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
        //we don't need any custom queryParams here as al we're doing is updating the status, so we can hard-code this here
        fetch(`${url}/task/update/${id}?status=Complete`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            //custom confetti on successful update followed by a fetch to retrieve the updated status (which also adds the custom className to change the appearance of the ToDoCard)
            addConfetti();
            fetchData();
        });
    }

    //just transforms the status to lower case for ease of managing the CSS
    const classStatus = status.toLowerCase();

    return (
        // the className is a call of the randomClass function to assign a random colour, along with the actual ToDo's status. The only one with any CSS attached to it is .complete because I want the completed ToDos to be visually different to outstanding ToDos
        <div className={`todo-card grow ${randomClass} ${classStatus}`}> 
            <div className="todo-container">
                {/* conditional formatting so that the card appears in "View Mode" by default but can switch into "Edit Mode" on button click */}
                {isEditing ? (
                    <>
                        <div className="todo-title">
                            <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        </div>
                        <div className="todo-status">
                            <div className="todo-status-area flex">
                                <p>Status:</p>
                                <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                                    <option>Not Started</option>
                                    <option>In Progress</option>
                                    <option>Complete</option>
                                </select>
                            </div>
                        </div>
                        <div className="todo-description">
                            <textarea rows="4" cols="35" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                        </div>
                        <div className="todo-datetime">
                            <div className="todo-date">
                                <div className="todo-date-heading">
                                    <p>Due Date: </p>
                                </div>
                                <div className="todo-date-value">
                                    <input type="date" value={editDueDate} onChange={(e) => setEditDueDate(e.target.value)} />
                                </div>
                            </div>
                            {dueTime && <div className="todo-time">
                                <div className="todo-time-heading">
                                    <p>Due Time: </p>
                                </div>
                                <div className="todo-time-value">
                                    <input type="time" value={formatTime(editDueTime)} onChange={(e) => setEditDueTime(e.target.value)} />
                                </div>
                            </div>}
                        </div>
                        <button onClick={handleEditSubmit}>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                ) : (
                    // "View Mode" is the default view for all ToDos on page load/re-render
                    <>
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
                                    <p>{formatDate(dueDate)}</p>
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
                            <button onClick={handleEditMode}>Edit</button>
                        </div>
                        <div className="todo-complete-btn">
                            <button onClick={completeToDo}>Mark as complete!</button>
                        </div>
                        <div className="todo-delete-btn">
                            <button onClick={deleteToDo}>Delete</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ToDoCard;
