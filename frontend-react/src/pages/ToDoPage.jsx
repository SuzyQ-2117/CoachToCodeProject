import { useState, useEffect } from "react";
import AddToDoModal from "../components/AddToDoModal";
import ToDoCard from "../components/ToDoCard";
import { url } from "../url";
import AddToDo from "../components/AddToDo";

export default function ToDoPage() {
    const [apiData, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState();
    const [dueTime, setDueTime] = useState();


    //handles opening the modal to add a new ToDo. Will be replaced by an expanding section that slides down to add a new ToDo and slides back up when the ToDo is either added successfully or cancelled
    const handleShowAdd = () => setIsAdding(true);
    

    //handle state for ToDoCard to ensure only one card can be in "edit mode" at a time. Want to minimise the strain on the browser to handle a maximum two cards "flipping" at once
    const handleEditMode = (id) => {
        setEditingId(id);
    };

    // clears the state when the user cancels an edit request
    const handleCancelEdit = () => {
        setEditingId(null);
    };

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
                    <p>This is the section where my fancy To Do app will be displayed!</p>
                    <br />
                    {!isAdding && <button className="add-btn" onClick={handleShowAdd}>
                        Add new Task!
                    </button>}
                </div>
                {isAdding &&
                <AddToDo 
                    title={title} 
                    setTitle={setTitle}
                    description={description} 
                    setDescription={setDescription}
                    dueDate={dueDate} 
                    setDueDate={setDueDate}
                    dueTime={dueTime} 
                    setDueTime={setDueTime}
                    fetchData={fetchData}
                    setIsAdding={setIsAdding}
                    isActive={isAdding}
                />
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
