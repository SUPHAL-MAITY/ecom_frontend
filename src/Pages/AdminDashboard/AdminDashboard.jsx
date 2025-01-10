import React from "react";
import "./AdminDashboard.css";
import { FaChartBar, FaChartPie } from "react-icons/fa";

import { LiaBabyCarriageSolid } from "react-icons/lia";
import { FaArrowUp } from "react-icons/fa";
import {PieChart,Pie,Cell,Tooltip,AreaChart, XAxis, YAxis, CartesianGrid, Area} from "recharts"
import SidebarForAdmin from "../../Components/SidebarForAdmin/SidebarForAdmin";




const AdminDashboard = () => {


  const data = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 500
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ]
  const areaData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  let colors=["#1abc9c", "#3498db", "#e74c3c", "#f1c40f", "#9b59b6", "#34495e"]

  
 
  return (
    <>
      <div className="app-container">
      

        <SidebarForAdmin/>




        <div className="main-content">
           
            {/* main content  */}


            <div className="flex  flex-col  sm:flex-row  ">

              <div className="w-full sm:w-1/2  h-[700px]  grid grid-cols-1 sm:grid-cols-2 ">
                    {/* total earning box */}

                    <div className="w-[94%]   rounded overflow-hidden shadow-lg bg-white sm:p-6 m-1 sm:ml-4 sm:mt-6">

                      

                        <div className="grid grid-cols-1 ">
                           <div className="">
                                <div className="flex items-center">
                                <h1 className="text-2xl min-[1340px]:text-4xl  font-bold  mr-4">$ 13500   </h1>  <div className="   flex items-center bg-green-200  rounded-md"> <FaArrowUp />  <span  className="bg-green-200"> 2.3% </span></div>   

                                </div>
                            
                            <p className="font-mono text-gray-600"> This Month Earning</p>

                           </div>

                           <div className="hidden sm:flex  justify-center">
                                <PieChart width={300} height={300} style={{height:"80%"}}>
                                  
                                  <Pie data={data} cx="50%" cy="50%" outerRadius={50}   label={(entry) => entry.name}  labelLine={false} dataKey="value" >
                                        {
                                          data.map((entry, index) => (
                                            <Cell dataKey={index} key={`cell-${index}`} fill={colors[index]}/>
                                          ))
                                        }

                                    
                                  </Pie>

                                  <Tooltip    />
                                  {/* <Legend layout="vertical" /> */}
                                                                                                   
                                </PieChart>

                           </div>


                        </div>
                            
                      
                    </div>

                     {/* average daily sales */}
                    <div className="w-[94%] rounded overflow-hidden shadow-lg bg-white  sm:p-6 m-1 sm:ml-4 sm:mr-4 sm:mt-6">
                     

                      <div className="grid grid-cols-1 ">
                           <div className="">
                                <div className="flex items-center">
                                <h1 className="text-2xl min-[1340px]:text-4xl font-bold  mr-4">$ 13500   </h1>  <div className="   flex items-center bg-green-200  rounded-md"> <FaArrowUp />  <span  className="bg-green-200"> 2.3% </span></div>   

                                </div>
                            
                            <p className="font-mono text-gray-600">Average Daily Sales</p>

                           </div>

                           <div className="hidden sm:flex justify-center">
                                <PieChart width={300} height={300} style={{height:"80%"}}>
                                  
                                  <Pie data={data} cx="50%" cy="50%" outerRadius={50} style={{height:"80%"}}  label={(entry) => entry.name}  labelLine={false} dataKey="value" >
                                        {
                                          data.map((entry, index) => (
                                            <Cell dataKey={index} key={`cell-${index}`} fill={colors[index]}/>
                                          ))
                                        }

                                    
                                  </Pie>

                                  <Tooltip    />
                                  {/* <Legend layout="vertical" /> */}
                                                                                                   
                                </PieChart>

                           </div>


                        </div>
                            
                      
                    </div>




                    {/* orders this month */}
                    <div className="w-[94%] rounded overflow-hidden shadow-lg bg-white sm:p-6 m-1 sm:ml-4 sm:mt-6 sm:mb-6">

                      
                      <div className="grid grid-cols-1 ">
                           <div className="mb-6">
                                <div className="flex items-center">
                                <h1 className="text-2xl min-[1340px]:text-4xl font-bold  mr-4"> 7500   </h1>  <div className="   flex items-center bg-green-200  rounded-md"> <FaArrowUp />  <span  className="bg-green-200"> 2.3% </span></div>   

                                </div>
                            
                            <p className="font-mono text-gray-600">Total Orders</p>

                           </div>



                           <div class=" text-base font-medium dark:text-white">Yet To be achieved</div>
                           <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-4  dark:bg-gray-700">
                                
                                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{width: "45%"}}></div>
                           </div>


                      </div>
                            
                      
                    </div>





                    {/* Total customers  */}
                    <div className="w-[94%]  rounded overflow-hidden shadow-lg bg-white sm:p-6 m-1 sm:ml-4 sm:mr-4 sm:mt-6 sm:mb-6">
                        

                        <div className="grid grid-cols-1 ">
                           <div className="">
                                <div className="flex items-center">
                                <h1 className="text-2xl min-[1340px]:text-4xl font-bold  mr-4"> 3500   </h1>  <div className="   flex items-center bg-green-200  rounded-md"> <FaArrowUp />  <span  className="bg-green-200"> 2.3% </span></div>   

                                </div>
                            
                            <p className="font-mono text-gray-600 mb-6">Total Customers</p>

                           </div>

                           <div className="hidden sm:flex justify-center">
                               

                                <div class="profile-container">
                                  <img src="https://via.placeholder.com/50" alt="Profile 1" class="profile"/>
                                  <img src="https://via.placeholder.com/50" alt="Profile 2" class="profile"/>
                                  <img src="https://via.placeholder.com/50" alt="Profile 3" class="profile"/>
                                  <img src="https://via.placeholder.com/50" alt="Profile 4" class="profile"/>
                                  <img src="https://via.placeholder.com/50" alt="Profile 5" class="profile"/>
                                </div>

                           </div>


                        </div>
                            
                      
                    </div>

    

              </div>


              <div className="w-full sm:w-1/2 p-1 sm:p-6  ">
                  <div className="w-[98%] grid grid-rows-[20%_20%_1fr] h-[160px] sm:h-full rounded overflow-hidden shadow-lg p-1  sm:p-6 bg-white   ">
                      
                            <div className="mb-4">
                              <h1 className="font-mono text-gray-800 font-bold text-2xl min-[1340px]:text-4xl">Total Earnings</h1>
                              
                            </div>
                            <div className="">
                              <h1 className="text-2xl min-[1340px]:text-4xl font-bold">$64094</h1>
                              <p className="font-mono text-gray-600 hidden sm:block ">Users from all channels</p>
                              
                            </div>
                            <div className="hidden sm:flex  ">
                              
                                                          
                                <AreaChart width={530} height={250} data={areaData}
                                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                  <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                  </defs>
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <Tooltip />
                                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>


                            </div>
                    


                    
                  </div>
              
              </div>




            </div>




          </div>
      </div>
    </>
  );
};

export default AdminDashboard;
