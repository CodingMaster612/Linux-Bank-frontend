import React from "react";

import Home from '../components/Home.js'
import Header from '../components/Header.js';
import BankBox from '../components/BankBox.js'
import Navbar from "../components/Navbar.js";
import SignInBox from "../components/SignInBox.js"
function Homes() {
return (
    <div>
        <Home/>
        <Header/>
        <BankBox/>
        <Navbar/>
        <SignInBox/>
    </div>
    
        
    
)
   
}
export default Homes;