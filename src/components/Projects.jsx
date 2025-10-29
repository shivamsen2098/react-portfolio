export default function Projects() {
  const projects = [
    { name: "Portfolio Website", desc: "Personal website built with React" },
    { name: "Todo App", desc: "A simple todo app using hooks" },
    { name: "Weather App", desc: "Weather forecast using API" },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[280px] md:w-[300px]"
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">
              {p.name}
            </h3>
            <p className="text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
