import React from "react";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner/Banner2";
import HomeFooter from "./Banner/HomeFooter";

const HomePage = () => {
  return (
    <div className=" bg-[#016A70]/90 brightness-150 min-h-screen flex flex-col justify-between w-screen overflow-hidden">
      <div className=" mt-[10dvw] space-x-[5dvw] md:mx-[20dvw]  flex  justify-between items-center flex-col md:flex-row">
        <section className="  items-center flex justify-center md:w-1/2">
          <Banner />
        </section>
        <section className=" items-start flex justify-center md:w-1/2 ">
          <Banner2 />
        </section>
      
      </div>
      <div className="bg-[#fff] mb-0 bottom-0 lg:-ml-20">
      <section className=" mt-[1dvw] py-20 text-black ">
          <HomeFooter/>
        </section>

      </div>
     
    </div>
  );
};

export default HomePage;
