import React from 'react';

export default function ExcelDataAnalysis() {
    const projects = [
        {
            name: "Myntra Web Clone",
            img: "images/excel-data-analysis/salse-data-analysis.png",
            liveDemo: "https://shivamsen2098.github.io/myntra_web_clone/",
            code: "files/excel-data-analysis/Sales_Data_Analysis_India_Beginner.zip",
            alt: "E-commerce website design",
        },
      
       
      
    ];

    return (
        <>
            <section
                id="portfolio"
                className="py-28 px-6 bg-gradient-to-br from-slate-50 via-gray-100 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 transition-all duration-700 relative overflow-hidden"
            >
                {/* Background Pattern */}
                {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.03" fill-rule="evenodd"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/svg%3E')]">
                </div> */}

                <div className="container mx-auto max-w-7xl relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 dark:text-white mb-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                        My Excel Data Analysis Projects
                    </h2>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map(({ name, img, liveDemo, code, alt }, index) => (
                            <div
                                key={index}
                                className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transform hover:scale-105 hover:rotate-1 transition-all duration-500 border border-gray-200 dark:border-gray-700"
                            >
                                <img
                                    src={img}
                                    alt={alt}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
                                    <div className="flex space-x-4">
                                     
                                        <a
                                            href={code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
                                        >
                                            <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            Download Datasets
                                        </a>
                                    </div>
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
