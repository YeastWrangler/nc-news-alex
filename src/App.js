
import './App.css';
import Topics from "./components/Topics"
import HomePage from "./components/Homepage"
import {useState} from "react"
import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom"


	

function App() {

const [topic, setTopic] = useState("")

  return (
    <BrowserRouter>
    <div className="span-s1">
      <header className="App-header">
        <Link to="/">Alex's News APP</Link>
      </header>
      </div>
      <Routes>
        <Route path="/" element={<Topics topic={topic} setTopic={setTopic}/>}/>
        <Route path="/articles/:topic" element={<Topics topic={topic} setTopic={setTopic}/>} />
     
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
