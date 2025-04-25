import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext.jsx";
import AddTask from './pages/AddTask.jsx';
import TaskList from './pages/TaskList.jsx'
function App() {



  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path='/' Component={TaskList} />
          <Route path='/addTask' Component={AddTask} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
