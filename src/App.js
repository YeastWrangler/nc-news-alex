
import './App.css';
import Topics from "./components/Topics"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SingleArticle from './components/SingleArticle';


	

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
        <Route path="/articles/:article_id" element={<SingleArticle />}/>
     
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
