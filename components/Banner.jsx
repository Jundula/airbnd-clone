import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm md:text-lg font-semibold text-gray-600">
          Not sure where to go ? Perfect.
        </p>
        <button className=" text-white bg-red-400 px-6 py-2 rounded-full shadow-md font-bold my-4 hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
