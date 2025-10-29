import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">


            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen text-center px-6">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Hi, I'm Shivam
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                    A passionate developer creating modern web experiences. Let's build something amazing together.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition">
                    View My Work
                </button>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center bg-gray-900">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home
