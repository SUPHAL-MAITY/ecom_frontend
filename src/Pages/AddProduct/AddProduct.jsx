import React ,{ useState } from 'react'
import SidebarForAdmin from '../../Components/SidebarForAdmin/SidebarForAdmin'




const AddProduct = () => {

    const [selectedSize, setSelectedSize] = useState('S')
    const [selectedGender, setSelectedGender] = useState('Woman')
    const [selectedImage, setSelectedImage] = useState(0)

    const sizes = ['XS', 'S', 'M', 'XL', 'XXL']
    const thumbnails = [
        'watch1.png',
        'watch2.png',
        'watch3.png',
    ]

  return (
    <>

     
   <div className="relative flex items-stretch min-h-screen">
        <div className="w-[250px]   ">
            <SidebarForAdmin/>

        </div>

        
        <div className="  flex-1 overflow-x-auto">

        <div className="container mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold font-serif">Add New Product</h1>
                <div className="space-x-3">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 font-serif">Save Draft</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-serif">Add Product</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">General Information</h2>
                    <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-serif">Name Product</label>
                        <input
                        id="name"
                        type="text"
                        defaultValue="Puffer Jacket With Pocket Detail"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 font-serif">Description Product</label>
                        <textarea
                        id="description"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        defaultValue="Cropped puffer jacket made of technical fabric. High neck and long sleeves. Flap pocket at the chest and in-seam side pockets at the hip. Inside pocket detail. Hem with elastic interior. Zip-up front."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-serif">Size</label>
                        <div className="flex gap-2 mt-1">
                        {sizes.map((size) => (
                            <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-2 rounded-md font-serif ${
                                selectedSize === size
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                            >
                            {size}
                            </button>
                        ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-serif">Gender</label>
                        <div className="flex gap-4 mt-1">
                        {['Men', 'Woman', 'Unisex'].map((gender) => (
                            <label key={gender} className="inline-flex items-center font-serif">
                            <input
                                type="radio"
                                className="form-radio"
                                name="gender"
                                value={gender}
                                checked={selectedGender === gender}
                                onChange={() => setSelectedGender(gender)}
                            />
                            <span className="ml-2">{gender}</span>
                            </label>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">Pricing And Stock</h2>
                    <div className="space-y-4">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 font-serif">Base Pricing</label>
                        <input
                        id="price"
                        type="number"
                        defaultValue="47.55"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        />
                    </div>
                    <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700 font-serif">Stock</label>
                        <input
                        id="stock"
                        type="number"
                        defaultValue="77"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        />
                    </div>
                    <div>
                        <label htmlFor="discount" className="block text-sm font-medium text-gray-700 font-serif">Discount</label>
                        <input
                        id="discount"
                        type="number"
                        defaultValue="10"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="discount-type" className="block text-sm font-medium text-gray-700 font-serif">Discount Type</label>
                        <select
                        id="discount-type"
                        defaultValue="chinese-new-year"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        >
                        <option value="chinese-new-year">Chinese New Year Discount</option>
                        <option value="seasonal">Seasonal Discount</option>
                        <option value="clearance">Clearance Sale</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>

                <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">Upload Img</h2>
                    <div className="space-y-4">
                    <div className="border rounded-lg p-2">
                        <img
                        src="watch1.png"
                        alt="Product preview"
                        className="w-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex gap-2">
                        {thumbnails.map((thumb, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`relative border rounded-lg p-1 ${
                            selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                            }`}
                        >
                            <img
                            src={thumb}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-20 h-20 object-cover rounded"
                            />
                        </button>
                        ))}
                        <button className="border rounded-lg p-4 flex items-center justify-center min-w-[80px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 font-serif">Category</h2>
                    <div className="space-y-4">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 font-serif">Product Category</label>
                        <select
                        id="category"
                        defaultValue="jacket"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-serif"
                        >
                        <option value="jacket">Jacket</option>
                        <option value="pants">Pants</option>
                        <option value="shirts">Shirts</option>
                        </select>
                    </div>
                   
                    </div>
                </div>
                </div>
            </div>
        </div>
        


        </div>


   </div>
   

   
    </>
  )
}

export default AddProduct
