import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import profileImage from "./assets/profile-pic.jpg";

function App() {
  return (
    <>
      <div id="top">
        <Navbar />
        <header className="min-h-screen flex flex-col justify-center items-center bg-light pt-16 md:pt-0">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-4 space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold">Samail Pugaev</h1>
              <p className="text-xl mt-2">Developer and Designer</p>
              <p className="text-lg mt-4 max-w-xl">
                A passionate web developer and designer with a specialization in
                front-end development.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={profileImage}
                alt="Samail Pugaev"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full"
              />
            </div>
          </div>
        </header>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-4">
          <hr className="border-gray-300 mx-4 md:mx-20" />
          <p className="text-center text-gray-500 mt-4">
            Copyright © Samail Pugaev
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
