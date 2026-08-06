import profile from "../assets/profile1.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl top-20 left-10"></div>

      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-pink-600/20 rounded-full blur-3xl bottom-20 right-10"></div>


      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Profile Image */}
        <img
          src={profile}
          alt="Muna"
          className="
            w-32 h-32 
            md:w-40 md:h-40
            mx-auto
            rounded-full
            object-cover
            border-4 border-purple-500
            shadow-xl
            hover:scale-110
            transition
            duration-500
          "
        />


       {/* Title */}
<h1
  className="
  mt-8
  text-4xl
  sm:text-5xl
  md:text-7xl
  font-bold
"
>
  Muna Ahmed Dahir
</h1>


{/* Role */}
<h2
  className="
  mt-5
  text-xl
  sm:text-2xl
  md:text-3xl
  bg-gradient-to-r
  from-purple-400
  to-pink-500
  text-transparent
  bg-clip-text
  font-semibold
"
>
  Full Stack Developer
</h2>


        {/* Description */}
        <p className="
          mt-6
          max-w-xl
          mx-auto
          text-gray-400
          text-sm
          sm:text-base
          md:text-lg
          leading-7
        ">
          I build modern, responsive and scalable web applications
          using React, Node.js, MongoDB and modern technologies.
        </p>


        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="
            px-7 py-3
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            hover:scale-105
            transition
            "
          >
            View My Work
          </a>


          <a
            href="#contact"
            className="
            px-7 py-3
            rounded-full
            border border-purple-500
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