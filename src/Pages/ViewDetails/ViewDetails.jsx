import { useLoaderData } from "react-router-dom";
import ViewCard from "../../components/ViewCard/ViewCard";


const ViewDetails = () => {
    const views = useLoaderData();
   
    return (
        <div className="">
            {
                views.map(view => <ViewCard key={view._id} view={view}></ViewCard>)
            }
        </div>
    );
};

export default ViewDetails;