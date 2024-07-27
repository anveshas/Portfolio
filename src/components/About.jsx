import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import { leetcode} from "../assets";
import resume from "../assets/resume.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a dedicated web developer in my third year of pursuing a B.Tech in 
        Computer Science at Jaypee Institute of Information Technology, Noida. 
        My passion for problem-solving and analytical thinking led me to this field. 
        I am actively working on expanding my knowledge and mastering new technologies 
        to tackle complex challenges. My goal is to continuously improve my skills in 
        web development and problem-solving to create innovative solutions and 
        contribute effectively to the tech industry.
        {/* Explore my problem-solving skills on {" "}
        <a
          href="https://leetcode.com/anveshas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline"
        >
          <img src={leetcode} alt="LeetCode" className="w-6 h-6 mr-2" />
          LeetCode
        </a>{" "}
        and{" "}
        <a
          href="https://www.codechef.com/users/anveshas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline"
        >
          <img src={codechef} alt="CodeChef" className="w-6 h-6 mr-2" />
          CodeChef
        </a>. */}
      </motion.p>

      {/* Download Resume Button */}
      <div className='mt-8'>
        <a
          href={resume}
          download
          // className='inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          className='inline-block px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md border border-transparent shadow-md hover:from-blue-500 hover:to-blue-700 hover:border-blue-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg'
        >
          Download Resume
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
