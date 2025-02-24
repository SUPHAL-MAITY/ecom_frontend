
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
import RecentOrders from './Pages/RecentOrders/RecentOrders.jsx';
import AllProducts from './Pages/AllProducts/AllProducts.jsx';
import AllUsers from './Pages/AllUsers/AllUsers.jsx';
import AddProduct from './Pages/AddProduct/AddProduct.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import PaymentSuccess from './Pages/PaymentSuccess/PaymentSuccess.jsx';
import PaymentFailed from './Pages/PaymentFailed/PaymentFailed.jsx';
import NewEdition from './Pages/NewEdition/NewEdition.jsx';
import AddCategory from './Pages/AddCategory/AddCategory.jsx';
import AdminProtectedRoutes from './Components/AdminProtectedRoutes.jsx';




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
            <Route path="/admin" element={<AdminProtectedRoutes> <AdminDashboard/> </AdminProtectedRoutes>  } />
            <Route path="/recent-order" element={ <AdminProtectedRoutes> <RecentOrders/> </AdminProtectedRoutes> } />
            <Route path="/all-products" element={<AdminProtectedRoutes> <AllProducts/> </AdminProtectedRoutes> } />
            <Route path="/all-users" element={<AdminProtectedRoutes> <AllUsers/> </AdminProtectedRoutes> } />
            <Route path="/add-product" element={<AdminProtectedRoutes>  <AddProduct/> </AdminProtectedRoutes> }/>
            <Route path="/checkout" element={<AdminProtectedRoutes><Checkout/></AdminProtectedRoutes> }/>
            <Route path="/success" element={<PaymentSuccess/> }/>
            <Route path="/fail" element={<PaymentFailed/> }/>
            <Route path="/new-edition" element={<NewEdition/> }/>
            <Route path="/add-category" element={<AdminProtectedRoutes> <AddCategory/> </AdminProtectedRoutes>  }/>
          

                                         
       </Route>

       <Route>          
            <Route path="/" element={<Home/>} />  
                             
       </Route>

      




       
        
    </Routes>
   
      
    </>
  )
}

export default App
