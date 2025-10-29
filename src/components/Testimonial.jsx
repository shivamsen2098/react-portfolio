import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      text: `"John exceeded our expectations with his design and development skills. The website he created for us has significantly increased our online presence and customer engagement."`,
      author: "- Sarah Johnson, Marketing Director",
    },
    {
      text: `"Working with John was a great experience. He delivered our project on time and within budget, and was very responsive to our feedback throughout the process."`,
      author: "- Michael Chen, Startup Founder",
    },
    {
      text: `"The website John developed for our business has helped us increase sales by 35%. His attention to detail and understanding of user experience is remarkable."`,
      author: "- Emily Rodriguez, E-commerce Manager",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Client Testimonials
        </h2>

        <div className="relative">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-4">
                {t.text}
              </p>
              <p className="text-gray-900 dark:text-white font-semibold">
                {t.author}
              </p>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === activeIndex
                    ? "bg-cyan-500"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
