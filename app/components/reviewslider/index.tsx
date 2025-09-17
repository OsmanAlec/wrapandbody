"use client";
import React, { useState } from "react";
import { reviews } from "@/data/reviews";

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div
      className="relative w-full max-w-4xl
                    mx-auto py-12 p-6 rounded-lg
                    shadow-lg bg-gray-50"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform 
                        duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-full p-8">
              <div
                className="bg-white
                              shadow-lg rounded-lg 
                              hover:shadow-xl transition-shadow
                              duration-300 p-6"
              >
                <h3
                  className="text-xl font-semibold 
                               text-center text-gray-800"
                >
                  {review.name}
                </h3>
                <div className="text-center">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="inline w-5 h-5 text-rose-gold"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <div
                  className="mt-4 text-gray-600 
                                text-center italic"
                >
                  <p
                    className="max-w-xs
                                mx-auto"
                  >
                    {review.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 
                        rounded-full ${
                          current === index ? "bg-dark-green" : "bg-gray-300"
                        } transition-all duration-300 hover:cursor-pointer`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Previous button */}
      <div
        className="absolute top-1/2 
                      left-0 transform -translate-y-1/2"
      >
        <button
          className="p-2 bg-dark-green
                     hover:bg-darker-green
                     hover:cursor-pointer
                     text-rose-gold rounded-full
                     transition-colors duration-300"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Next button */}
      <div
        className="absolute top-1/2 
                      right-0 transform -translate-y-1/2"
      >
        <button
          className="p-2 bg-dark-green
                     hover:bg-darker-green
                     hover:cursor-pointer
                     text-rose-gold rounded-full
                     transition-colors duration-300"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
