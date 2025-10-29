export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm a passionate <span className="font-semibold text-cyan-500">React Developer</span> who loves
        building modern, responsive web apps. I enjoy learning new technologies and creating
        beautiful user experiences that make a real impact.
      </p>
    </section>
  );
}
