import React from "react";

const Banner = () => {
  return (
    <div className=" w-full ">
      <article className=" ml-5 md:ml-0 justify-start items-start gap-4 mb-16">
        <h2 className=" lg:mt-20  md:mt-10 mt-0 font-semibold text-[28px] ">
          {" "}
          Hi Folks!
        </h2>

        <h1 className=" lg:mt-[10px] lg:font-extrabold tracking-normal align-middle  leading-normal lg:text-6xl  text-[#FFD] md:text-[16px] lg:text-[32px] xl:text-[44px]">
          Invocation Dedication and Sustainable Solution
        </h1>

        <p className=" mt-[10px] md:text-[6px]  text-[5px] lg:text-[10px] xl:text-[16px]  leading-[2.1]">
          Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id
          pharetra ultricies mauris. Eget augue at egestas et consequat quis
          ultricies. At vel aenean posuere neque a fermentum donec eros ut.
          Nullam mi egestas sed facilisis.
        </p>

        <button className=" rounded-lg p-2 border border-[4] mt-[24px] place-content-center ">
          <p className="  text-[16px] leading-[2.1]">view Details</p>
        </button>
      </article>
    </div>
  );
};

export default Banner;
