import React, { useEffect, useState } from 'react';
import { Outlet ,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleDropdown } from "../features/Toggle/toggle.js";
import { useLocation } from 'react-router-dom';
import axios from "axios"




 const Navbar = () => {
  

  const [image,setImage]=useState("https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png")
   const [loggedIn,setLoggedIn]=useState(null)
  
  const cart = useSelector((state) => state.cart);
  const isProfileDropdownOpen=useSelector((state)=>state.toggle.isProfileDropdownOpen)
  const location=useLocation()
  const navigate=useNavigate()

  
  const url = import.meta.env.VITE_API_URL;
  

  useEffect(()=>{
    fetchProfileImage()
    fetchLoggedinStatus()
  },[location.pathname])

  const fetchProfileImage=async()=>{
    try {
      const {data}=await axios.get(`${url}/api/v1/profile-image`,{withCredentials:true})
      setImage(data.data)
      
    } catch (error) {
      
      console.log(error)
    }
    
  }





  const dispatch = useDispatch();


  const fetchLoggedinStatus=async()=>{
    try {
      const {data}=await axios.get(`${url}/api/v1/check-auth`,{withCredentials:true})
      
      setLoggedIn(data?.data?.loggedIn)
    } catch (error) {
      console.log(error)
      setLoggedIn(false)
      
    }
  }
 


  const handleSidebarToggle=()=>{
    dispatch(toggleSidebar())

  }


  const handleProfileDropDownToggle=()=>{
    dispatch(toggleDropdown())
  }


  const handleLogout=async()=>{
    
    const {data}=await axios.get(`${url}/api/v1/logout`,{withCredentials:true})
    
    navigate("/login")
    

  }


  return (
    <>
     
     <nav className="fixed top-0 z-50 w-full h-16 text-white bg-gray-700 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 font-serif">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start ">
                <button
                  onClick={handleSidebarToggle}
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="w-1/2 sm:w-1/3">

              {location.pathname=="/watches" ?  (
                   <input
                   type="text"
                   placeholder="Search..."
                   className="p-2 rounded w-full bg-gray-700 text-white focus:outline-none focus:ring-2 "
                 />

              ) : (
                ""
              )}
         
          </div>



              {/* profile button in navbar */}

              <div className="flex justify-end ">
                <div className="flex items-center ms-3">

                <Link to="/cart" className="text-white text-2xl hover:text-gray-400 mr-6">
                        
                         <i className=" relative inline-flex fa-sharp fa-solid fa-cart-shopping">
                          {cart.totalItems >0 && <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cart.totalItems}</div> }  
                          </i>
                </Link>
                  {/*  profile  */}
                  <div className="flex flex-col items-center ">
                    <button
                      onClick={handleProfileDropDownToggle}
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full  "
                      aria-expanded="false"
                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src={image}
                        alt="user photo"
                      />
                    </button>

                    
                  </div>
                </div>
              </div>


            </div>
          </div>

          

          {/* dropdown menu */}

          <div
            id="dropdown"
            className={`z-50  ${
              isProfileDropdownOpen ? " " : "hidden"
            }  bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 fixed right-0 `}
          >
            <ul
              className="py-2 text-sm text-white "
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-600 ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/watches" className="block px-4 py-2 hover:bg-gray-600 ">
                  Collection
                </Link>
              </li>

              {!loggedIn && (
                  <li>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-600 ">
                   Sign-in
                  </Link>
                </li>
                
              )}
            
              <li>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-600 ">
                  sign-up
                </Link>
              </li>
              <li>
                <Link to="/admin" className="block px-4 py-2 hover:bg-gray-600 ">
                 Admin
                </Link>
              </li>

            {loggedIn && (
                <li>
                <Link href="#" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-600 ">
                  Logout
                </Link>
              </li>

            )}
            
             


             


            </ul>
          </div>

      </nav>
      <div className="pt-16">
        <Outlet/>

      </div>
    
      
    
    </>
  
  );
}



export default Navbar;
