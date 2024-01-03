import './App.css';
import {useState} from "react";
import axios from "axios";
function App() {
  const [text,setText] = useState("");
  const [temp,setTemp] = useState("");
  const handleClick = async () =>{
    const resp = await axios.post(`http://localhost:8000`,{
        city:[text]
    });
    setTemp(resp.data.weather[text]);
  }
  return (
    <div className="App">
      <h3>Xivtech</h3>
      <div>
        <div className='text'>
        <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div>
        <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      { temp.length?
        <div>
        <p>Temp - {temp}</p>
      </div>:<></>
      }
    </div>
  );
}

export default App;
