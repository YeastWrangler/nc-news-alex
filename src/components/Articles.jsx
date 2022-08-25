import React from 'react'
import { getArticles, getArticlesSortedByTopic } from '../API'
import {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'



const Articles = ({topic, sortQuery, setSortQuery, toggle}) => {
    
    const [articleList, setArticleList] = useState([])
    

   

    useEffect(() => {
        if(sortQuery || topic.topic){
            getArticlesSortedByTopic(topic.topic, sortQuery, toggle).then((data) => {
                    setArticleList(data.data.articles)
                })
                setSortQuery(undefined)
        }
        else {
        getArticles().then((data) => {
            setArticleList(data.data.articles)
        })
        }
    }, [topic.topic, sortQuery, toggle])
 

    return (
        <div>
            <ul>
            {articleList.map((article) => {
                return <li className="article-list"key={article.article_id}>
                    <ArticleCard article={article}/>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Articles
