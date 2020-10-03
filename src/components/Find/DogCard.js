import React from "react";
import DogModal from "./DogModal";

const DogCard = ({ dog }) => {
  return (
    <div
      className=" h-auto max-w-lg  flex font-sans lg:flex-row flex-col shadow-md rounded-md my-8 p-2
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:bg-gray-200
    "
    >
      <div className="flex flex-col">
        <div className="font-bold py-6">{dog.shelter_name}</div>
        <img className="w-full" src={`${dog.image_url}`} alt="dog" />
      </div>

      <div className="flex flex-col lg:py-6">
        <div className=" lg:px-16 py-20 flex flex-col justify-around">
          <span>{dog.dog_name}</span>
          <div>
            <DogModal dog={dog} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
