const About = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center md:items-start">
      <h1 className="text-3xl md:text-6xl">Luigi Bustos</h1>
      <p className="md:w-2/3">
        As a General Assembly Software Engineer graduate, I’ve refined my skills
        in JavaScript, Python, MongoDB, Express, React, and NodeJs to become a
        well-rounded full-stack engineer. Before General Assembly, working as a
        Service Desk Technician sparked my passion for learning new
        technologies. My experience with Atlassian and ServiceNow administration
        introduced me to JavaScript and Agile software development. My goal is
        to pivot into a Web Developer or Frontend Engineer role position to
        create innovative user experiences and enhance existing business
        processes.
      </p>
      <div className="w-full flex items-center justify-center md:justify-start gap-4">
        <a className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
          LinkedIn
        </a>
        <a className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
