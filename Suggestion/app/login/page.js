"use client"
//here is my login page or route
import { useRouter } from 'next/navigation';
import Toasters from "/components/Toasters"
import toast from 'react-hot-toast';
import axios from "axios";
import React, { useState} from "react";
import Link from "next/link"
import Cookies from 'js-cookie'; // Import js-cookie

const LoginPage = () => {
    const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      setLoading(true);
      console.log("---> Wants to submit --->")
      console.log("---> Submitted now! --->")
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch('http://127.0.0.1:8080/api/login', {
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }

      );
      
      const responseData = await response.json();
      localStorage.setItem('jwt', responseData.access_token);
      console.log('<---submitted--->')

      if (response.ok) {
        //Login successful

        const accessToken = responseData.access_token;

        // Store the access token in a secure cookie using js-cookie
        Cookies.set('access_token', accessToken, { expires: 7, secure: true }); // 'access_token' is the name of the cookie, and 7 is the number of days to keep it
        console.log(responseData.message);
        console.log(accessToken);
        toast.success(responseData.message);
        route.push('/hello')
      }
      else { 
        // Handle login failure, e.g., show an error message to the user.
        setLoading(false)
        toast.error(responseData.message)
      } return;

    }
    catch (error) {
      setLoading(false)
      // Handle request error, e.g., network issue or server error.
      console.log("--> error from catch block -->")
      console.error('Login request failed');
    }
  };
    return ( <>

<Toasters/>
<div className=" bg-white" style={{
  display:"grid",
  gridTemplateColumns: "4fr 2fr"
}}>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen p-5">
<div className=" h-10 w-10 rounded-full absolute left-3 top-5 bg-[url('/arrow-left.svg')] hover:cursor-pointer" onClick={() => route.push('/')}>
  </div>
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-cyan-600 sm:text-3xl">
      Almost there... One more step
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      You are already ahead of others...
    </p>

    <form
      action=""
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      onSubmit={handleSubmit}
    >
      <p className="text-center text-lg font-medium">Log into your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relativ ">
          <input
            type="email"
            className="w-full rounded-lg text-cyan-900 p-4 pe-12 text-sm shadow-sm bg-white border-2 placeholder:text-gray-500 "
            placeholder="Enter email"
            required
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only ">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-white border-2  placeholder:text-gray-500"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="block w-full rounded-lg bg-cyan-600 px-5 py-3 text-sm font-medium text-white"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? "Submitting..." : "Log In"}
      </button>

      <p className="text-center text-sm text-gray-500">
        Dont have an account? {" "}
        <Link className="underline" href="/signup">Sign up</Link>
      </p>
      <span className='flex flex-row items-center justify-evenly'>
      <p> ©️ 2023 EntertainMe. &nbsp; All rights reserved </p>
      </span>
    </form>
  </div>
</div>
<div className="bg-center w-auto h-[100%] bg-[url('/hero1.jpg')]"></div>
</div>
</>
     );
};
 
export default LoginPage;