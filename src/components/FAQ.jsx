import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to complete a website?",
      answer:
        "The timeline depends on complexity. Simple websites take 2-3 weeks; complex e-commerce 6-8 weeks.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes, I offer ongoing maintenance plans including backups, security, and updates.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "I offer project-based pricing depending on scope and complexity. Contact for a quote.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 dark:text-gray-200 font-medium focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <i className="fas fa-chevron-down"></i>
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block px-6 py-2 border border-cyan-500 text-cyan-500 rounded hover:bg-cyan-500 hover:text-white transition-colors duration-300"
          >
            Read More FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
