import React from "react";
import images from "../Image";

const Gallery = () => {
  return (
    <>
      <div className="bg-black">
        <p className="text-white text-4xl font-Rubik text-center p-8">
          Sneak peek to my world
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 p-[2rem] gap-6 w-[80%] cursor-pointer">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-[350px] h-[250px] rounded-xl hover:border hover:border-bg-secondary transform transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
