import React from 'react'
import { getArticles } from '../API'
import {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'


const Articles = () => {
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        getArticles().then((data) => {
            setArticleList(data.data.articles)
        })
    }, [])
 

    return (
        <div>
            <ul>
            {articleList.map((article) => {
                return <li key={article.article_id}>
                    <ArticleCard article={article}/>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Articles
