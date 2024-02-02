"use client";
// i named it hello because of conflicts over here i will change it soon
import Headers from "/components/Headers";
import Slide from "/components/Slide";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";

import Footer from "/components/Footer";
import Loading from "/components/Loading";
import { useState, useEffect, useContext } from "react";
import Popular from "@/components/Popular";
import Music from "@/components/Music";
import { MovieSlide } from "@/components/MovieSlide";
import { BookSlide } from "@/components/BookSlide";
import Trending from "@/components/Trending";
import Books from "@/components/Books";
import { Button } from "@material-tailwind/react";
import Profile from "/components/Profile";
import {UserContext} from "../Context/UserContext";
// import { Cookies } from "universal-cookie";
import { useRouter } from "next/navigation";
const Hello = () => {
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false)
  const route = useRouter();
  const { user } = useContext(UserContext)

  const logOut = () => {
    localStorage.clear("jwt");
    setLoading(true);
    route.push("/login");
  };
  
  // const {user} = useContext(UserContext)
  const loader = () => {
    setLoad(true);
    route.push("/movies");
    setLoad(false);
  }
  const loader2 = () => {
    setLoad(true);
    route.push("/books");
    setLoad(false);
  }

  const loadadiv=()=> {
    return (
      <p>Loading....</p>
    )
  }

  return (
    <div className="bg-[#03010bcb]">
      {loading ? <Loading/>  : (
        <>
          <Headers />
          <>
            <input
              type="checkbox"
              id="drawer-right"
              className="drawer-toggle"
            />
            <label className="overlay" htmlFor="drawer-right"></label>
            <div className="drawer drawer-right">
              <div className="drawer-content pt-10 flex flex-col h-full justify-center">
                <label
                  htmlFor="drawer-right"
                  className="absolute left-2 top-2 text-2xl"
                >
                  <p className="text-2xl">X</p>
                </label>
                <div>
                <h2 className="text-3xl font-medium text-cyan-600">Welcome back <b>{user} </b></h2>
                <hr className="text-gray-500 m-auto mx-1"/>
                </div>
                <div className="h-full flex flex-row justify-end items-end gap-2">
                  <button className="btn btn-ghost" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </>

          <div className="flex flex-col gap-3 ">
            <div className=" button grid grid-cols-2 gap-4 p-1 py-2 mx-3 m-[auto]">
              <Button
                variant="gradient"
                color="red"
                size="sm"
                className="flex items-center px-1 text-[10px] md:text-[12px] lg:text-[15px] text-center justify-center"
                onClick={() => loader()}
              >
                {
                  load ? loadadiv
                  : (
                   <>More Movies{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                   </>  
                  )
                }
               
              </Button>

              <Button
                variant="gradient"
                color="red"
                size="sm"
                className="flex items-center px-1 text-[10px] md:text-[12px] lg:text-[15px] text-center justify-center"
                onClick={() => loader2()}
              >
               {
                  load ? loadadiv
                  : (
                   <>More Books{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                   </>  
                  )
                }
              </Button>
            </div>

            <div className="movie flex flex-col gap-4">
              <div className="deslide p-4 pt-0 lg:h-[fit] h-[70%]">
                <MovieSlide />
              </div>

              <div className="trending">
                <span className=" text-cyan-400 text-[30px]  px-3">
                  Trending now <TrendingUpSharpIcon className="text-red-400" />
                </span>
                <hr className="mx-2 text-gray-50" />
                <Trending />
              </div>
              <br />
              <div className="popular">
                <span className=" text-cyan-400 text-[30px]  px-3">
                  Popular <WhatshotSharpIcon className="text-red-400" />
                </span>
                <hr className="mx-2 text-gray-50" />
                <Popular></Popular>
              </div>
            </div>

            <br />
            <hr className="mx-1 text-gray-50" />

            <div className="book">
              <div className=" bslide p-4 pt-0 lg:h-[fit] h-[70%]">
                <BookSlide />
              </div>
              <div className="books">
                <span className=" text-cyan-400 text-[30px]  px-3">
                  Best Sellers <MenuBookSharpIcon className="text-red-400" />
                </span>
                <hr className="mx-2 text-gray-50" />
                <Books></Books>
              </div>
            </div>

          </div>
          <br /><br /><br /><br /><br />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Hello;
