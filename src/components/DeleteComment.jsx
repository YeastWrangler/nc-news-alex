import React from 'react'
import { UserContext } from '../context/user'
import {useContext, useState} from "react"
import {deleteCommentAPI} from "../API"

const DeleteComment = ({author, comment_id, setCommentDelete, errorMessage, setErrorMessage }) => {
    // const {currentUser, setCurrentUser} = useContext(UserContext)

    const [errorTrigger, setErrorTrigger] = useState()


    
    const handleDeleteClick = (event) => {
            setErrorTrigger(Number(event.target.value))
        
           return deleteCommentAPI(comment_id).then((res) => {
               setCommentDelete(true)
                  
            }).catch((err) => {
                    setErrorMessage("Whoops! Something went wrong and your comment was not deleted. Please refresh and try again.")
            })
    }
        if(comment_id === errorTrigger) {
    return (
        <div>
             <p id="error-message">{errorMessage}</p>
            <button value={comment_id} onClick={handleDeleteClick}>Delete Your Comment</button>
        </div>
    )} else {
        return (
        <div>
            <button value={comment_id} onClick={handleDeleteClick}>Delete Your Comment</button>
        </div>
        )}
}

export default DeleteComment
