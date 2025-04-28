import { createContext } from "react";
import useTask from "../hooks/useTask";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {

  const contextData = useTask();

  return (
    <GlobalContext.Provider value={{ ...contextData }}>
      {children}
    </GlobalContext.Provider>
  )
}