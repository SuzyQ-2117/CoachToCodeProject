import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { url } from '../url';


function AddToDoModal({ setShowAdd, showAdd, fetchData }) {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState();
    const [dueTime, setDueTime] = useState();
    const [status, setStatus] = useState("Not Started");

    const handleCloseAddModal = () => setShowAdd(false);
    
    // will need a handle submit function to post the data to the database

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
            handleCloseAddModal();
        })
    }

    // will also need a way to cause the main ToDoPage to re-render when a new ToDo is added

    return (
        <div>


            <Modal show={showAdd} onHide={handleCloseAddModal} backdrop="static" keyboard={false} >
                <Modal.Header>
                    <Modal.Title>Add New To-Do</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleCloseAddModal}>Cancel</button>
                    <button variant="primary" onClick={handleSubmit}>Add To Do!</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddToDoModal;