import { useState, useEffect } from "react";
import SidebarForAdmin from "../../Components/SidebarForAdmin/SidebarForAdmin";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import { ToastContainer, toast } from "react-toastify";


const AllProducts = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [category,setCategory]=useState("show_all")
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [filterPage,setFilterPage]=useState(1)
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();


  
const debounceSearch=useDebounce(searchQuery,500)
const url = import.meta.env.VITE_API_URL;




const searchFetchData=async()=>{
  if(debounceSearch.trim()==="") {
    setSearchQuery("")
    return;
  }
  setLoading(true)
  try {

    const {data}=await axios.get(
      `${url}/api/v1/search?search=${debounceSearch}`,
      { withCredentials: true }
    );
    setLoading(false)
    if(data.data.length===0){
      toast.error("No products found")
      setSearchQuery("")
    }
    if(data.data.length>0){
      setProducts(data.data)
      setSearchQuery("")
    }
  
    console.log("search data ",data)
    
  } catch (error) {
    console.log(error)
    setLoading(false)
    
  }
 

}


  useEffect(() => {
    if(category && category !=="show_all"){
      fetchFilterProducts()
    }else{
      fetchData();

    }
    

  }, [page,category]);

  useEffect(()=>{
    if(debounceSearch){
      searchFetchData()
    }

  },[debounceSearch])

  ///data fetching for all products with pagination

  const fetchData = async () => {
    console.log("fetch data done...")
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}/api/v1/get-all-admin-products?page=${page}`,
        { withCredentials: true }
      );
      setProducts(data?.data?.products);
      setTotalPages(data?.data?.totalPages);
      setLoading(false);

      console.log("all products data", data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //for pagination purpose
  const increasePage = () => {
    if (page == totalPages) return;

    setPage((prev) => prev + 1);
  };

  const decreasePage = () => {
    if (page == 1) return;
    setPage((prev) => prev - 1);
  };




  const fetchFilterProducts=async()=>{
   
    console.log("filter data ........")
    try {
      if(category && category !=="show_all"){
        setLoading(true);
        console.log("page",page)
        const { data } = await axios.get(
          `${url}/api/v1/get-filter-products?category=${category}&page=${page}`,
          { withCredentials: true }
        );
        setProducts(data?.data?.products);
        setTotalPages(data?.data?.totalPages);
        console.log("total pages",data?.data?.totalPages)
        setLoading(false);
  
        console.log("all filter  products data", data);

        
      }
     
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }


  const handleFilterChange=(e)=>{
    
    setCategory(e.target.value)
    setPage(1)
  }

  

  return (
    <>
    <ToastContainer />
      <div className="flex min-h-screen items-stretch font-serif">
        <div className="h-full">
          <SidebarForAdmin />
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="p-6   ">
            <div className="mb-8">
              <h1 className="text-xl font-semibold text-gray-900">
                All Products
              </h1>
              <p className="text-sm text-gray-500">Avg. 57 orders per day</p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Category</span>
                  <select value={category} onChange={handleFilterChange} className="border rounded-md px-3 py-1.5 text-sm" >
                    <option value="show_all">Show All</option>
                    {["Men","Woman","Unisex"].map((c)=>(
                      <option value={c} key={c}>{c}</option>
                    ))}
                    
                    
                  </select>
                </div>
           


              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="overflow-x-auto  ">
              <table className="w-full ">
                <thead className="w-full">
                  <tr className="border-b bg-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      ID
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Title
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Price
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Discount Price
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Stock
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
                      Category
                    </th>
                    <th className="w-10"></th>
                  </tr>
                </thead>
                 {loading && ( <div className="w-full border border-black ">
                         <Loader/>
                          </div>  )
                }
                 {!loading && (
                   <tbody>
                   {products.map((product, i) => (
                     <tr
                       key={product._id}
                       className={`border-b ${
                         i % 2 !== 0 ? "bg-gray-50" : "bg-white-100"
                       }  `}
                     >
                       <td className="py-4 px-4 text-sm font-medium text-gray-900">
                         {product._id}
                       </td>
                       <td className="py-4 px-4 text-sm text-gray-500">
                         {product.title.length > 30
                           ? product.title.slice(0, 30) + ".."
                           : product.title}
                       </td>
                       <td className="py-4 px-4 text-sm text-gray-900">
                         {product.price}
                       </td>
                       <td className="py-4 px-4 text-sm text-gray-900">
                         {product.discountPrice}
                       </td>
                       <td className="py-4 px-4 text-sm text-gray-900">
                         {product.stock}
                       </td>
                       <td
                         className={`py-4 px-4 text-sm text-gray-900 rounded-full inline-flex items-center justify-center text-xs font-medium
                                   ${
                                     product.gender === "Woman"
                                       ? "bg-pink-300 text-black w-[72px]"
                                       : ""
                                   }
                                   ${
                                     product.gender === "Men"
                                       ? "bg-blue-400 text-white w-[72px]"
                                       : ""
                                   }
                                   ${
                                     product.gender === "Unisex"
                                       ? "bg-gray-500 text-white w-[72px]"
                                       : ""
                                   }
                      `}
                       >
                         {product.gender}
                       </td>
                       <td className="py-4 px-4">
                         <button className="text-gray-400 hover:text-gray-500">
                           <svg
                             className="w-4 h-4"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                             />
                           </svg>
                         </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>


                 )}
               

              </table>
            </div>
          </div>
          { !loading  && (
             <div className="flex justify-center  space-x-1 mt-2">
             <button
               disabled={page == 1}
               onClick={decreasePage}
               className={`min-w-9 rounded-md bg-blue-100  border border border-slate-300 py-2 px-3 text-black font-serif font-bold text-center text-sm transition-all  text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800  active:border-slate-800 active:text-white active:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
             >
               Prev
             </button>
 
             <button
               disabled={page == totalPages}
               onClick={increasePage}
               className={`min-w-9 rounded-md bg-blue-100  border border border-slate-300 py-2 px-3 text-black font-serif font-bold text-center text-sm transition-all  text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800  active:border-slate-800 active:text-white active:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
             >
               Next
             </button>
           </div>
 

          ) }
         


        </div>
      </div>
    </>
  );
};

export default AllProducts;
