import { useState, useEffect } from "react";
import AddToDoModal from "../components/AddToDoModal";
import ToDoCard from "../components/ToDoCard";
import { url } from "../url";

export default function ToDoPage() {
    const [showAdd, setShowAdd] = useState(false);
    const [apiData, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState();
    const [dueTime, setDueTime] = useState();
    const [status, setStatus] = useState("Not Started");

    //handles opening the modal to add a new ToDo. Will be replaced by an expanding section that slides down to add a new ToDo and slides back up when the ToDo is either added successfully or cancelled
    const handleShowAdd = () => setIsAdding(true);
    const handleCloseAdd = () => setIsAdding(false);

    //handle state for ToDoCard to ensure only one card can be in "edit mode" at a time. Want to minimise the strain on the browser to handle a maximum two cards "flipping" at once
    const handleEditMode = (id) => {
        setEditingId(id);
    };

    // clears the state when the user cancels an edit request
    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleSubmit = (e) => {
        // All your handleSubmit logic needs to go here. Are you going to check that the same task already exists? Probably not
        // all you'll really need to do in this function is package the fields into a variable, perform your fetch request, clear your inputs from the form, call the handleClose function and perform the re-render. Maybe useEffect on the ToDoPage and watch for setShow being changed to false? something like that 
        e.preventDefault();
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




    function fetchData() {
        fetch(`${url}/task/all`)
            .then((response) => response.json())
            .then((data) => setData(data));
        }

        useEffect(() => {
            fetchData();
        }, []);

        return (
            <div className="coloured-background">
                <div className="todo-headings">
                    <h3>This is a heading about the tasks on this page!</h3>
                    <br />
                    <p>This is the section where my fancy To Do app will be displayed</p>
                    <br />
                    <button className="add-btn" onClick={handleShowAdd}>
                        Add new Task!
                    </button>
                </div>
                {isAdding && <div>
                    {/* This is where my form needs to go for all the ToDo components */}
                    <form onSubmit={handleSubmit} >
                        <h4>Title: </h4>
                        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                        <h4>Description: </h4>
                        <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />
                        <h4>Date: </h4>
                        <input type="date" required value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                        <h4>Time (optional)</h4>
                        <input type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} />
                    </form>
                    <button variant="secondary" onClick={handleCloseAdd}>Cancel</button>
                    <button variant="primary" onClick={handleSubmit}>Add To Do!</button>
                </div>
                    }
                <div className="flex flex-wrap">
                    {apiData.map((task) => (
                        <ToDoCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            dueDate={task.dueDate}
                            dueTime={task.dueTime}
                            status={task.status}
                            isEditing={editingId === task.id}
                            handleEditMode={() => handleEditMode(task.id)}
                            handleCancelEdit={handleCancelEdit}
                            fetchData={fetchData}
                        />
                    ))}
                </div>
            </div>
        );
    }
