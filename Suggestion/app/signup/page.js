"use client"
//here is my signup page or route
import { useRouter } from 'next/navigation';
import Toasters from "/components/Toasters"
import toast from 'react-hot-toast';
import axios from "axios";
import React, { useState} from "react";
import Link from "next/link"


// TODO remove, this demo shouldn't need to reset the theme.


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('')
  const emailRegex = /^\w+@\w+\.\w+\.com$/i;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;

  const route = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email');
      return; // Don't proceed with the request
    } else {
      setEmailError('');
    }

    if (!passwordRegex.test(password)) {
      setPasswordError('Must contain at least 8 characters - lowercase and digits');
      return; // Don't proceed with the request
    } else {
      setPasswordError('');
    }

    if (password !== repeatPassword) {
      setRepeatPasswordError('Password did not match');
      return; // Don't proceed with the request
    } else {
      setRepeatPasswordError('');
    }

  //   try {
  //     setIsSubmitting(true);
  //     console.log('<--- wants to submit --->');
  //     const data = {
  //       email: email,
  //       password: password,
  //     };

  //     const response = await axios.post('http://127.0.0.1:8080/api/signup', data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     });


  //     console.log('<--- Submitted --->');

  //     if (response.ok) {
  //       console.log(response.data.message);
  //       console.log('yess');
  //       route.push('/login');
  //     } 
  //     else {
  //       console.log(response.data.error)
  //     }
      
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  try {
    setIsSubmitting(true)
    const response = await axios.post('http://127.0.0.1:8080/api/signup', {
      email, 
      password  
    });
    
    // const resp = response.data    // API will send 200 status on success
    if(response.status === 200) {
      console.log(response.data.message);
      setSuccess(response.data.message)
      setIsSubmitting(false)
      route.push('/login');
      toast.success(response.data.message);
    }
    else {
      console.log(response.data.message)
      setIsSubmitting(false)
      setError(response.data.message)
      toast.error(response.data.message)
    }
  } catch(error) {
    setError("Request Failed", error);
    toast.error(response.data.message) 
    setIsSubmitting(false)
  }
}

  return (
    // <div className="bg-white h-screen flex flex-col  justify-center">
<div className=" bg-white">
<Toasters />
<div className=" h-10 w-10 rounded-full absolute left-3 top-5 bg-[url('/arrow-left.svg')] hover:cursor-pointer" onClick={() => route.push('/')}>
  </div>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen p-5">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-cyan-600 sm:text-3xl">
      Get started today
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Take a bold step today to remain ahead of others...
    </p>

    <form
      action=""
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      onSubmit={handleSubmit}
    >
      <p className="text-center text-lg font-medium">Create an account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative border-red-400">
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
              {emailError && (
              <p className="text-red-500 text-[12px]">{emailError}</p>
            )}
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
             {passwordError && (
              <p className="text-red-500 text-[12px] ">{passwordError}</p>
            )}
        </div>
      </div>

      <div>
        <label htmlFor="repeat password" className="sr-only">Repeat Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-white border-2 placeholder:text-gray-500"
            placeholder="Repeat password"
            name="repeat password"
            value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {repeatPasswordError && (
              <p className="text-red-500 text-[12px] ">{repeatPasswordError}</p>
            )}
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg  bg-cyan-600 px-5 py-3 text-sm font-medium text-white"
        disabled={isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account? {" "}
        <Link className="underline" href="/login">Log in</Link>
      </p>
    </form>
  </div>
</div>
</div>
  );
}
