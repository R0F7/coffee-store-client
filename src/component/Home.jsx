import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    // console.log(coffee);
    const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div>
            <h4 className="text-5xl text-center font-bold mb-14 mt-10">Our Popular Products</h4>
            <div className="container mx-auto grid grid-cols-2 gap-6 my-10">
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id} 
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;