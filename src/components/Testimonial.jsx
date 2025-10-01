import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Monica D.",
    review:
      "Shop.co has completely transformed my shopping experience. Their quality, style, and customer service are unmatched.",
  },
];

const TestimonialsSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Header with arrows */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-sm bg-white rounded-2xl p-4 shadow-md flex-shrink-0"
          >
            <div className="flex text-yellow-500 mb-2">{"★★★★★"}</div>
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
