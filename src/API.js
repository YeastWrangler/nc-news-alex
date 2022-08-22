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
