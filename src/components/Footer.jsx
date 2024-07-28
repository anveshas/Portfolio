// // src/components/Footer.js
// import React from "react";
// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className='bg-gray-800 text-white py-8'>
//       <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        
//         {/* Logo and Description */}
//         <div className='flex flex-col items-center md:items-start mb-6 md:mb-0'>
//           <h2 className='text-2xl font-bold mb-2'>My Portfolio</h2>
//         </div>

//         {/* Navigation Links */}
//         <ul className='list-none flex flex-col md:flex-row gap-4 mb-6 md:mb-0'>
//           <li>
//             <a href="#about" className='hover:text-gray-400'>About</a>
//           </li>
//           <li>
//             <a href="#projects" className='hover:text-gray-400'>Projects</a>
//           </li>
//           <li>
//             <a href="#contact" className='hover:text-gray-400'>Contact</a>
//           </li>
//         </ul>

//         {/* Social Media Links */}
//         <div className='flex gap-4'>
//           <a href="https://www.linkedin.com/in/anvesha-srivastava-41babb25a/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-500'>
//             <FaLinkedin size={24} />
//           </a>
//           <a href="https://github.com/anveshas" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-300'>
//             <FaGithub size={24} />
//           </a>
//           <a href="https://x.com/Anvesha91091051/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400'>
//             <FaTwitter size={24} />
//           </a>
//         </div>
//       </div>

//       {/* Copyright Notice */}
//       <div className='text-center mt-6'>
//         <p className='text-sm'>&copy; {new Date().getFullYear()} Anvesha. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        
        {/* Logo and Description */}
        <div className='flex flex-col items-center md:items-start mb-6 md:mb-0'>
          <h2 className='text-2xl font-bold mb-2'>My Portfolio</h2>
        </div>

        {/* Navigation Links */}
        <ul className='list-none flex flex-col md:flex-row gap-4 mb-6 md:mb-0'>
          <li>
            <a href="#about" className='hover:text-gray-400'>About</a>
          </li>
          <li>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
          </li>
          <li>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className='flex gap-4'>
          <a href="https://www.linkedin.com/in/anvesha-srivastava-41babb25a/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-500'>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/anveshas" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-300'>
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/Anvesha91091051/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400'>
            <FaTwitter size={24} />
          </a>
          <a href="mailto:sanvesha28@gmail.com" className='text-white hover:text-red-500'>
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className='text-center mt-6'>
        <p className='text-sm'>&copy; {new Date().getFullYear()} Anvesha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
