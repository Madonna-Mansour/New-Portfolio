// import React from "react";
// import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: <Github className="w-5 h-5" />,
//       name: "GitHub",
//       url: "https://github.com/Eid-Elgohary",
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/eid-elgohary",
//     },

//     {
//       icon: <Mail className="w-5 h-5" />,
//       name: "Email",
//       url: "mailto:eidelgohary.job@gmail.com",
//     },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-purple-950/50 border-t border-purple-700/30 py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <h3 className="text-white text-xl font-bold">eid elgohary</h3>
//             <p className="text-gray-300 text-sm">
//               © 2025 Eid Elgohary. Front-End Developer passionate about building
//               clean and responsive websites. Let's connect and build something
//               great together!
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-white text-lg font-semibold">Quick Links</h4>
//             <div className="grid grid-cols-2 gap-2">
//               {["Home", "About", "Work", "Portfolio", "Contact"].map((link) => (
//                 <button
//                   key={link}
//                   onClick={() => {
//                     const element = document.getElementById(link.toLowerCase());
//                     if (element) element.scrollIntoView({ behavior: "smooth" });
//                   }}
//                   className="text-gray-300 hover:text-purple-400 transition-colors text-sm text-left"
//                 >
//                   {link}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h4 className="text-white text-lg font-semibold">Connect</h4>
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   className="w-10 cursor-pointer h-10 bg-purple-700/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//             <p className="text-gray-300 text-sm">
//               Available for freelance opportunities
//             </p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-purple-700/30 pt-8 flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center gap-1 text-gray-300 text-sm mb-4 md:mb-0">
//             <span>© {currentYear} Made with</span>
//             <Heart className="w-4 h-4 text-red-400 fill-current" />
//             <span>design and content inspired by Ibrahim Manion</span>
//           </div>

//           <button
//             onClick={scrollToTop}
//             className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
//           >
//             Back to Top
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/Madonna-Mansour",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madonna-mansour-helmy-93a0a020a/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "madonnamansour57@gmail.com",
    },
  ];

  const pageLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`العنصر برقم التعريف '${id}' غير موجود`);
    }
  };

  return (
    <footer className="bg-purple-950/50 border-t border-purple-700/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4" id="home">
            <h3 className="text-white text-xl font-bold">Madonna Mansour</h3>
            <p className="text-gray-300 text-sm">
              © {currentYear} Madonna Mansour. Front-End Developer passionate about
              building clean and responsive websites. Let's connect and build
              something great together!
            </p>
          </div>

          <div className="space-y-4" id="about">
            <h4 className="text-white text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {pageLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4" id="contact">
            <h4 className="text-white text-lg font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-purple-700/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 cursor-pointer"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Available for freelance opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-purple-700/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-1 text-gray-300 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Made by Madonna Mansour</span>
            {/* <Heart className="w-4 h-4 text-red-400 fill-current" /> */}
          </div>

          {/* <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            Back to Top
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
