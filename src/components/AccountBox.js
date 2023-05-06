import React, { useState, useEffect } from "react";
import "../css/Account.css";

function Account() {
    const [user, setUser] = useState({ isLoggedIn: false, email: '' });

    useEffect(() => {
        const storedEmail = localStorage.getItem('Credentials');
        if (storedEmail) {
          setUser({ isLoggedIn: true, email: storedEmail });
        }
      }, []);

  return (
    <div className="Welcome-Message">
    {user.isLoggedIn && <p>Welcome back, {user.email}!</p>}
    {/* other content */}

    <div className="image-container">
        <img src="https://tse2.mm.bing.net/th?id=OIP.DaYwtSRMU_fqmcam6appUwHaHa&pid=Api&P=0" alt='img'></img>
    </div>
    <div className="box">
      <h2 className="title">Recent Transactions</h2>
     
    </div>
  </div>

  );
}

export default Account;
