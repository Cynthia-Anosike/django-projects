import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

 const GlowingText = styled.h1`
    color: cyan;
    text-align: center;
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.3); /* Add a black background */
    padding: 5px; /* Add padding to make the text stand out from the background */
    animation: glow 1s ease-in-out infinite alternate;
    text-transform: uppercase; /* Optional: Make the text uppercase for more visibility */
    width: 100%;
    border-radius: 5px;
    @keyframes glow {
      from {
        text-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan,
          0 0 50px cyan, 0 0 60px cyan, 0 0 70px cyan;
      }
      to {
        text-shadow: 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan,
          0 0 60px cyan, 0 0 70px cyan, 0 0 80px cyan;
      }
    }

  `;
export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

 
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      arrows={true}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      // centerMode={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[""]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-10-px"
      sliderClass="padding-200px"
    >
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/movie.jpeg')] bg-center m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Movies</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/musical.jpeg')] bg-center m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Music</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/book.jpeg')] bg-center m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Books</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/hotel.jpg')] bg-center m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Hotels</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/gadget.jpeg')] bg-center bg-[no-repeat] m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Gadgets</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/places.jpg')] bg-center m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Places</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/food.jpeg')] bg-center m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Food</GlowingText>
      </div>
      <div className="lg:h-[75vh] md:h-[40vh] h-[70vh] w-[auto] bg-[url('/drinks.jpg')] bg-center bg-[no-repeat] m-2 border-2 rounded-[20px] flex items-end justify-center object-cover">
        <GlowingText>Drinks</GlowingText>
      </div>
    </Carousel>
  );
}
