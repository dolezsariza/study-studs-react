import React,{useState, useEffect} from 'react';
import './App.css';
import axios from "axios";




function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("This is from react")


  useEffect(() => {
    axios.get("http://localhost:5000/Home").then(
      response=>{
        setWelcomeMessage(response.data)
      }
    )
  }, [])
  

  return (
    <div className="App">
      {welcomeMessage}
    </div>
  );
}

export default App;
