import React from "react";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner/Banner2";

const HomePage = () => {
  return (
    <div className=" bg-[#016A70]/90 brightness-150 h-screen w-screen overflow-hidden">
      <div className=" mt-[300px] space-x-[60px] md:mx-[450px]  flex  justify-between items-center flex-col md:flex-row">
        <section className="  items-center flex justify-center md:w-1/2">
          <Banner />
        </section>
        <section className=" items-start flex justify-center md:w-1/2 ">
          <Banner2 />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
