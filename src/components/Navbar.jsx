import { useState, useEffect } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);


  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);


  const toggleTheme = () => {

    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    setDark(!dark);
  };


  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];


  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white
      dark:bg-black
      border-b
      border-gray-200
      dark:border-white/10
      transition
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}

        <a
          href="#"
          className="
          text-xl
          font-bold
          bg-gradient-to-r
          from-purple-400
          to-pink-500
          text-transparent
          bg-clip-text
          "
        >
          Muna.dev
        </a>



        {/* Menu */}

        <div className="hidden md:flex gap-8">

          {menuItems.map((item)=>(

            <a
              key={item.name}
              href={item.link}
              className="
              text-gray-700
              dark:text-gray-300
              hover:text-purple-500
              transition
              "
            >
              {item.name}
            </a>

          ))}

        </div>



        {/* Right */}

        <div className="flex items-center gap-4">


          {/* Theme */}

          <button
            onClick={toggleTheme}
            className="
            text-xl
            hover:scale-110
            transition
            "
          >
            {dark ? "☀️" : "🌙"}
          </button>



          {/* Button */}

          <a
            href="#contact"
            className="
            hidden
            md:block
            px-5
            py-2
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            text-white
            hover:scale-105
            transition
            "
          >
            Let's Talk
          </a>



          {/* Mobile */}

          <button
            onClick={()=>setOpen(!open)}
            className="
            md:hidden
            text-2xl
            text-gray-800
            dark:text-white
            "
          >
            {open ? "✕" : "☰"}
          </button>


        </div>


      </div>



      {/* Mobile Menu */}

      {open && (

        <div
          className="
          md:hidden
          bg-white
          dark:bg-black
          px-6
          py-6
          space-y-5
          text-center
          "
        >

          {menuItems.map((item)=>(

            <a
              key={item.name}
              href={item.link}
              onClick={()=>setOpen(false)}
              className="
              block
              text-gray-700
              dark:text-gray-300
              hover:text-purple-500
              "
            >
              {item.name}
            </a>

          ))}

        </div>

      )}


    </nav>

  );

}


export default Navbar;