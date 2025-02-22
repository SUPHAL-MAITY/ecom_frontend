import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../features/Cart/cart.js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ProductDetails = () => {

const [product,setProduct]=useState({})
const[selectedImage,setSelectedImage]=useState(0)
const {id}=useParams();
const dispatch=useDispatch()
const navigate=useNavigate()

const url = import.meta.env.VITE_API_URL;

 let rand= Math.floor(Math.random()*4)  
 console.log("rand",rand)



 const fetchSingleProduct=async()=>{
    try {
     
        const {data}=await axios.get(`${url}/api/v1/get-single-product/${id}`)
        setProduct(data?.data)
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
    
 }




 useEffect(()=>{
    fetchSingleProduct()

 },[])



 const handleAddtoCart=(product)=>{
  
  console.log(product)

  if(!product) reutrn;

 
  console.log("rand",rand)

  dispatch(addItem({
        id: product._id,
        title: product.title,
        price: product.discountPrice,
        image: product.images[0],
  }))

   toast("Item added to cart!");

 }




  return (
    <>

      <ToastContainer />
    
      <section className="py-8 font-serif bg-white md:py-16 dark:bg-gray-900 antialiased">
        

                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div className="shrink-0 max-w-md lg:max-w-lg mx-auto shadow-lg">
                    <img
                      className="w-full h-96 dark:hidden"
                      src={product.images?.[0]}
                      alt=""
                    />
                  
                  
                  </div>

              
      
                  <div className="mt-6 sm:mt-8 lg:mt-0">
                    <h1 className="text-xl font-medium text-gray-900 sm:text-2xl dark:text-white">
                      {product.title}
                    </h1>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                      <span className="text-2xl line-through font-medium text-gray-900 sm:text-3xl dark:text-white">
                      ₹{product.price}
                      </span>
                      <p className="text-2xl font-medium text-gray-900 sm:text-3xl dark:text-white">
                      ₹{product.discountPrice}
                      </p>


                   
      
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                          {product.rating?.rate}
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                        >
                          {product.rating?.count} Reviews
                        </a>
                      </div>
                    </div>



      
                    <div className="mt-6 sm:gap-4 sm:items-center   sm:flex sm:mt-8">
                      
      
                      <a
                        href="#"
                        title=""
                        className="text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                        role="button"
                        onClick={()=>handleAddtoCart(product)}
                      >
                        <svg
                          className="w-5 h-5 -ms-2 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                          />
                        </svg>
                        Add to cart
                      </a>


                      <a
                        href="#"
                        title=""
                        className="text-white mt-4 sm:mt-0 bg-purple-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                        role="button"
                        onClick={()=>navigate(-1)}
                      >
                       
                       Back
                      </a>


                    </div>


      
                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
      
                  
      
                    <p className="text-gray-500 dark:text-gray-400">
                     {product.description}
                    </p>
                  </div>
      
      
      
                </div>
              </div>


           



     
        
       



      </section>
    </>
  );
};

export default ProductDetails;
