import { useState, useEffect } from "react";
import AddToDoModal from "../components/AddToDoModal";
import EditToDoModal from "../components/EditToDoModal";
import ToDoCard from "../components/ToDoCard";
import { url } from "../components/url";

export default function ToDoPage() {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [apiData, setData] = useState([]);

    const [updatedId, setUpdatedId] = useState();
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedDueDate, setUpdatedDueDate] = useState('');
    const [updatedDueTime, setUpdatedDueTime] = useState('');
    const [updatedStatus, setUpdatedStatus] = useState('');

    const handleShowAddModal = () => setShowAdd(true);

    const handleShowEditModal = (task) => {
        setUpdatedId(task.id);
        setUpdatedTitle(task.title);
        setUpdatedDescription(task.description);
        setUpdatedDueDate(task.dueDate);
        setUpdatedDueTime(task.dueTime);
        setUpdatedStatus(task.status);
        setShowEdit(true);
    };

    const handleCloseEditModal = () => setShowEdit(false);

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
                <button className="add-btn" onClick={handleShowAddModal}>
                    Add new Task!
                </button>
            </div>
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
                        fetchData={fetchData}
                        onEdit={() => handleShowEditModal(task)} // Pass the task to the handleShowEditModal function
                    />
                ))}
            </div>
            <AddToDoModal showAdd={showAdd} setShowAdd={setShowAdd} fetchData={fetchData} />
            <EditToDoModal
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                fetchData={fetchData}
                updatedId={updatedId}
                setUpdatedId={setUpdatedId}
                updatedTitle={updatedTitle}
                setUpdatedTitle={setUpdatedTitle}
                updatedDescription={updatedDescription}
                setUpdatedDescription={setUpdatedDescription}
                updatedDueDate={updatedDueDate}
                setUpdatedDueDate={setUpdatedDueDate}
                updatedDueTime={updatedDueTime}
                setUpdatedDueTime={setUpdatedDueTime}
                updatedStatus={updatedStatus}
                setUpdatedStatus={setUpdatedStatus}
            />
        </div>
    )
}
