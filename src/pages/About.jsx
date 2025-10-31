import React from 'react';

export default function About() {
    return (
        <>
            <section
                id="about"
                className="py-28 px-6 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-all duration-700 relative overflow-hidden"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-bounce"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cyan-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-20 relative z-10">

                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-6xl md:text-7xl font-black text-gray-800 dark:text-white mb-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-none tracking-tight">
                            About Me
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-700 dark:text-gray-300 flex items-center justify-center md:justify-start gap-3">
                            <span className="text-4xl">👋</span> Hello! I'm Shivam Sen
                        </h3>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            I am a fresher web developer with a strong interest in creating clean and user-friendly websites. I have a good understanding of <span className="font-bold text-cyan-600 dark:text-cyan-400 underline decoration-wavy">HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, and Next.js</span>.
                        </p>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
                            My goal is to start my career as a frontend developer where I can apply my knowledge, keep growing, and contribute to responsive web projects.
                        </p>

                        <div className="flex justify-center md:justify-start gap-8">
                            <a
                                href="#"
                                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-3"
                            >
                                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <a href="files/resume-Shivam-portfolio.pdf" class="btn btn-outline">Download CV</a>
                            </a>
                            {/* <a
                                href="#"
                                className="group border-3 border-cyan-500 text-cyan-500 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-1 shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-3 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
                            >
                                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Read More
                            </a> */}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <img
                                src="images/webdeveloper.jpg"
                                alt="Professional portrait of a web developer"
                                className="relative rounded-3xl shadow-2xl mx-auto transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 border-4 border-white dark:border-gray-700 w-full max-w-lg"
                            />
                            {/* Floating Badges */}
                            <div className="absolute -top-6 -left-6 bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-500 text-white p-4 rounded-full shadow-xl animate-bounce">

                                <a href="https://github.com/shivamsen2098" class="btn btn-outline">
                                    <span className="font-bold text-sm">💻 Code</span>
                                </a>

                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-xl animate-pulse">
                                <span className="font-bold text-sm">🚀 Innovate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
