import { useContext, useMemo, useState, } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState(1)

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(prev => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  }

  const sortIcon = sortOrder === 1 ? '↓' : '↑'

  const sortedTasks = useMemo(() => {
    const getSortBy = (sortBy, a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'status':
          const statusOptions = ['To do', 'Doing', 'Done'];
          return statusOptions.indexOf(a.status) - statusOptions.indexOf(b.status);
        case 'createdAt':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        default:
          return 0;
      }
    }
    return [...tasks].sort((a, b) => getSortBy(sortBy, a, b) * sortOrder);

  }, [tasks, sortBy, sortOrder])


  return (
    <>
      <div className="taskBody">
        <h2 className="pageTitle">Tasks List</h2>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('title')}>Nome {sortBy === 'title' && sortIcon}</th>
              <th onClick={() => handleSort('status')}>Stato {sortBy === 'status' && sortIcon}</th>
              <th onClick={() => handleSort('createdAt')}>Data di Crezione {sortBy === 'createdAt' && sortIcon}</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}