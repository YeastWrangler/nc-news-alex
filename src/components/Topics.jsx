import React from 'react'
import {getTopics} from "../API"
import {useEffect, useState} from "react"
import Articles from "./Articles"
import {useParams, Link} from "react-router-dom"

const Topics = () => {

   const paramTopic =useParams()
   
        const [topicList, setTopicList] = useState([])
    
        useEffect(() => {
            getTopics().then((data) => {
                setTopicList(data.data.topics)
            })
        }, [])

    return (
        <div>
        <label className="topic-title" htmlFor="topics">Filter By Topics: </label>
            {topicList.map(({slug}) => {
                const link = `/topics/${slug}`
       return  <Link to={link} key={slug}><button className="button-29" role="button" value={slug} name="topics" > {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </button> </Link>
            })}
        <Articles topic={paramTopic}/> 
    </div>
    )
}

export default Topics
