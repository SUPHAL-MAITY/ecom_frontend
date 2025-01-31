import React, { useState,useEffect } from "react";
import "./watches.css";
import Products from "../../Components/Products";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"





const Watches = () => {
  
   const [products,setProducts]=useState([])
   const cart = useSelector((state) => state.cart);
   


   const isSidebarOpen = useSelector((state) => state.toggle.isSidebarOpen);
  





  return (
    <>
      <div>
        {/* navbar */}

       



        {/* sidebar */}

        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }   bg-gray-800  sm:translate-x-0  aria-label="Sidebar"`}
        >
          <div className="h-full  px-3 pb-4 overflow-y-auto bg-gray-800  dark:bg-gray-800">


           

            {/*  side bar content*/}

            <div className="w-full p-4   ">
              {/* First Row */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold text-white font-serif">
                  Filter
                </div>
                <div className="text-xl text-white">
                  <i className="fa-solid fa-filter"></i>
                </div>
              </div>

              {/* Second Row */}
              <div className="mb-6">
                <div className="text-md text-white font-semibold  font-mono mb-2">
                  Gender
                </div>
                <div className="space-y-2 text-white">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="male"
                      name="gender"
                      value="male"
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center ">
                    <input
                      type="checkbox"
                      id="female"
                      name="gender"
                      value="female"
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="unisex"
                      name="gender"
                      value="unisex"
                      className="mr-2"
                    />
                    Unisex
                  </label>
                </div>
              </div>

              {/* Third Row */}
              <div>
                <div className="text-md font-semibold mb-2 text-white font-mono">
                  Price
                </div>
                <div className="space-y-2 text-white">
                  {[
                    { label: "0-1000", value: "0-1000" },
                    { label: "1001-2000", value: "1001-2000" },
                    { label: "2001-3000", value: "2001-3000" },
                    { label: "3001-4000", value: "3001-4000" },
                    { label: "4001-5000", value: "4001-5000" },
                    { label: "5001-10000", value: "5001-10000" },
                  ].map((price, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={price.value}
                        name="price"
                        value={price.value}
                        className="mr-2"
                      />
                      {price.label}
                    </label>
                  ))}
                </div>
                <button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                  Apply
                </button>
              </div>
            </div>


          </div>
        </aside>

        <div className="p-4 sm:ml-64">

          {/* main content here */}

          <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 sm:mt-6">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default Watches;
