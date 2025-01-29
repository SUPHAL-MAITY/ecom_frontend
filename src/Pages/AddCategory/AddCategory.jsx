import { useState } from "react";
import SidebarForAdmin from "../../Components/SidebarForAdmin/SidebarForAdmin";
import axios from "axios";
import "./AddCategory.css";
import { ToastContainer, toast } from "react-toastify";





export default function AddCategory() {
  let [name, setName] = useState("");
  const [image, setImage] = useState("");
  const[isSubmitting,setIsSubmitting]=useState(false)

  const my_api = import.meta.env.VITE_API_BASE_URL;


  function delayReload(){
    setTimeout(()=>{
        window.location.reload()
    },1500)
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("please  fill the input");
      setName("");
      return;
    }
    if(image.size>=5*1024*1024){
        toast.error("image size must be less than 5mb")
        return;
        delayReload()
    }
    
    try {
      name = name.trim();
      // console.log(image.size);
      setIsSubmitting(true)
      const { data } = await axios.post(
        `${my_api}/create-category`,
        { name, image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsSubmitting(false)
      delayReload()
      console.log("data", data);
      toast("category created successfully!");
    } catch (err) {
      setIsSubmitting(false)
      console.log(err);
      ///validating for existance of same name
      if (err.response.status == 409) {
        
        toast(`${name} brand  already exists`);
        delayReload()
      }
    }
  };

  return (
    <>
      <div className="app-container2">
        <div className=" w-[250px]  ">
          <SidebarForAdmin />
        </div>

        <div className="main-content2  flex items-center justify-center min-h-screen  bg-[url(fossil.png)] bg-cover bg-center ">
          <ToastContainer />

          <div className=" bg-white/30 backdrop-blur-xs border border-white/20 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-white font-serif mb-4">
              Add a Brand Name
            </h2>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-serif"
                placeholder="Enter brand name"
              />
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full mt-2 p-2 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Upload Image"
                accept=".jpg, .jpeg, .png"
                required
              />

              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              >
                {isSubmitting ? "Submitting...":"Submit" }
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
