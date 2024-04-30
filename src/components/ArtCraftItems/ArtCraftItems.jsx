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
            
          
           <div className="">
               {
                items.map(item => <AllItems key={item._id} item={item}></AllItems>)
               }
            </div>
        </div>
    );
};

export default ArtCraftItems;