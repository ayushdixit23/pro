import Image from "next/image";
import React from "react";
import img1 from "../assets/img.png";
import img2 from "../assets/food.png";
import { AiFillStar } from "react-icons/ai";
const Body = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 w-full p-3">
        <div className="col-span-1 pn:max-sm:order-2 flex justify-end p-3 items-center">
          <div className="flex mx-4 flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="lg:text-7xl sm:text-4xl text-3xl font-bold leading-snug">
                “Badal Do <br />
                har Mauke Ko!”
              </div>
              <div className="md:max-w-[60%]">
                "Unwrap Joy, Share Love: Your Destination for Distinctive Gifts
                and Custom Delights!"
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#EC994B] p-3 px-6 rounded-full">
                Order Now
              </div>
            </div>
            {/* <div className="flex gap-1 my-3 items-center">
              <div>
                <Image src={img1} className="max-w-[110px]" alt="fghj" />
              </div>
              <div>
                <div>Customer Review</div>
                <div className="flex justify-center items-center gap-1">
                  <div>
                    <AiFillStar className="text-[#EC994B]" />
                  </div>
                  <div>4.8</div>
                  <div>(5k reviews)</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex justify-center w-full items-center col-span-1">
          <Image src={img2} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Body;
