import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Xi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a full stack developer, I find immense satisfaction in crafting
              one-of-a-kind software experiences that revolutionize the lives of
              users. My expertise spans across diverse clients, ranging from
              individuals and small businesses to large enterprise corporations.
              With a keen focus on building unique software solutions, I take
              great pride in delivering transformative results through my work.
              Explore my portfolio to witness the seamless blend of creativity,
              functionality, and innovation that defines my approach to software
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About