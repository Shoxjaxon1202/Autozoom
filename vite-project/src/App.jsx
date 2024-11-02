import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Salom</h2>
      <Home />
    </>
  );
}

export default App;
