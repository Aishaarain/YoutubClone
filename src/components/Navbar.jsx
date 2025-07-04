import { Link ,useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu,FiYoutube,FiBell,FiSearch } from "react-icons/fi";
import { BsMicFill,BsPlus,} from "react-icons/bs";
import {  useSidebarContext } from "../context/Context";

export default function Navbar() {
    
const {isOpen,setIsOpen,handleListening}= useSidebarContext();
  return (
    <nav className="bg-white w-full p-4 shadow flex justify-between items-center max-sm:w-50 ">

      <div className=" p-4 z-50 flex flex-col ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl  text-gray-800"
        >
          <FiMenu />
        </button>
     </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 "
          onClick={() => setIsOpen(false)}
        />
      )}
      <Link to="/" className="max-sm:hidden text-xl flex  font-bold text-red-600 max-sm:w-20 max-sm:text[10px]">
        <FiYoutube size={30}/> YouTube
      </Link>
<div className="relative w-full sm:w-96">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <FiSearch size={18} />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10  py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
      />
      
    </div>
    <button
  className="left-0 text-xl text-gray-700 dark:text-white "
  title="Voice Search"
>
  <BsMicFill />
  </button>
      
      <button className=" max-sm:hidden flex items-center bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-full text-lg font-medium">
        <BsPlus className="text-2xl" />
        Create
      </button>
        <div className="relative max-sm:hidden">
        <FiBell className="text-2xl cursor-pointer max-sm:hidden" />
    
      </div>
      <img
        src="https://via.placeholder.com/40" 
        alt="User"
        className="max-sm:hidden w-8 h-8 rounded-full object-cover border border-gray-300 cursor-pointer"
      />
    
    </nav>
  );
}
