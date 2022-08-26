import React from 'react'
import {getTopics} from "../API"
import {useEffect, useState} from "react"
import Articles from "./Articles"
import {useParams, Link} from "react-router-dom"

import LoggedUser from "./LoggedUser"


const Topics = () => {

   
    const availableQueries = ["created_at", "comment_count", 'votes']
    const [sortQuery, setSortQuery] = useState()
    const [topicList, setTopicList] = useState([])
    const [toggle, setToggle] = useState("desc")
    const [toggleMessage, setToggleMessage] = useState("Toggle ASC or DESC")

  const paramTopic = useParams()
    
        useEffect(() => {
            getTopics().then((data) => {
                setTopicList(data.data.topics)
            })
        }, [])

      
        const handleClickQuery = (event) => {
            setSortQuery(event.target.value)
        }

        const handleClickToggle = (event) => {
            if(event.target.value === "asc"){
                  setToggle("desc")
                setToggleMessage("Toggle DESC")}
                  else {
                      setToggle("asc")
                      setToggleMessage("Toggle ASC")
                  }
                }   

    return (<>
    <LoggedUser />
        <div >
        <label className="topic-title" htmlFor="topics">Filter By Topics: </label>
            {topicList.map(({slug}) => {
                const link = `/topics/${slug}`
       return  <Link to={link} key={slug}><button className="btn"  value={slug} name="topics" > {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </button> </Link>
            })}
        
    </div>
    <div>
        <label className="query-title" htmlFor="query">Sort By: </label>
        <button onClick={handleClickQuery } className="button-71"  value={availableQueries[0]} name="Sort By" > Date
        </button> 
        <button onClick={handleClickQuery } className="button-71"  value={availableQueries[1]} name="Sort By" > Most Comments
        </button> 
        <button onClick={handleClickQuery } className="button-71"  value={availableQueries[2]} name="Sort By" > Most Votes
        </button> 
        <button onClick={handleClickToggle} className="button-71"  value={toggle} name="Sort By" > {toggleMessage}
        </button> 
        <Articles topic={paramTopic} sortQuery={sortQuery} setSortQuery={setSortQuery} toggle={toggle}/> 
    </div>
    </>)
}

export default Topics
