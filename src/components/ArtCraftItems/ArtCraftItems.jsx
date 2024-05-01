import { useLoaderData } from "react-router-dom";
import AllItems from "../AllItems/AllItems";
import { Slide } from "react-awesome-reveal";



const ArtCraftItems = () => {
    const items = useLoaderData() || [];
    return (
        <div>
            <Slide triggerOnce>
                <h2 className="text-4xl font-bold pt-12 text-center"> All Art & craft Items</h2>
            </Slide>
            
          <div className="flex justify-around text-2xl font-bold pt-4">
                <p className="pr-36">User</p>
                <p className="pr-56">Description</p>
                <p className="pr-96">StockStatus</p>
          </div>
           <div className="">
               {
                items.map(item => <AllItems key={item._id} item={item}></AllItems>)
               }
            </div>
        </div>
    );
};

export default ArtCraftItems;