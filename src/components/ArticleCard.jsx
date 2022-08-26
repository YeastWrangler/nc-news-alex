import React from 'react'
import {patchArticleVote} from "../API"
import {useState} from "react"
import {Link} from "react-router-dom"

const ArticleCard = ({article}) => {

    const stringDate = new Date(article.created_at)

    const [voteCount, setVoteCount] = useState(article.votes);
    const [voteError, setVoteError] = useState("")

    const upVote = (event) => {
        setVoteCount((currCount) => currCount + 1)
        return patchArticleVote(event.target.value).then(() => {
         
    }).catch((err) => {
        setVoteError(<p className="error-message">*Vote was not counted, please refresh and try again!*</p>)
    })
}
    const downVote = (event) => {
        setVoteCount((currCount) => currCount - 1)
        return patchArticleVote(event.target.value, -1).then(() => {

    }).catch((err) => {
       setVoteError(<p className="error-message">*Vote was not counted, please refresh and try again!*</p>)
    })
}

    return (<> <Link to={`/articles/${article.article_id}`}>

        <div className="article-card">
            <h3>{article.title}</h3>
            <p>Date Posted: {stringDate.toGMTString()}</p>
            <p>Topic: {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</p>
            <p>Author: {article.author}</p>
            <p className="article-body"> {article.body}</p>
            <p>Votes: {voteCount}  {voteError}  <br></br>Comments: {article.comment_count} </p>
        </div>
            </Link>
        <p> <button onClick={upVote} value={article.article_id} className="article-button"> Up Vote <span> 👍 </span> </button>
            <button onClick={downVote} value={article.article_id} className="article-button"> Down Vote <span> 👎 </span></button>
           
         
            </p>
           
            </>)
}

export default ArticleCard
