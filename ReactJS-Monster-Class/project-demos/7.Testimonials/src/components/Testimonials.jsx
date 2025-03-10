import React from "react";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handleNext = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        #{currentIndex} - {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevious}>
          <GiPreviousButton /> Previous
        </button>
        <button onClick={handleNext}>
          Next <GiNextButton />
        </button>
      </div>
    </div>
  );
}
