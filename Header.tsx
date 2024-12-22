"use client";
import Image from "next/image";
import Link from "next/link";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

/*
Main Color : #6427FF
This Header for Screens Width = +1280px


*/

const Header = () => {
  return (
    <header className="fixed top-0">
      <div className="container w-screen flex gap-5">
        <div className="rounded-lg overflow-hidden h-[200px]">
          <div className="skew-y-[-6deg] bg-[#6427FF] w-[150px] h-[150px] absolute bottom-[-10px] translate-x-[25px] rounded-lg translate-y-[-10px] flex justify-center items-center shadow-lg"></div>
          <div className="logo skew-y-[-6deg] bg-white w-[200px] h-[200px] rounded-lg translate-y-[-10px] flex justify-center items-center shadow-lg">
            <Image
              src={"/elitepng.png"}
              alt="Logo"
              width={80}
              height={40}
              className="skew-y-[6deg]"
            />
          </div>
        </div>
        <div className="nav flex-1">
          <div className="top h-[50px] flex justify-between items-center text-white">
            <div className="right flex h-full justify-center items-center">
              <div className="place me-4 pe-4 border-r-[#00000080] border-r-[1px] h-full flex justify-center items-center">
                <PlaceIcon className="text-[#6427FF] me-2" />
                {/* FIXME: Change the Address */}
                <span>60 Golden Street, New York</span>
              </div>
              <div>
                <MailOutlineIcon className="text-[#6427FF] me-2" />
                {/* FIXME: Change the Gmail Address */}
                <span>info@example.com</span>
              </div>
            </div>
            <div className="left flex justify-center items-center h-full">
              <div className="time  me-4 pe-4 border-r-[#00000080] border-r-[1px] h-full flex justify-center items-center">
                <AccessTimeIcon className="text-[#6427FF]" />
                {/* FIXME: Change Time of Work */}
                <span>Mon-Sat: 9.00am To 7.00pm</span>
              </div>
              {/* FIXME: Social Media Links */}
              <div className="social-media flex gap-3">
                <Link
                  href={"/"}
                  className="rounded-full duration-300 p-1 hover:bg-white flex justify-center items-center"
                >
                  <FacebookIcon className="hover:text-[#6427FF] text-white duration-300" />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full duration-300 p-1 hover:bg-white flex justify-center items-center"
                >
                  <GoogleIcon className="hover:text-[#6427FF] text-white duration-300" />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full duration-300 p-1 hover:bg-white flex justify-center items-center"
                >
                  <XIcon className="hover:text-[#6427FF] text-white duration-300" />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full duration-300 p-1 hover:bg-white flex justify-center items-center"
                >
                  <LinkedInIcon className="hover:text-[#6427FF] text-white duration-300" />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full duration-300 p-1 hover:bg-white flex justify-center items-center"
                >
                  <InstagramIcon className="hover:text-[#6427FF] text-white duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom bg-white w-full h-[70px] rounded-lg rounded-br-[100px] flex items-center justify-between">
            <ul className="flex gap-4 mx-5">
              <Link
                href={"/"}
                className="hover:text-[#6427FF] relative duration-300 before:w-0 before:duration-500 hover:before:w-[15px] before:absolute before:h-[2px] before:bottom-[-5px] before:bg-[#6427FF]"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="hover:text-[#6427FF] relative duration-300 before:w-0 before:duration-500 hover:before:w-[15px] before:absolute before:h-[2px] before:bottom-[-5px] before:bg-[#6427FF]"
              >
                Pages
              </Link>
              <Link
                href={"/"}
                className="hover:text-[#6427FF] relative duration-300 before:w-0 before:duration-500 hover:before:w-[15px] before:absolute before:h-[2px] before:bottom-[-5px] before:bg-[#6427FF]"
              >
                Blog
              </Link>
              <Link
                href={"/"}
                className="hover:text-[#6427FF] relative duration-300 before:w-0 before:duration-500 hover:before:w-[15px] before:absolute before:h-[2px] before:bottom-[-5px] before:bg-[#6427FF]"
              >
                Portfolio
              </Link>
              <Link
                href={"/"}
                className="hover:text-[#6427FF] relative duration-300 before:w-0 before:duration-500 hover:before:w-[15px] before:absolute before:h-[2px] before:bottom-[-5px] before:bg-[#6427FF]"
              >
                Shop
              </Link>
              <Link
                href={"/"}
                className="hover:text-[#6427FF] relative duration-300 before:w-0 before:duration-500 hover:before:w-[15px] before:absolute before:h-[2px] before:bottom-[-5px] before:bg-[#6427FF]"
              >
                Contact
              </Link>
            </ul>
            <ul className="me-5 flex gap-3 items-center">
              <div className="profile rounded-full p-1 cursor-pointer hover:bg-[#00000010] duration-300 w-[40px] h-[40px] flex justify-center items-center border-[1px] border-[#00000010]">
                <PersonIcon className="text-black duration-300 cursor-pointer hover:text-[#6427FF]" />
              </div>
              <div className="shop rounded-full p-1 cursor-pointer hover:bg-[#00000010] duration-300 w-[40px] h-[40px] flex justify-center items-center border-[1px] border-[#00000010]">
                <ShoppingCartIcon className="text-black duration-300 cursor-pointer hover:text-[#6427FF]" />
              </div>
              <div className="search rounded-full p-1 cursor-pointer hover:bg-[#00000010] duration-300 w-[40px] h-[40px] flex justify-center items-center border-[1px] border-[#00000010]">
                <SearchIcon className="text-black duration-300 cursor-pointer hover:text-[#6427FF]" />
              </div>
              <div className="about rounded-full p-2 cursor-pointer hover:bg-[#00000020] bg-[#00000010] duration-300 w-[40px] h-[40px] flex flex-col gap-1 justify-center items-start">
                {/* FIXME: Add Hover Effect */}
                {/* TODO: Call About Section form Right Side */}
                <span className="bg-black w-[0px] h-[2px]"></span>
                <span className="bg-black w-[10px] h-[2px]"></span>
                <span className="bg-black w-[20px] h-[2px]"></span>
              </div>
              <div className="btn rounded-[25px] h-[50px] bg-[#6427FF] flex text-white justify-center items-center px-4 hover:opacity-80 cursor-pointer duration-300">
                <AttachMoneyIcon className="text-white" />
                <span>Place Order</span>
              </div>
              <div className="call flex items-center gap-2 me-3">
                <div className="icon bg-[#6427FF] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  <PhoneInTalkIcon className="text-white" />
                </div>
                <div className="data flex flex-col">
                  <span>Call Anytime</span>
                  {/* FIXME: Phone Number */}
                  <span className="text-nowrap">+123 7878 222</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
