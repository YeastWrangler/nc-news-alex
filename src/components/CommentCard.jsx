import React from 'react'
import {getCommentsByArticleID} from "../API"
import {useState, useEffect} from 'react'

const CommentCard = ({article_id}) => {

const [comments, setComments] = useState([])

    useEffect(() => {
         getCommentsByArticleID(article_id).then((data) => {
          
         setComments(data.data.comments)
      })
    }, [article_id])

   
        const [expanded, setExpanded] = useState(false);
        const clickHandler = () => setExpanded(!expanded);
      
        return (
          <ul className="collapsible" onClick={clickHandler}> Click to View Comments
            {comments.map((comment) => {
                return <li  className={expanded ? 'expanded' : 'collapsed'} key={comment.comment_id}>
                    <h4>Author: {comment.author}</h4>
                    <p> Comment: {comment.body}</p>
                    <p> Votes: {comment.votes}</p>
                </li>
            })}</ul>)
        
      

        }

export default CommentCard
