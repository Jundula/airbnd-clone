import Image from 'next/image'
import React from 'react'

function MediumCard({img, title}) {
  return (
    <div className=' cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className="relative h-40 w-40  lg:h-80 lg:w-80">
        <Image className="rounded-xl" src={img} layout="fill" />
      </div>
      <div>
      <h3 className=" text-center whitespace-nowrap text-xl lg:text-2xl mt-3 text-gray-900">{title}</h3>
      </div>
    </div>
  )
}

export default MediumCard