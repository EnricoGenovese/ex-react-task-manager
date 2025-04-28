import { useState, useEffect } from "react"

const apiUrl = import.meta.env.VITE_APIURL;

export default function useTask() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error))
    }, [])

    const addTask = async newTask => {
        const res = await fetch(`${apiUrl}/tasks`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newTask)
        })
        const { success, message, task } = await res.json();
        if (!success) throw new Error(message);

        setTasks(prev => [...prev, task])
    }
    const removeTask = (id) => { }
    const deleteTask = () => { }

    return { tasks, addTask, removeTask, deleteTask }
}