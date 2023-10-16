import React from "react";

const HomeFooter = () => {
  return (
    <div className=" flex xl:gap-20 flex-col  md:flex-row justify-center items-center gap-6 lg:gap-14 md:gap-10">
      <div className="space-y-4  flex justify-center items-center flex-col">
        <h4 className=" lg:text-4xl text-3xl font-semibold" >200+</h4>
        <span className=" text-md font-medium lg:text-[28px] md:text-[16px]  ">member</span>
      </div>
      <div className=" space-y-4 flex justify-center items-center flex-col">
      <h4 className=" lg:text-4xl text-3xl  font-semibold" >
            20
        </h4>
        <span className=" text-md font-medium lg:text-[28px] md:text-[16px] ">Waste 
            Bank</span>
      </div>
      <div className=" space-y-4 flex justify-center items-center flex-col">
      <h4 className=" lg:text-4xl text-3xl  font-semibold" >50</h4>
        <span className=" text-md font-medium lg:text-[28px] md:text-[16px] ">Providers</span>
      </div>
      <div className=" space-y-4 flex justify-center items-center flex-col">
      <h4 className=" lg:text-4xl text-3xl font-semibold" >10000+</h4>
        <span className=" text-md font-medium lg:text-[28px] md:text-[16px]  ">Waste Collected</span>
      </div>
    </div>
  );
};

export default HomeFooter;
