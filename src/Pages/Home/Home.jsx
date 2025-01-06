import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {


useEffect(()=>{
    animation()
},[])


 function animation(){
    const tl_img= gsap .timeline({ease:"Power1.easeInOut"})
    .to(".men .img-overlay",{
        duration:1,
        y:"100%"
    })
    .to(".women .img-overlay",{
        duration:1,
        y:"100%"
    },"-=.7")

    .from(".img img",{
        opacity:0,
        duration:1,
        scale:1.2,
        stagger:.2
    })

    .from(".text h1",{
        opacity:0,
        duration:1,
        y:50
    })
    .from(".text h5",{
        opacity:0,
        duration:1,
        y:50
    },"-=.5")
    .to(".content",{
        y:"80px"
    })


    const tl_header= gsap .timeline({ease:"Power1.easeInOut"})

    .from("header",{
        delay:4.5,
        duration:1,
        y:-80,
    })

    .from("header .logo",{
        duration:1,
        y:-80,
        stagger:.1
    },"-=.4")




 }







  return (
    <>
      <div className="wrapper">
        <header>
          <div className="logo"></div>

          <div className="menu">
            <ul>
              <li>
                <a href="/watches">All watches</a>
              </li>
              <li>
                <a href="#">New edition</a>
              </li>
              <li>
                <a href="#">Editorial</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
            </ul>
          </div>
        </header>


        <div className="content">
          <div className="men common">
            <div className="img">
              <img className="image1" src="male_watch.png" alt="" />
              <div className="img-overlay"></div>
            </div>
            <div className="text">
              <h1>Men</h1>
              <h5>Collection</h5>
            </div>

            <div className="btn">
              <a href="">Shop Now</a>
            </div>
          </div>

          <div className="women common">
            <div className="img">
              <img  className="image2" src="women_image.png" alt="" />
              <div className="img-overlay"></div>
            </div>

            <div className="text">
              <h1>Women</h1>
              <h5>Collection</h5>
            </div>

            <div className="btn">
              <a href="">Shop Now</a>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Home;
