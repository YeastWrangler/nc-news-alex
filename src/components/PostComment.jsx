import React from 'react'
import { useParams } from 'react-router-dom'
import {postCommentByArticleID, getArticleByArticleID} from "../API"
import { UserContext } from '../context/user'
import {useEffect, useState, useContext} from "react"




const PostComment = () => {
    
    const {currentUser} = useContext(UserContext)
    const {article_id} = useParams()
    const [commentBody, setCommentBody] = useState()
    const [article, setArticle] = useState({})
    const [userFeedback, setUserFeedback] = useState("")
    const [newCount, setNewCount] = useState(0)
    const [inputValue, setInputValue] = useState("")
    
    useEffect(() => {
        getArticleByArticleID(article_id).then((data) => {
            setArticle(data.data.article)
        })
    }, [article_id])

    const handleChange = (event) => {
        setCommentBody({username: currentUser.username, body: event.target.value})
       
        setInputValue(event.target.value)
    }

     const handleSubmit = (event) => {
         event.preventDefault()

         if(commentBody === undefined) {
            
             setUserFeedback(<p>*Comment field is blank, please type a comment before submitting</p>)
         } else {

        postCommentByArticleID(article_id, commentBody).then((data) => {
            setUserFeedback(<p >*Your Comment has been posted!*</p>)
            setInputValue("")
                setNewCount((currCount) => {
                    return currCount + 1
                })
            
        }).catch((err) => {
            setUserFeedback(<p className="error-message" >*Comment was not submitted, please refresh and try again!*</p>)
        })
     }}


    return (<>
    <p>Currently logged in as: {currentUser.username} </p>
        <div className="article-card">
            <h3>ID# {article.article_id} - {article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p className="article-body"> {article.body}</p>
            <p>Votes: {article.votes}  <br></br>Comments: {Number(article.comment_count) + newCount} </p>
        </div>
          <form    onSubmit={handleSubmit}>
              {userFeedback}
          <label>
            Type Comment Here:
            <input   onChange={handleChange} type="text"  value={inputValue}/>
          </label>
          <input className="comment-box" type="submit" value="Submit Comment" />
        </form>
   </> )
}

export default PostComment

//clear input field, disable button after click
