import teamflow from "../assets/projects/teamflow.png";
import SWIB from "../assets/projects/SWIB.png";
import connect from "../assets/projects/Connect.png";

function Projects() {
  const projects = [
    {
      title: "Connect (Coming Soon)",
      description:
        "A full-stack application focused on connecting people through a modern and user-friendly platform.",
      image: connect,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/connect",
      demo: "https://your-connect-vercel-link.com",
      video: "https://your-connect-video-link.com",
    },

    {
      title: "TeamFlow Management System",
      description:
        "A modern team management system built with React that helps teams organize projects, tasks, and collaboration efficiently.",
      image: teamflow,
      technologies: [
        "React",
        "Tailwind CSS",
        "Context API",
        "JavaScript",
      ],
      github:
        "https://github.com/munaaxmeddahir123-cpu/Team-flow-management-system",
      demo: "https://team-flow-management-system.vercel.app",
      video:
        "https://www.tiktok.com/@riseacadmey/video/7666456957431123221",
    },

    {
      title: "Ganacsatada Haweenka Soomaaliyeed (SWIB)",
      description:
        "A responsive platform designed to support Somali women entrepreneurs and showcase their businesses.",
      image: SWIB,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      github:
        "https://github.com/munaaxmeddahir123-cpu/ganacsatada-h-somaliyeed-1",
      demo:
        "https://ganacsatada-h-somaliyeed-1-n7j0f09eb-muna-ahmed-s-projects.vercel.app",
      video:
        "https://www.tiktok.com/@riseacadmey/video/7637890477458754837",
    },
  ];

  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3 py-1 text-sm rounded-full
                  bg-purple-500/10
                  text-purple-600
                  dark:text-purple-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-4 py-2 text-sm rounded-full
                bg-gradient-to-r from-purple-500 to-pink-500
                text-white hover:scale-105 transition
                "
              >
                🌐 Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-4 py-2 text-sm rounded-full
                border border-purple-500
                text-purple-600
                dark:text-purple-300
                hover:bg-purple-500/10 transition
                "
              >
                💻 GitHub
              </a>

              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-4 py-2 text-sm rounded-full
                border border-pink-500
                text-pink-500
                hover:bg-pink-500/10 transition
                "
              >
                🎥 Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;