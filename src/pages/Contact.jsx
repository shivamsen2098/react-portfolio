import { useState } from "react";
import Header from "../components/Header";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            <section
                id="contact"
                className="py-28 px-6 bg-gradient-to-br from-cyan-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-700 relative overflow-hidden"
            >
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-bounce"></div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 dark:text-white mb-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                        Get In Touch
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Info */}
                        <div className="lg:w-1/2 space-y-8 text-gray-700 dark:text-gray-300">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Let's talk about your project</h3>
                            <p className="text-lg leading-relaxed">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Location</h4>
                                        <p className="text-lg">Pratap Nagar, Jaipur</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <a href="mailto:shivamsen2098@gmail.com">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 cursor-pointer rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                    </a>

                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                                        <p className="text-lg">shivamsen2098@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <a href="">
                                        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 cursor-pointer rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                    </a>

                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                                        <p className="text-lg">9754376455</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 mt-10">
                                <a href="http://linkedin.com/in/shivam2098" className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/shivamsen2098" className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-gray-500/50">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-pink-500/50">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <form action="https://formsubmit.co/shivamsen2098@gmail.com" method="POST"
                                onSubmit={handleSubmit}
                                className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/50"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
