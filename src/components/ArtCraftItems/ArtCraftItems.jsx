import { Link, useLoaderData } from "react-router-dom";
import AllItems from "../AllItems/AllItems";
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";



const ArtCraftItems = () => {
    // const items = useLoaderData() || [];
    const[items, setItems] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await fetch('http://localhost:5000/addCraft');
            const result = await res.json();
            setItems(result);
        }
        fetchData();
    }, [])

    return (
        <div>
            <Slide triggerOnce>
                <h2 className="text-4xl font-bold pt-12 text-center"> All Art & craft Items</h2>
            </Slide>
            
          <div className="flex justify-around text-2xl font-bold pt-4">
                <p className="pr-36">User</p>
                <p className="pr-56">Description</p>
                <p className="pr-96">StockStatus</p>
          </div>
           <div className="">
               {
                items.map(item =>(
                    <Link key={item._id} to={`/item/${item._id}`}>
                        <AllItems item={item}>
                        </AllItems>
                    </Link>
                )) 
                
               }
            </div>
        </div>
    );
};

export default ArtCraftItems;