import React, {useState} from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionalContextComponent from "./FunctionalContextComponent";


export const ThemeContext = React.createContext()


function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionalContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
