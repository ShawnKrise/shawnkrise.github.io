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

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-Roboto">{title}</p>
        <p className="mt-7">
          These projects were created using a variety of techniques and softwares. Some demonstrate graphic creation and photo manipulation through the Adobe Creative Suite while others demonstrate 3D modeling creation through Blender.
        </p>
      </div>
      <img src={`./assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
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
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Below are some examples of visual graphics I've made in the past that cover a wide array of themes, styles, and usages. 
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
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-black
              max-w-[600px] max-h-[600px] text-2xl font-playfair font-semibold"
          >
            STUNNING VISUAL GRAPHICS
          </div>
          <Project className="content-project1" title="project 1" />
          <Project title="project 2" />

          {/* ROW 2 */}
          <Project title="project 3" />
          <Project title="project 4" />
          <Project title="project 5" />

          {/* ROW 3 */}
          <Project title="project 6" />
          <Project title="project 7" />
          <Project title="project 8" />

          {/* ROW 4 */}
          <Project title="project 9" />
          <Project title="project 10" />
          <Project title="project 11" />
          {/* ROW 5 */}
          <Project title="project 12" />
          <Project title="project 13" />
          <Project title="project 14" />
          {/* ROW 6 */}
          <Project title="project 15" />
          <Project title="project 16" />
          <Project title="project 17" />
          {/* ROW 7 */}
          <Project title="project 18" />
          <Project title="project 19" />

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
