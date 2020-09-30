import React from "react";
import DogModal from "./DogModal"

const DogCard = () => {
 
  return (
    <div className=" max-w-lg  flex font-sans lg:flex-row flex-col shadow-lg rounded-md my-8 p-6">
      <div className="flex flex-col">
        <div className="font-bold py-6">Paws Chicago</div>
        <img
          className="w-full"
          src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="dog"
        />
      </div>

      <div className="flex flex-col lg:py-6">
        <div className=" lg:p-20 flex flex-col justify-around">
          <span>Comet</span>
          <div >
      <DogModal/>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default DogCard;
