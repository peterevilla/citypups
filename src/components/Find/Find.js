import React, {useState, useEffect} from 'react'
import Header2 from "../Header2"
import DogCard from "./DogCard"
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
const Find = () => {

    const [dogs, setDogs] = useState([])

    const fetchDogs = async () => {
      const response = await API.graphql(graphqlOperation(queries.listDogss));
      setDogs(response.data.listDogss.items);
    };
    useEffect(() => {
      fetchDogs()
           
    },[], [dogs]);
  
    return (
        <div >
             <Header2/>
     
        <div className=" h-screen bg-white flex flex-col  justify-start p-2 lg:px-56 lg:py-10 py-8 ">
        <p className="font-chewy text-green-900 text-xl -mt-8">Dogs Availables in Chicago,IL</p>
            {dogs.map(dog => (
                <DogCard dog={dog} key={dog.id}/>
            ))}
        
        </div>
        </div>
    )
}

export default Find;
