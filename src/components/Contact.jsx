export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gray-900 text-white text-center transition-colors duration-300 dark:bg-black"
    >
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact</h2>

      <div className="space-y-4 text-lg">
        <p>
          Email:{" "}
          <a
            href="mailto:you@example.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            you@example.com
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            linkedin.com/in/yourname
          </a>
        </p>
      </div>

      {/* Optional: Add a contact form */}
      <form className="mt-10 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
