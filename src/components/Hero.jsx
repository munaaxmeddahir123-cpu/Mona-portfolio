import profile from "../assets/profile1.jpg";

function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
      pt-24
      bg-white text-black
      dark:bg-black dark:text-white
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        w-72 h-72 md:w-96 md:h-96
        bg-purple-500/20
        rounded-full
        blur-3xl
        top-20 left-10
        "
      />

      <div
        className="
        absolute
        w-72 h-72 md:w-96 md:h-96
        bg-pink-500/20
        rounded-full
        blur-3xl
        bottom-20 right-10
        "
      />

      <div
        className="
        relative z-10
        max-w-4xl
        mx-auto
        text-center
        "
      >

        {/* Profile Image */}

        <img
          src={profile}
          alt="Muna"
          className="
          w-32 h-32 md:w-44 md:h-44
          mx-auto
          rounded-full
          object-cover
          border-4
          border-purple-500
          shadow-xl
          hover:scale-110
          transition duration-500
          "
        />

        {/* Title */}

        <h1
          className="
          mt-8
          text-4xl sm:text-5xl md:text-7xl
          font-bold
          "
        >
          Hi, I'm{" "}
          <span className="text-gradient">
            Muna
          </span>
        </h1>

        {/* Role */}

        <h2
          className="
          mt-5
          text-xl sm:text-2xl md:text-3xl
          font-semibold
          text-gray-600
          dark:text-gray-300
          "
        >
          Full Stack Developer
        </h2>

        {/* Description */}

        <p
          className="
          mt-6
          max-w-xl
          mx-auto
          text-sm sm:text-base md:text-lg
          leading-7
          text-gray-600
          dark:text-gray-400
          "
        >
          I build modern, responsive and scalable web applications
          using React, Node.js, MongoDB and modern technologies.
        </p>

        {/* Buttons */}

        <div
          className="
          mt-8
          flex
          flex-col sm:flex-row
          justify-center
          gap-4
          "
        >

          <a
            href="#projects"
            className="
            px-7 py-3
            rounded-full
            bg-gradient-to-r
            from-purple-500 to-pink-500
            hover:scale-105
            transition
            shadow-lg
            text-white
            "
          >
            View My Work 🚀
          </a>

          <a
            href="#contact"
            className="
            px-7 py-3
            rounded-full
            border
            border-purple-500
            hover:bg-purple-500/10
            transition
            "
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;