import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import SignUpBox from './pages/SignUpPage.js'
import Account from './pages/Account.js'
import './App.css';

function App() {
  return (
    <div>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/SignUp" element={<SignUpBox/>}/> 
      <Route path="/Account" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
