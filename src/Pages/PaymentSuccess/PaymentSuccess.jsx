import React ,{ useEffect } from 'react'
import "./PaymentSuccess.css"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';


import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const apiUrl=import.meta.env.VITE_API_BASE_URL;



const PaymentSuccess = () => {

    const { width, height } = useWindowSize()
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const cart=useSelector((state)=>state.cart)

   const apiUrl=import.meta.env.VITE_API_BASE_URL
   console.log(sessionId)

  useEffect(() => {
    if (sessionId) {
      verifyPayment(sessionId);
    }
  }, [sessionId]);



  const verifyPayment = async (sessionId) => {
    try {
      const { data } = await axios.get( `${apiUrl}/verify-payment?session_id=${sessionId}`);
      console.log("veified payment data",data)

      if (data.payment_status === "paid") {
        console.log("✅ Payment verified! Saving order...");

        // console.log("👉 User Details:", data.userDetails);
        // console.log("👉 Cart Items:", data.cartItems);
        console.log("👉 Total Amount:", data.amount_total / 100);
        console.log("👉 Payment Intent:", data.payment_intent);
        console.log("👉 Payment Status:", data.payment_status);
        console.log("👉 Payment ID:", data.payment_id);
        

        console.log("cart items",cart.cartItems)
  

        // Save order details in your database
        const orderResponse= await axios.post(`${apiUrl}/create-order`, {
          
            userId: "6798ddda9a17dc23d75fa18a",
            status: "shipped",
            totalPrice: 100.50,
            shippingAddress: "Abc ldjl",
            paymentMethod: "card",
            paymentIntentId: "pi_ABC12345"
          
          
        });
        if(orderResponse){
          alert("order saved sucessfully")

        }
       

        console.log("✅ Order saved successfully!");
      }
    } catch (error) {
      console.error("❌ Error verifying payment:", error.message);
    }
  };
    

 






  return (
    <>

  

      <div className="container_payment  "  >
      <Confetti
      width={width}
      height={height}
    />
        <div className="row justify-content-center  ">
            <div className="col-md-5  " >
                 
                <div className="message-box _success">
                     
                     <i className="fa-solid fa-check"></i>
                    <h2> Your payment was successful </h2>
                   <p> Thank you for your payment. we will 
                   be in contact with more details shortly </p>      
            </div> 
        </div> 
        </div> 
      
      
  
  
     
  
      </div> 

  
      


    
    </>
  )
}

export default PaymentSuccess





