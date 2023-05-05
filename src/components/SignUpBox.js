import React from "react";
import axios from "axios";
import { useState } from "react";

import '../css/SignUpBox.css'
function SignUpPage() {




    const [user, setUser] = useState({
       
     })
  
  
     const changeHandler = (event) => {
         const name = event.target.name
         const value = event.target.value
         const tempUser = { ...user }
         tempUser[name] = value
         setUser(tempUser)
     }
  
     const submitHandler = () => {
  
         
  
         axios.post("http://localhost:8080/user/signUp", user)
         .then((response) => {
             
             console.log(response.data)
             // navigator("/home")
  
         }).catch((e) => {
             console.log(e.response)
             
         })
  
     }






    return (
        <header style={HeaderStyle}>
       <div className="signup-box">
      <h2>Sign Up</h2>
     
        
        <input placeholder="email" type="text" className="login__input" onChange={changeHandler} name="email" value={user.email} />

        
        <input placeholder="Password" type="password" className="login__input" onChange={changeHandler} name="password" value={user.password} />
       
        <button className="" type="submit" onClick={submitHandler}>Sign Up</button>
        <a href="/">Sign In</a>

    </div>




        






    </header>
)
}
const HeaderStyle = {
width: "100%",
height: "100vh",
// background: `url(${BackgroundImage})`,
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundColor: "white"
}

    
        
    

   

export default SignUpPage;