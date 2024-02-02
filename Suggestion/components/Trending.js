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



export default function Trending() {
    // const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const init = "https://image.tmdb.org/t/p/w300";
    const pre = "https://image.tmdb.org/t/p/w1280";
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
            const response = await axios.get('http://127.0.0.1:8080/api/trending-movies', options);
            const apiData = response.data;
            setData(apiData);
            // console.log(apiData);
            setLoading(false)
        } catch (error) {
            setLoading(true)
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
            {
                loading ? <div className="grid grid-cols-5 gap-4 p-1 w-[100%]">
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
                                <img alt=' ' src={init + item.posterURL} className="w-auto h-[100%] ease-in-out"></img>
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

                    <div className="flex flex-col m-0 text-white h-fit">

                        {loading ? <div className="w-[100%] rounded h-[40vh] mt-4 animate-pulse bg-gray-400"></div>
                            :
                        (
                           <div className="w-[100%] rounded h-[40vh] mt-4" style={{
                            backgroundImage: `url(${pre + selectedItem.backdrop_path})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>

                        </div> 
                        )}
                        
                        <span>
                            <h2 className="truncate text-left text-[#00bcd4]">
                                {selectedItem.title}
                            </h2>
                            <b> Year: {selectedItem.year}</b>
                            <br />
                            <p className="m-0">
                                {selectedItem.review}
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
