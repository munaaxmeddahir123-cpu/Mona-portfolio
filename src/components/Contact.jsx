function Contact() {
  return (
    <section
      id="contact"
      className="
      py-20 px-6
      bg-white text-black
      dark:bg-black dark:text-white
      "
    >

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
          Contact Me
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Have a project in mind? Let's build something amazing together 🚀
        </p>

        {/* Card */}
        <div
          className="
          mt-12
          rounded-3xl
          p-8
          space-y-8
          border
          border-gray-200
          dark:border-white/10
          bg-gray-50
          dark:bg-gray-900
          shadow-lg
          "
        >

          {/* Email */}
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              Email
            </h3>

            <a
              href="mailto:munaaxmed123@gmail.com"
              className="
              block mt-1
              text-lg
              text-purple-600
              dark:text-purple-400
              hover:underline
              break-all
              "
            >
              munaaxmed123@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              GitHub
            </h3>

            <a
              href="https://github.com/munaaxmeddahir123-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block mt-1
              text-lg
              text-purple-600
              dark:text-purple-400
              hover:underline
              break-all
              "
            >
              github.com/munaaxmeddahir123-cpu
            </a>
          </div>

          {/* LinkedIn */}
           <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              LinkedIn
            </h3>

            <a
              href=" https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block mt-1
              text-lg
              text-purple-600
              dark:text-purple-400
              hover:underline
              break-all
              "
            >
             https://www.linkedin.com/feed/
            </a>
          </div>

          {/* Button */}
          <a
            href="mailto:munaaxmed123@gmail.com"
            className="
            inline-block
            mt-6
            px-8 py-3
            rounded-full
            bg-gradient-to-r
            from-purple-500 to-pink-500
            text-white
            font-semibold
            hover:scale-105
            transition
            "
          >
            Send Me Email 💌
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;