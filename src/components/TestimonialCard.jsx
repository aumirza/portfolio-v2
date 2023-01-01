import React from "react";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[30rem]  h-60 bg-gray-300 flex flex-col justify-center items-center rounded-md shadow-lg">
      <div className="">userDetails</div>
      <div className="">{testimonial.text}</div>
    </div>
  );
};
