import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import MyListPage from "../../Pages/MyListPage/MyListPage";
import { useEffect, useState } from "react";
import Select from 'react-select';


const MyArtCraftList = () => {
    const[card, setCard] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState(null);
    console.log("addCraft", card)


    useEffect( () =>{
        fetch(' https://art-craft-store-server-rf7di9uen-shajalals-projects.vercel.app/addCraft')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCard(data);
        })
    }, [])

    const categories = Array.from(
        new Set(card.map((res) => res.category))
    )

    const categoryOptions  = categories.map((category) =>({
        value: category,
        label: category
    }))
    const filterCard = selectedCategory ? card.filter((card) => card.category === selectedCategory.value):card;


    const myLists = useLoaderData();
    return (
    <div>    
        <h2 className="text-4xl font-bold text-center mt-8 text-sky-700 underline italic">My Art Craft List</h2>
        <div className="container mt-5">
        <div className="grid grid-cols-2 w-full ">
            <h2>Card Item</h2> 
            <div className="mt-4 pb-24">
                <Select
                    options={categoryOptions}
                    isClearable
                    placeholder="Select a category"
                    onChange={(selectOption) => setSelectedCategory(selectOption)}
                    value={selectedCategory}
                /> 
            </div>
            {filterCard.map( (result) =>(
                <div className="col-md-" key={result.id}>
                    <div className="card p-4" style={{height:'90%'}}>
                        <img src={result.photo} alt="" className="card-img-top w-96 h-72"
                        
                        />
                    </div>  
                    <h5 className="cart-title">{result.item_name}</h5> 
                    <p>Category:{result.subcategory_name}</p>
                </div>
            ))}
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
{/* <details className="dropdown  items-center">
                    <summary className="m-1 btn btn-secondary text-xl font-bold">open or close<FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-56 text-lg hover:bg-teal-200">
                        <li><a>Landscape Painting</a></li>
                        <li><a>Portrait Drawing</a></li>
                        <li><a>Watercolour Painting</a></li>
                        <li><a>Oil Painting</a></li>
                        <li><a>Charcoal Sketching</a></li>
                        <li><a>Cartoon Drawing</a></li>
                    </ul>
                </details> */}