import React from "react";
import { Hero } from "../assets/index";
import AboutMe from "./AboutMe";
import Award from "./Award";

const Home = () => {
  return (
    <>
      <div className="image h-[672px] flex items-center justify-between">
        <span className="ml-8">
          <span className="p-[2rem]">
            <p className=" text-bg-primary font-Roboto text-5xl leading-[3.5rem]">
              Keep <span className=" text-bg-secondary">Going After</span>{" "}
              <br />
              What You Truly <br />
              <span className=" text-bg-secondary">Believe In ,</span> Just{" "}
              <span className=" text-bg-secondary">Not Blindly</span>
            </p>
            <p className=" text-bg-primary text-3xl font-Roboto font-normal mt-2 p-2 ">
              -Bibin Babu
            </p>
          </span>
        </span>
        <span>
          <img src={Hero} alt="Hero" />
        </span>

        {/* <div className=" absolute left-[24rem]  top-4">
          <video className="w-[20%] rounded-lg video " controls>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
      <section>
        <AboutMe />
      </section>
      <section>
        <Award />
      </section>
    </>
  );
};

export default Home;
