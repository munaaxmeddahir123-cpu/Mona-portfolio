function Footer() {
  return (
    <footer
      className="
      py-12 px-6
      bg-white text-black
      dark:bg-black dark:text-white
      border-t border-gray-200
      dark:border-white/10
      "
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-gradient">
            Muna.dev
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-6">
            Full Stack Developer passionate about building modern,
            user-friendly web applications and creating meaningful
            digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">

            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#about" className="hover:text-purple-500">About</a></li>
            <li><a href="#skills" className="hover:text-purple-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>

          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-semibold mb-4">
            Connect
          </h3>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">

            <a
              href="mailto:munaaxmed123@gmail.com"
              className="block hover:text-purple-500"
            >
              munaaxmed123@gmail.com
            </a>

            <a
              href="https://github.com/munaaxmeddahir123-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-purple-500"
            >
              GitHub
            </a>

            <a
              href=" https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-purple-500"
            >
             LinkedIn
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2026 Muna Ahmed Dahir. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;