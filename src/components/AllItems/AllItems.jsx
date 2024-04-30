import { useState } from "react";


const AllItems = ({item}) => {
    const[loading, setLoading] = useState();
    const { _id, photo, item_name, subcategory_name, description, price, rating, customization, processing_time, name, email, stockStatus} = item;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        
                        </th>
                        <th>User</th>
                        <th>Description</th>
                        <th>StockStatus</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                       
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} />
                            </div>
                            </div>
                            
                        </div>
                        </td>
                        <td>
                            {description.slice(0,10)}
                        </td>
                        <td>{stockStatus}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">View Details</button>
                        </th>
                    </tr>
                   
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllItems;