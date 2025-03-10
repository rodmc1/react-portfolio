import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-2"></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Rodney, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that makes life easier for others. I have experience
              working with diverse clients, from individuals to large corporations. My goal is to leverage technology to
              enhance your operations and user experience.
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:text-center sm:grid-cols-1 gap-4 px-4 mt-8">
          <p className="mt-4 text-lg">
            When I'm not coding, you can find me exploring new frameworks, playing RPG/MOBA games, or learning about the
            latest trends in tech. Let’s build something great together!
          </p>
          <div className="mt-6">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-bold inline-block">
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
