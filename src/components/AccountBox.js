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
    <div>
    {user.isLoggedIn && <p>Welcome back, {user.email}!</p>}
    {/* other content */}
  </div>
  );
}

export default Account;
