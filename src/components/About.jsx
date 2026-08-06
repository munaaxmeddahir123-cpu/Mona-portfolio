import profile from "../assets/profile1.jpg";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950">

      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        gap-10
        items-center
      ">


        {/* Image */}
        <div className="flex justify-center md:order-2">

          <img
            src={profile}
            alt="Muna"
            className="
              w-56
              h-56
              sm:w-64
              sm:h-64
              object-cover
              rounded-3xl
              shadow-xl
              hover:scale-105
              transition
              duration-500
            "
          />

        </div>


        {/* Text */}
        <div className="space-y-5 md:order-1">

          <h2 className="
            text-3xl
            sm:text-4xl
            font-bold
            text-purple-400
          ">
            About Me
          </h2>


          <p className="text-gray-300 leading-7">
            I'm a Full Stack Developer and university student passionate
            about building real-world applications.
          </p>


          <p className="text-gray-400 leading-7">
            I enjoy creating clean user interfaces, solving problems,
            and continuously improving my skills in modern web technologies.
          </p>


          <p className="text-gray-400 leading-7">
            My goal is to build useful products that combine great design
            with strong functionality.
          </p>


        </div>


      </div>

    </section>
  );
}

export default About;