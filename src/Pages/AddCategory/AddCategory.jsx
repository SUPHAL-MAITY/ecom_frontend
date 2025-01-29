import { useState } from "react";
import SidebarForAdmin from "../../Components/SidebarForAdmin/SidebarForAdmin";
import "./AddCategory.css";

export default function AddCategory() {
  const [brandName, setBrandName] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brandName.trim() === "") return;
    
  };

  return (

    <>

<div className="app-container2">

        
      
<div className=" w-[250px]  ">
      <SidebarForAdmin/>

</div>

  
<div className="main-content2  flex items-center justify-center min-h-screen  bg-[url(fossil.png)] bg-cover bg-center bg-gray-100">
  <div className=" bg-white/30 backdrop-blur-xs border border-white/20 p-6 rounded-lg shadow-lg w-96">
    <h2 className="text-xl font-bold text-white font-serif mb-4">Add a Brand Name</h2>
    
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-serif"
          placeholder="Enter brand name"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    
  </div>
</div>
    
</div>  
    </>
   
  );
}
