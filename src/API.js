import axios from "axios"

export const getArticles = () => {

    return axios.get("https://alex-news-app-project-nc.herokuapp.com/api/articles").then((data) => {
        return data
    })

}

export const getArticlesSorted = (sortQuery, toggle="desc") => {

    return axios.get(`https://alex-news-app-project-nc.herokuapp.com/api/articles?sort_by=${sortQuery}&order=${toggle}`).then((data) => {
        return data
    })

}

export const getArticlesSortedByTopic = (topic="coding", sortQuery, toggle) => {
    return axios.get(`https://alex-news-app-project-nc.herokuapp.com/api/articles`, {params:{sort_by: sortQuery, order: toggle, topic: topic}}).then((data) => { 
        return data
    })
}

export const getArticleByArticleID = (article_id) => {
    return axios.get(`https://alex-news-app-project-nc.herokuapp.com/api/articles/${article_id}`).then((data) => {
     
        return data
    })
}

export const getArticlesByTopic = (topic) => {
    return axios.get(`https://alex-news-app-project-nc.herokuapp.com/api/articles?topic=${topic}`).then((data) => {
        return data
    })
}

export const getTopics = () => {
    return axios.get("https://alex-news-app-project-nc.herokuapp.com/api/topics").then((data) => {
        return data
    })
}

export const patchArticleVote = (article_id, number=1) => {
    return axios.patch(`https://alex-news-app-project-nc.herokuapp.com/api/articles/${article_id}`, {inc_votes: number}).then((data) => {
        return data

    })
}

export const getCommentsByArticleID = (article_id) => {
    return axios.get(`https://alex-news-app-project-nc.herokuapp.com/api/articles/${article_id}/comments`).then((data)=> {
        return data
    })
}

export const postCommentByArticleID = (article_id, commentObj) => {
  
    return axios.post(`https://alex-news-app-project-nc.herokuapp.com/api/articles/${article_id}/comments`, commentObj).then((res) => {
        return res
    })
   
    
}

