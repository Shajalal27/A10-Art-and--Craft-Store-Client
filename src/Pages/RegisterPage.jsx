import { Link } from "react-router-dom";




const RegisterPage = () => {
    return (
        <div className="bg-[#bed6f4]">
           <div>
           <h2 className="text-center text-3xl font-bold pt-4">Please Sign in now! </h2>
            <form className="card-body mx-auto lg:w-1/2 md:w-3/4">
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Name</span>
                     </label>
                    <input type="email" name="name" placeholder="Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Email</span>
                     </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                         <span className="label-text">Password</span>
                    </label>
                     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info">Register</button>
                    </div>
             </form> 
             <div className="mx-auto text-center mb-6">
                 <p className="text-orange-500 font-semibold pb-8">Already have an account? <Link to='/logIn'>
                        <button className="text-green-600 font-bold hover:underline">Login</button>
                    </Link>
                </p> 
             </div>
           </div>
            
        </div>
    );
};

export default RegisterPage;