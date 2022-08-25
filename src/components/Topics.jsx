import React from 'react'
import {getTopics} from "../API"
import {useEffect, useState} from "react"
import Articles from "./Articles"
import {useParams, Link} from "react-router-dom"

const Topics = () => {


    const availableQueries = ["created_at", "comment_count", 'votes']
   const [sortQuery, setSortQuery] = useState()
    const [topicList, setTopicList] = useState([])
    const [toggle, setToggle] = useState("desc")
    const [topic, setTopic] = useState()

  const paramTopic = useParams()
    
        useEffect(() => {
            getTopics().then((data) => {
                setTopicList(data.data.topics)
            })
        }, [])

        const handleClickTopic = (event) => {
           
            setTopic(event.target.value)
        }

        const handleClickQuery = (event) => {
            setSortQuery(event.target.value)
        }

        const handleClickToggle = (event) => {
              if(event.target.value === "desc"){  
                  setToggle("asc")
        } else {
            setToggle("desc")
        }
    }

    return (<>
        <div>
        <label className="topic-title" htmlFor="topics">Filter By Topics: </label>
            {topicList.map(({slug}) => {
                const link = `/topics/${slug}`
       return  <Link to={link} key={slug}><button onClick={handleClickTopic} className="button-29"  value={slug} name="topics" > {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </button> </Link>
            })}
        
    </div>
    <div>
        <label className="query-title" htmlFor="query">Sort By: </label>
        <button onClick={handleClickQuery } className="button-29"  value={availableQueries[0]} name="Sort By" > Date
        </button> 
        <button onClick={handleClickQuery } className="button-29"  value={availableQueries[1]} name="Sort By" > Most Comments
        </button> 
        <button onClick={handleClickQuery } className="button-29"  value={availableQueries[2]} name="Sort By" > Most Votes
        </button> 
        <button onClick={handleClickToggle} className="button-29"  value={toggle} name="Sort By" > Toggle ASC/DESC
        </button> 
        <Articles topic={paramTopic} sortQuery={sortQuery} setSortQuery={setSortQuery} toggle={toggle}/> 
    </div>
    </>)
}

export default Topics
