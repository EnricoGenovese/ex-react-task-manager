import { createContext, useContext, useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_APIURL;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(`${apiUrl}/tasks`);
      const data = await response.json()
      setTasks(data)
    } catch (err) {
      console.error('Could not get data:', err)
    }


  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const contexData = {
    tasks
  }

  return (
    <GlobalContext.Provider value={contexData}>
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