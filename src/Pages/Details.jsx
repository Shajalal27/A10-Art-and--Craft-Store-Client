import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Details = () => {
    const{subcategory} = useParams();
    const[items, setItems] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch('http://localhost:5000/addCraft');
                console.log('not fetching')
                const result = await res.json();
                setItems(result);
            } catch (error){
                console.log('Error fetching item details:', error);
            }
        }
        fetchData();
    }, [subcategory]);
    

    if(!items){
        return <div><progress className="progress w-56"></progress></div>;
    }

    return (
       
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src=""
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">bn</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Details;