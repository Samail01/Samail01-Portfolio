import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import tailwindIcon from "../../assets/tailwind.png";
import githubIcon from "../../assets/github.png";

const skills = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "GitHub",
    icon: githubIcon,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-beige">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-center text-sm mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
