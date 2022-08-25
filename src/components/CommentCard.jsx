import React from 'react'
import {getCommentsByArticleID} from "../API"
import {useState, useEffect, useContext} from 'react'
import DeleteComment from "./DeleteComment"
import { UserContext } from '../context/user'

const CommentCard = ({article_id}) => {

const [comments, setComments] = useState([])
const {currentUser, setCurrentUser} = useContext(UserContext)
const [commentDelete, setCommentDelete] = useState(false)
const[errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
         getCommentsByArticleID(article_id).then((data) => {
          
         setComments(data.data.comments)
         setCommentDelete(false)
      })
    }, [article_id, commentDelete, errorMessage])

        const [expanded, setExpanded] = useState(false);

        const clickHandler = () => setExpanded(!expanded);
      
        return (
          <ul className="collapsible" onClick={clickHandler}> Click to View Comments
            {comments.map((comment) => { 
                if(comment.author === currentUser.username) {
                return <li  className="expanded" key={comment.comment_id}>
                    <h4>Author: {comment.author}</h4>
                    <p> Comment: {comment.body}</p>
                    <p> Votes: {comment.votes}</p>
                    <DeleteComment author={comment.author} comment_id={comment.comment_id} setCommentDelete={setCommentDelete} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
                    </li>
                } else {
                    return <li  className="expanded" key={comment.comment_id}>
                    <h4>Author: {comment.author}</h4>
                    <p> Comment: {comment.body}</p>
                    <p> Votes: {comment.votes}</p>
                    </li> 
                }
            })}</ul>)
        
      

        }

export default CommentCard
