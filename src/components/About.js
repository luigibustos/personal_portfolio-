import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const socials = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/luigibustos/",
    },
    {
      icon: faGithub,
      link: "https://github.com/luigibustos",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row items-center py-6 sm:py-10 md:py-14">
      <div className="flex sm:flex-col py-2 sm:py-0">
        {socials.map((social, idx) => {
          return (
            <a
              key={idx}
              className="text-2xl text-gray-500 opacity-70 px-2 sm:px-9 sm:py-3 hover:text-gray-700 hover:cursor-pointer duration-300"
              href={social.link}
              target="_blank"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          );
        })}
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3 sm:w-1/3">
        <h1 className="text-4xl md:text-6xl font-bold font-antonio text-olive">
          Luigi Bustos
        </h1>
        <h2 className="sm:text-2xl font-semibold font-antonio sm:tracking-wide text-gray-700">
          San Francisco, CA
        </h2>
        <h3 className="px-10 text-center sm:text-left sm:px-0 font-light text-gray-500">
          Aspiring Frontend Engineer with a passion for JavaScript, React, and
          designing user-centered interfaces, committed to delivering engaging
          and intuitive digital experiences.
        </h3>
      </div>
    </div>
  );
};

export default About;
