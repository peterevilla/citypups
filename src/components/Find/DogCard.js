import React from "react";


const DogCard = () => {
  return (
    <div className=" max-w-lg  font-sans">
      <div className="py-4">
        <div className="font-bold ">Paws Chicago</div>
      </div>
      <div className="lg:flex">
      <img className="w-full" src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="dog" />

      <div className="px-6 py-4 flex flex-col justify-around">
        <span>Comet</span>
        <div className=" text-green-900">
        see more...
      </div>
      </div>
      
      </div>
      
    </div>
  );
};

export default DogCard;
