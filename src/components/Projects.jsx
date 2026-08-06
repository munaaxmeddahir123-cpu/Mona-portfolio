import teamflow from "../assets/projects/teamflow.png";


function Projects() {

  const projects = [
    {
      title: "TeamFlow Management System",

      description:
        "A modern team management application that helps users organize projects, tasks, and collaboration.",

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
        "https://your-demo-link.com"
    },


    {
      title: "E-Commerce Platform",

      description:
        "A full-stack e-commerce application with products, authentication, and admin dashboard.",

     image: teamflow,

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express"
      ],

      github:
        "https://github.com/yourusername/ecommerce",

      demo:
        "https://your-demo-link.com"
    },


    {
      title: "Family Connect",

      description:
        "A platform designed to connect families and manage community information.",

      image: teamflow,

      technologies: [
        "React",
        "JavaScript",
        "CSS"
      ],

      github:
        "https://github.com/yourusername/family-connect",

      demo:
        "https://your-demo-link.com"
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


              {/* Project Image */}

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



                {/* Technologies */}

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



                {/* Links */}

                <div className="flex gap-5 mt-6">


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-purple-400
                    hover:underline
                    "
                  >
                    GitHub →
                  </a>



                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-purple-400
                    hover:underline
                    "
                  >
                    Live Demo →
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