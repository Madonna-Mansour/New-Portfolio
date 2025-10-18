import React from "react";
import { Code, Palette, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "HTML5",
      description:
        "Used to structure web pages with clean, semantic markup for better accessibility and SEO.",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "CSS3",
      description:
        "Styled websites with layouts, animations, and responsive designs using Flexbox and Grid.",
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "JavaScript (ES6)",
      description:
        "Added interactivity and dynamic content to web pages using modern JavaScript features like arrow functions, promises, and modules.",
      color: "from-green-500/20 to-green-600/10",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "React.js",
      description:
        "Built reusable UI components and managed state for scalable web apps using React hooks and JSX.",
      color: "from-orange-500/20 to-orange-600/10",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Bootstrap",
      description:
        "Used Bootstrap classes and components to quickly design responsive and mobile-first layouts.",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Tailwind CSS",
      description:
        "Styled interfaces using utility-first classes for fast and consistent design across the project.",
      color: "from-purple-500/20 to-purple-600/10",
    },
        {
      icon: <Palette className="w-6 h-6" />,
      title: "Redux Toolkit",
      description:
        "Simplified State Management For React Applications With Centralized Store, Reducers, And Middleware For Efficient Data Flow..",
      color: "from-green-500/20 to-green-600/10",
    },
        {
      icon: <Palette className="w-6 h-6" />,
      title: "Axios",
      description:
        "Handled HTTP Requests And API Communication Efficiently, Enabling Data Fetching, Posting, And Error Handling In Web Applications..",
      color: "from-orange-500/20 to-orange-600/10",
    },

  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm a Front-End Developer with a diploma in Software Engineering
            from the Faculty of Statistical Studies at Cairo University , where I built several responsive web projects. My goal is
            to create clean, accessible websites that provide a smooth and
            enjoyable user experience. I'm constantly learning and improving my
            skills in HTML, CSS, JavaScript,Tailwind CSS, Bootstrap, Redux Toolkit, Axios. and modern frameworks like React.
            I'm motivated, detail-oriented, and excited to grow as a developer
            in a collaborative environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${skill.color} border border-purple-700/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105`}
            >
              <div className="text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-700/30 rounded-2xl p-8">
          <div className="grid grid-cols-1  items-center">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                My journey into web development began while I was running my own
                clothing store. Although I worked in retail for years, I always
                had a passion for technology and a desire to create something
                meaningful on the web. Alongside managing my business, I started
                learning Front-End Development in my free time. I later took a
                serious step by joining Route Academy, where I gained hands-on
                experience with HTML, CSS, JavaScript, Bootstrap, React, and
                Git. To strengthen my technical background, I also completed a
                diploma in Software Engineering from the Faculty of Statistical
                Studies at Cairo University. Balancing work, study, and family
                life wasn’t easy — but it taught me discipline, time management,
                and the power of persistence. Now, I’m fully committed to
                becoming a professional Front-End Developer and contributing to
                real-world web projects. This career change has been
                challenging, but it’s also the most rewarding decision I’ve ever
                made
              </p>
              <p className="text-gray-300">
                Currently, I’m fully focused on improving my skills, building a
                strong portfolio, and preparing to transition into a full-time
                role as a Front-End Developer. <br />
                This new journey is not just about changing careers, <br /> it’s
                about building a better future through code.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
