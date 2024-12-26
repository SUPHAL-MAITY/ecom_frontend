
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import Navbar from './Components/Navbar.jsx';
import Cart from './Pages/Cart.jsx';

function App() {
 

  return (
    <>
    

    <Routes>

     
       <Route   element={<Navbar/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
                             

       </Route>




       
        
    </Routes>
   
      
    </>
  )
}

export default App
