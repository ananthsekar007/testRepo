import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Button } from "@material-ui/core";

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
      <Button variant={"contained"} color="primary" onClick={addOne} >Click</Button>  
    </div>
  )
}

export default App;
