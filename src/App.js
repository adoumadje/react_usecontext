import React from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";
import { ThemeProvider } from "./ThemeContext";


function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionalContextComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
