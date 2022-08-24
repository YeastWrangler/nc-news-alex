import React from 'react'
import { getArticles, getArticlesByTopic } from '../API'
import {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'
import { useParams } from 'react-router'


const Articles = () => {
    const [articleList, setArticleList] = useState([])
    const {topic} = useParams()
   

    useEffect(() => {
        if(topic){
        getArticlesByTopic(topic).then((data) => {
            setArticleList(data.data.articles)
        })
        }
        else {
        getArticles().then((data) => {
            setArticleList(data.data.articles)
        })
        }
    }, [topic])
 

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
