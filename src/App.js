
import './App.css';
import Topics from "./components/Topics"
import HomePage from "./components/Homepage"
import {useState} from "react"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"


	

function App() {


  return (
    <BrowserRouter>
    <div className="span-s1">
      <header className="App-header">
        <Link to="/">Alex's News APP</Link>
      </header>
      </div>
      <Routes>
        <Route path="/" element={<Topics />}/>
        <Route path="/topics/:topic" element={<Topics />} />
     
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
