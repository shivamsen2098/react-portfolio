export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
        Hi, I'm{" "}
        <span className="text-cyan-500">Your Name</span>
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Frontend Developer | React Enthusiast | UI Designer
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block bg-cyan-500 text-white font-medium px-6 py-3 rounded-md hover:bg-cyan-600 transition-colors duration-300"
      >
        Download Resume
      </a>
    </section>
  );
}
