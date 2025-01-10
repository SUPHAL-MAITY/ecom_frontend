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
               <Link to="/admin"><h2 className="">Sales This Month</h2></Link> 
             </div>
             <div className="sidebar-item">
             <FaChartPie />
              <Link to="/recent-order"><h2 className="">Recent Orders</h2></Link> 
             </div>
             <div className="sidebar-item">
             <LiaBabyCarriageSolid />
                <Link to="/all-products"><h2 className="">All Products</h2></Link> 
             </div>
             <div className="sidebar-item">
               <FaUsers />
               <Link to="/all-users"><h2 className="">All Users</h2></Link> 
             </div>
    </div>
   
  )
}

export default SidebarForAdmin
