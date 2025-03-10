
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import Swal from "sweetalert2";



const LoginPage = () => {
    const{signInUser} = useAuth();
    const [logInSuccess, setLogInSuccess] = useState('');
    const[logInError, setLogInError] = useState('');

    const {register,  handleSubmit, formState: { errors }, } = useForm();
      const onSubmit = (data) =>{
        console.log(data)

        //reset 


        const{email, password} = data;
        signInUser(email, password)

        .then(result =>{   
            console.log(result);
            setLogInSuccess
            Swal.fire({
                title: "'Logged in successfull!",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(error =>{
            console.error(error);
            setLogInError
            Swal.fire({
                title: "'Invalied logged in",
                text: "You clicked the button!",
                icon: "error"
              });
        })
      }
    
    return (
        <div className="bg-[#bed6f4]">
           <div>
           <h2 className="text-center text-3xl font-bold pt-6">Please Sign in now! </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto lg:w-1/2 md:w-3/4">
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Email</span>
                     </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" 
                     {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Password</span>
                    </label>
                     <input type="password" name="Password" placeholder="password" className="input input-bordered" 
                     {...register("password", { required: true })}
                     />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info uppercase ">Login</button>
                    </div>
             </form> 
            
             <div className="mx-auto text-center">
             <SocialIcons/>
                 <p className="text-orange-500 font-semibold pt-8 pb-12">Please register now? <Link to='/register'>
                        <button className="text-green-600 font-bold hover:underline">Register</button>
                    </Link>
                </p> 
                {
                    logInError && <p>{logInError}</p>
                }
                {
                    logInSuccess && <p>{logInSuccess}</p>
                }
             </div>
           </div>
            
        </div>
    );
};

export default LoginPage;