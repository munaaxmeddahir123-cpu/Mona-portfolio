import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Muna.dev
        </a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>

        </div>


        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
        >
          Let's Talk
        </a>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>


      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-5 text-center">

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-purple-400"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-purple-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-purple-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-purple-400"
          >
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;