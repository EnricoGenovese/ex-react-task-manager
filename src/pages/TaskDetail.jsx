import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetails() {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask, updateTask } = useContext(GlobalContext)

    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {
        return (
            <h3>Task not found</h3>
        )
    }

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            alert('Task deleted successfully')
            navigate('/')
        } catch (err) {
            console.error(err);
            alert(err.message)
        }
    }

    const handleUpdate = async (updatedTask) => {
        try {
            await updateTask(updatedTask)
            setShowEditModal(false)
        } catch (err) {
            console.error(err);
            alert(err.message)
        }
    }
    return (
        <>
            <h2>Dettagli Task</h2>
            <p>Titolo: {task.title}</p>
            <p>Descrizione: {task.description}</p>
            <p>Data di creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => setShowModal(true)}>Elimina</button>
            <button onClick={() => setShowEditModal(true)}>Modifica</button>
            <Modal
                title='Conferma elimina'
                content='Cancellare la task? (questa azione è irreversibile)'
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                confirmText='Elimina'
            />
            <EditTaskModal
                task={task}
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleUpdate}
                confirmText='Salva'
            />
        </>
    )
}
