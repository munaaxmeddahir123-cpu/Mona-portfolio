import profile from "../assets/profile1.jpg";

function About() {
  return (
    <section
      id="about"
      className="
      py-20
      px-6
      bg-white
      dark:bg-black
      text-black
      dark:text-white
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >

        {/* Image */}
        <div className="flex justify-center md:order-2">

          <div className="relative">

            <img
              src={profile}
              alt="Muna Ahmed"
              className="
              w-60
              h-60
              md:w-72
              md:h-72
              object-cover
              rounded-3xl
              border-4
              border-purple-500
              shadow-xl
              hover:scale-105
              transition
              duration-500
              "
            />


            <div
              className="
              absolute
              -inset-3
              bg-purple-500/20
              blur-2xl
              rounded-3xl
              -z-10
              "
            />

          </div>

        </div>



        {/* Text */}
        <div className="space-y-6 md:order-1">


          <h2
            className="
            text-3xl
            sm:text-4xl
            font-bold
            text-gradient
            "
          >
            About Me
          </h2>



          <p
            className="
            text-gray-700
            dark:text-gray-300
            leading-7
            "
          >
            I'm{" "}
            <span
              className="
              font-semibold
              text-purple-600
              dark:text-purple-400
              "
            >
              Muna Ahmed
            </span>
            , a Full Stack Developer and university student passionate about
            building modern, scalable, and user-friendly web applications.
          </p>




          <p
            className="
            text-gray-600
            dark:text-gray-400
            leading-7
            "
          >
            My journey started with web development fundamentals, then expanded
            into JavaScript, React, backend development, and creating real-world
            projects that solve practical problems.
          </p>




          <p
            className="
            text-gray-600
            dark:text-gray-400
            leading-7
            "
          >
            Beyond coding, I have experience in graphic design, presentations,
            and Islamic studies background, which helped me develop creativity,
            discipline, communication skills, and continuous learning mindset.
          </p>





          {/* Info Cards */}

          <div
            className="
            grid
            grid-cols-2
            gap-4
            pt-4
            "
          >


            <div
              className="
              p-5
              rounded-2xl
              border
              border-gray-200
              dark:border-white/10
              bg-gray-50
              dark:bg-gray-900
              "
            >

              <h3
                className="
                font-bold
                text-purple-600
                dark:text-purple-400
                "
              >
                💻 Focus
              </h3>


              <p
                className="
                text-sm
                mt-2
                text-gray-600
                dark:text-gray-400
                "
              >
                Full Stack Development
              </p>

            </div>




            <div
              className="
              p-5
              rounded-2xl
              border
              border-gray-200
              dark:border-white/10
              bg-gray-50
              dark:bg-gray-900
              "
            >

              <h3
                className="
                font-bold
                text-purple-600
                dark:text-purple-400
                "
              >
                🎨 Creative Side
              </h3>


              <p
                className="
                text-sm
                mt-2
                text-gray-600
                dark:text-gray-400
                "
              >
                Design & Visual Thinking
              </p>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}

export default About;