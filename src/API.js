import axios from "axios"

export const getArticles = () => {

    return axios.get("https://alex-news-app-project-nc.herokuapp.com/api/articles").then((data) => {
        return data
    })
    
}