import React, { useState, useEffect } from "react";
import SidebarForAdmin from "../../Components/SidebarForAdmin/SidebarForAdmin";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const my_api = import.meta.env.VITE_API_BASE_URL;

const AddProduct = () => {
  

  const [selectedImage, setSelectedImage] = useState(0);
  const [brands, setBrands] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "Fastrack Limitless Glide Smart Watch, Advanced UltraVU HD Display",
    description:
      "Ultra VU HD Display with Bright Pixel Resolution and is available in brand new amazing colours",
    price: 700,
    discountPrice: 499,
    categoryId: "",
    stock: 70,
    gender: "",
    discountType: "",
    images: [],
  });

  // event handler for handling change in   form data
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  // event handler for handling multiple images
  const handleImages = (e) => {
    // validation for 4 images
    if (formData.images.length === 4) {
      toast.error("You can only upload 4 images");
      return;
    }

    ////validation for image size
    if (e.target.files[0].size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    //adding images to formData
    let files = e.target.files;
    console.log("files", files);
    let imageArray = Array.from(files);
    console.log("imageArray", imageArray);
    setFormData({ ...formData, images: [...formData.images, ...imageArray] });
  };

  // get all brands for cateories dropdown
  const getAllBrands = async () => {
    try {
      const { data } = await axios.get(`${my_api}/get-all-category`);
      console.log(data);
      setBrands(data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  ////handler for submiting form

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    // converting formData  to FormData

    const formDataToSend = new FormData();
    formData.images.forEach((image) => {
      formDataToSend.append("images", image);
    });

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "images") {
        formDataToSend.append(key, value);
      }
    });

    try {
      setIsSubmitting(true);
      console.log("formDataToSend", formDataToSend);

      const { data } = await axios.post(
        `${my_api}/create-product`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      setIsSubmitting(false);
      alert("Product Added Successfully");
      setFormData({
        title:
          "Fastrack Limitless Glide Smart Watch, Advanced UltraVU HD Display",
        description:
          "Ultra VU HD Display with Bright Pixel Resolution and is available in brand new amazing colours",
        price: 700,
        discountPrice: 499,
        categoryId: "",
        stock: 70,
        gender: "",
        discountType: "",
        images: [],
      });
      setSelectedImage(0);

      setFormData({ ...formData, images: [] });
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  ////handler for selecting image on button click

  const handleInputButton = () => {
    console.log("button clicked");

    document.getElementById("imageInput").click();
  };

  return (
    <>
      <ToastContainer />

      <div className="relative flex items-stretch min-h-screen">
        <div className="w-[250px]   ">
          <SidebarForAdmin />
        </div>

        <div className="  flex-1 overflow-x-auto">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="container mx-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold font-serif">
                  Add New Product
                </h1>
                <div className="space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-md font-serif text-white transition ${
                      isSubmitting
                        ? "bg-gray-800 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {isSubmitting ? "Product Adding..." : "Add Product"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">
                      General Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Name Product
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="title"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Description Product
                        </label>
                        <textarea
                          id="description"
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 font-serif">
                          Gender
                        </label>
                        <div className="flex gap-4 mt-1">
                          {["Men", "Woman", "Unisex"].map((gender) => (
                            <label
                              key={gender}
                              className="inline-flex items-center font-serif"
                            >
                              <input
                                type="radio"
                                className="form-radio"
                                name="gender"
                                value={gender}
                                checked={formData.gender === gender}
                                onChange={handleChange}
                              />
                              <span className="ml-2">{gender}</span>
                              <br />
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">
                      Pricing And Stock
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Base Pricing
                        </label>
                        <input
                          id="price"
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="stock"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Stock
                        </label>
                        <input
                          id="stock"
                          type="number"
                          name="stock"
                          value={formData.stock}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="discount"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Discount Price
                        </label>
                        <input
                          id="discount"
                          type="number"
                          name="discountPrice"
                          value={formData.discountPrice}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="discount-type"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Discount Type
                        </label>
                        <select
                          id="discount-type"
                          name="discountType"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        >
                          <option value="chinese-new-year">
                            Chinese New Year Discount
                          </option>
                          <option value="seasonal">Seasonal Discount</option>
                          <option value="clearance">Clearance Sale</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">
                      Upload Images
                    </h2>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-2">
                        {/* change of image on selection  */}
                        <img                        
                          src={formData.images.length>0 ?URL.createObjectURL(formData.images[selectedImage]):"watch1.png"}
                          alt="Product preview"
                          className="w-full object-cover rounded-lg"
                        />
                      </div>
                      {/* mapping the preview of images  */}
                      <div className="flex gap-2">
                        
                        {formData.images.map((file, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`relative border rounded-lg p-1 ${
                              selectedImage === index
                                ? "border-blue-600"
                                : "border-gray-200"
                            }`}
                          >
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Image ${index + 1}`}
                              className="w-20 h-20 center object-cover rounded"
                            />
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={handleInputButton}
                          className={`border rounded-lg p-4 flex items-center justify-center min-w-[80px] ${
                            formData.images.length === 4 ? "hidden" : ""
                          } `}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        {/* this will be visible only when we click the plus button  */}
                        <input
                          type="file"
                          id="imageInput"
                          style={{ display: "none" }} // Hide the input (it will be triggered by the button)
                          accept=".jpg, .jpeg, .png" // Only allow image files
                          onChange={handleImages}
                          multiple
                        />
                      </div>
                    </div>
                    {console.log("formdata images", formData.images)}
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">
                      Category
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700 font-serif"
                        >
                          Brand Name
                        </label>
                        <select
                          id="category"
                          name="categoryId"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                          onChange={handleChange}
                        >
                          {brands.map((brand) => (
                            <option key={brand._id} value={brand._id}>
                              {brand.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
