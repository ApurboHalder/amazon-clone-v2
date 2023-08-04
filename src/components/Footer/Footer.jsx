import React from "react";
import Logo from "../../assets/amazon-logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Flag from "react-flagkit";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Footer = () => {
  return (
    <>
      <footer className="absolute w-full mt-[2460px]">
        {/* browsing history */}
        <div className="w-full bg-white mt-5 p-5">
          <div className="border-2 border-[black] rounded-lg p-5 flex justify-between align-middle items-center">
            <p className="text-xs italic">
              After viewing product detail pages, look here to find an easy way
              to navigate back to pages you are interested in.
            </p>
            <div className="flex align-top">
              <ArrowRightIcon />
              <a className="text-[10px] text-[#007185] font-bold" href="/">
                View or edit your <br /> browsing history
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#485769] text-center">
          <p className="py-3 text-xs text-white font-medium">Back to top</p>
        </div>
        <div className="bg-[#232F3E] py-14">
          <div className=" w-2/3 mx-auto">
            <div className="grid grid-cols-4 gap-12">
              <div>
                <p className="text-base font-bold text-white">Get to Know Us</p>
                <ul>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      About Amazon
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Devices
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-base font-bold text-white">Get to Know Us</p>
                <ul>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      About Amazon
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Devices
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-base font-bold text-white">Get to Know Us</p>
                <ul>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      About Amazon
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Devices
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-base font-bold text-white">Get to Know Us</p>
                <ul>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      About Amazon
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Devices
                    </a>
                  </li>
                  <li>
                    <a className="text-sm text-white" href="/">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#3a4553]"></div>
        <div className="bg-[#232F3E] w-full flex items-center justify-center gap-4 py-8">
          <img className="w-24 mr-24" src={Logo} alt="" />

          <div>
            <div className="relative mt-1">
              <button
                type="button"
                className="relative py-3 pl-3 pr-10 text-left border-white border-[1px] text-white bg-[#232F3E] rounded-md shadow-lg cursor-default text-sm"
              >
                <span className="flex items-center">
                  <LanguageIcon />
                  <span className="block ml-3 truncate">English</span>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="relative mt-1">
              <button
                type="button"
                className="relative py-3 pl-3 pr-10 text-left border-white border-[1px] text-white bg-[#232F3E] rounded-md shadow-lg cursor-default text-sm"
              >
                <span className="flex items-center">
                  <AttachMoneyIcon />
                  <span className="block ml-3 truncate">USD - U.S. Dollar</span>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="relative mt-1">
              <button
                type="button"
                className="relative py-3 pl-3 pr-10 text-left border-white border-[1px] text-white bg-[#232F3E] rounded-md shadow-lg cursor-default text-sm"
              >
                <span className="flex items-center">
                  <Flag country="US" />
                  <span className="block ml-3 truncate">United States</span>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#131A22] text-white w-full ">
          <div className="flex gap-12 justify-center py-16 w-2/3 mx-auto">
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
            <ul>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28v py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
              <li className="w-28 py-4">
                <a className="text-sm" href="/">
                  <span className="font-bold">Amazon Music</span> Stream
                  millions of songs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#131A22] text-white text-center pb-8">
          <div className="flex justify-center gap-4 items-center">
            <a className="text-xs hover:underline" href="/">
              Conditions of Use
            </a>
            <a className="text-xs hover:underline" href="/">
              Privacy Notice
            </a>
            <a className="text-xs hover:underline" href="/">
              Your Ads Privacy Choices
            </a>
            <span className="text-[#0066FF] text-xs">
              <VerifiedUserIcon />
            </span>
          </div>
          <p className="text-xs ">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
