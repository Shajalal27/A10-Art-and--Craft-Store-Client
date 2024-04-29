/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListPage = ({mylist}) => {

    const { _id, photo, item_name,  price, rating, customization, stockStatus} = mylist;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/addCraft/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                         title: "Deleted!",
                         text: "Your file has been deleted.",
                         icon: "success"
                        });
                    }
                })
            }
          });
    }

    return (
        <div className="card w-full card-side bg-orange-300 shadow-xl pl-10
         pr-10 mt-10 mb-16 ">
            <figure><img className="w-96" src={photo} alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{item_name}</h2>
               
                <div className="flex justify-between">
                    <p className="text-xl font-bold text-red-500">Price: {price} $</p>
                    <p className="text-xl font-bold text-blue-800">Rating: {rating}</p>
                </div>
                <p className="text-xl font-bold bg-pink-600 p-1">{stockStatus}</p>
                <p className="text-xl font-semibold text-green-600">{customization}</p>
                <div className="card-actions justify-between ">
                    <Link to={`update_item/${_id}`}>
                        <button className="btn btn-primary  font-bold">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)}
                    className="btn btn-primary  font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyListPage;