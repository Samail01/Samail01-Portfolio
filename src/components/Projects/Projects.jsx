import githubIcon from "../../assets/github.png";
import netlifyIcon from "../../assets/netlify.png";
import holidazeImage from "../../assets/holidaze-screen.png";
import everycartImage from "../../assets/everycart-screen.png";

const ProjectCard = ({ title, image, description, githubLink, liveLink }) => {
  return (
    <div className="relative group w-full max-w-md md:max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-light">
      <img
        src={image}
        alt={title}
        className="w-full h-64 md:h-96 object-cover group-hover:opacity-80 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
            <p className="text-white mt-2">GitHub</p>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img src={netlifyIcon} alt="Netlify" className="w-10 h-10" />
            <p className="text-white mt-2">Live link</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="space-y-8">
          <ProjectCard
            title="Holidaze"
            image={holidazeImage}
            description="A passionate web developer and designer with a specialization in front-end development."
            githubLink="https://github.com/Samail01/project-exam-2-samail"
            liveLink="https://endearing-biscochitos-fdbe12.netlify.app"
          />
          <ProjectCard
            title="EveryCart"
            image={everycartImage}
            description="EveryCart is a responsive and user-friendly eCommerce platform built with React."
            githubLink="https://github.com/Samail01/ca-js-frameworks"
            liveLink="https://cute-churros-fb88ab.netlify.app"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
