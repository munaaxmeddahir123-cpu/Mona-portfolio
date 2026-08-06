function Skills() {

  const skills = [
    {
      name: "JavaScript",
      level: "Advanced"
    },
    {
      name: "React.js",
      level: "Advanced"
    },
    {
      name: "Node.js",
      level: "Intermediate"
    },
    {
      name: "MongoDB",
      level: "Intermediate"
    },
    {
      name: "Tailwind CSS",
      level: "Advanced"
    },
    {
      name: "Git & GitHub",
      level: "Intermediate"
    }
  ];


  return (
    <section id="skills" className="py-20 px-6">

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
          Skills
        </h2>


        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="
              bg-gray-950
              border
              border-white/10
              rounded-2xl
              p-6
              hover:border-purple-500
              hover:-translate-y-2
              transition
              duration-300
              "
            >

              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>


              <p className="mt-2 text-gray-400">
                {skill.level}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}

export default Skills;