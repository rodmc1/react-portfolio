import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import img from './../assets/profile2.jpg';

const Home = () => {
  const [textColor, setTextColor] = useState('PaleTurquoise');

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="mx-auto px-8 flex justify-center h-full flex flex-row landing-intro">
        <div className="basis-1/5 profile-img">
          <img src={img} alt="test" className="rounded-full max-h-64 drop-shadow-lg saturate-50" />
        </div>
        <div className="flex-col basis-2/3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6]">Rodney Cunanan</h2>
          <div
            style={{
              fontSize: '35px',
              color: textColor
            }}>
            <TypeAnimation
              sequence={[
                () => setTextColor('PaleTurquoise'),
                `I'm a`,
                700,
                `I'm a Web Developer`,
                1000,
                `Specialized in React JS`,
                () => setTextColor('DeepSkyBlue'),
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-4xl sm:text-7xl font-bold"
              repeat={Infinity}
            />
          </div>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            A software engineer who specializes in building web applications.
            <br />
            Passionate about creating seamless user experiences through efficient front-end architecture, performance
            optimization, and modern development best practices. Experienced in backend development and cloud-based
            solutions to deliver scalable and maintainable applications.
          </p>
          <div>
            <button>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
