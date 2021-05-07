import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  
  const [num, setNum] = useState(0);

  const addOne = () => {
    console.log("entered into function")
    setNum(num+1);
    console.log(num);
  }


  return(
    <div>
      {num}
      <br />
      <button onClick={addOne}>Add</button>
    </div>
  )
}

export default App;
