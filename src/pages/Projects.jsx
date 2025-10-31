import React from 'react'
import TopProjects from './TopProjects'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            {/* Top Projects Section */}
            <TopProjects />

            {/* Centered Button */}
            <Link to="/services" className="mt-8">
                <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105">
                    View All
                </button>
            </Link>
        </div>
    )
}

export default Projects
