import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col w-full sm:flex-row ' >

        {/* left div */}
        <div className="    w-full sm:w-1/2">

                <div className="flex justify-center  w-full mt-4 mb-4 ">  
                    <img className='h-80 sm:mr-4' src="https://cdn2.ethoswatches.com/static/frontend/Ethos-v2/destkop/en_US/images/ethos-app.png" alt="" />
                    
                    <div className="flex flex-col justify-center  sm:w-64">
                        <h1 className='font-bold text-xl'>Download The App Today</h1>
                        <p className="">Lorem ipsum, dolor sit amet consectetur dolor sit </p>
                    </div>
                </div>
        
        
        
        </div>

         {/* right div */}
        <div className="w-full  sm:w-1/2"> 

                <div className="flex justify-center w-full mt-4 mb-4 ">  
                    <img className='h-80 w-52 ml-2 sm:w-auto sm:mr-4' src="https://cdn1.ethoswatches.com/media/special-pages/newhome/Million-Tree-Project.jpg" alt="" />
                    
                    <div className="flex flex-col justify-center  sm:w-64 ">
                        <h1 className='font-bold text-xl'>The Million Tree Project</h1>
                        <p className="">We, in partnership with responsible organisations, pledges to plant one million trees over the next 10 years. </p>
                    </div>
                </div>
        
        
        </div>

      
    </div>
  )
}

export default Footer
