"use client";
// // "use client"
// // import { useState } from 'react';
// // // import signingFunction from './signingFunction';

// // export default function LoginPage()  {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async () => {
// //     try {
// //     const csrfTokenResponse = await axios.get('/api/get-csrf-token');
// //     const csrfToken = csrfTokenResponse.data;

// //     const loginRequest = axios.post('/api/login', {
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'X-CSRF-Token': csrfToken,
// //       },
// //     });

// //     const loginResponse = await loginRequest.data;

// //     if (loginRequest.ok) {

// //         const accessToken = responseData.access_token;

// //         // Store the access token and CSRF token in secure cookies using js-cookie
// //         Cookies.set('access_token', accessToken, { expires: 7, secure: true });
// //         Cookies.set('csrf_token', csrfToken, { expires: 7, secure: true });
// //         console.log(loginResponse.message);
// //         console.log('access:', accessToken);
// //     }else {
// //         console.log(responseData.error);
// //         // Handle login failure, e.g., show an error message to the user.
// //         console.log("Login failed");
// //       }
// //     }catch (error) {
// //       console.error('Error during login:', error)

// //     // Handle the login response here.
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="email"
// //         name="email"
// //         placeholder="Email address"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         name="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <button type="submit" onClick={handleSubmit}>Login</button>
// //     </div>
// {/* <div className="my-8 ">
//     <h1 className="mb-4 mx-[03%] placeholder-shimmer w-[40%] h-10 rounded-full bg-gray-200 animate-pulse">
//     </h1>
//     <hr className="w-[95%] m-[auto] pb-4 placeholder-shimmer animate-pulse text-gray-200"></hr>
//     <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pr-5">
//         {Array.from({ length: 16 }, (_, index) => (
//             <li key={index} className="border border-gray-300 rounded overflow-hidden hover:shadow-lg placeholder-shimmer animate-pulse">
//                 <div className="w-full h-48 bg-gray-200"></div>
//                 <div className="p-3">
//                     <h3 className="w-[50%] h-6 rounded-full bg-gray-100"></h3>
//                     <p className="mt-1 w-[40%] h-6 rounded-full bg-gray-100"></p>
//                     <p className="w-[30%] h-6 rounded-full bg-gray-100"></p>
//                 </div>
//             </li>
//         ))}
//     </ul>
// </div>
 
