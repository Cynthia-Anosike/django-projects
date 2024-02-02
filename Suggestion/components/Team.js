import Image from "next/image";
// import { Image, ImagesearchRollerRounded } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Team = () => {
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
      showDots={false}
      arrows={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
    >
      <div className="bg-[#F9FAFB] lg:h-fit md:h-[fit-content] w-[auto] lg:px-[10%] md:px-[10%] px-[5%] lg:rounded-[20px] md:rounded-[20px] rounded-[20px] flex flex-col items-center lg:gap-[30px] md:gap-[60px] gap-[20px] md:mb-[50px] md:mt-[50px] md:py-[5%] lg:pb-1 md:pb-1 pb-2 ">
        <span className="flex flex-col items-center justify-center h-fit p-0">
          <h1 className="lg:text-[40px] md:text-xxl text-[30px] font-bold text-center py-4">
            Meet Our Team
          </h1>
        </span>
        <span className=" lg:w-[70%] md:w-[70%] w-[80%] flex justify-between">
          <span className="flex flex-col items-center justify-center padding-4">
            <Image
              src="/silas1.jpg"
              alt=""
              height={100}
              width={100}
              className="lg:h-[150px] md:h-[150px] h-[100px] lg:w-[150px] md:w-[150px] w-[100px] rounded-full object-cover"
            />

            <p className="m-0 text-center lg:text-lg md:text-base text-sm">
              <b>Silas Inegbe</b>
            </p>
            <p className="m-0 text-center lg:text-lg md:text-base text-sm">Frontend Engr.</p>
          </span>
          <span className="flex flex-col items-center justify-center padding-4">
            <Image
              src="/cynthia.jpg"
              alt=""
              height={100}
              width={100}
              className="lg:h-[150px] md:h-[150px] h-[100px] lg:w-[150px] md:w-[150px] w-[100px] rounded-full object-cover"
            />

            <p className="m-0 text-center lg:text-lg md:text-base text-sm">
              <b>Cynthia Anosike</b>
            </p>
            <p className="m-0 text-center lg:text-lg md:text-base text-sm">Backend Engr.</p>
          </span>
        </span>
      </div>
    </Carousel>
  );
};

export default Team;
