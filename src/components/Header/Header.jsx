import React from "react";
import Logo from "../../assets/amazon-logo.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Flag from "react-flagkit";

const Header = () => {
  return (
    <>
      <header>
        {/* nav-belt  */}
        <div className="w-full h-[60px] flex text-white bg-[#131921] justify-between items-center">
          {/* nav-left */}
          <div className="flex items-center ml-2">
            {/* nav-logo  */}
            <div className="p-2">
              <a href="/">
                <img className="h-[30px]" src={Logo} alt="logo" />
              </a>
            </div>

            {/* nav-location  */}
            <div className="flex-row p-2">
              <p className="text-xs ml-6 leading-[0.5rem]">Deliver to</p>
              <div className="flex">
                <PlaceOutlinedIcon />
                <a href="/" className="text-sm font-bold hover:text-[#FEBD69]">
                  Bangladesh
                </a>
              </div>
            </div>
          </div>

          {/* nav-search  */}
          <div className="w-[58%] px-2">
            <form>
              <div className="flex items-center">
                <select class="flex py-2 px-3 text-[black] bg-gray-200 border border-gray-300 rounded-l-lg">
                  <option value="default">All</option>
                </select>
                <input
                  type="text"
                  placeholder="Search Amazon"
                  class="block w-full placeholder-gray-400/70 bg-white px-5 py-2 text-black  "
                />
                <button
                  className="py-2 px-3 bg-[#FEBD69] rounded-r-lg"
                  type="submit"
                >
                  <SearchOutlinedIcon />
                </button>
              </div>
            </form>
          </div>

          {/* nav-right  */}
          <div className="flex items-center mr-3">
            {/* nav-language  */}
            <div className="flex items-center gap-1 p-2">
              <Flag country="US" />
              <p className="text-sm font-bold hover:text-[#FEBD69] cursor-pointer">
                EN
                <select
                  className="bg-[#131921] text-white "
                  name=""
                  id=""
                ></select>
                {/* <KeyboardArrowDownOutlinedIcon /> */}
              </p>
            </div>

            {/* Account & Listing  */}
            <div className="flex-col items-start p-2">
              <p className="text-xs leading-[0.5rem]">Hello, sign in</p>
              <div className="flex">
                <a href="/" className="text-sm font-bold hover:text-[#FEBD69]">
                  Account & Lists
                </a>
                <select className="bg-[#131921]"></select>
              </div>
            </div>

            {/* Returns & Order  */}
            <div className="p-2">
              <p className="text-xs leading-[0.5rem]">Returns</p>
              <a href="/" className="text-sm font-bold hover:text-[#FEBD69]">
                & Orders
              </a>
            </div>

            {/* cart */}
            <div className="flex items-center p-2">
              <div className="relative">
                <ShoppingCartOutlinedIcon />
                <span className="font-bold absolute bottom-4 -right-1 text-[#FEBD69]">
                  0
                </span>
              </div>
              <a href="/" className="text-sm font-bold hover:text-[#FEBD69]">
                Cart
              </a>
            </div>
          </div>
        </div>
        {/* nav-main */}
        <div className=" w-full bg-[#232F3E] text-white px-4 py-2 align-middle">
          <ul className="flex gap-4 font-bold ">
            <li>
              <a className="hover:text-[#FEBD69] flex gap-1 text-sm" href="/">
                <MenuOutlinedIcon />
                All
              </a>
            </li>
            <li className="hover:text-[#FEBD69]">
              <a className="text-sm" href="/">
                Todays Deals
              </a>
            </li>
            <li className="hover:text-[#FEBD69]">
              <a className="text-sm" href="/">
                Customer Service
              </a>
            </li>
            <li className="hover:text-[#FEBD69]">
              <a className="text-sm" href="/">
                Registry
              </a>
            </li>
            <li className="hover:text-[#FEBD69]">
              <a className="text-sm" href="/">
                Gift Cards
              </a>
            </li>
            <li className="">
              <a className="text-sm" href="/">
                Sell
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
