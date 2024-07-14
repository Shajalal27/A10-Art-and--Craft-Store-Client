import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logoImage from "../../assets/logo.png";
import { useEffect, useState } from "react";



const Navbar = () => {
    const[theme, setTheme] = useState('light');
    const{user , logOut} = useAuth();

    useEffect(() =>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) =>{
        console.log(e.target.checked)
        if(e.target.checked){
            setTheme('synthwave')
        } 
        else{setTheme('light')}
    }
    console.log(theme);

    const handleLogOut = () =>{
        logOut()
        .then( () => console.log('user logged in successfully'))
        .catch(error =>console.error(error))

    }
    const navLinks = <>
         <li><NavLink to={'/'}>Home</NavLink></li>
         <li><NavLink to={'/art-craft-items'}>All Art & Craft Items</NavLink></li>
         <li><NavLink to={'/addCraft'}>Add Craft Item</NavLink></li>
         <li><NavLink to={'/craftList'}>My Craft List</NavLink></li>
        
         
    </>
    return (
        <div className="navbar bg-blue-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="w-12" src={logoImage} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            
            <div className="navbar-end">
            <div className="pr-10 size-auto">
                 <input onChange={handleToggle} type="checkbox" className="toggle theme-controller"/>
            </div>
                {
                    user ?
                <div tabIndex={0} role="button" className=" flex gap-4 mr-12">
                    <div className=" bg-slate-400 w-14 h-14 rounded-full flex justify-center items-center">
                        <img className="rounded-full" alt="" src={user.photoURL} 
                    title={user.displayName}
                    />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <button onClick={handleLogOut} className="btn">LOGOUT</button>
                            </li>
                        </ul>
                    </div>
                </div>
                :
                    <Link to={'/logIn'}>
                        <button className="btn">Login</button>
                    </Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;