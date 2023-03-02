import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-Roboto font-semibold text-4xl">
            <span className="text-blue">VISUAL PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Below are some examples of visual graphics I've made in the past that cover a wide array of themes, styles, and usages. If you're looking for my coding projects instead, those can be found in the coding section.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-black
              max-w-[600px] max-h-[600px] text-2xl font-playfair font-semibold"
          >
            STUNNING VISUAL GRAPHICS
          </div>

          <img src="./assets/project-1.png" alt="project"/>
          <img src="./assets/project-2.png" alt="project"/>

          {/* ROW 2 */}
          <img src="./assets/project-3.png" alt="project"/>
          <img src="./assets/project-4.png" alt="project"/>
          <img src="./assets/project-5.png" alt="project"/>

          {/* ROW 3 */}
          <img src="./assets/project-6.png" alt="project"/>
          <img src="./assets/project-7.png" alt="project"/>
          <img src="./assets/project-8.png" alt="project"/>

          {/* ROW 4 */}
          <img src="./assets/project-9.png" alt="project"/>
          <img src="./assets/project-10.png" alt="project"/>
          <img src="./assets/project-11.png" alt="project"/>
          {/* ROW 5 */}
          <img src="./assets/project-12.png" alt="project"/>
          <img src="./assets/project-13.png" alt="project"/>
          <img src="./assets/project-14.png" alt="project"/>
          {/* ROW 6 */}
          <img src="./assets/project-15.png" alt="project"/>
          <img src="./assets/project-16.png" alt="project"/>
          <img src="./assets/project-17.png" alt="project"/>
          {/* ROW 7 */}
          <img src="./assets/project-18.png" alt="project"/>
          <img src="./assets/project-19.png" alt="project"/>

          <div
            className="flex justify-center text-center items-center p-10 bg-black
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            REGARDLESS OF THEME OR USE
          </div>         
            
        </motion.div>
      </div>

      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="pt-16 pb-5 font-Roboto font-semibold text-4xl">
            <span >VIDEOS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I've also created some projects that are video based. If you want to check them out head over to my youtube channel.  
        </p>

        <a
        className="hover:opacity-50 transition duration-500 flex justify-center"
        href="https://www.youtube.com/@ShawnKrise/featured"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="youtube-link" src="../assets/big-youtube.png" />
      </a>
      </motion.div>
    </section>
  );
};

export default Projects;
