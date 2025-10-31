import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Navigation */}
            <nav className="flex justify-between items-center p-6">
                <Link to="/">
                    <h1 className="text-2xl font-bold  mb-2 ">Port<span className="text-cyan-500">folio</span></h1>
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-purple-300 transition font-semibold">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-purple-300 transition font-semibold">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="hover:text-purple-300 transition font-semibold">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-purple-300 transition font-semibold">Contact</Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-purple-300 transition font-semibold">Services</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
