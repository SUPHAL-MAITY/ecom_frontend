import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const TrendingProduct = () => {



    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 3000, min: 1441 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1440, min: 769 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 461 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };
      
  return (
    <div>

        <Carousel
        responsive={responsive}   
        >
        <div style={{height:"300px",width:"400px"}} ><img  style={{height:"300px",width:"400px"}}    src="watch1.png"   alt="" /></div>
        <div   style={{height:"300px",width:"400px"}}><img style={{height:"300px",width:"400px"}}    src="watch2.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}   src="watch3.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch4.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}   src="watch5.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch5.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch2.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch8.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"  alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"  alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img style={{height:"300px",width:"400px"}}   src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img style={{height:"300px",width:"400px"}}   src="watch1.png"  alt="" /></div>

        </Carousel>;
                
       
      
    </div>
  )
}

export default TrendingProduct
