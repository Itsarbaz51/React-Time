import {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){

    const {User} = useContext(UserContext)
    if(!User) return <h2>Please Login </h2>
    return <h1>Welcome mr: {User.UserName}</h1>
}

export default Profile;