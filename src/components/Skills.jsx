import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaPencilAlt, FaMobileAlt, FaServer } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      id: 1,
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
      title: "HTML/CSS",
      description: "Creating semantic, accessible markup with modern CSS techniques.",
      link: "#",
      outlined: true,
    },
    {
      id: 2,
      icon: <FaJs className="text-4xl text-yellow-500" />,
      title: "JavaScript",
      description: "Building interactive web applications with modern JavaScript.",
      link: "#",
      outlined: true,
    },
    {
      id: 3,
      icon: <FaPencilAlt className="text-4xl text-pink-500" />,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces with Figma and Adobe XD.",
      link: "#",
      outlined: true,
    },
    {
      id: 4,
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      title: "Responsive Design",
      description: "Websites that work perfectly on all devices and screen sizes.",
      link: "#contact",
      outlined: false,
    },
    {
      id: 5,
      icon: <FaReact className="text-4xl text-cyan-500" />,
      title: "React JS",
      description: "Building dynamic and interactive user interfaces for modern web apps.",
      link: "#contact",
      outlined: false,
    },
    {
      id: 6,
      icon: <FaServer className="text-4xl text-gray-700" />,
      title: "Next JS",
      description: "Server-side rendering and SEO-friendly web applications using Next.js.",
      link: "#contact",
      outlined: false,
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
          My Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skills.map(({ id, icon, title, description, link, outlined }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
              <a
                href={link}
                className={`px-5 py-2 rounded-md font-semibold transition
                  ${
                    outlined
                      ? "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
                      : "bg-cyan-500 text-white hover:bg-cyan-600"
                  }`}
              >
                See Projects
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
