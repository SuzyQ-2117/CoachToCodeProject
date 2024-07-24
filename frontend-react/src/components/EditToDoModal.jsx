import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function EditToDoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// will need a handle submit function to post the data to the database

  const handleSubmit = () => {
// All your handleSubmit logic needs to go here. Are you going to check that the same task already exists? Probably not
// all you'll really need to do in this function is package the fields into a variable, perform your fetch request, clear your inputs from the form, call the handleClose function and perform the re-render. Maybe useEffect on the ToDoPage and watch for setShow being changed to false? something like that 
  }

// will also need a way to cause the main ToDoPage to re-render when a new ToDo is added

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Add New To-Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* This is where my form needs to go for all the ToDo components */}
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>Cancel</button>
          <button variant="primary" onClick={handleSubmit}>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditToDoModal;