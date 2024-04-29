import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {
const{user} = useAuth();
if(user){
    return children;
}
    return <Navigate to="/logIn"></Navigate>;
};

export default PrivateRoutes;