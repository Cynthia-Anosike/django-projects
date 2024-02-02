"use client"

// import { button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AiOutlineArrowUp from "react-icons/ai"

const ScrollTop = () => {
const [scroll, setScroll] = useState(false)

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })

}, []);

    const handleScroll = () => {
        window.scrollTo({
            top : 0,
            behavior: "smooth"
        })
    }

    return ( 
        <>
            {scroll && (
                <div onClick={handleScroll} className=" bg-center rounded-full fixed h-[50px] w-[50px] p-3 bg-gray-600 right-20 bottom-10 bg-[url('/arrow-up.svg')] hover:cursor-pointer">
                    {/* <AiOutlineArrowUp/> */}
                </div>
            )}
        </>
     );
}
 
export default ScrollTop;