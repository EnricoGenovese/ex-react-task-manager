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

    const addTask = async (newTask) => {
        const res = await fetch(`${apiUrl}/tasks`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newTask)
        })
        const { success, message, task } = await res.json();
        if (!success) throw new Error(message);

        setTasks(prev => [...prev, task])
    }
    const removeTask = async (id) => {
        const res = await fetch(`${apiUrl}/tasks/${id}`, {
            method: 'DELETE',
        });

        const { success, message } = await res.json();
        if (!success) throw new Error(message);
        setTasks(prev => prev.filter((task) => task.id !== id));
    }
    const updateTask = async (updatedTask) => {
        const res = await fetch(`${apiUrl}/tasks/${updatedTask.id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updatedTask)
        })
        const { success, message, task: newTask } = await res.json();
        if (!success) throw new Error(message);

        setTasks(prev => prev.map((oldTask) => {
            if (oldTask.id === newTask.id) {
                return newTask;
            } else {
                return oldTask;
            }
        }))
    }

    return { tasks, addTask, removeTask, updateTask }
}