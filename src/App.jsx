import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <>
      <h1>Sie utelias urkkija</h1>
      <div className="card">
        <p>Moroo! Paena nappiva.</p>
      </div>
      <button onClick={() => setButtonPressed(true)}>
        {buttonPressed ? "No paenoithaa sie" : "No paena"}
      </button>
    </>
  );
}

export default App;
