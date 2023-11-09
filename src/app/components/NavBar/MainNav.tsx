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
    <div className="    absolute overflow-hidden  w-full mt-[6dvw] z-50 group ">
      <div className="lg:gap-15 xl:gap-20  md:gap-10  shadow-sm shadow-[#b7b2b2] lg:rounded-[20px] md:rounded-[10px]  md:mx-[8dvw]  lg:mx-[15dvw] z-50 hidden md:flex justify-between items-center bg-[#fff]  text-[#016A70] lg:px-10  md:py-2  lg:py-5 ">
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
          {navItems.map((item, index) => (
            <div key={index} className=" mx-4">
              <h3>
                <Link href={item.link}>{item.name}</Link>
              </h3>
            </div>
          ))}
        </div>
        <div className=" flex justify-center items-center  mt-0  group-hover:shadow-md decoration-clone rounded-md ">
          <button className=" rounded-lg  border mt-0  py-2 flex justify-center items-center  bg-[#016A70] text-[#fff]  ">
            <h4 className=" mx-4  flex justify-center items-center">
              <Link href={"/"}>Register</Link>
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