// );
// }; */}
// // }



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { Virtual, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import Link from "next/link";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { MovieSlide } from "@/components/MovieSlide";



// export default function Trending() {
//     // const [loading, setLoading] = useState(true)
//     const [data, setData] = useState([]);
//     const init = "https://image.tmdb.org/t/p/w300";

//     const fetchApi = async () => {
//         const options = {
//             method: 'GET',
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//             }
//           };
//         try {
//             const response = await axios.get('http://127.0.0.1:8080/api/trending-movies', options);
//             const apiData = response.data;
//             setData(apiData);
//             console.log(apiData)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         fetchApi()
//     }, [])



//     return (
//         <>
//         <div class="grid grid-cols-5 gap-4 p-1">
//             {
//                 Array.from({length: 5}, (_,index) => (
//                     <div key={index} className="bg-gray-200 h-[60vh] w-[auto] animate-pulse rounded"></div>
//                 ))
//             }
//       </div>

//         <div className="h-[79vh] w-full rounded animate-pulse bg-gray-500"> </div>

//         </>
        
//     )
// }




// "use client"
// //here is my signup page or route
// import { useRouter } from 'next/navigation';
// import Toasters from "/components/Toasters"
// import toast from 'react-hot-toast';
// import axios from "axios";
// import React, { useState} from "react";
// import Link from "next/link"
// import Cookies from 'js-cookie'; // Import js-cookie



// // TODO remove, this demo shouldn't need to reset the theme.


// export default function SignUp() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);


// //   const route = useRouter();
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //   try {
// //     setIsSubmitting(true)
// //     const response = await axios.post('http://127.0.0.1:8080/api/login', {
// //       email, 
// //       password  
// //     });
    
// //     const responseData = await response.json();
// //     const accessToken = responseData.access_token;
// //     // const resp = response.data    // API will send 200 status on success
// //     if(response.status === 200) {
// //       console.log(response.data.message);
      
// //       localStorage.setItem('jwt', responseData.access_token);

// //       Cookies.set('access_token', accessToken, { expires: 7, secure: true }); // 'access_token' is the name of the cookie, and 7 is the number of days to keep it
// //       console.log('<---submitted--->')
// //       setIsSubmitting(false)
// //       route.push('/hello');
// //       toast.success(response.data.message);
// //     }
// //     else {
// //       console.log(response.data.message)
// //       setIsSubmitting(false)
// //       toast.error(response.data.message)
// //     }
// //   } catch(error) {
// //     setIsSubmitting(false)
// //   }
// // }

//   return (
//     // <div className="bg-white h-screen flex flex-col  justify-cen="checkbox" id="drawer-right" className="drawer-toggle" />


// }

import React, { useState, useEffect } from "react";
import axios from "axios";

import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-indigo/theme.css";
// import { select } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

// import MovieModal from "@/components/MovieModal"
// import { MovieSlide } from "@/components/MovieSlide";



export default function Music() {
    // const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    // const init = "https://image.tmdb.org/t/p/w300";
    // const pre = "https://image.tmdb.org/t/p/w1280";
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true)


    const fetchApi = async () => {
        const options = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            }
          };
        try {
            const response = await axios.get('http://127.0.0.1:8080/api/music', options);
            const apiData = response.data;
            setData(apiData);
            console.log(apiData);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            error;
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const openModal = (item) => {
        setVisible(true)
        setSelectedItem(item)
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body

    };

    const closeModal = () => {
        setVisible(false)
        setSelectedItem(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling on the body

    }



    return (
        
        <div className="w-[fit] px-1 flex items-center justify-center">
            
            {loading ?  <div className="grid grid-cols-5 gap-4 p-1 w-[100%]">
            { Array.from({length: 5}, (_,index) => (
                    <div key={index} className="bg-gray-500 h-[50vh] w-[auto] animate-pulse rounded"></div>
                ))}
            </div>
            :   
            (
             <Swiper
                modules={[Virtual, Navigation, Pagination]}
                // onSwiper={setSwiperRef}
                // slidesPerView={6}
                centeredSlides={false}
                // spaceBetween={20}
                // width={900}
                // pagination={{
                //   type: "fraction",
                // }}
                height={900}
                navigation={true}
                rewind={true}
                virtual

                breakpoints={{
                    // Mobile phones
                    200: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },

                    // Portrait tablets
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },

                    // Small landscape tablets + laptops
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },

                    // Large laptops + desktops
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                {data.map((item) => {
                    return (
                        <div key={item._id} className="bg-red-200 flex items-center justify-center">
                            <SwiperSlide key={item._id} virtualIndex={item.id} onClick={() => openModal(item)}>
                                <img alt=' ' src={item.cover_image} className="w-auto h-[100%] ease-in-out"></img>
                            </SwiperSlide>

                        </div>
                    );
                })}
            </Swiper>   
            ) 
        }
            
            {/* <div className={`overlay ${visible ? 'active' : ''}`} onClick={()=>closeModal()}></div> */}

            {selectedItem && (
                <Dialog
                    header={selectedItem.title}
                    visible={visible}
                    modal={true}
                    
                    resizable={false}
                    showHeader={false}
                    closable={true}
                    closeOnEscape={true}
                    onHide={() => closeModal()}
                    // footer={footer}
                    style={{
                        width: '50vw',
                        boxShadow: '',
                        zIndex: 9999999, // Set your desired z-index value here
                    }}
                    breakpoints={{
                        '960px': '75vw',
                        '641px': '80vw',
                    }}
                >

                    <div className="flex flex-col m-0 text-white">                       
                        <span>
                            <h2 className="truncate text-left text-[#00bcd4]">
                                {selectedItem.title}
                            </h2>
                            <b> Year: {selectedItem.artist}</b>
                            <br />
                            <p className="m-0">
                                {selectedItem.lyrics}
                            </p>

                        </span>
                        <br/>
                        <span className="flex items-center justify-right">
                        <Button variant="gradient" color="blue" size="sm" className="flex items-center gap-2" onClick={() => closeModal()}>
                            Cancel
                            </Button>
                        </span>

                    </div>



                </Dialog>

            )
            }

        </div>
    );
};
