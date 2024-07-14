

import Banner from "../components/Header/Banner";
import Experience from "../components/Experience/Experience";
import CardItems from "../components/CardItems/CardItems";
// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
    // const cards = useLoaderData();
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
        <>
            <Banner />
            <h2 className="text-4xl font-bold text-center italic mt-12 underline bg-orange-600">Craft Items Section:{items.length}</h2>
            <div className="grid md:grid-cols-2 gap-8 w-full">
              { items && Array.isArray(items) && items.length > 0 ?( items.map(item => (
                <Link key={item._id} to={`/view_details/${item._id}`}>
                    <CardItems  item={item}></CardItems>
                </Link>
              )))
               :(<p>No cards availale</p>)
              }
            </div>
            <Experience />
        </>
    )
};

export default HomePage;
