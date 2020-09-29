import React from "react";
import Header from "./Header"
import dogFoot from "./images/dogFoot.svg";
import owner from "./images/owner.svg";
import owner2 from "./images/owner2.svg";
import Flip from 'react-reveal/Flip';

function Home() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center">
        <div className="text-white text-4xl mt-32 p-8">
          Find your new best friend with us
          <Flip><img className=" ml-48" src={dogFoot} alt="dog" /></Flip>
        </div>
        <div className="flex justify-between">
        <img className=" invisible lg:visible
        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
        " src={owner} alt="owner" />
        <img className=" invisible lg:visible
        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
        "  src={owner2} alt="owner2" />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
