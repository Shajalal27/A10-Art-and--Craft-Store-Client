
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";




const RegisterPage = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const{createUser} = useAuth();

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUser(email, password)

        //create new user
        const user = {email};
        //reset 
        setRegisterError('');
        setRegisterSuccess('');

        if(password.length < 6) {
            setRegisterError('Password should be at lest 6 charcter or longer')
            return;
        }

        else if(!/[A-Z]/.test(password)){
            setRegisterError("Your password should have at least one upper case characters. ");
            return;

        }

        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            // setRegisterSuccess('Registetion successfully')
            Swal.fire({
                title: "'Registetion successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message)
            Swal.fire({
                title: "Already register!",
                text: "You clicked the button!",
                icon: "warning"
              });
        })
 
    }

        
       
      
        
    return (
        <div className="bg-[#bed6f4]">
           <div>
           <h2 className="text-center text-3xl font-bold pt-4">Please Register now! </h2>
            <form onSubmit={handleRegister}  className="card-body mx-auto lg:w-1/2 md:w-3/4">
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Name</span>
                     </label>
                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" required
                    />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Email</span>
                     </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required
                     />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Photo Url</span>
                     </label>
                    <input type="text" name="photo" placeholder="Photp Url" className="input input-bordered" 
                     />
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Password</span>
                    </label>
                     <input type="password" name="password" placeholder="Password" className="input input-bordered" required
                      />
                    
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info uppercase">Register</button>
                    </div>
             </form> 
             <div className="mx-auto text-center mb-6">
                 <p className="text-orange-500 font-semibold pb-8">Already have an account? <Link to='/logIn'>
                        <button className="text-green-600 font-bold hover:underline">Login</button>
                    </Link>
                </p> 
                {registerError && <p className="text-red-600 pb-12">{registerError}</p>}
                {registerSuccess && <p className="text-green-600">{registerSuccess}</p>}
             </div>
           </div>
            
        </div>
    );
};

export default RegisterPage;