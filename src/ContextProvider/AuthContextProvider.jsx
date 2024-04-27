import {  createContext } from "react";


export const AuthContext = createContext(null);

const AuthContextProvider = ( {Children} ) => {
    // const[user, setUser] = useState({});


    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;