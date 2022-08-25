
import './App.css';
import Topics from "./components/Topics"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SingleArticle from './components/SingleArticle';
import PostComment from './components/PostComment';
import { UserContext } from './context/user';
import {useState} from "react"
import Homepage from './components/Homepage';
import Errors from './components/Errors'
 

	

function App() {

const [currentUser, setCurrentUser] = useState({username: "jessjelly"})

  return (
    <BrowserRouter>
    <div >
      <header className="App-header">
        <Link to="/">Alex's News APP</Link>
      </header>
      </div>

      <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/topics/:topic" element={<Topics />} />
        <Route path="/articles/:article_id" element={<SingleArticle />}/>
        <Route path="/comments/:article_id" element={<PostComment />} />
        <Route path="*" element={<Errors />} />
      
      </Routes>
      </UserContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;
