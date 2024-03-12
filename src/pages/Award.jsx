import React from "react";
import { Award1, Award2, Award3, Award4 } from "../assets/index";

const Award = () => {
  return (
    <>
      <div className=" award  p-[2rem]">
        <div className="text-white font-Rubik">
          <span className="flex justify-center p-8">
            <p className="text-4xl ">Awards and Recognition</p>
          </span>
          <div className="flex justify-evenly gap-4">
            <img src={Award1} alt=""   />

            <img src={Award2} alt=""  />

            <img src={Award3} alt=""  />

            <img src={Award4} alt=""  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
