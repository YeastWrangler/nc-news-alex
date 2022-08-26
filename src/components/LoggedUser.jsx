import React from 'react'
import { UserContext } from '../context/user'
import {useContext} from "react"



const LoggedUser = () => {
    const {currentUser} = useContext(UserContext)
    return (
        <div>
            <p>Currently logged in as: {currentUser.username} </p> <img width="90px" height="90px" src="https://preview.redd.it/t1yyd2gdof011.jpg?auto=webp&s=673692c8294158337a64c05df9eda5930256c96b" alt="avatar"></img>
            
        </div>
    )
}

export default LoggedUser
