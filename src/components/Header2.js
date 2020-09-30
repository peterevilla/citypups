import React from 'react'
import { NavLink } from 'react-router-dom'
import HeadShake from 'react-reveal/HeadShake';


const Header2 = () => {
    return (
        <div className=" h-32 bg-white lg:flex lg:justify-around ">
            <NavLink to="/"><HeadShake><h1 className=" pl-4 text-green-900 text-6xl font-chewy">CityPups</h1></HeadShake></NavLink>
            <div className="flex mt-8">
            <NavLink to="/find"><button  className="mx-4 rounded-full w-24 bg-green-900 text-white h-8 font-sans
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
            ">Find a Dog</button></NavLink>
            <NavLink to="/how" className=" text-green-900 font-sans mx-4
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-green-900
            ">How it works</NavLink>
            <NavLink to="/about" className=" text-green-900 font-sans mx-4
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-green-900
            ">About us</NavLink>
            </div>
        </div>
    )
}

export default Header2;
