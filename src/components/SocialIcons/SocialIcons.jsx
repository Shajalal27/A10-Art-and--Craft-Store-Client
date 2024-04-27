import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { FaGithub, FaTwitter } from "react-icons/fa";


const SocialIcons = () => {
    const{googleLogIn, githubLogIn, twitterLogIn} = useAuth();

    const handleSocialLogIn = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
        })
    }
    return (
    <div className="text-6xl flex gap-12 justify-center items-center">
        <button onClick={() => handleSocialLogIn(googleLogIn)}><FcGoogle /></button>
        <button onClick={() => handleSocialLogIn(githubLogIn)}><FaGithub /></button>
        <button onClick={() => handleSocialLogIn(twitterLogIn)}><FaTwitter /></button>
    </div>
    );
};

export default SocialIcons;