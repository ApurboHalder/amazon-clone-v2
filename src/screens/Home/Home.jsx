import React from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

// Popular products images
import ssd1 from "../../assets/images/popular/ssd1.jpg";
import monitor1 from "../../assets/images/popular/monitor1.jpg";
import ssd2 from "../../assets/images/popular/ssd2.jpg";
import mousepad1 from "../../assets/images/popular/mousepad1.jpg";
import mouse2 from "../../assets/images/popular/mouse2.jpg";
import sandisk1 from "../../assets/images/popular/sandisk1.jpg";

// Popular products in Beauty internationally
import panoxyl1 from "../../assets/images/beauty/panoxyl1.jpg";
import panoxyl2 from "../../assets/images/beauty/panoxyl2.jpg";
import ultraSheer1 from "../../assets/images/beauty/ultraSheer1.jpg";
import sportFace1 from "../../assets/images/beauty/sportFace1.jpg";
import lowGl1 from "../../assets/images/beauty/lowGl1.jpg";
import exfoliate1 from "../../assets/images/beauty/exfoliate1.jpg";
import panoxyl3 from "../../assets/images/beauty/panoxyl3.jpg";
import toms1 from "../../assets/images/beauty/toms1.jpg";

// Sub-category-1 images
import subCat11 from "../../assets/images/sub-category-1/subCat11.jpg";
import subCat111 from "../../assets/images/sub-category-1/subCat111.jpg";
import subCat112 from "../../assets/images/sub-category-1/subCat112.jpg";
import subCat113 from "../../assets/images/sub-category-1/subCat113.jpg";
import subCat114 from "../../assets/images/sub-category-1/subCat114.jpg";
import subCat12 from "../../assets/images/sub-category-1/subCat12.jpg";
import subCat13 from "../../assets/images/sub-category-1/subCat13.jpg";
import subCat14 from "../../assets/images/sub-category-1/subCat14.jpg";

