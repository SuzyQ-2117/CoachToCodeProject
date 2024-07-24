export default function ToDoCard({ id, title, description, dueDate, dueTime, status }) {

    return (
        <div className="todo-card">
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Date: {dueDate}</p>
            <p>Time: {dueTime}</p>
            <p>Status: {status}</p>
        </div>
    )
}