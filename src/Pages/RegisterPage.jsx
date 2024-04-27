import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";




const RegisterPage = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const{createUser} = useAuth();

    const {register,  handleSubmit, formState: { errors }, } = useForm();
      const onSubmit = (data) =>{
        console.log(data)

        //reset 
        setRegisterError('');
        setRegisterSuccess('');
        
        const{email, password} = data;
        createUser(email, password)

        .then(result =>{
            console.log(result);
            setRegisterSuccess
        })
        .catch(error =>{
            console.error(error);
            setRegisterError
        })

      }
        
    return (
        <div className="bg-[#bed6f4]">
           <div>
           <h2 className="text-center text-3xl font-bold pt-4">Please Register now! </h2>
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body mx-auto lg:w-1/2 md:w-3/4">
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Name</span>
                     </label>
                    <input type="text" name="name" placeholder="Your name" className="input input-bordered"
                     {...register("name", { required: true })}
                    />
                    {errors.fullName && <span className="text-red-500">This field is required</span>}
                </div>
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
                         <span className="label-text">Photo Url</span>
                     </label>
                    <input type="text" name="photo" placeholder="Photp Url" className="input input-bordered" 
                    {...register("photo")}
                     />
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Password</span>
                    </label>
                     <input type="password" name="password" placeholder="Password" className="input input-bordered" 
                     {...register("password", { required: true })}
                      />
                    {errors.password && <span className="text-red-500">This field is required</span>}
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
                {setRegisterError && <p>{registerError}</p>}
                {setRegisterSuccess && <p>{registerSuccess}</p>}
             </div>
           </div>
            
        </div>
    );
};

export default RegisterPage;