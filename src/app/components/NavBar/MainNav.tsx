import Image from "next/image";
import Link from "next/link";
import React from "react";
// home ,service,contact,product
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "/",
  },
  {
    name: "Product",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
const MainNav = () => {
  return (
    <div className="    absolute overflow-hidden  w-full mt-[6dvw] z-50 ">
      <div className="lg:gap-15 xl:gap-20  md:gap-10  shadow-md shadow-[#000] lg:rounded-[20px] md:rounded-[10px]  md:mx-[8dvw]  lg:mx-[15dvw] z-50 hidden md:flex justify-between items-center bg-[#fff]  text-[#016A70] lg:px-10  md:py-2  lg:py-5 ">
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt={"logo"}
            priority
          />
        </Link>
      </div>
      <div className=" flex flex-row lg:gap-15 md:gap-2">
        {
          navItems.map((item,index)=>(
            <div key={index} className=" mx-4">
              <h3>
                <Link href={item.link}>{item.name}</Link>

              </h3>


            </div>
          ))
        }
      </div>
      <div>
      <button className=" rounded-lg p-2 border border-[4]  bg-[#016A70] text-[#fff] place-content-center ">
          <h4 className=" px-2">
            <Link href={"/"}>Register</Link>
          </h4>
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default MainNav;
