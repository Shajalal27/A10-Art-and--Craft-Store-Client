import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
const{user} = useAuth();
if(user){
    return children;
}
    return <Navigate to="/logIn"></Navigate>;
};

export default PrivateRoutes;