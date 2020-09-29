import React from 'react'
import Header from "../Header"
import DogCard from "./DogCard"
const Find = () => {
    return (
        <div>
             <Header/>
       
        <div className="h-screen bg-white flex flex-co justify-start p-16">
           
            <DogCard/>
        </div>
        </div>
    )
}

export default Find;