const Home = () => {
  return (
    <>
      {/* Home screen   */}
      <div className="px-2 relative">
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
        <div className="pl-4 pr-6 absolute top-[250px] mb-4">
          <div className="grid grid-cols-4 gap-5">
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
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
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
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                See all deals
              </a>
            </div>

            {/* Toys Under $30 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold ">Toys Under $30</p>
              <img className="my-7" src={toys1} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
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
              <img className="w-[240px] mx-auto mt-4" src={signin1} alt="" />
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
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                See more
              </a>
            </div>

            {/* Electronics */}
            <div className="bg-white py-5 px-4">
              <p className="text-xl font-bold ">Electronics</p>
              <img className="py-1" src={electronics1} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                See more
              </a>
            </div>

            {/* Home & Kitchen Under $30 */}
            <div className="bg-white py-5 px-4">
              <p className="text-xl font-bold ">Home & Kitchen Under $30</p>
              <img className="my-7" src={home1} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                Shop now
              </a>
            </div>

            {/* Beauty picks */}
            <div className="bg-white py-5 px-4">
              <p className="text-xl font-bold ">Beauty picks</p>
              <img className="my-7" src={beauty1} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Popular products in PC internationally */}
          <div className="bg-white px-4 py-5 my-5">
            <p className="text-xl font-bold">
              Popular products in Beauty internationally
            </p>
            <div className="grid grid-cols-6 items-center justify-items-center gap-4">
              <img src={ssd1} alt="" />
              <img src={monitor1} alt="" />
              <img src={ssd2} alt="" />
              <img src={mousepad1} alt="" />
              <img src={mouse2} alt="" />
              <img src={sandisk1} alt="" />
            </div>
          </div>

          {/* Popular products in Beauty internationally */}
          <div className="bg-white px-4 py-5 my-5">
            <p className="text-xl font-bold">
              Popular products in Beauty internationally
            </p>
            <div className="grid grid-cols-8 items-center justify-items-center gap-4">
              <img src={panoxyl1} alt="" />
              <img src={panoxyl2} alt="" />
              <img src={ultraSheer1} alt="" />
              <img src={sportFace1} alt="" />
              <img src={lowGl1} alt="" />
              <img src={exfoliate1} alt="" />
              <img src={panoxyl3} alt="" />
              <img src={toms1} alt="" />
            </div>
          </div>

          {/* Sub category-1  */}
          <div className="grid grid-cols-4 gap-5">
            {/* sub-cat-1-card-1 */}
            <div className="py-6 bg-white px-4">
              <p className="text-xl font-bold ">
                Frequently repurchased in Home
              </p>
              <div>
                <img className="mx-auto" src={subCat11} alt="" />
                <p className="text-xs">
                  Camco TST MAX Camper/RV Toilet Treatment Drop-INs | Control
                  Unwanted Odors and Break…
                </p>
                <div>
                  <p className="text-sm font-semibold">
                    <sup>$</sup> 17 <sup>.59 </sup>{" "}
                    <span className="font-light text-xs">
                      List: <strike>$22.99</strike>
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 align-middle justify-center">
                  <img
                    className="border-4 border-[#007185] h-14 rounded-lg p-2"
                    src={subCat111}
                    alt=""
                  />
                  <img
                    className="border-2 border-[black]  h-14 rounded-lg p-2"
                    src={subCat112}
                    alt=""
                  />
                  <img
                    className="border-2 border-[black]  h-14 rounded-lg p-2"
                    src={subCat113}
                    alt=""
                  />
                  <img
                    className="border-2 border-[black]  h-14 rounded-lg p-2"
                    src={subCat114}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* sub-cat-1-card-2 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold mb-4">New arrivals in Toys</p>
              <img className="my-5" src={subCat12} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                Shop Now
              </a>
            </div>
            {/* sub-cat-1-card-3 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold mb-4">Discover fashion trends</p>
              <img className="my-5" src={subCat13} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                See more
              </a>
            </div>
            {/* sub-cat-1-card-4 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold mb-4">For your Fitness Needs</p>
              <img className="my-5" src={subCat14} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Popular products in PC internationally */}
          <div className="bg-white px-4 py-5 my-5">
            <p className="text-xl font-bold">
              Popular products in Beauty internationally
            </p>
            <div className="grid grid-cols-6 items-center justify-items-center gap-4">
              <img src={ssd1} alt="" />
              <img src={monitor1} alt="" />
              <img src={ssd2} alt="" />
              <img src={mousepad1} alt="" />
              <img src={mouse2} alt="" />
              <img src={sandisk1} alt="" />
            </div>
          </div>

          {/* Popular products in Beauty internationally */}
          <div className="bg-white px-4 py-5 my-5">
            <p className="text-xl font-bold">
              Popular products in Beauty internationally
            </p>
            <div className="grid grid-cols-8 items-center justify-items-center gap-4">
              <img src={panoxyl1} alt="" />
              <img src={panoxyl2} alt="" />
              <img src={ultraSheer1} alt="" />
              <img src={sportFace1} alt="" />
              <img src={lowGl1} alt="" />
              <img src={exfoliate1} alt="" />
              <img src={panoxyl3} alt="" />
              <img src={toms1} alt="" />
            </div>
          </div>

          {/* Sub category-1  */}
          <div className="grid grid-cols-4 gap-5">
            {/* sub-cat-1-card-1 */}

            <div className="py-6 bg-white px-4">
              <p className="text-xl font-bold ">
                Frequently repurchased in Home
              </p>
              <div>
                <img className="mx-auto" src={subCat11} alt="" />
                <p className="text-xs">
                  Camco TST MAX Camper/RV Toilet Treatment Drop-INs | Control
                  Unwanted Odors and Break…
                </p>
                <div>
                  <p className="text-sm font-semibold">
                    <sup>$</sup> 17 <sup>.59 </sup>{" "}
                    <span className="font-light text-xs">
                      List: <strike>$22.99</strike>
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 align-middle justify-center">
                  <img
                    className="border-4 border-[#007185] h-14 rounded-lg p-2"
                    src={subCat111}
                    alt=""
                  />
                  <img
                    className="border-2 border-[black]  h-14 rounded-lg p-2"
                    src={subCat112}
                    alt=""
                  />
                  <img
                    className="border-2 border-[black]  h-14 rounded-lg p-2"
                    src={subCat113}
                    alt=""
                  />
                  <img
                    className="border-2 border-[black]  h-14 rounded-lg p-2"
                    src={subCat114}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* sub-cat-1-card-2 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold mb-4">New arrivals in Toys</p>
              <img className="my-5" src={subCat12} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                Shop Now
              </a>
            </div>
            {/* sub-cat-1-card-3 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold mb-4">Discover fashion trends</p>
              <img className="my-5" src={subCat13} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                See more
              </a>
            </div>
            {/* sub-cat-1-card-4 */}
            <div className="py-5 bg-white px-4">
              <p className="text-xl font-bold mb-4">For your Fitness Needs</p>
              <img className="my-5" src={subCat14} alt="" />
              <a
                className="text-[#007185] hover:text-[#FFD004] text-sm"
                href="/"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* browsing history */}
          <div className="w-full bg-white my-5 p-5">
            <div className="border-2 border-[black] rounded-lg p-5 flex justify-between align-middle items-center">
              <p className="text-xs italic">
                After viewing product detail pages, look here to find an easy
                way to navigate back to pages you are interested in.
              </p>
              <div className="flex align-top">
                <ArrowRightIcon />
                <a className="text-[10px] text-[#007185] font-bold" href="/">
                  View or edit your <br /> browsing history
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
