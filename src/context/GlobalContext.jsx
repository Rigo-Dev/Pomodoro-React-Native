import { createContext, useState } from "react";

export const globalContext = createContext();

const GlobalContext = ({children}) => {
  const [time, setTime] = useState(25 * 60)

    return (
    <globalContext.Provider value={{time, setTime}}>
        {children}
    </globalContext.Provider>
  )
}

export default GlobalContext