import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionApp from "../../Components/SectionApp/SectionApp";
import "./trendingProduct.css";

const TrendingProduct = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 5,
    },
    LargeDesktop: {
      breakpoint: { max: 1800, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1279, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 461 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div>
        <Carousel
          swipeable={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          responsive={responsive}
        >
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch2.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch3.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch4.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch5.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch5.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch2.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch8.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
          <div style={{ height: "300px", width: "400px" }}>
            <img
              style={{ height: "300px", width: "400px" }}
              src="watch1.png"
              alt=""
            />
          </div>
        </Carousel>

        <div className="" data-aos="flip-up" data-aos-duration="2000">
          <img src="orient.png" alt=""   className="h-[740px] hidden lg:block w-full mt-6 mb-6 hover:blur-sm"/>
        </div>

        {/* trending section  */}

        <div className="flex flex-col ">
          <h1
            className="trending_page_heading"
            style={{ color: "red", paddingLeft: "6px" }}
          >
            Featured Articles{" "}
          </h1>
          <div className="grid grid-cols-1  sm:grid-cols-[60%_40%]  ">
            <div
              className="trending_grid_1  "
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <img className="trending_page_img1" src="watch1.png" alt="" />
              <div className="grid grid-rows-[40px_1fr] bg-gray-100">
                <p className="trending_page_para text-red-500">Spotlight</p>
                <h1 className="trending_page_heading">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium similique , Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Praesentium similique,Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                  similique{" "}
                </h1>
              </div>
            </div>

            <div className=" grid  grid-rows-2 sm:ml-4 sm:mr-1.5 ">
              <div
                className=""
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <img
                  style={{ height: "88%", width: "100%" }}
                  src="watch3.png"
                  alt=""
                />
                <h1 className="trending_page_heading2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium similique , Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Praesentium similique,Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                  similique{" "}
                </h1>
              </div>
              <div
                className="relative bg-gray-100"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <img
                  className="z-0"
                  style={{ height: "88%", width: "100%" }}
                  src="watch4.png"
                  alt=""
                />
                <h1 className="trending_page_heading2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium similique , Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Praesentium similique,Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                  similique{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* shop by brand section */}

        <div className="shop_by_brand_outer_box w-full p-4 grid grid-rows-[40px_1fr]  ">
          <h1 style={{ color: "blue" }} className="trending_page_heading ">
            Shop By Brand
          </h1>
          <div className="shop_by_brand_inner_box grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7  ">
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
            <div
              className=" flex justify-center bg-gray-100"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              {" "}
              <img
                style={{ height: "80px", width: "95%" }}
                src="bell.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* App section */}

        <SectionApp />
      </div>
    </>
  );
};

export default TrendingProduct;
