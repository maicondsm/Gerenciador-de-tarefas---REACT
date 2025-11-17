import { ChevronRight, TrashIcon } from 'lucide-react';

function Tasks ({ tasks, onTaskClick, onDeleteTaskClick }) {
    return <ul>{tasks.map((tasks) =>(<li key={tasks.id}>
        <button onClick={() => onTaskClick(tasks.id)} className={`tasks ${tasks.isCompleted ? "Completed" : ""}`}>{tasks.title}</button>
        <button className="details">
            <ChevronRight />
        </button>
        <button className="details" onClick={() => onDeleteTaskClick(tasks.id)}>
            <TrashIcon />
        </button>
    </li>))}</ul>
}

export default Tasks