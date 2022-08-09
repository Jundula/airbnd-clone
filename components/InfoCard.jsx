import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIconEmpty } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";

function InfoCard({ img, title, description, location, price, star, total }) {
  const [fav, setFav] = useState(true);
  const addFav = () => {
    setFav(!fav);
  };

  return (
    <div className="flex flex-col md:flex-row py-7 px-2 pr-4 border-b  hover:opacity-80 hover:shadow-lg transition-all duration-200 ease-out first:border-t">
      <div className="  md:h-52 md:w-80 flex-shrink-0 cursor-pointer">
        <Image
          className=" rounded-2xl"
          src={img}
          layout="responsive"
          width={40}
          height={24}
          objectFit="cover"
        />
      </div>
      <div className=" flex flex-col flex-grow pl-5">
        <div className="flex justify-between text-xs pt-3 md:pt-0 md:text-base ">
          <p>{location}</p>
          {fav ? (
            <HeartIconEmpty onClick={addFav} className=" h-7 cursor-pointer" />
          ) : (
            <HeartIcon onClick={addFav} className=" h-7 cursor-pointer" />
          )}
        </div>
        <h4 className="  cursor-pointer text-s md:text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className=" pt-2 text-xs md:text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-center pt-5">
          <p className="flex items-center">
            <StarIcon className=" h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className=" md:text-lg font-semibold pb-2 lg:2xl">{price}</p>
            <p className=" text-sm text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
