import Image from "next/image";
// import { Image, ImagesearchRollerRounded } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      // style: {height: 30vh}
  
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      arrows={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"      
      // itemClass="carousel-item-padding-40-px"
    >
      <div className="bg-[#F9FAFB] lg:h-[60vh] md:h-[65vh] h-[70vh] w-auto lg:px-[15%] md:px-[10%] px-[5%] rounded-[20px] flex flex-col items-center gap-2">
        <span className="flex flex-col items-center justify-center">
          <h1 className="text-xxl font-bold text-center py-4">
            What People Say
          </h1>
          <h5 className="text-center text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            nemo totam consequuntur nulla? Laborum qui sint rerum id earum optio
            molestias quas quia officiis laboriosam, eius doloremque cum?
            Soluta, illum!
          </h5>
        </span>
        <span className="flex flex-col items-center justify-center padding-0">
          <Image
            src="/hero1.jpg"
            alt=""
            height={100}
            width={100}
            className="h-[100px] w-[100px] rounded-full object-cover"
          />

          <p className="m-0">
            <b>Jane Woods</b>
          </p>
          <p className="m-0 text-sm">Private Eployee</p>
        </span>
      </div>
      <div className="bg-[#F9FAFB] lg:h-[60vh] md:h-[65vh] h-[70vh] w-auto lg:px-[15%] md:px-[10%] px-[5%] rounded-[20px] flex flex-col items-center gap-2">
        <span className="flex flex-col items-center justify-center">
          <h1 className="text-xxl font-bold text-center py-4">
            What People Say
          </h1>
          <h5 className="text-center text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            nemo totam consequuntur nulla? Laborum qui sint rerum id earum optio
            molestias quas quia officiis laboriosam, eius doloremque cum?
            Soluta, illum!
          </h5>
        </span>
        <span className="flex flex-col items-center justify-center padding-0 ">
          <Image
            src="/hero2.jpg"
            alt=""
            height={100}
            width={100}
            className="h-[100px] w-[100px] rounded-full object-cover"
          />

          <p className="m-0">
            <b>Mia James</b>
          </p>
          <p className="m-0 text-sm">Private Eployee</p>
        </span>
      </div>
      <div className="bg-[#F9FAFB] lg:h-[60vh] md:h-[65vh] h-[70vh] w-auto lg:px-[15%] md:px-[10%] px-[5%] rounded-[20px] flex flex-col items-center gap-2">
        <span className="flex flex-col items-center justify-center">
          <h1 className="text-xxl font-bold text-center py-4">
            What People Say
          </h1>
          <h5 className="text-center text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            nemo totam consequuntur nulla? Laborum qui sint rerum id earum optio
            molestias quas quia officiis laboriosam, eius doloremque cum?
            Soluta, illum!
          </h5>
        </span>
        <span className="flex flex-col items-center justify-center padding-0 ">
          <Image
            src="/hero3.jpg"
            alt=""
            height={100}
            width={100}
            className="h-[100px] w-[100px] rounded-full object-cover"
          />

          <p className="m-0">
            <b>Martha Isaac</b>
          </p>
          <p className="m-0 text-sm">Private Eployee</p>
        </span>
      </div>
    </Carousel>
  );
};

export default Review;
