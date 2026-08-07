import teamflow from "../assets/projects/teamflow.png";
import SWIB from "../assets/projects/SWIB.png";


function Projects() {

  const projects = [

    {
      title: "TeamFlow Management System",

      description:
        "A modern team management system that helps teams organize projects, tasks, and collaboration efficiently.",

      image: teamflow,

      technologies: [
        "React",
        "Tailwind CSS",
        "Context API",
        "JavaScript"
      ],

      github:
        "https://github.com/yourusername/teamflow",

      demo:
        "https://your-teamflow-vercel-link.com",

      video:
        "https://your-video-link.com"
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
        "Responsive Design"
      ],

      github:
        "https://github.com/munaaxmeddahir123-cpu/ganacsatada-h-somaliyeed-1",

      demo:
        "https://ganacsatada-h-somaliyeed-1-n7j0f09eb-muna-ahmed-s-projects.vercel.app",

      video:
        "https://www.tiktok.com/@riseacadmey/video/7637890477458754837"
    },


    {
      title: "Connect",

      description:
        "A full-stack application focused on connecting people through a modern and user-friendly platform.",

      image: teamflow,

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express"
      ],

      github:
        "https://github.com/yourusername/connect",

      demo:
        "https://your-connect-vercel-link.com",

      video:
        "https://your-video-link.com"
    }

  ];


  return (

    <section
      id="projects"
      className="py-20 px-6 bg-gray-950"
    >

      <div className="max-w-6xl mx-auto">


        <h2
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-center
          text-purple-400
          mb-12
          "
        >
          My Projects
        </h2>



        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >


          {projects.map((project) => (

            <div
              key={project.title}
              className="
              bg-black
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              hover:-translate-y-3
              transition
              duration-300
              shadow-xl
              "
            >


              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-52
                object-cover
                "
              />



              <div className="p-6">


                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>



                <p className="text-gray-400 mt-3 leading-6">
                  {project.description}
                </p>




                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      text-sm
                      rounded-full
                      bg-purple-500/20
                      text-purple-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>




                <div className="flex flex-wrap gap-4 mt-6">


                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-purple-400
                    hover:underline
                    "
                  >
                    🌐 Live Demo
                  </a>



                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-purple-400
                    hover:underline
                    "
                  >
                    💻 GitHub
                  </a>



                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-purple-400
                    hover:underline
                    "
                  >
                    🎥 Video
                  </a>


                </div>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Projects;