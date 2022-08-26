import React from 'react'
import {Link} from "react-router-dom"

const Errors = () => {
    return (
        <div>
            <h2 className="for-404">404</h2>
            <p className="for-404">The Page You Are Looking For Was Not Found</p> <br></br>
            <Link to="/"> Take Me Back Home <br></br><img width="185px" height="150px" src="https://m.media-amazon.com/images/M/MV5BMTY3NjQ4NDc1N15BMl5BanBnXkFtZTgwNzM0NjYyMzI@._V1_.jpg" alt="ET"></img> </Link>
        </div>
    )
}

export default Errors
