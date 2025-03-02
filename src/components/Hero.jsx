import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center min-h-screen py-6 pt-60">
        <img src="IMG_1387.jpg" alt="Tomi" className="w-48 h-48 rounded-full mb-8 object-cover" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-indigo-600">Tomi</span>
        </h1>
        <p className="mt-6 text-xl max-w-3xl text-center">
          I'm a passionate web developer creating amazing digital experiences.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;