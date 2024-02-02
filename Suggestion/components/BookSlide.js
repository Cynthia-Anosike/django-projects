import { Carousel } from "@material-tailwind/react";

export function BookSlide() {




  // const filt = 

  return (
    <div>
<Carousel
      prevArrow={false}
      nextArrow={false}
      autoplay={true}
      autoplayDelay={3000}

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
           src="/book1.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/book2.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/book3.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
            <div >
               <img
           src="/book4.jpg"
           alt=" "
           className="h-[79vh] w-full object-cover"
         />
            </div>
       
      


    </Carousel>
    </div>

  );
}