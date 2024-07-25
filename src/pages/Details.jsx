import React from 'react'
import image11 from "../../public/image11.jpeg"

const Details = () => {
  return (
    <div>
      <a
        className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        href="#"
      >
        <img src={image11} className="w-[18.7vw]" />

        <p className="mt-1 text-sm text-gray-300 w-[19vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
    </div>
  );
}

export default Details
