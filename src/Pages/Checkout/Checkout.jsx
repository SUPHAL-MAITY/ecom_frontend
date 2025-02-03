import React, { useState } from "react";
import { Select } from "../../Components/FormComponents/Select";
import { Input } from "../../Components/FormComponents/Input";

import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
 

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");




  const [firstBlockVsible, setFirstBlockVsible] = useState(false);

  const apiUrl = "http://localhost:3000";

  const handleInputChange1 = (e) => {
    setAddress1(e.target.value);
  };


  const handleInputChange2 = (e) => {
    setAddress2(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    ///validation
    if (!address1 && !address2) {
      alert("please provide at least one address");
      return;
    }
    if(address1 && address2){
      alert("please provide only one address")
      return;
    }
    ///saving address1 and address2 to the local storage  that will be obtained in success page

    if(address2){
      localStorage.setItem("address2", address2);
    }
    if(address1){
      localStorage.setItem("address1", address1);
    }

    
    console.log("Form submitted");

    // Load Stripe
    const stripe = await loadStripe(
      "pk_test_51Qh8djCKxfS1go2S29mQbRlB7q4Q8yxtUIZKpyNLsGNmZFrqJruXbKb8Lxdjfs7JeOddRb8fK2jwnrsdQFUS3V8A00zwnU9ZhL"
    );

    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }

    

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

  const handleBlockVisiblity = () => {
    setFirstBlockVsible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-serif">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold  mb-6">Billing Information</h1>

        <form onSubmit={handleSubmit}>
          <div className={firstBlockVsible ? "block" : "hidden"}>
            <Select
              label="address1"
              id="address1"
              value={address1}
              onChange={handleInputChange1}
              options={[
                { value: "", label: "Select a Address" },
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />
          </div>

          <div className={firstBlockVsible ? "hidden" : "block"}>
            <Input
              label="address"
              id="address2"
              type="text"
              value={address2}
              onChange={handleInputChange2}
              placeholder="123 Main street"
            />
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <button
              type="button"
              className="add_address_btn m-1 p-4"
              onClick={handleBlockVisiblity}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            <h1 className="font-serif mt-2">
              {firstBlockVsible
                ? "Add New Shipping Address"
                : "Add Esisting Address"}
            </h1>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
          >
          Pay  {cart.totalAmount}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
