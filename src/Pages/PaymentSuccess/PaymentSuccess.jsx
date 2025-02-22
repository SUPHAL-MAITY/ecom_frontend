import React ,{ useEffect } from 'react'
import "./PaymentSuccess.css"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import { clearCart } from '../../features/Cart/cart.js';

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const apiUrl=import.meta.env.VITE_API_BASE_URL;

const address2=localStorage.getItem("address2")
const address1=localStorage.getItem("address1")


console.log("address2 from local storage",address2)
console.log("address1 from local storage",address1)

const PaymentSuccess = () => {

    const { width, height } = useWindowSize()
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const dispatch=useDispatch()


   const cart=useSelector((state)=>state.cart)

   const url = import.meta.env.VITE_API_URL;
   
   console.log(sessionId)

  useEffect(() => {
    if(address2){
      console.log("address 2 will be added")
      addAddress()
    }
    if (sessionId) {
      verifyPayment(sessionId);
    }

  

  }, [sessionId]);



  const verifyPayment = async (sessionId) => {
    try {
      const { data } = await axios.get( `${url}/api/v1/verify-payment?session_id=${sessionId}`);
      console.log("veified payment data",data)

      if (data.payment_status === "paid") {
        console.log("✅ Payment verified! Saving order...");
        dispatch(clearCart())
        // console.log("👉 User Details:", data.userDetails);
        // console.log("👉 Cart Items:", data.cartItems);
        console.log("👉 Total Amount:", data.amount_total / 100);
        console.log("👉 Payment Intent:", data.payment_intent);
        console.log("👉 Payment Status:", data.payment_status);
        console.log("👉 Payment ID:", data.payment_id);
        

        console.log("cart items",cart.cartItems)
  

        // Save order details in your database


        const orderResponse= await axios.post(`${url}/api/v1/create-order`, {
          
          
            status: "pending",
            totalPrice: cart.totalAmount,
            shippingAddress: address2 || address1,  
            paymentMethod: "card",
            paymentIntentId: data.payment_intent,
          
          
        },
        {
          withCredentials:true,
        }
      
      );

        if(orderResponse){
          alert("order saved sucessfully")

          console.log("orderresponse",orderResponse)

        }


        cart.cartItems.forEach(async(item)=>{

          const oderItemResponse=await axios.post(`${url}/api/v1/create-order-items`,{
            
            orderId: orderResponse?.data.data?._id,
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
            totalPrice:  item.totalPrice,
          
        })

          
        })

      

        
       

        console.log("✅ Order saved successfully!");
      }
    } catch (error) {
      console.error("❌ Error verifying payment:", error.message);
    }
  };


  const addAddress=async()=>{
    const {data}=await axios.post(`${apiUrl}/add-address`,{   
      address:address2,
      
    },
    {
      withCredentials: true, 
  }
   
  )

    console.log("address added successfuly",data)
  }
    

 






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





