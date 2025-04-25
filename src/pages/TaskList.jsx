import { NavLink } from "react-router-dom";

export default function TaskList() {
    return (
        <>
            <NavLink to='/AddTask'>Add Task</NavLink>
            <h1>TaskList Page</h1>
        </>
    )
}