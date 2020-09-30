import React from 'react'
import Header2 from "../Header2"
import DogCard from "./DogCard"
const Find = () => {
    return (
        <div className="">
             <Header2/>
       
        <div className=" h-screen bg-white flex flex-col justify-start p-2 lg:px-56">
           
            <DogCard/>
            <DogCard/>
        </div>
        </div>
    )
}

export default Find;
