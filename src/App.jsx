
import './App.css'
import { Routes, Route } from 'react-router-dom';


import ProductDetails from './Pages/ProductDetails.jsx'
import Navbar from './Components/Navbar.jsx';
import Cart from './Pages/Cart.jsx';

import Home from './Pages/Home/Home.jsx';
import Watches from './Pages/Watches/Watches.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';


function App() {
 

  return (
    <>
    

    <Routes>

     
       <Route   element={<Navbar/>}>
          
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            
            <Route path="/watches" element={<Watches/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
           
           
                             

       </Route>

       <Route>          
            <Route path="/" element={<Home/>} />  
                             
       </Route>

      




       
        
    </Routes>
   
      
    </>
  )
}

export default App
