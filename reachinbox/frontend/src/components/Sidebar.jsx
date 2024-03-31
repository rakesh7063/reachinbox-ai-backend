import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { BiListUl } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { CgInbox } from "react-icons/cg";

function Sidebar() {
  return (
    <div className="h-screen text-white p-3 flex flex-col justify-between items-center bg-gray-900 animate-slide-in">
      <div className="flex flex-col gap-8">
        <div className="text-2xl bg-white flex items-center justify-center p-1 font-bold text-black">M</div>
        <div className="flex flex-col gap-2 text-gray-400 text-2xl">
          <div className="hover:bg-slate-800 rounded-full p-2">
            <AiFillHome className="cursor-pointer" />
          </div>
          <div className="hover:bg-slate-800 rounded-full p-2">
            <MdPersonSearch />
          </div>
          <div className="hover:bg-slate-800 rounded-full p-2">
            <IoMdMail />
          </div>
          <div className="hover:bg-slate-800 rounded-full p-2">
            <IoIosSend />
          </div>
          <div className="hover:bg-slate-800 rounded-full p-2">
            <BiListUl />
          </div>
          <div className="hover:bg-slate-800 rounded-full p-2">
            <CgInbox />
          </div>
          <div className="hover:bg-slate-800 rounded-full p-2">
            <IoStatsChart />
          </div>
        </div>
      </div>
      <div className="rounded-full h-10 text-center w-10 text-base font-medium bg-green-600 p-2">
        SM
      </div>
    </div>
  );
}

export default Sidebar;
