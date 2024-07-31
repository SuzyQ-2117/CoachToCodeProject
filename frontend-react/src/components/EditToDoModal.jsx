import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { url } from './url';


//This function is now defunct and has been removed - relied on the Bootstrap for Modals but I don't want the whole Bootstrap package as that overrides the custom CSS I've added. Have left this in to show logic but if this were a real product I was producing, I would remove this component altogether. 
function EditToDoModal({
  showEdit,
  setShowEdit,
  fetchData,
  updatedId,
  updatedTitle,
  setUpdatedTitle,
  updatedDescription,
  setUpdatedDescription,
  updatedDueDate,
  setUpdatedDueDate,
  updatedDueTime,
  setUpdatedDueTime,
  updatedStatus,
  setUpdatedStatus
}) {

  useEffect(() => {
    if (showEdit) {
      console.log("Updated Status:", updatedStatus);
    }
  }, [showEdit, updatedStatus]);

  function handleCloseEditModal() {
    setShowEdit(false);
    // Reset state values
    setUpdatedTitle('');
    setUpdatedDescription('');
    setUpdatedDueDate('');
    setUpdatedDueTime('');
    setUpdatedStatus('Not Started');
  }

  const handleEditToDo = (e) => {
    e.preventDefault();

    const updateParams = {
      title: updatedTitle,
      description: updatedDescription,
      dueDate: updatedDueDate,
      status: updatedStatus
    };

    if (updatedDueTime) {
      updateParams.dueTime = updatedDueTime;
    }

    const queryParams = new URLSearchParams(updateParams).toString();

    console.log("Updating ToDo with Params:", updateParams);

    fetch(`${url}/task/update/${updatedId}?${queryParams}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          alert("ToDo updated!");
          handleCloseEditModal(); // Close modal on success
          fetchData(); // Fetch updated data after success
        } else {
          return response.text().then(text => { throw new Error(text) });
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <Modal show={showEdit} onHide={handleCloseEditModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit To-Do</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleEditToDo}>
        <Modal.Body>
          <div>
            <label>Title: </label>
            <input type="text" required value={updatedTitle || ''} onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description: </label>
            <input type="text" required value={updatedDescription || ''} onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Date: </label>
            <input
              type="date"
              required
              value={updatedDueDate || ''}
              onChange={(e) => setUpdatedDueDate(e.target.value)}
            />
          </div>
          <div>
            <label>Time (optional): </label>
            <input
              type="time"
              value={updatedDueTime || ''}
              onChange={(e) => setUpdatedDueTime(e.target.value)}
            />
          </div>
          <div>
            <label>Status: </label>
            <select
              required
              value={updatedStatus || 'Not Started'}
              onChange={(e) => setUpdatedStatus(e.target.value)}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete!</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Save</Button>
          <Button variant="secondary" onClick={handleCloseEditModal}>Cancel</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditToDoModal;
