import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function MovieSlide() {
  const [data, setData] = useState([]);
  const init = "https://image.tmdb.org/t/p/w1280";
  const [loading, setLoading] = useState(true);


  const fetchApi = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    };
    try {
      // const randomNumber = Math.random();
      const response = await axios.get('http://127.0.0.1:8080/api/popular-movies', options);
      const apiData = response.data;
      // Shuffle the data before setting it in state
      setData(apiData);
      // console.log(apiData);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    fetchApi()
    
  }, [])

  // const filt = 

  return (
    <div>
      {
        loading ? <div className="h-[79vh] w-full rounded-[10px] animate-pulse bg-gray-500"> </div>
        :
        (    <Carousel
      prevArrow={false}
      nextArrow={false}
      autoplay={true}
      autoplayDelay={5000}

      loop={true}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}

        </div>
      )}
    >
      

            <div >
               <img
           src="/marvels.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/grand.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/aquaman.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/black-adam.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/blue-beetle.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/meg-2.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
       
      


    </Carousel>)
      }
    </div>

  );
}