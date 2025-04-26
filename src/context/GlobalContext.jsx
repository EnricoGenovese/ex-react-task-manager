import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  function useTasks(url) {
    const [tasks, setTasks] = useState([])

    function addTask() { }
    function removeTask() { }
    function updateTask() { }

    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const res = await fetch(url)
          const data = await res.json()

          setTasks(data)
        } catch (err) {
          console.error(err)
        }

      }
      fetchTasks()
    }, [url])
    return { tasks, addTask, removeTask, updateTask }
  }

  const contextData = {
    useTasks
  }

  return (
    <GlobalContext.Provider value={contextData}>
      {children}
    </GlobalContext.Provider>
  );
}
function useGlobalContext() {
  const context = useContext(GlobalContext);

  // Se per sbaglio non dovessi inserire correttamente il Provider nel file App.jsx, allora genero un errore per facilitare il debug:
  if (!context) {
    throw new Error("useGlobalContext is not inside the context provider GlobalProvider");
  }
  return context;
}

export { GlobalProvider, useGlobalContext };