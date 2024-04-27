

const SocialIcons = () => {

    const handleSocialLogIn = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
        })
    }
    return (
        <div>
            <button onClick={handleSocialLogIn}></button>
        </div>
    );
};

export default SocialIcons;