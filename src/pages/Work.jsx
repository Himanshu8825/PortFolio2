import React from "react";
import {
  project_round_card1,
  project_round_card2,
  work_card1,
  work_card2,
  work_card3,
  dropdown,
  freshbook,
  click_up,
} from "../assets/index";

const Work = () => {
  return (
    <>
      <div className="">
        <p className=" work_bg text-3xl text-center text-bg-primary py-6  font-Rubik font-medium">
          Projects and Work
        </p>

        <span className="flex justify-around p-6">
          <span className="w-[40%] p-4 ">
            <p className=" font-Roboto text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              dignissimos delectus hic rerum repudiandae odit earum sunt
              accusantium, error molestias!
            </p>
            <button className=" bg-bg-secondary text-white font-Roboto px-4 py-2 text-center text-base m-2 rounded-full hover:opacity-80 ">
              Explore
            </button>
          </span>
          <span className="flex relative ">
            <img src={project_round_card1} alt="" className="h-[250px]" />
            <img
              src={project_round_card2}
              alt=""
              className="h-[150px] ml-[-5rem] mt-[10rem]"
            />
          </span>
        </span>

        <div class="flex justify-center space-x-4 p-4 relative">
          <img src={work_card1} alt="" class="max-w-[350px] h-auto" />
          <img src={work_card2} alt="" class="max-w-[350px] h-auto" />
          <img src={work_card3} alt="" class="max-w-[350px] h-auto" />
          <div class="w-[75%]  bg-[#EEEEEE] absolute rounded-3xl flex justify-center items-center p-2  translate-y-[14rem]">
            <div class="flex flex-col gap-2 text-center">
              <p class="font-Rubik text-xl font-semibold">Title 1</p>
              <div class="w-[50px] border-b-2 border-b-black mx-auto"></div>
              <p class="font-Roboto text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, fugit?
              </p>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <p class="font-Rubik text-xl font-semibold">Title 2</p>
              <div class="w-[50px] border-b-2 border-b-black mx-auto"></div>
              <p class="font-Roboto text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, fugit?
              </p>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <p class="font-Rubik text-xl font-semibold">Title 3</p>
              <div class="w-[50px] border-b-2 border-b-black mx-auto"></div>
              <p class="font-Roboto text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, fugit?
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 mt-10 flex justify-around">
          <p className="text-3xl text-bg-primary font-Rubik font-semibold">
            Brand Partners
          </p>
          <span className="flex items-center gap-2">
            <img src={click_up} alt="" />
            <p className="text-2xl font-Roboto font-extrabold">ClickUp</p>
          </span>
          <span className="flex items-center gap-2">
            <img src={dropdown} alt="" />
            <p className="text-2xl font-Roboto font-extrabold">Dropdown</p>
          </span>
          <span>
            <img src={freshbook} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Work;
