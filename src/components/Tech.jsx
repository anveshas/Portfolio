import React from "react";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };
const Tech = () => {
  return (
    <div>
       <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText}`}>My technical skills are:</p> */}
        <h2 className={`${styles.sectionHeadText}`}>My Technical Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

// const Tech = () => {
//   return (
//     <div>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>My technical skills are:</p>
//         <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
//       </motion.div>
//       <div className='flex flex-row flex-wrap justify-center gap-10'>
//         {technologies.map((technology) => (
//           <div className='w-28 h-28' key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tech;
