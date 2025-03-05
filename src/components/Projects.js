import { useEffect, useState } from 'react';

const projects = [
  { 
    id: 1, 
    title: "Chat Bot App", 
    description: "Developed an interactive chatbot using HTML, CSS, JavaScript, and Bootstrap, enhancing user engagement through predefined categories and automated responses.", 
    skills: "HTML, CSS, JavaScript, Bootstrap",
    github: "https://github.com/anjali817161/ChatBot-APP2", 
    live: "https://chatbot-app-ashen.vercel.app" 
  },
  { 
    id: 2, 
    title: "Blogging App", 
    description: "A blogging platform that allows users to create, edit, and delete their posts, featuring real-time updates using Firebase.", 
    skills: "React, Firebase", 
    github: "https://github.com/anjali817161/Blog-App2", 
    live: "https://blog-app-mu-bice.vercel.app" 
  },
  { 
    id: 3, 
    title: "Movie App", 
    description: "An interactive movie application that lets users search for movies, view details, and manage their favorite lists.", 
    skills: "React", 
    github: "https://github.com/anjali817161/Movie-Dashboard", 
    live: "https://6z4nn3.csb.app" 
  },
  { 
    id: 4, 
    title: "Super Hero Hunter Game", 
    description: "An exciting game where players can explore different superheroes, view their powers, and engage in thrilling battles.", 
    skills: "HTML, CSS, JavaScript, Bootstrap", 
    github: "https://github.com/anjali817161/SuperHero-Game", 
    live: "https://dtqx5x.csb.app" 
  },
];

const Projects = () => {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHeading(true);
      setAnimateCards(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative p-6 sm:p-8 md:p-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8SEfC5Q6a5IhFcf0ZHMv1MTV8V5jwO7qWw&s)' }}
    >
      <div className="absolute inset-0 opacity-50"></div>
      <h2 
        className={`text-3xl sm:text-4xl md:text-5xl text-center underline font-serif text-violet-800 relative z-10 transform ${animateHeading ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`}
      >
        Projects
      </h2>
      <div className="mt-8 gap-8 sm:gap-10 mx-4 sm:mx-8 md:mx-32 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 relative z-10">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`border p-4 sm:p-6 mt-6 sm:mt-8 rounded-lg bg-gradient-to-r from-emerald-100 to-slate-100 border-none cursor-pointer hover:shadow-2xl max-w-full sm:max-w-xs lg:max-w-sm shadow relative transform transition-transform duration-700 ${animateCards ? `translate-x-0 delay-${index * 100}` : '-translate-x-full'}`}
            style={{ transitionDelay: `${index * 100}ms` }} 
          >
            <h3 className="font-bold text-xl sm:text-2xl text-emerald-950">{project.title}</h3>
            <p className="mt-2 text-base sm:text-lg">{project.description}</p>
            <h4 className="font-bold text-base sm:text-lg text-emerald-900 mt-3">Skills Used:</h4>
            <p className="mt-1 font-semibold text-sm sm:text-base">{project.skills}</p>
            <div className="mt-3">
            <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-800 font-semibold text-sm sm:text-lg mr-4"
  >
    GitHub
  </a>             
  
  <a 
    href={project.live} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-red-800 font-semibold text-sm sm:text-lg"
  >
    Link
  </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
