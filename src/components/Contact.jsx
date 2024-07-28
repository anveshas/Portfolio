// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Anvesha Srivastava",
//           from_email: form.email,
//           to_email: "sanvesha28@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your good name"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your email address"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='Your Message'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Anvesha Srivastava",
          from_email: form.email,
          to_email: "sanvesha28@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>
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
        </p>

        {/* <p className={styles.sectionSubText}>Feel free to message me if you have any potential opportunities or collaborations.</p> */}
        <p className={`${styles.sectionSubText} mt-4`} style={{ fontSize: '18px', fontStyle: 'italic', color: '#6b7280', textTransform: 'none' }}>
          Feel free to message me if you have any potential opportunities or collaborations.
        </p>
        {/* <p className={styles.sectionSubText}>
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
        </p> */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your good name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your Message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
