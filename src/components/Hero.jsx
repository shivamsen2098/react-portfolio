export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-purple-100 to-purple-200 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-700">
        Hi all, I'm Shivam 👋
      </h1>

      <p className="text-md text-gray-600 mb-8 max-w-xl mx-auto">
        I create beautiful, functional websites and digital experiences that help businesses grow.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300">
          Contact Me
        </button>

        <button className="border-2 border-purple-700 text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-700 hover:text-white transition-colors duration-300">
          Download CV
        </button>
      </div>
    </section>
  );
}
