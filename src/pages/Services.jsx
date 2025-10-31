import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Services() {
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
            {/* Basic Web */}
            <Link to="/basic-web-projects">
              <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-cyan-500/30 cursor-pointer">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-white group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/images/services/webdev.jpg"
                      alt="Web Development"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  Basic Web
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                  Custom website development with modern technologies and best practices.
                </p>
              </div>
            </Link>

            {/* Responsive Design */}
            <Link to="/responsive-web-projects">
              <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-cyan-500/30 cursor-pointer">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-white group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/images/services/responsive.webp"
                      alt="Responsive Design"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  Responsive Web Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                  Websites that work perfectly on all devices and screen sizes.
                </p>
              </div>
            </Link>


            {/* UI/UX Design */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-cyan-500/30 cursor-pointer">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/images/services/uiux.jpg"
                    alt="UI/UX Design"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                UI/UX Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                User-centered design solutions that enhance usability and engagement.
              </p>
            </div>



            {/* Excel Data Analysis */}
            <Link to="/excel-data-analysis">
              <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-cyan-500/30 cursor-pointer">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-white group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/images/services/data-analysis.png"
                      alt="Excel Data Analysis"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  Excel Data Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                  Analyzing and visualizing data using Excel tools like Pivot Tables, Charts, Formulas, and Dashboards to extract meaningful insights.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
