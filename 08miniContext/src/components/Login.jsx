import {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    function handleForm(e){
        e.preventDefault()
        setUser({UserName, Password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}

             placeholder="Username" />
            <input type="text" 
            
            value={Password}
            onChange={(e) => setPassword(e.target.value)} 

            placeholder="Password" />
            <button onClick={handleForm}>Submit</button>
        </div>
    )
}

export default Login;