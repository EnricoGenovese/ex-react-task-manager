import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext.jsx";
import AddTask from './pages/AddTask.jsx';
import TaskList from './pages/TaskList.jsx';
import TaskDetails from './pages/TaskDetail.jsx'
function App() {



  return (
    <BrowserRouter>
      <GlobalProvider>
        <nav>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px ' }}>Task List</NavLink>
          <NavLink to='/AddTask' style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px ' }}>Add Task</NavLink>
        </nav>
        <Routes>
          <Route path='/' Component={TaskList} />
          <Route path='/tasks/:id' Component={TaskDetails} />
          <Route path='/addTask' Component={AddTask} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
