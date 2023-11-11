import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div className="flex items-center justify-between h-24 text-white max-w-[1240px] px-4 mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <div className="hidden md:flex">
        <ul className="hidden md:flex ">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
          <li className="py-1 text-black  px-14 bg-slate-50">
            <a href="#">Get_Started</a>
          </li>



        </ul>
      </div>
      <div onClick={handleNav} className="md:hidden">
        {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          Nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
          <li className="p-4 text-black rounded-sm bg-slate-50">
            <a href="#">Get Stated</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
