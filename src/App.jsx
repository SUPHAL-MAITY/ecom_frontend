
import './App.css'
import { Routes, Route } from 'react-router-dom';


import ProductDetails from './Pages/ProductDetails.jsx'
import Navbar from './Components/Navbar.jsx';
import Cart from './Pages/Cart.jsx';
import AllProducts from './Pages/AllProducts.jsx';
import Home from './Pages/Home/Home.jsx';
import Watches from './Pages/Watches/Watches.jsx';

function App() {
 

  return (
    <>
    

    <Routes>

     
       <Route   element={<Navbar/>}>
            <Route path="/" element={<AllProducts/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
           
           
                             

       </Route>

       <Route>
          <Route path="/home" element={<Home/>} />
          <Route path="/watches" element={<Watches/>} />

       </Route>




       
        
    </Routes>
   
      
    </>
  )
}

export default App
