"use client";
//this is the homepage (landing page)
import Image from "next/image";
import Link from 'next/link';
import Header from "/components/Header";
import Footer from "/components/Footer";
import Slider from "/components/Slider";
import Review from "/components/Review";
import Team from "/components/Team";
import Demo from "/components/Modald";
// import CloseSharpIcon from "@mui/icons-material/CloseSharp";

// import hero from "./images/hero.jpg";
import styled from "styled-components";
import Writer from "/components/Writer";
import { useState } from "react";

// import '../styles/globals.css';
const Container = styled.div`
    .Dialog {
      color: #68c3e0;
    }
    div.gen {
      @media (min-width: 768px) {
        /* display: none; */
        /* gap: 80px; */
      }
      @media (min-width: 1024px) {
        gap: 40px;
      }

      .top {
        .topm {
          border-radius: 0px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          height: 100%;
          width: auto;
          display: flex;
          /* align-items: center; */
          justify-content: center;
          padding: 15%;

          h1 {
            font-size: 60px;
            font-weight: bolder;
            text-align: center;
          }

          @media (min-width: 768px) {
            border-radius: 0px;
          }

          @media (min-width: 1024px) {
            border-radius: 20px;
          }
        }
      }
      .mid {
        display: grid;
        grid-template-columns:1fr;
        grid-gap: 20px;
        /* border: 1px solid green; */
        padding: 15px;

        .one{
              height: fit-content;
          }

        div {
          height: 50vh;

          /* background-color: whitesmoke; */
          border-radius: 10px;
          padding: 0px;

          .bold {
            font-weight: 700;
          }

          .step {
            /* background-color: whitesmoke; */
            height: 22vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid #68c3e0;
            align-items: center;
            /* margin: 5px; */
            box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.2);
              -webkit-box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.2);
              -moz-box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.2);


            h1 {
              color: #68c3e0;
              /* font-weight: bold; */
            }
          }
        }
        .roundam {
          border-radius: 30px;
          /* background-color: whitesmoke; */
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          height: fit-content;
          gap: 10px;
          /* border:1px solid red; */

          h1 {
            font-size: 50px;
          }
        }

        @media (min-width: 768px) {
          display: grid;
          grid-template-columns: 1fr;
          /* border: 1px solid green; */
          padding: 20px;
          gap: 30px;

          div {
            height: fit-content;
            /* border: 1px solid red; */
            /* background-color: whitesmoke; */
            border-radius: 10px;
            padding: 10px;

            .bold {
              font-weight: 700;
            }

            .step {
              /* background-color: whitesmoke; */
              height: 25vh;
              width: 45vw;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.5);
              -webkit-box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.5);
              -moz-box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.5);

              h1 {
                color: #68c3e0;
                /* font-weight: bold; */
              }
            }
          }
          .roundam {
            /* background-color: red; */
            height: fit-content;
            border-radius: 30px;
            background-color: white;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            padding-inline: 0%;
            row-gap: 20px;
            h1 {
              font-size: 60px;
            }
            p {
              font-size: 15px;
            }
          }
        }
        @media (min-width: 1024px) {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          grid-gap: 30px;
          /* border: 1px solid green; */
          padding: 20px;

          div {
            height: 50vh;

            /* background-color: whitesmoke; */
            border-radius: 10px;
            padding: 10px;

            .bold {
              font-weight: 700;
            }

            .step {
              /* background-color: whitesmoke; */
              height: 22vh;
              width: 46%;
              display: flex;
              flex-direction: column;
              justify-content: center;

              h1 {
                color: #68c3e0;
                /* font-weight: bold; */
              }
            }
          }
          .roundam {
            border-radius: 30px;

            h1 {
              font-size: 50px;
            }
          }
        }
      }

      .midtwo {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        /* border: 1px dotted #68c3e0; */
        h1.bene {
          text-align: center;
          font-size: 25px;
          font-weight: 700;
        }
        .steptwo {
          height: fit-content;
          width: 100%;
          background-color: #F9FAFB;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #68c3e0;

          h1 {
            color: #68c3e0;
            font-weight: bolder;
          }

          p {
            display: block;
          }
        }

        @media (min-width: 768px) {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;


          h1.bene {
            text-align: center;
            font-size: 50px;
            font-weight: 700;
          }
          .steptwo {
            height: 40vh;
            width: 30vw;

            p {
            display: block;
          }
          }
        }

        @media (min-width: 1024px) {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          h1.bene {
            text-align: center;
            font-size: 50px;
            font-weight: 700;
          }
          .steptwo {
            height: 40vh;
            width: 30vw;
            background-color: #F9FAFB;
            padding: 10px;
            border-radius: 10px;

            h1 {
              color: #68c3e0;
              font-weight: bolder;
            }
            p {
            display: block;
          }
          }
        }
      }

      .recom {
        .top {
          span {
            border-radius: 10px;
            height: fit-content;
            padding: 5px;

            h1 {
              font-size: 25px;
              line-height: 40px;
              font-weight: 700;
            }
          }
        }

        @media (min-width: 768px) {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .top {
            span {
              h1 {
                font-size: 40px;
                line-height: 50px;
              }

              p {
                font-size: 20px;
              }
            }
          }
        }

        @media (min-width: 1024px) {
          .top {
            span {
              border-radius: 10px;
              height: 30vh;
              padding: 5px;

              h1 {
                font-size: 50px;
                line-height: 70px;
                font-weight: 800;
              }
            }
          }
        }
      }
    }
  `;

