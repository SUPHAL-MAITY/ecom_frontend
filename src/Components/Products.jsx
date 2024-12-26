import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader/Loader.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from "../features/Cart/cart.js";
import { ToastContainer, toast } from 'react-toastify';



const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const totalStars = 5; 


  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
     setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      setLoading(false);

      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  


  const handleAddtoCart=(product)=>{
    dispatch(addItem({id:product.id,title:product.title,price:product.price,image:product.image}))
    toast("Item added to cart!")
  }


  return (
    <>
      <ToastContainer />

    {loading && <Loader/>}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
         

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
            
              <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/product/${product.id}`} >
                  <img
                    className="p-8 rounded-t-lg  h-96"
                    src={product.image}
                    alt="product image"
                   
                  />
                </Link>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl h-24 font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">


                     {/* Render stars */}
                        {Array.from({ length: totalStars }, (_, index) =>
                        {
                            
                                
                            const coloredStars = Math.round(product.rating.rate)
                          
                            return    <svg
                                    key={index}
                                    className={`w-4 h-4 ${
                                        index < coloredStars ? "text-yellow-300" : "text-gray-200"
                                    }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                    >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                
                            


                        }
                        
                       
                        
                        
                        )}


                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {product.rating.rate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $ {product.price}
                    </span>
                    <button
                      onClick={()=>handleAddtoCart(product)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
