function Contact() {
  return (
    <section id="contact" className="py-20 px-6">

      <div className="max-w-4xl mx-auto text-center">


        <h2
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-purple-400
          "
        >
          Contact Me
        </h2>


        <p className="mt-5 text-gray-400 text-sm sm:text-base">
          Have a project in mind? Let's build something amazing together 🚀
        </p>


        <div
          className="
          mt-10
          bg-gray-950
          border
          border-white/10
          rounded-3xl
          p-8
          space-y-5
          "
        >

          <p>
            Email:{" "}
            <a
              href="mailto:munaaxmed123@gmail.com"
              className="text-purple-400 hover:underline break-all"
            >
              munaaxmed123@gmail.com
            </a>
          </p>


          <p>
            GitHub:{" "}
            <a
              href="https://github.com/munaaxmeddahir123-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline break-all"
            >
              github.com/munaaxmeddahir123-cpu
            </a>
          </p>


        </div>


      </div>

    </section>
  );
}

export default Contact;