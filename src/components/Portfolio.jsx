import React, { useState } from 'react';

const projects = [
  {
    title: 'Final Project of Coding Bootcamp',
    description: 'A brief description of Project 3',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Phonebook',
    description: 'A full-stack MERN application for managing contacts. Features include CRUD operations, responsive design with Tailwind CSS, and deployment on a VPS with Nginx and PM2.',
    imageUrl: 'iScreen Shoter - Google Chrome - 250302151601.jpg',
    link: 'https://github.com/TommiNICE/phonebook-production',
  },
  {
    title: 'Portfolio Site',
    description: 'A brief description of Project 2',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Deployment of Websites',
    description: 'A brief description of Project 3',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Recent Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of the projects I've worked on recently. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-100 overflow-hidden shadow rounded-lg mx-auto max-w-sm">
                    <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {project.description}
                      </p>
                      <div className="mt-4">
                        <a href={project.link} target="_blank" className="text-indigo-600 hover:text-indigo-500">
                          View Project <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevProject} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            &larr;
          </button>
          <button onClick={nextProject} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
