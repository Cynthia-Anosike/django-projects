//this is the footer i used in all my pages
import Link from 'next/link';

// Footer.js component

export default function Footer() {
  const newDate = new Date();
  const currentDate = newDate.getFullYear();
  let pry = "#00bcd4";
  let sec = "#E6E6FA";
  let tet = "#b2a4d4";
  return (
     <nav className={`bg-[${pry}] p-3 sticky block`}>
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          
            <p className="text-white">&copy; {currentDate} EntertainMe. All rights reserved.</p>

           
            <div>
               
            </div>
        </div>
    </nav>
  )
};