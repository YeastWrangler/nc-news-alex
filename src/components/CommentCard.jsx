import React from 'react'
import {getCommentsByArticleID} from "../API"
import {useState, useEffect, useContext} from 'react'
import DeleteComment from "./DeleteComment"
import { UserContext } from '../context/user'

const CommentCard = ({article_id}) => {

const [comments, setComments] = useState([])
const {currentUser} = useContext(UserContext)
const [commentDelete, setCommentDelete] = useState(false)
const[errorMessage, setErrorMessage] = useState("")
const [expanded] = useState(false);

    useEffect(() => {
         getCommentsByArticleID(article_id).then((data) => {
          
         setComments(data.data.comments)
         setCommentDelete(false)
      })
    }, [article_id, commentDelete, errorMessage, expanded])

    

       
      
        return (
          <ul className="collapsible" > 
            {comments.map((comment) => { 
                const stringDate = new Date(comment.created_at)
                if(comment.author === currentUser.username) {
                return <> <li  className="sketchy" key={comment.comment_id}>
                    <h4>Author: {comment.author}</h4>
                    <p> Date Posted: {stringDate.toGMTString()}</p>
                    <p> Comment: {comment.body}</p>
                    <p> Votes: {comment.votes}</p>
                    <DeleteComment author={comment.author} comment_id={comment.comment_id} setCommentDelete={setCommentDelete} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
                    </li>
                    <br></br>
                    </>
                } else {
                    return <> <li  className="sketchy" key={comment.comment_id}>
                    <h4>Author: {comment.author}</h4>
                    <p> Date Posted: {stringDate.toGMTString()}</p>
                    <p> Comment: {comment.body}</p>
                    <p> Votes: {comment.votes}</p>
                    </li>
                    <br></br>
                    </>
                }
            })}</ul>)
        
      

        }

export default CommentCard
