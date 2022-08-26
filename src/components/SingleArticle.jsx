import React, {useState, useEffect}  from 'react'
import { useParams, Link} from 'react-router-dom'
import {getArticleByArticleID, patchArticleVote} from "../API"
import CommentCard from "./CommentCard"
import LoggedUser from './LoggedUser'



const SingleArticle = () => {

const {article_id} = useParams()

const [article, setArticle] = useState({})
const [articleIDError, setArticleIDError] = useState("")

useEffect(() => {
    getArticleByArticleID(article_id).then((data) => {
        setArticle(data.data.article)
    }).catch((err) => {
            setArticleIDError(err.response.data.msg)
    })
}, [article_id, article.comment_count])


const [voteCount, setVoteCount] = useState(article.votes);
const [voteError, setVoteError] = useState("")
const [commentError] = useState("")

const stringDate = new Date(article.created_at)

useEffect(() => {
    setVoteCount(article.votes)
},[article.votes])


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

if(articleIDError) {
    return (<>
        <LoggedUser/>
        <p className="error-message-topic">{articleIDError}</p>
    </>)
} else
    return (<>
        <LoggedUser/>
        <p className="error-message-topic">{articleIDError}</p>
        <div className="article-card">
        <h3>{article.title}</h3>
        <p>Date Posted: {stringDate.toGMTString()}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p className="article-body"> {article.body}</p>
        <p>Votes: {voteCount}  {voteError} <br></br>Comments: {article.comment_count} </p>
    </div>
     <p> <button onClick={upVote} value={article.article_id} className="article-button"> Up Vote <span> 👍 </span> </button>
     <button onClick={downVote} value={article.article_id} className="article-button"> Down Vote <span> 👎 </span></button>
     <Link to={`/comments/${article_id}`} state={{ from: `${article_id}` }}><button  value={article.article_id}className="article-button"> Add Comment <span> 📣 </span></button>
     </Link>
        {commentError}
  
     </p>
     <CommentCard article_id={article_id}/>
   </> )
}

export default SingleArticle
