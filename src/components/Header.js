import React from 'react'
import { NavLink } from 'react-router-dom'
import HeadShake from 'react-reveal/HeadShake';


const Header = () => {
    return (
        <div className=" h-32 bg-green-900 lg:flex lg:justify-around p-4">
            <NavLink to="/"><HeadShake><h1 className="text-white text-6xl">CityPups</h1></HeadShake></NavLink>
            <div className="flex mt-8">
            <NavLink to="/find"><button  className="mx-4 rounded-full w-24 bg-white text-green-900 h-8 font-sans
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
            ">Find a Dog</button></NavLink>
            <NavLink to="/how" className="text-white font-sans mx-4
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
            ">How it works</NavLink>
            <NavLink to="/about" className="text-white font-sans mx-4
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
            ">About us</NavLink>
            </div>
        </div>
    )
}

export default Header;
