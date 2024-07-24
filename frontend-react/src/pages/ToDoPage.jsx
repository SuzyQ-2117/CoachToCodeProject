import AddToDoModal from "../components/AddToDoModal";
import ToDoCard from "../components/ToDoCard";
import { url } from "../components/url";
import { useState, useEffect } from "react";

export default function ToDoPage() {
    const [show, setShow] = useState(false);
    let [apiData, setData] = useState([]);

    const handleShow = () => setShow(true);

    function fetchData() {
        console.log("FETCHING")
        fetch(`${url}/task/all`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    // will need to perform a fetch request here to retrieve the details of all tasks held in the database and will then need to deconstruct them and parse the data into the ToDoCard

    return (
        <div>
            <h3>This is a heading about the tasks on this page!</h3>
            <br />
            <p>This is the section where my fancy To Do app will be displayed</p>
            <br />
            <div>
                <button variant="primary" onClick={handleShow}>
                    Add new Task!
                </button>
            </div>
            <div>
                {apiData.map((task) => (
                    <ToDoCard key={task.id}
                        title={task.title}
                        description={task.description}
                        dueDate={task.dueDate}
                        dueTime={task.dueTime}
                        status={task.status}
                    />
                ))
                }
            </div>
            <AddToDoModal show={show} setShow={setShow} fetchData={fetchData}/>
        </div>
    )
}