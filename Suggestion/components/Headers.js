//this is the header/navbar i used for the hello/page

"use client";
import Link from "next/link";
import {
  Button,
} from "@material-tailwind/react";
import { HiMiniUserCircle } from "react-icons/hi";




const Headers = ({open, openDrawer}) => {
  return (
    // <header className={` backdrop-blur-xl p-3 lg:gap-[85%] md:gap-[85%] gap-[70%] h-[10vh] flex justify-center items-center sticky top-0 z-[1100] w-[100%] `}>
    <nav className="backdrop-blur-xl border-b-[1px] border-cyan-100 p-3 sticky top-0 z-[1000] w-[100%] ">
          
<div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <img src="/new.svg" alt="" className="lg:h-[45px] w-[auto] md:h-[45px] h-[40px]" />
        </Link>

        {/* <input type="checkbox" id="drawer-right" className="drawer-toggle" /> */}

        <label htmlFor="drawer-right">
          <div className="h-10 w-10 rounded-full bg-gray-500 border border-gray-300 flex items-center justify-center hover:cursor-pointer p-2">
             <img src="/user.svg" alt="" />
          </div>
        </label>
        {/* <Button onClick={openDrawer}>Open Drawer</Button> */}

      </ div>  
    </nav>
  );
};

export default Headers;
