
import './App.css'
import { Routes, Route } from 'react-router-dom';


import ProductDetails from './Pages/ProductDetails.jsx'
import Navbar from './Components/Navbar.jsx';
import Cart from './Pages/Cart.jsx';

import Home from './Pages/Home/Home.jsx';
import Watches from './Pages/Watches/Watches.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';
import TrendingProduct from './Pages/TrendingProduct/TrendingProduct.jsx';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard.jsx';




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
            <Route path="/trending" element={<TrendingProduct/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
           

            
           
           
                             

       </Route>

       <Route>          
            <Route path="/" element={<Home/>} />  
                             
       </Route>

      




       
        
    </Routes>
   
      
    </>
  )
}

export default App
