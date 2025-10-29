import Header from "../components/Header";

export default function Services() {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      desc: "Custom website development with modern technologies and best practices.",
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      desc: "User-centered design solutions that enhance usability and engagement.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      desc: "Websites that work perfectly on all devices and screen sizes.",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 transition-all duration-700 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-28 h-28 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-cyan-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 dark:text-white mb-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            My Services
          </h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-cyan-500/30"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className={`${icon} text-4xl text-white`}></i>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  {title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                  {desc}
                </p>
                {/* Button */}
                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-cyan-500/50"
                  >
                    Hire Me
                  </a>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
