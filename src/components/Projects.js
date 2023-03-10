import Simon from "../assets/simon.png";
import NiFT from "../assets/nift.png";
import APItizers from "../assets/apitizers.png";

const Projects = () => {
  const projects = [
    {
      name: "Simon",
      desc: "Developed and designed a single-player browser game SIMON using Vanilla JavaScript, HTML5, and CSS3. Implemented game logic, user interaction, and audio with JavaScript, animations, and transitions with CSS",
      mainImg: Simon,
      website: "https://luigibustos.github.io/project_1/",
      gitHub: "https://github.com/luigibustos/project_1",
    },
    {
      name: "NiFT",
      desc: "Developed and designed NiFT, a reversed-engineered e-commerce site using the MERN stack. Incorporated MongoDB for database management and Express.js for server-side routing. Implemented responsive design for optimal user experience across different devices with Bootstrap CSS and React",
      mainImg: NiFT,
      website: "https://nift-bld.netlify.app/",
      gitHub: "https://github.com/davidhlee94/project3-frontend",
    },
    {
      name: "APItizers",
      desc: "As a part of General Assembly's Mini Hackathon, our team was tasked to build a front end project in eight hours. This project was built with React.js, JavaScript, BootStrap CSS, CSS, and HTML. Our team won 'Most Finished', 'Most User Friendly', and 'Most Stylish / Vibrant'",
      mainImg: APItizers,
      website: "https://api-tizers.netlify.app/",
      gitHub: "https://github.com/JohnnyGoodrich/snacks-fe",
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-200 px-6 sm:px-24">
      {projects.map((project, idx) => {
        return (
          <div
            key={idx}
            className="grid grid-cols-1 place-items-center bg-neutral-100 rounded-xl shadow-md py-3 px-5 gap-4"
          >
            <img
              className="bg-cover bg-center rounded-xl shadow-sm"
              src={project.mainImg}
              alt={project.name}
            />
            <h1 className="max-w-sm text-2xl font-medium">{project.name}</h1>
            <p className="max-w-full text-sm font-light text-gray-500">
              {project.desc}
            </p>
            <div className="flex w-full justify-around">
              <a className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                Website
              </a>
              <a className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                Github
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
