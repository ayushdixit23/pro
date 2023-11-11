import Image from "next/image";
import React from "react";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";

const BodyP = () => {
  return (
    <>
      <div className="grid grid-cols-1 my-5 w-full">
        <div className="flex justify-center  items-center p-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="sm:text-4xl font-sans text-2xl text-center leading-snug font-bold">
              You are special, so should <br className="pn:max-sm:hidden" />
              be your cake!
            </div>

            <div className="text-center">
              Delivering customised cakes to your doorstep
            </div>
          </div>
        </div>
        <div className="flex pn:max-sm:hidden justify-center my-10 gap-4 items-center">
          <div className="relative top-20">
            <Image src={image1} alt="image" />
          </div>
          <div className="relative top-7">
            <Image src={image4} alt="image" />
          </div>
          <div className="relative -top-2">
            <Image src={image2} alt="image" />
          </div>
          <div className="relative top-7">
            <Image src={image3} alt="image" />
          </div>
          <div className="relative top-20">
            <Image src={image5} alt="image" />
          </div>
        </div>

        <div className="flex flex-col sm:hidden justify-center my-10 p-3 gap-4 items-center">
          <div className="flex justify-center items-center gap-3">
            <div>
              <Image src={image1} alt="image" />
            </div>
            <div>
              <Image src={image4} alt="image" />
            </div>

            <div>
              <Image src={image3} alt="image" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>
              <Image src={image2} alt="image" />
            </div>
            <div>
              <Image src={image5} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyP;
