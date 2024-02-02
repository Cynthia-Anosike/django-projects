"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from "react";


const Slide = () => {
    const [data, setData] = useState([]);

  
    // Fetch the movies when the component mounts
    useEffect(() => {
      const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            }
          };
        const response = await fetch("http://127.0.0.1:8080/api/movies", options);
        const data = await response.json();
        // console.log(data);
        setData(data.slice(0, 10));
      };
  
      fetchData();
    }, []);
    const init = "https://image.tmdb.org/t/p/w300";


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            arrow={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            PlaySpeed={1000}
            keyBoardControl={true}
            centerMode={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass={"carousel-container"}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
           
           {data.map(item =>( 
               <div key={item.id} className="lg:h-[52vh] md:h-[40vh] h-[70vh] w-[16vw]  m-2 flex flex-col items-center justify-between">
                <div className=" h-[100%] w-[100%] rounded-[10px]">
                     <img src={init + item.posterURL} alt="" className="h-[100%] w-[100%] rounded" />    
                </div>
            </div>
           ))}
         

            {/* <div className="lg:h-[52vh] md:h-[40vh] h-[70vh] w-[15vw]  m-2 flex flex-col items-center justify-between">
                <div className="h-[80%] w-[100%] object-contain border-2 rounded-[10px]">

                </div>
                <span className=" w-[100%] h-fit p-0">
                    <h5 className='m-0'>Fast X</h5>
                    <span className='m-0'>
                        <p className='text-[12px]'>2023</p>
                    </span>
                </span>
            </div> */}


        </Carousel>
    );
}

export default Slide;