import React, { useState } from "react";
import { Select } from "../../Components/FormComponents/Select";
import { Input } from "../../Components/FormComponents/Input";

import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    address: "",
    locality: "",
    landmark: "",
    country: "",
  });
  const [firstBlockVsible,setFirstBlockVsible] = useState(false);

  const apiUrl = "http://localhost:3000";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Load Stripe
    const stripe = await loadStripe(
      "pk_test_51Qh8djCKxfS1go2S29mQbRlB7q4Q8yxtUIZKpyNLsGNmZFrqJruXbKb8Lxdjfs7JeOddRb8fK2jwnrsdQFUS3V8A00zwnU9ZhL"
    );

    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }

    console.log("Cart:", cart);

    // sedning product details from the cart to

    const body = {
      products: cart.cartItems,
    };

    try {
      // Send request to your backend to create the checkout session
      const response = await axios.post(
        `${apiUrl}/api/v1/create-checkout-session`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract session ID from the response
      const { id: sessionId } = response.data;

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        console.error("Stripe Checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error.message || error);
    }
  };


  const handleBlockVisiblity=()=>{
    setFirstBlockVsible(prev=>!prev);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-serif">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold  mb-6">
          Billing Information
        </h1>
        
       
          <form onSubmit={handleSubmit}>

          <div className={firstBlockVsible ? "block":"hidden"}>
          <Select
              label="address"
             
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select a Address" },
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />

            <Select
              label="locality"
              id="locality"
              name="locality"
              required
              value={formData.locality}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select a Address" },
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />

            <Select
              label="landmark"
              id="landmark"
              name="landmark"
              required
              value={formData.landmark}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select a Address" },
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />

            <Select
              label="Country"
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select a country" },
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />


          </div>
           
          <div className={firstBlockVsible ? "hidden":"block"}>
          <Input
              label="address"
              id="address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleInputChange}
              placeHolder="John Doe"
            />

            <Input
              label="locality"
              id="locality"
              name="locality"
              type="text"
              required
              value={formData.locality}
              onChange={handleInputChange}
              placeHolder="John Doe"
            />

            <Input
              label="landmark"
              id="landmark"
              name="landmark"
              type="text"
              required
              value={formData.landmark}
              onChange={handleInputChange}
              placeHolder="John Doe"
            />

            <Input
              label="country"
              id="country"
              name="country"
              type="text"
              required
              value={formData.country}
              onChange={handleInputChange}
              placeHolder="John Doe"
            />


          </div>
           

          <div className="flex flex-col justify-center items-center mb-4">
              <button classNameName="add_address_btn m-1 p-4" onClick={handleBlockVisiblity}>
                <i class="fa-solid fa-plus"></i>
              </button>
              <h1 className="font-serif mt-2">{firstBlockVsible ? "Add New Shipping Address":"Add Esisting Address"  }</h1>
          </div>

            <button
              type="submit"
              
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
            >
              Pay $99.99
            </button>
          </form>

        
        </div>


    </div>
   
  );
};

export default Checkout;