const Ike = styled.div`
    .icon {
      text-align: right;
      color: #b2a4d4;
      font-size: 30px;
      transition: transform 0.4s ease-out;
    }
    .icon:hover {
      cursor: pointer;
      color: #00bcd4;
      transform: rotate(45deg);
      transition: transform 0.4s ease;
      box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 34px -12px rgba(0, 0, 0, 0.75);
    }
  `;
export default function Home() {
  const [visible, setVisible] = useState(false);
  const shouldRenderDemo = typeof visible === 'function' && typeof setVisible === 'function';

  return (
    //conatainer for styling
    <Container>
      <Header></Header>
      <Demo visible={visible} setVisible={setVisible} />

      <div className="gen lg:p-[20px] flex flex-col lg:gap-4 lg:pt-0 md:p-[0px] md:flex md:flex-col md:gap-5 md:pt-[50px] p-[0px] pt-0">
        <div className="top lg:h-[100vh] w-[100%] bg-[url('/hero1.jpg')] bg-center lg:rounded-[20px] lg:bg-[no-repeat] md:h-[70vh] md:rounded-[0px] md:bg-[no-repeat] rounded-[0px] h-[100vh] bg-[no-repeat]">
          <div className="topm">
            <Writer></Writer>
          </div>
        </div>
        <div className="mid ">
          <div className="one">
            <h1 className="bold">
              We Give You <br />
              What No One Else Can Give
            </h1>
            <p>
              Discover a world of books, movies, and music like no other. Our platform offers a rich collection of literary masterpieces, cinematic wonders, and an extensive music library. Dive into a universe of entertainment that caters to your every mood and preference.
            </p>

            <Link href='/login'>
              <button
                className="text-[white] lg:h-10 lg:w-[100px] md:h-10 md:w-[100px] h-8 w-[80px] lg:text-[18px] md:text-[17px] text-[15px] bg-green-400 rounded-[20px]"
              >
                See More
              </button>
            </Link>


          </div>
          <div className="roundam">
            <div className="step">
              <h1>
                <b>300</b>+
              </h1>
              <p>Suggestions</p>
            </div>
            <div className="step">
              <h1>
                <b>10</b>+
              </h1>
              <p>Categories</p>
            </div>
            <div className="step">
              <h1>
                <b>100</b>+
              </h1>
              <p>Users</p>
            </div>
            <div className="step">
              <h1>
                <b>15</b>+
              </h1>
              <p>Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <hr className="w-[95%]" />
        </div>

        <div className="midtwo ">
          <h1 className="bene">Benefits of choosing us</h1>

          <div className=" lg:flex md:flex flex lg:flex-wrap md:flex-wrap flex-wrap lg:gap-3 md:gap-3 gap-3 items-center justify-center p-0 ">
            <div className="steptwo">
              <h1>01.</h1>
              <h4>
                Free Access to <br /> Premium Contents
              </h4>
              <p className="lg:block md:block none">
                Gain access to a world of premium content without any cost. Enjoy exclusive privileges and explore a diverse range of high-quality materials tailored to your interests and needs.
              </p>
            </div>
            <div className="steptwo">
              <h1>02.</h1>
              <h4>
                Easy <br />
                Navigation
              </h4>
              <p>
                Explore our platform effortlessly with user-friendly navigation. Enjoy a seamless
                experience while finding the content that matters most to you.
              </p>
            </div>
            <div className="steptwo">
              <h1>03.</h1>
              <h4>
                Personal Data <br /> Privacy is safe
              </h4>
              <p>
                We prioritize the security of your personal data, ensuring that your privacy
                remains protected at all times. Your information is in safe hands.
              </p>
            </div>
          </div>

          <div className="pic lg:h-[70vh] md:h-[50vh] h-[75vh] w-[100%] bg-[url('/hero4.jpg')] bg-center rounded-[20px] bg-[no-repeat]"></div>
        </div>

        <div className="recom md:p-[15px] lg:p-[20px] p-[15px]">
          <div className="top lg:grid lg:grid-cols-2 lg:gap-3 ">
            <span className="">
              <h1 className="lg:text-3xl md:text-2xl text-[20px] font-bold">
                Recommendations
                <br />
                Just For Your Pleasure...
              </h1>
            </span>

            <span>
              <p>
                Indulge in handpicked recommendations designed to enhance your enjoyment. Discover
                content tailored to your taste, all in one place, just for you.
              </p>

              <Link href='/login'>
                <button
                  className="text-[white] lg:h-10 lg:w-[100px] md:h-10 md:w-[100px] h-8 w-[80px] lg:text-[18px] md:text-[17px] text-[15px] bg-green-400 rounded-[20px]"
                >
                  See More
                </button>
              </Link>


            </span>
          </div>
          <div className="lg:h-[80vh] md:h-[fit-content] h-fit w-[100%] rounded-[10px]">
            <Slider></Slider>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <hr className="w-[95%]" />
        </div>

        <div className="bott py-4 lg:py-0 md:py-0 ">
          <div className="reviews lg:h-fit md:h-fit h-fit w-auto flex flex-col lg:p-[10px] lg:mb-0 md:px-[10%] md:mb-0 mb-5 lg:px-[10%] md:p-[15px] px-[10px] ">
            <div>
              <Review></Review>
            </div>
          </div>
          <div className="team lg:h-fit md:h-fit w-auto flex flex-col lg:p-[20px] md:p-[15px] lg:px-[8%] md:px-[8%] px-[1%]">
            <div className="h-fit lg:rounded-[20px] md:rounded-[20px]">
              <Team></Team>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Container>
  );
}
