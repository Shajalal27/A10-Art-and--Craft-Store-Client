import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateItem = () => {
    const updatesItem = useLoaderData();

    const { _id, photo, item_name, subcategory_name, description, price, rating, customization, processing_time, name, email, stockStatus} = updatesItem;

    const handleUpdateItem = event =>{
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const name = form.name.value;
        const email = form.email.value;
        const stockStatus = form.stockStatus.value;
        const updateCraftItem ={photo, item_name, subcategory_name, description, price, rating, customization, processing_time, name, email, stockStatus}
        console.log(updateCraftItem);

        //send data server
        fetch(`http://localhost:5000/addCraft/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraftItem)
         })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Item Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-serif italic  font-extrabold text-center">Update Art & Craft Item</h2>
        
        <form onSubmit={handleUpdateItem}>
             {/* item name and photo url */}
            <div className="flex gap-5 mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="">
                        <input type="text" name="photo" defaultValue={photo}
                         placeholder="Photo URL"
                        className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Item Name</span>
                    </label>
                    <label className="">
                        <input type="text" name="item_name" defaultValue={item_name}
                         placeholder="Item Name"
                        className="input input-bordered w-full "/>
                    </label>
                </div>
            </div>
             {/* subcategory and description */}
            <div className="flex gap-5 mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Subcategory Name</span>
                    </label>
                    <label className="">
                        <input type="text" name="subcategory_name" 
                        defaultValue={subcategory_name} placeholder="Subcategory Name"
                        className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="">
                        <input type="text" name="description" 
                        defaultValue={description}
                        placeholder="Short description"
                        className="input input-bordered w-full "/>
                    </label>
                </div>
            </div>
             {/* Price and rating*/}
            <div className="flex gap-5 mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="">
                        <input type="category" name="price" defaultValue={price}
                        placeholder="Price"
                        className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="">
                        <input type="text" name="rating" defaultValue={rating}
                        placeholder="Rating"
                        className="input input-bordered w-full "/>
                    </label>
                </div>
            </div>
             {/* Customixation and processing time */}
            <div className="flex gap-5 mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Customization</span>
                    </label>
                    <label className="">
                        <input type="text" name="customization" 
                        defaultValue={customization} placeholder="Customization"
                        className="input input-bordered w-full"/>
                    </label>
                </div> 
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                    </label>
                    <label className="">
                        <input type="text" name="processing_time" 
                        defaultValue={processing_time} placeholder="Processing Time"
                        className="input input-bordered w-full"/>
                    </label>
                </div>  
            </div>
             {/* user name and email*/}
            <div className="flex gap-5 mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <label className="">
                        <input type="text" name="name" defaultValue={name} placeholder="User Name"
                        className="input input-bordered w-full"/>
                    </label>
                </div> 
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <label className="">
                        <input type="text" name="email" defaultValue={email} placeholder="User Email"
                        className="input input-bordered w-full"/>
                    </label>
                </div>   
            </div>
             {/* Stock status */}
             <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Stock Status </span>
                    </label>
                    <label className="">
                    <input type="text" name="stockStatus" defaultValue={stockStatus} placeholder="Stock Status" className="input input-bordered w-full"/>
                    </label>
                </div>   
            </div>
            <input type="submit" value="Update"  className="btn btn-block bg-green-600"/>
        </form>
    </div>
    );
};

export default UpdateItem;