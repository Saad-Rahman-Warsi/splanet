import { useState } from "react";

import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter.js'

window.areaP = false;
window.areaC = false;
window.subA1 = false;
window.subA2 = false;
window.subA3 = false;
window.facT1 = false;
window.facT2 = false;
window.english = true;


function App() {
   const [rflag, setRFlag] = useState("X");
  return (
    <div className="App">
      <AppRouter rflag={rflag} setRFlag={setRFlag}/>
    </div>
  );
}

export default App;
