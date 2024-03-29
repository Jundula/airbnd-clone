import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          objectFit="cover"
          layout="fill"
          className=" rounded-2xl"
        />
      </div>
      <div className=" absolute top-32 left-12">
        <h3 className=" text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="cursor-pointer text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
