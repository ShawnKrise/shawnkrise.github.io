import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Coding = () => {
  return (
    <section id="coding" className="pt-32 pb-16">
     {/* HEADING */}
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
            <span className="text-blue">CODING PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Here are my coding projects! Check out the demo as well as their respective repositories on my github profile.
        </p>

        <a
        className="hover:opacity-50 transition duration-500 flex justify-center"
        href="https://github.com/ShawnKrise/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/big-github.png" />
      </a>
      </motion.div>
      
  {/* CODING PROJECTS */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center mt-16 gap-32">
  {/* PORTFOLIO PROJECT */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">01</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Portfolio Website
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a custom personal portfolio website using tools such as Reactjs, Tailwind, JavaScript, Framer Motion, HTML, and CSS.
          </p>
          <div className="flex justify-center my-10 gap-7">
          <a
        href="https://github.com/ShawnKrise/shawnkrise.github.io"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-blue hover:text-white transition duration-500" >Repository</button>
      </a>
          </div>
        </motion.div>

  {/* TICTACTOE PROJECT */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="display: grid relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">02</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                TicTacToe Game
              </p>
            </div>
            <div className="absolute right-1 top-1 max-w-[120px] max-h-[120px]">
            <img src="./assets/TicTacToe.png" alt=""/>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a TicTacToe game using Reactjs, JavaScript, CSS, and HTML in order to improve my logic skills using If Else statements. 
          </p>
          <div className="flex justify-center my-10 gap-7">
          <a
        href="https://shawnkrise.github.io/TicTacToeGame/"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-yellow hover:text-white transition duration-500" >Demo</button>
      </a>
      <a
        href="https://github.com/ShawnKrise/TicTacToeGame"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-yellow hover:text-white transition duration-500" >Repository</button>
      </a>
      </div>
        </motion.div>

{/* TODO LIST PROJECT */}
<motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="display: grid relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">03</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Todo List Application
              </p>
              </div>
              <div className="absolute right-1 top-1 max-w-[120px] max-h-[120px]">
            <img src="./assets/TodoList.png" alt=""/>
              </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a simple Todo List application using Reactjs, JavaScript, CSS, and HTML to improve understanding of React hooks usage.
          </p>
          <div className="flex justify-center my-10 gap-7">
          <a
        href="https://shawnkrise.github.io/TodoList/"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-yellow hover:text-white transition duration-500" >Demo</button>
      </a>
      <a
        href="https://github.com/ShawnKrise/TodoList"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-yellow hover:text-white transition duration-500" >Repository</button>
      </a>
      </div>
        </motion.div>

{/* WORDLE PROJECT */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="display: grid relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">04</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Wordle Project
              </p>
            </div>
            <div className="absolute right-1 top-1 max-w-[120px] max-h-[120px]">
            <img src="./assets/Wordle.png" alt=""/>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a Wordle clone using Reactjs, JavaScript, CSS, and HTML to gain a better understanding of array inputs in a matrix. 
          </p>
          <div className="flex justify-center my-10 gap-7">
          <a
        href="https://shawnkrise.github.io/WordleClone/"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-blue hover:text-white transition duration-500" >Demo</button>
      </a>
      <a
        href="https://github.com/ShawnKrise/WordleClone"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-blue hover:text-white transition duration-500" >Repository</button>
      </a>
      </div>
        </motion.div>

{/* CHAT APP WEBSITE PROJECT */}
<motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="display: grid relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">05</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Chat App Website
              </p>
            </div>
            <div className="absolute right-1 top-1 max-w-[120px] max-h-[120px]">
            <img src="./assets/ChatApp.png" alt=""/>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a fully functional Chat Application using Reactjs, JavaScript, Scss, Yarn, and Google Firebase.
          </p>
          <div className="flex justify-center my-10 gap-7">
          <a
        href="https://shawnkrise.github.io/ChatApp/#/login"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-blue hover:text-white transition duration-500" >Demo</button>
      </a>
      <a
        href="https://github.com/ShawnKrise/ChatApp"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-blue hover:text-white transition duration-500" >Repository</button>
      </a>
      </div>
        </motion.div>

{/* COMPANY WEBSITE PROJECT */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="display: grid relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">06</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Commercial Brokerage Website
              </p>
            </div>
            <div className="absolute right-1 top-1 max-w-[120px] max-h-[120px]">
            <img src="./assets/CBSite.png" alt=""/>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a custom website for Commercial Brokerage LLC using tools such as Reactjs, Tailwind, JavaScript, Framer Motion, HTML, and CSS.
          </p>
          <div className="flex justify-center my-10 gap-7">
          <a
        href="https://shawnkrise.github.io/CBSite/"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-yellow hover:text-white transition duration-500" >Demo</button>
      </a>
      <a
        href="https://github.com/ShawnKrise/CBSite"
        target="_blank"
        rel="noreferrer"
      >
         <button className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-bold
              hover:bg-yellow hover:text-white transition duration-500" >Repository</button>
      </a>
      </div>
        </motion.div>
    </div>
     {/* HEADING 2 */}
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
          <p className="font-Roboto font-semibold text-4xl mt-10">
            <span>CODING TOOLS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 ">
        Here are some of the coding resources I'm familiar with. In fact, many were used in the making of this very website!
        </p>

      </motion.div>
     

      {/* CODING */}
      <div className="sm:grid sm:grid-cols-3 md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.3 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-1.png" alt=""/>
          <p className="text-center text-xl">
            I've used Reactjs for frontend development projects such as this website.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-2.png" alt=""/>
          <p className="text-center text-xl">
            I've learned how to utilize Tailwind CSS framework for frontend development usage.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-3.png" alt=""/>
          <p className="text-center text-xl">
            I have an understanding of the utilization of JavaScript for website frontend development.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{  duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-4.png" alt=""/>
          <p className="text-center text-xl">
            I've utilized Framer Motion for seamless clean web animations. 
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{  duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-5.png" alt=""/>
          <p className="text-center text-xl">
            I have experience with HTML for web browsers through projects such as this.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-6.png" alt=""/>
          <p className="text-center text-xl">
            Similar to HTML, I have utilized CSS for web browser sites such as this.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{  duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-7.png" alt=""/>
          <p className="text-center text-xl">
            I have used google Firebase for user Authentication and Database purposes.
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{  duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-8.png" alt=""/>
          <p className="text-center text-xl">
            I have used Sass for CSS styling purposes for projects. 
          </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <img src="./assets/person-9.png" alt=""/>
          <p className="text-center text-xl">
          I have used Yarn as a JavaScript package manager for some of my projects.
          </p>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coding;
