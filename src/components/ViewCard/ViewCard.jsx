import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ViewCard = ({item}) => {

    const {image, item_name, description, price, rating, processing_time, stockStatus} = item;

    return (
        <div className="card w-1/2 card-side bg-yellow-100 shadow-xl pl-10
        pr-10 mt-10 mb-16 ">
        <figure><img className="w-96 h-72" src={image} alt=""/></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{item_name}</h2>
            <p>{description}</p>
            <div className="flex justify-between">
                <p className="text-xl font-bold text-red-500">Price: {price} $</p>
                <p className="text-xl font-bold text-blue-800">Rating: {rating}</p>
            </div>
            <p className="text-xl font-bold bg-pink-600 p-1">{stockStatus}</p>
            <p className="text-xl font-semibold text-green-600">{processing_time}</p>
            <div className="card-actions justify-end">
               <Link to='/viewDetails'>
                 <button className="btn btn-primary font-bold">View Details</button>
               </Link>
            </div>
        </div>
        </div>
    );
};

export default ViewCard;