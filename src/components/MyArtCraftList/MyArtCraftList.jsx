
// import { useLoaderData } from "react-router-dom";
// import {useState } from "react";

import { useEffect, useState } from "react";
import MyListPage from "../../Pages/MyListPage/MyListPage";



const MyArtCraftList = () => { 
    // const useLoadedmyLists = useLoaderData();
    // const [myLists, setMyLists] = useState(useLoadedmyLists);
    const[items, setItems] = useState([]);
    const[filter, setFilter] = useState('');

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await fetch('http://localhost:5000/addCraft');
            const result = await res.json();
            setItems(result);
        }
        fetchData();
    }, [])

   

   const filteredItems = items.filter(item =>filter === '' || item.customization === filter);
    
 
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-8 text-sky-700 underline italic">My Art Craft List</h2>
            <div className="mx-auto w-full text-center pt-6">
                <select className="border-2 w-80 h-10 text-xl font-semibold border-gray-400"
                 onChange={(e) =>setFilter(e.target.value)} value={filter}>
                    <option value=''>All</option>
                    <option value='yes'>Customization: Yes</option>
                    <option value='no'>Customization: No</option> 
                </select>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {
                  filteredItems.map(item => <MyListPage key={item._id} 
                                    item={item}
                                    items={items}
                                    setItems={setItems}
                                    >      
                                </MyListPage> )
                }
            </div>
        </div>
    
    );
};

export default MyArtCraftList;

