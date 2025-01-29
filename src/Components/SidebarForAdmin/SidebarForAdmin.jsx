import React from "react";
import "./SidebarForAdmin.css";
import { FaChartBar, FaChartPie,FaUsers  } from "react-icons/fa";

import { LiaBabyCarriageSolid } from "react-icons/lia";
import { Link } from "react-router-dom";



const SidebarForAdmin = () => {


  return (
    <div className="sidebar">
             <div className="sidebar-item first-sidebar-item">
               <FaChartBar />
               <Link to="/admin"><h2 className="font-serif">Sales This Month</h2></Link> 
             </div>
             <div className="sidebar-item">
             <FaChartPie />
              <Link to="/recent-order"><h2 className="font-serif">Recent Orders</h2></Link> 
             </div>
             <div className="sidebar-item">
             <LiaBabyCarriageSolid />
                <Link to="/all-products"><h2 className="font-serif">All Products</h2></Link> 
             </div>
             <div className="sidebar-item">
               <FaUsers />
               <Link to="/all-users"><h2 className="font-serif">All Users</h2></Link> 
             </div>
             <div className="sidebar-item">
               <FaUsers />
               <Link to="/add-product"><h2 className="font-serif">Add Products</h2></Link> 
             </div>
             <div className="sidebar-item">
               <FaUsers />
               <Link to="/add-category"><h2 className="font-serif">Add Brand</h2></Link> 
             </div>
    </div>
   
  )
}

export default SidebarForAdmin
