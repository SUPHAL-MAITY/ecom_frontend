import React ,{ useEffect } from 'react'
import "./PaymentSuccess.css"
import { useSearchParams } from "react-router-dom";
import axios from "axios";


import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'



const PaymentSuccess = () => {

    const { width, height } = useWindowSize()
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

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

      if (data.payment_status === "paid") {
        console.log("✅ Payment verified! Saving order...");

        // Save order details in your database
        // await axios.post("http://localhost:5000/api/v1/save-order", {
        //   userDetails: data.userDetails,
        //   items: data.cartItems,
        //   totalAmount: data.amount_total / 100,
        //   paymentIntent: data.payment_intent,
        //   status: "Paid",
        // });
        alert("order saved sucessfully")

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





