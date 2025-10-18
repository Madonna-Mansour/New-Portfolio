import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import amazone from "../../src/imgs/amazon.png";
import botiga from "../../src/imgs/botiga.png";
import coffee from "../../src/imgs/coffee.png";
import criativo from "../../src/imgs/criativo.png";
import ecommerce from "../../src/imgs/e-commerce.png";
import fior from "../../src/imgs/fior.png";
import khamsat from "../../src/imgs/khamsat.png";
import newHome from "../../src/imgs/newhome.png";
import neww from "../../src/imgs/new.png";
import phoneWhite from "../../src/imgs/phone white.png";
import rosaLand from "../../src/imgs/rosa-land.png";
import rossa from "../../src/imgs/rossa3.jpg";
import shein from "../../src/imgs/shein.png";
import shopeEasy from "../../src/imgs/ShopEasy.png";
import timeZone from "../../src/imgs/time zone.png";


interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  bgColor: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  bgColor,
}) => {
  return (
    <Card
      className={`${bgColor} border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group`}
    >
      <CardContent className="p-6">
        <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-4 flex items-center justify-center">
          <img src={image} className="w-full h-full  rounded-lg" alt="" />
        </div>

        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-700 text-purple-200 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-700/50 hover:bg-purple-600/50 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      image: amazone,
      technologies: [
        "React",
        "styled components",
        "Tailwind CSS",
        "react-hook-form",
        "react-icons",
        "Redux Toolkit",
        "Axios",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://amazon-theta-cyan.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Amazon",
    },

    {
      title: "E-Commerce Platform",
      image: shein,
      technologies: [
        "React",
        "styled components",
        "Tailwind CSS",
        "react-hook-form",
        "react-icons",
        "Redux Toolkit",
        "Axios",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://shein-eta.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/SHEIN",
    },

     {
      title: "E-Commerce Platform",
      image: shopeEasy,
      technologies: [
        "React",
        "styled components",
        "Tailwind CSS",
        "react-hook-form",
        "react-icons",
        "Redux Toolkit",
        "Axios",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://shop-ease-eight-gamma.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/ShopEase",
    },

     {
      title: "Coffee",
      image: coffee,
      technologies: [
        "React",
        "styled components",
        "Tailwind CSS",
        "react-hook-form",
        "react-icons",

      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://coffee-teal-alpha.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Coffee",
    },

     {
      title: "Botiga",
      image: botiga,
      technologies: [
        "React",
        "styled components",
        "Tailwind CSS",
        "react-hook-form",
        "react-icons",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://botiga-xi.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Botiga",
    },

         {
      title: "Time Zone",
      image: timeZone,
      technologies: [
        "React",
        "styled components",
        "react-hook-form",
        "react-icons",
        "Bootstrap"
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://time-zone-gamma.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Time-Zone",
    },

     {
      title: "Fiore",
      image: fior,
      technologies: [
        "React",
        "styled components",
        "react-hook-form",
        "react-icons",
        "Bootstrap"

      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://fiore-rho.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Fiore",
    },


         {
      title: "Rosaa",
      image: rossa,
      technologies: [
          "React",
        "styled components",
        "react-hook-form",
        "react-icons",
        "Bootstrap"
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://rosaa-virid.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/ROSAA",
    },


        {
      title: "RosaLand",
      image: rosaLand,
      technologies: [
           "React",
        "styled components",
        "react-hook-form",
        "react-icons",
        "Bootstrap"
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://rose-land.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/rose-land",
    },

      {
      title: "NewHome",
      image: newHome,
      technologies: [
          "React",
        "styled components",
        "react-hook-form",
        "react-icons",
        "Bootstrap"
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://new-home-six.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/New-Home",
    },

      {
      title: "Khamsat",
      image: khamsat,
      technologies: [
        "HTML",
        "CSS",
        "Java Script",
        "styled components",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://cute-liger-d4aa79.netlify.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Khamsat",
    },

      {
      title: "Criativo",
      image: criativo,
      technologies: [
        "HTML",
        "CSS",
        "Java Script",
        "styled components",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://criativo-livid.vercel.app/",
      githubUrl: "https://github.com/Madonna-Mansour/Criativo",
    },
    
    
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
