//this is the header i used in the landing page

"use client";

import Demo from "../components/Modald";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  let pry = "#00bcd4";
  let sec = "#E6E6FA";
  let tet = "#b2a4d4";


  const [visible, setVisible] = useState(false)

  
  return (
    <nav className="backdrop-blur-xl border-b-[1px] border-cyan-100 bg-gray/30 p-3 sticky top-0 z-[1100] w-[100%] ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
        <img src="/new.svg" alt="" className="lg:h-[45px] w-[auto] md:h-[45px] h-[40px]"/>
        </Link>
        <div>
          <Link href='/login'>

            <button
              className={`border-[1px] border-cyan-200 lg:text-[#00bcd4] lg:py-2 lg:px-4 rounded-full lg:mr-4 md:text-[#00bcd4] text-[#00bcd4] md:py-1 md:px-2 md:mr-2 mr-4 py-1 px-3 hover:bg-[#b2a4d4] hover:text-white transition duration-100 ease-in-out`}>
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button
              className={`bg-[#b2a4d4] lg:text-[#fff] lg:py-3 lg:px-4 md:text-[#fff] text-[#fff] md:py-1 md:px-2  m-0 py-1 px-2 rounded-full hover:bg-[white] hover:border-[1px] hover:border-cyan-200 hover:text-[#00bcd4] transition duration-100 ease-in-out`}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <Demo visible={visible} setVisible={setVisible}/>
    </nav>
  );
}
