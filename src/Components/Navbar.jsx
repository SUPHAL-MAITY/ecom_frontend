import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleDropdown } from "../features/Toggle/toggle.js";



 const Navbar = () => {
  

  

  const cart = useSelector((state) => state.cart);
  const isProfileDropdownOpen=useSelector((state)=>state.toggle.isProfileDropdownOpen)
  
  




  const dispatch = useDispatch();



 


  const handleSidebarToggle=()=>{
    dispatch(toggleSidebar())

  }


  const handleProfileDropDownToggle=()=>{
    dispatch(toggleDropdown())
  }


  return (
    <>
     
     <nav className="fixed top-0 z-50 w-full h-16 text-white bg-black border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded w-full bg-gray-700 text-white focus:outline-none focus:ring-2 "
            />
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
                        src="data:image/jpeg;base64,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"
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
            className={`z-10  ${
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
              <li>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-600 ">
                 Sign-in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-600 ">
                  sign-up
                </Link>
              </li>

              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-600 ">
                  Logout
                </Link>
              </li>
             


             


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
