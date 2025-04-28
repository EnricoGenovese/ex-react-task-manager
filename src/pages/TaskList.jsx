import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);

  return (
    <>
      <div className="taskBody">
        <h2 className="pageTitle">Tasks List</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Stato</th>
              <th>Data di Crezione</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}