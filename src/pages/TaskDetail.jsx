import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetails() {

    const { id } = useParams();
    const { tasks } = useContext(GlobalContext)

    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {
        return (
            <h3>Task not found</h3>
        )
    }

    const handleDelete = () => {
        console.log('Elimino task')
    }

    return (
        <>
            <h2>Dettagli Task</h2>
            <p>Titolo: {task.title}</p>
            <p>Descrizione: {task.description}</p>
            <p>Data di creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
            <button onClick={handleDelete}>Elimina</button>
        </>
    )
}