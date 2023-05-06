import axios from "axios";
import { useState} from "react";
import '../css/SignInBox.css'
import { useNavigate } from 'react-router'


// import { useNavigate } from 'react-router'

function SignInBox() {
   //  const navigator = useNavigate()
   const navigator = useNavigate()
   const [user, setUser] = useState({})


   const changeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      const tempUser = { ...user }
      tempUser[name] = value
      setUser(tempUser)
   }

   const submitHandler = () => {



      axios.post("http://localhost:8080/user/signIn", user)
         .then((response) => {

            console.log(response.data)
            localStorage.setItem("Credentials", response.data.email);
            alert("completed")
            navigator('/')

         }).catch((e) => {
            console.log(e.response)

         })

   }

   return (
    <header style={HeaderStyle}>
       <div className="signin-box">
      <h2>Sign In</h2>
     
        
        <input placeholder="email" type="text" className="login__input" onChange={changeHandler} name="email" value={user.email} />

        
        <input placeholder="Password" type="password" className="login__input" onChange={changeHandler} name="password" value={user.password} />
       
        <button className="" type="submit" onClick={submitHandler}>Login</button>
        <a href="/SignUp">Sign Up</a>

    </div>




    </header>
 )
}
const HeaderStyle = {
 width: "100%",
 height: "100vh",
//  background: `url(${BackgroundImage})`,
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 backgroundSize: "cover",
 backgroundColor: "white"
}
export default SignInBox;