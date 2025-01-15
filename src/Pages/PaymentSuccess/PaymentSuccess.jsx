import React from 'react'
import "./PaymentSuccess.css"

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'



const PaymentSuccess = () => {

    const { width, height } = useWindowSize()



    








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





