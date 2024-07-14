/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";


const AllItems = ({item}) => {
    const[loading, setLoading] = useState();
    const { image, description, email, stockStatus} = item;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full bg-lime-200">
                    {/* head */}
                    <thead className="bg-gray-400 border-b-2 border-gray-300">
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        
                        <td className="pl-16 w-96">
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="item.item_name" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{email}</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td className="text-justify p-3 w-96">
                        {description}
                        
                        </td>
                        <td className="pl-28 w-96 text-green-600 font-bold">{stockStatus}</td>
                        <th className="w-40">
                        <Link to="/viewDetails">
                             <button className="btn bg-red-200 btn-xl font-bold">View Details</button>
                        </Link>
                        </th>
                    </tr>
                    </tbody>
                    {/* foot */}
                    
                </table>
                </div>
        </div>
    );
};

export default AllItems;