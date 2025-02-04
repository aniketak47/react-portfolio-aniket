import aboutImage from "../assets/aniketak.png";
import { ABOUT_TEXT, RESUME_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImage} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-5 max-w-xl py-2 font-light tracking-tighter text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href={RESUME_CONTENT.resumeLink}
              className="bg-stone-400 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-3xl"
              target="_blank"
            >
              {RESUME_CONTENT.resumeLinkText}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
