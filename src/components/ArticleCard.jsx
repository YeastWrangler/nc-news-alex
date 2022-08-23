import React from 'react'
import {patchArticleVote} from "../API"
import {useState, useEffect} from "react"

const ArticleCard = ({article}) => {

    const [voteCount, setVoteCount] = useState(article.votes);
    const [voteError, setVoteError] = useState("")

    
    useEffect(() => {
        setVoteCount(voteCount)
    }, [voteCount])

    const upVote = (event) => {
        return patchArticleVote(event.target.value).then(() => {
         setVoteCount((currCount) => currCount + 1)
         
    }).catch((err) => {
        setVoteError(<p className="error-message">*Vote was not counted, please refresh and try again!*</p>)
    })
}
    const downVote = (event) => {
        return patchArticleVote(event.target.value, -1).then(() => {
            setVoteCount((currCount) => currCount - 1)
            
    }).catch((err) => {
       setVoteError(<p className="error-message">*Vote was not counted, please refresh and try again!*</p>)
    })
}

    return (<>
        <div className="article-card">
            <h3>ID# {article.article_id} - {article.title}</h3>
            <p>Topic: {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</p>
            <p>Author: {article.author}</p>
            <p className="article-body"> {article.body}</p>
            <p>Votes: {voteCount}  {voteError}  <br></br>Comments: {article.comment_count} </p>
        </div>
        <p> <button onClick={upVote} value={article.article_id} className="article-button"> Up Vote <span> 👍 </span> </button>
            <button onClick={downVote} value={article.article_id} className="article-button"> Down Vote <span> 👎 </span></button>
            <button className="article-button"> Add Comment <span> 📣 </span></button>
            <button className="article-button"> View Comments <span> 👀 </span></button>
            </p>
   </>)
}

export default ArticleCard
