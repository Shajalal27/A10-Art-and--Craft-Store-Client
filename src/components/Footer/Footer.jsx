import { FaFacebook, FaInstagram, FaLocationDot, FaMessage, FaPhone, FaTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { MdWatchLater } from "react-icons/md";


const Footer = () => {
    return (
       <div>
             <footer className="footer lg:pt-14 pt-96 p-10 bg-[#12161F] text-base-content">
            <aside>
                <img className="w-24 h-24" src={logo} alt="" />
                <p className="text-white -mt-6">Modern Arts and Paintings — Free Entrance Exhibits.<br/>Providing reliable tech since 1992</p>
                <div className="flex gap-4 items-center pt-3">
                <FaLocationDot color="#CE373A" size={30} />
                <a className="text-white">Jl. Raya Ubud No 11, Ubud</a>
                </div>
                <div className="flex gap-4 items-center pt-3">
                <FaMessage  color="#CE373A" size={30} />
                <a className="text-white">support@domain.com</a>
                </div>
                <div className="flex gap-4 items-center pt-3">
                <FaPhone  color="#CE373A" size={30} />
                <a className="text-white">(+62)81 158 3642</a>
                </div>
                

            </aside> 
            <nav className="text-white space-y-5 text-xl">
                <h6 className="footer-title border-b-4 border-red-600 pb-4">Quick Links</h6> 
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav className="text-white space-y-5 text-xl">
                <h6 className="footer-title border-b-4 border-red-600 pb-4">Useful Links</h6> 
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms and Conditions</a>
                <a className="link link-hover">Disclaimer</a>
                <a className="link link-hover">FAQ</a>
            </nav> 
            <nav className="text-white space-y-5 text-xl">
                <h6 className="footer-title border-b-4 border-red-600 pb-4">Work Hours</h6> 
                <div className="flex gap-4 items-center">
                <MdWatchLater  color="#CE373A" size={30} />
                <a className="text-white">9 AM - 5 PM , Monday - Saturday</a>
                </div>
                <div className="flex gap-6 items-center bg-red-700 px-10 py-4 rounded-tl-lg rounded-br-lg hover:text-black
                hover:pt-6
                ">
                    <FaPhone  color="white"  size={30} />
                    <button className="text-xl font-bold">REGISTER NOW</button>
                </div>
            </nav>
            
         </footer>
         <div className=" border-t-2 border-gray-800">
             <footer className="footer footer-center p-10 bg-[#12161F] text-base-content rounded">
                
                <nav>
                    <div className="grid grid-flow-col gap-10">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav> 
                <aside className="pb-6">
                    <p className="text-gray-400">Copyright © 2024 - All right reserved by Modern Arts and Paintings Industries Ltd</p>
                </aside>
                </footer>
         </div>
    </div>
    );
};

export default Footer;
