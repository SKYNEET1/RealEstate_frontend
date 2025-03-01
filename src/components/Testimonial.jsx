import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonial"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h2>
      <p className="text-center text-gray-600  max-w-80 mx-auto">
        Real Storeis from Those Who Found Home with Us
      </p>
      <p className="text-center text-gray-500 mb-12 max-w-80 text-sm mx-auto">
      (ଆମ ସହିତ ଘର ପାଇଥିବା ଲୋକମାନଙ୍କର ସତ୍ୟ କାହାଣୀ)
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-lg font-medium text-gray-700">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">

            <img src={assets.star_icon} key={index} alt="" />


              {/* {Array.from({ length: testimonial.rating }, (item, index) => (
                <img src={assets.star_icon} key={index} alt="" />
              ))} */}
              {/* index is used as the key to uniquely identify each <img> element. */}
              {/*  the callback function runs 5 times, creating 5 <img> elements. */}


            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
