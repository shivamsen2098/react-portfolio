import React from 'react';

export default function ResponsiveWebProjects() {
    const projects = [
        {
            name: "Bakery Website",
            img: "images/backery.jpeg",
            liveDemo: "https://shivamsen2098.github.io/bakeryWeb/",
            code: "https://github.com/shivamsen2098/bakeryWeb",
            alt: "Bakery website design",
        },
        {
            name: "Electromart",
            img: "images/electromart.png",
            liveDemo: "https://electromart-dun.vercel.app/",
            code: "https://github.com/shivamsen2098/electromart",
            alt: "E-commerce app",
        },
        {
            name: "Recipe Next.js Project",
            img: "images/recipes.png",
            liveDemo: "https://first-nextjs-project-six-nu.vercel.app/",
            code: "https://github.com/shivamsen2098/first-nextjs-project",
            alt: "Recipe app",
        },
        {
            name: "Shoe Store Clone",
            img: "images/shoeweb.png",
            liveDemo: "https://shoe-store-web-clone.vercel.app/",
            code: "https://github.com/shivamsen2098/shoe_store_web_clone/",
            alt: "Shoe store website",
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
                      Responsive  Web Projects
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
                                            href={liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
                                        >
                                            <svg className="w-5 h-5 group-hover/btn:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                            </svg>
                                            Live Demo
                                        </a>
                                        <a
                                            href={code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
                                        >
                                            <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            View Code
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
