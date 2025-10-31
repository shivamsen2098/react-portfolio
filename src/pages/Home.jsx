
import { Link } from 'react-router-dom'

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";


function Home() {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const text = textRef.current;
            if (!text) return;

            const original = text.dataset.original || text.textContent;

            // Store original text once
            if (!text.dataset.original) text.dataset.original = original;

            // Reset content
            text.innerHTML = "";

            // Split text into characters
            original.split("").forEach((ch) => {
                const span = document.createElement("span");
                span.textContent = ch === " " ? "\u00A0" : ch;
                span.style.display = "inline-block";
                text.appendChild(span);
            });

            // Animate characters
            const elements = text.querySelectorAll("span");

            gsap.fromTo(
                elements,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.05,
                }
            );
        }, textRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">


            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen text-center px-6">
                <h2
                    ref={textRef}
                    className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text ">
                    Hi, I'm Shivam
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                    A passionate developer creating modern web experiences. Let's build something amazing together.
                </p>
                <Link to="/projects">
                    <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition">
                        View My Work
                    </button>
                </Link>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center bg-gray-900">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home
