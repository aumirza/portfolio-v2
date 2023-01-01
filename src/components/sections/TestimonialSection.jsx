import React from "react";
import { FullSection } from "../FullSection";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialCard } from "../TestimonialCard";

export const TestimonialSection = () => {
  return (
    <FullSection>
      <div className="mb-14">
        <h1 className="text-3xl">Testimonial Section</h1>
      </div>
      <div className="w-10/12">
        <Slider
          dots={true}
          infinite={true}
          speed={9000}
          autoplaySpeed={0}
          centerMode={true}
          centerPadding="60px"
          autoplay={true}
          slidesToShow={1.9}
          // slidesToScroll={3}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TestimonialCard testimonial={{ text: item }} />
          ))}
        </Slider>
      </div>
    </FullSection>
  );
};
