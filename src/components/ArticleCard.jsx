import React from 'react'

const ArticleCard = ({article}) => {
    return (
        <div className="article-card">
            <h3>ID# {article.article_id} - {article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p> {article.body}</p>
            <p>Votes: {article.votes}    <br></br>Comments: {article.comment_count} </p>
            <button className="article-button">Up Vote</button>
            <button className="article-button"> Add Comment</button>

        </div>
    )
}

export default ArticleCard
