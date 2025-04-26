import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { memo } from "react";
// import TaskRow from '../components/TaskRow'

const TaskRow = memo(({ title, status, createdAt }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'To do':
        return 'red';
      case 'Doing':
        return 'yellow';
      case 'Done':
        return 'green'
      default:
        return 'black'
    }
  }
  return (
    <div className="taskRow" style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'start', width: '75%' }}>
      <p style={{ width: '33%' }}>{title}</p>
      <p style={{ width: '33%', color: getStatusColor(status) }}>{status}</p>
      <p style={{ width: '33%' }}>{createdAt}</p>
    </div>
  )
})

export default function TaskList() {
  const { tasks } = useGlobalContext();
  return (
    <>
      <div style={{ height: '25px', marginBottom: '10px' }}>
        <NavLink to='/AddTask' style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px ' }}>Add Task</NavLink>
      </div>
      <div className="tableBody" style={{ backgroundColor: '#D3D3D3' }}>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'left', width: '75%' }}>
          <p style={{ width: '33%', fontWeight: 'bold' }}>Nome</p>
          <p style={{ width: '33%', fontWeight: 'bold' }}>Stato</p>
          <p style={{ width: '33%', fontWeight: 'bold' }}>Data di creazione</p>
        </div>
        {tasks.map((t, i) => (
          <div className="taskList">
            <TaskRow
              title={t.title}
              status={t.status}
              createdAt={t.createdAt}
              key={i}
            />
          </div>
        ))}
      </div>
    </>
  )
}