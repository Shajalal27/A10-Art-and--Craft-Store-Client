
import Banner from "../components/Header/Banner";
import Experience from "../components/Experience/Experience";
import { useLoaderData } from "react-router-dom";
import CardItems from "../components/CardItems/CardItems";



const HomePage = () => {
    const addCrafts = useLoaderData();
    return (
        < >
           
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center italic mt-12 underline bg-orange-600">Craft Items Section:{addCrafts.length}</h2>
                
            <div className="grid md:grid-cols-2 gap-8 w-full">
               {
                    addCrafts.map(craftItem  => <CardItems key={craftItem._id} craftItem={craftItem}></CardItems>)
                }
            </div>
            <Experience></Experience>
            
        </>
    );
};

export default HomePage;