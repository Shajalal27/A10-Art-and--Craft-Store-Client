import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import MyListPage from "../../Pages/MyListPage/MyListPage";


const MyArtCraftList = () => {
    const myLists = useLoaderData();
    return (
    <div>    
        <h2 className="text-4xl font-bold text-center mt-8 text-sky-700 underline italic">My Art Craft List</h2>
        <div className="flex justify-center items-center">   
            <div className="mt-4">
                <details className="dropdown  items-center">
                    <summary className="m-1 btn btn-secondary text-xl font-bold">open or close<FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-56 text-lg hover:bg-teal-200">
                        <li><a>Landscape Painting</a></li>
                        <li><a>Portrait Drawing</a></li>
                        <li><a>Watercolour Painting</a></li>
                        <li><a>Oil Painting</a></li>
                        <li><a>Charcoal Sketching</a></li>
                        <li><a>Cartoon Drawing</a></li>
                    </ul>
                </details>
            </div>
        </div> 
        <div className="grid md:grid-cols-2 gap-8 w-full">
            {
                myLists.map(mylist => <MyListPage key={mylist._id} 
                    mylist={mylist}>      
                </MyListPage>)
            }
        </div> 
    </div>
    );
};

export default MyArtCraftList;