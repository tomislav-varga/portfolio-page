import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Passionate Web Developer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            With a strong foundation in modern web technologies and a keen eye for design, I create engaging and responsive web applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Add your skills or key points here */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* You can add an icon here */}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Frontend Development</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Proficient in React, Vue.js, and modern CSS frameworks like Tailwind.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* You can add an icon here */}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Backend Development</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experienced with Node.js, Express, and database technologies like MongoDB and PostgreSQL.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;