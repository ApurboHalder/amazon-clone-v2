import React from "react";

// banner images
import banner1 from "../../assets/images/Banner/banner1m.jpg";

// main category images
import headphone1 from "../../assets/images/headphone1.jpg";
import keyboard1 from "../../assets/images/keyboard1.jpg";
import mouse1 from "../../assets/images/mouse1.jpg";
import chair1 from "../../assets/images/chair1.jpg";
import jeans1 from "../../assets/images/jeans1.jpg";
import tops1 from "../../assets/images/tops1.jpg";
import dress1 from "../../assets/images/dress1.jpg";
import shoes1 from "../../assets/images/shoes1.jpg";
import toys1 from "../../assets/images/toys1.jpg";
import signin1 from "../../assets/images/signin1.jpg";
import home1 from "../../assets/images/home1.jpg";
import dining1 from "../../assets/images/dining1.jpg";
import home2 from "../../assets/images/home2.jpg";
import kitchen1 from "../../assets/images/kitchen1.jpg";
import health1 from "../../assets/images/health1.jpg";
// import health2 from "../../assets/images/health2.jpg";
import beauty1 from "../../assets/images/beauty1.jpg";
import electronics1 from "../../assets/images/electronics1.jpg";

const Home = () => {
  return (
    <>
      {/* Home screen   */}
      <div className="px-2 ">
        {/* banner  */}
        <div className="carousel w-full relative">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* main category section  */}
        <div className="grid grid-cols-4 pl-4 pr-6 gap-5 absolute top-[350px] mb-4">
          {/* Gaming accessories */}
          <div className="py-5 bg-white px-4">
            <p className="text-xl font-bold mb-4">Gaming accessories</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 my-8">
              <div>
                <img src={headphone1} alt="" />
                <p className="text-xs">Headsets</p>
              </div>
              <div>
                <img src={keyboard1} alt="" />
                <p className="text-xs">Keyboards</p>
              </div>
              <div>
                <img src={mouse1} alt="" />
                <p className="text-xs">Computer mice</p>
              </div>
              <div>
                <img src={chair1} alt="" />
                <p className="text-xs">Chairs</p>
              </div>
            </div>
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              See More
            </a>
          </div>

          {/* Shop deals in Fashion */}
          <div className="py-5 bg-white px-4">
            <p className="text-xl font-bold mb-4">Shop deals in Fashion</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 my-8">
              <div>
                <img src={jeans1} alt="" />
                <p className="text-xs">Jeans under $50</p>
              </div>
              <div>
                <img src={tops1} alt="" />
                <p className="text-xs">Tops under $25</p>
              </div>
              <div>
                <img src={dress1} alt="" />
                <p className="text-xs">Dreasses under $30</p>
              </div>
              <div>
                <img src={shoes1} alt="" />
                <p className="text-xs">Shoes under $50</p>
              </div>
            </div>
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              See all deals
            </a>
          </div>

          {/* Toys Under $30 */}
          <div className="py-5 bg-white px-4">
            <p className="text-xl font-bold ">Toys Under $30</p>
            <img className="my-7" src={toys1} alt="" />
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              Shop now
            </a>
          </div>

          {/* Sign in for the best experience */}
          <div className="text-center">
            <div className="bg-white py-5 px-4">
              <p className="text-xl font-bold ">
                Sign in for the best experience
              </p>
              <button className="btn bg-[#F7CA00] rounded-md w-3/4 py-2 mt-4 mb-5">
                Sign in securely
              </button>
            </div>
            <img className="mx-auto mt-4" src={signin1} alt="" />
          </div>

          {/* Refresh your space */}
          <div className="bg-white py-5 px-4">
            <p className="text-xl font-bold mb-4">Refresh your space</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 my-8">
              <div>
                <img src={dining1} alt="" />
                <p className="text-xs">Dining</p>
              </div>
              <div>
                <img src={home2} alt="" />
                <p className="text-xs">Home</p>
              </div>
              <div>
                <img src={kitchen1} alt="" />
                <p className="text-xs">Kitchen</p>
              </div>
              <div>
                <img src={health1} alt="" />
                <p className="text-xs">Health and Beauty</p>
              </div>
            </div>
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              See more
            </a>
          </div>

          {/* Electronics */}
          <div className="bg-white py-5 px-4">
            <p className="text-xl font-bold ">Electronics</p>
            <img className="py-1" src={electronics1} alt="" />
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              See more
            </a>
          </div>

          {/* Home & Kitchen Under $30 */}
          <div className="bg-white py-5 px-4">
            <p className="text-xl font-bold ">Home & Kitchen Under $30</p>
            <img className="my-7" src={home1} alt="" />
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              Shop now
            </a>
          </div>

          {/* Beauty picks */}
          <div className="bg-white py-5 px-4">
            <p className="text-xl font-bold ">Beauty picks</p>
            <img className="my-7" src={beauty1} alt="" />
            <a className="text-[#007185] hover:text-[#FFD004] text-sm" href="/">
              Shop now
            </a>
          </div>
        </div>

        {/* Popular products in PC internationally */}
        {/* <div className="bg-white w-[98%] mt-[32rem] mx-auto p-4">
          <p className="text-xl font-bold">
            Popular products in PC internationally
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Home;
