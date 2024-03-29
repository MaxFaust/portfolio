import Image from "next/image";
import React from "react";
import proshopImg from "../public/assets/projects/proshop.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={proshopImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 mt-4">Full Stack E-Commerce Store</h2>
          <a
            href="https://github.com/MaxFaust/proshop"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 my-4 mr-8 hover:-translate-y-1 hover:scale-110 ease-in duration-300">Code</button>
          </a>
          <a
            href="https://proshopapp12321.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 my-4 mr-8 hover:-translate-y-1 hover:scale-110 ease-in duration-300">Demo</button>
          </a>
          <div className="flex justify-left py-2">
          <Link href="/#projects">
            <a>
              <button className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:-translate-x-2 hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleLeft
                  className="text-[#white]"
                  size={30}
                />
              </button>
            </a>
          </Link>
        </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 shadow-xl shadow-gray-400 rounded-xl p-4">
          <h2 className=" className='p-2' text-[#004aad]">Project Overview</h2>
          <p className="p-2">
            This app was built using React JS and is deployed on Heroku.  I enjoyed learning
          </p>
          <p className="p-2">Features include:</p>
          <div>
            <ul className="list-disc list-outside grid-auto-columns: min-content px-7 py-1 leading-relaxed">
              <li>Full featured shopping cart</li>
              <li>Product reviews and ratings</li>
              <li>Top products carousel</li>
              <li>Product pagination</li>
              <li>Product search feature</li>
              <li>User profile with orders</li>
              <li>Admin product management</li>
              <li>Admin user management</li>
              <li>Admin Order details page</li>
              <li>Mark orders as delivered option</li>
              <li>Checkout process (shipping, payment method, etc)</li>
              <li>PayPal / credit card integration</li>
              <li>Database seeder (products &amp; users)</li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 height: auto shadow-xl shadow-gray-400 rounded-xl p-4">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Paypal API
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default property;
