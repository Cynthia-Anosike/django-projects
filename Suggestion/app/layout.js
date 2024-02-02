"use client"
import "./globals.css";
import { Poppins } from "next/font/google";

import { useState,useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import loading from 'loading.js'
import Network from "@/components/Network";


const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const metadata = {
  title: "EntertainMe",
  description: "A recommendation app",
};

export default function RootLayout({ children }) {
  // const [isOnline, setIsOnline] = useState(window.navigator.onLine);


  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);



  return (
    <html lang="en" className="bg-[rgb(37,33,41)]">

           <body className={`${poppins.className}`}>{children}
           
           </body>  

    </html>
  );
}
