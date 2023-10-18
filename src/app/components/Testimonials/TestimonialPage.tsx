import React from "react";
import Slider from "./Slider";
import Corp from "../Sponsers/Corp";

const TestimonialPage = () => {
  return (
    <div className="  text-[#000] mt-[10dvh] gap-20 flex  md:flex-col flex-col md:mx-40 md:items-start items-center justify-center  h-screen">
      <div className=" md:items-start   md:flex-row items-center justify-evenly  w-full gap-20 flex-col flex">
      
      <div className=" before:bg-blue-500 before:w-20 before:z-40   justify-center items-center  mt-36 ">
        <h4 className=" text-[#222831] font-[400] text-[28px]">Testimonial</h4>
        <h3 className="text-[#222831] font-[600] text-[36px]  max-w-sm">
          What people say about us.
        </h3>
      </div>
      <div className=" relative p-2 md:h-96 mt-20   w-[40dvw]   mx-20   flex justify-center items-center ">
        {/* <p className=" font-normal text-xl ">
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p> */}
        <Slider/>
      </div>
      </div>
     
      <div className=" flex justify-center items-center w-full">
        <Corp/>
      </div>
    </div>
  );
};

export default TestimonialPage;
