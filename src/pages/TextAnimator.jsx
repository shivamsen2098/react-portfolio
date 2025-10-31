import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function TextAnimator() {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div
        ref={textRef}
        className="text-center text-3xl md:text-5xl font-semibold max-w-4xl leading-snug"
      >
        Break apart HTML text into characters for smooth animation.
      </div>
    </div>
  );
}

export default TextAnimator;
