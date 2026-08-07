import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (

    <div className="
      bg-white text-black
      dark:bg-black dark:text-white
      overflow-hidden
    ">

      <Navbar />

      <main>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>

      <Footer />

    </div>

  );
}

export default App;