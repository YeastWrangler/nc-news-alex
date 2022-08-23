import axios from "axios"

export const getArticles = () => {

    return axios.get("https://alex-news-app-project-nc.herokuapp.com/api/articles").then((data) => {
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
