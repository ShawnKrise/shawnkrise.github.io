import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Coding = () => {
  return (
    <section id="coding" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-Roboto font-semibold text-4xl mb-5 text-red">
          Coding Languages
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here are some of the coding resources I'm familiar with. In fact, many were used in the making of this very website!
        </p>
      </motion.div>

      {/* CODING */}
      <div className="sm:grid sm:grid-cols-3 md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-10 text-xl">
            I've used Reactjs for frontend development projects such as this website.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-10 text-xl">
            I've learned how to utilize Tailwind CSS framework for frontend development usage.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-3 text-xl">
            I have an understanding of the utilization of JavaScript for website frontend development.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-1 text-xl">
            I've utilized Framer Motion for seamless clean web animations. 
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-6 text-xl">
            I have experience with HTML for web browsers through projects such as this.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-6 text-xl">
            Similar to HTML, I have utilized CSS for web browser sites such as this.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-6 text-xl">
            I have used google Firebase for user Authentication and Database purposes.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-12 text-xl">
            I have used Sass for CSS styling purposes for projects. 
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deep-greyblue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center py-12 text-xl">
            I have used Yarn as a JavaScript package manager for some of my projects.
          </p>
        </motion.div>
      </div>
  {/* CODING PROJECTS */}
      <motion.div
        className="pt-16 pb-5 md:w-2/5 mx-auto text-center"
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
            <span >Coding Projects</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
          <p className="mt-10 mb-10">
          I've also created some coding projects, some of which you can check out in respective repositories on my github profile.  
        </p>

        <a
        className="hover:opacity-50 transition duration-500 flex justify-center"
        href="https://github.com/ShawnKrise/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/big-github.png" />
      </a>
        </div>
      </motion.div>

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
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
          Built a custom website for Commercial Brokerage LLC using tools such as Reactjs, Tailwind, JavaScript, Framer Motion, HTML, and CSS.
          </p>
        </motion.div>
        </div>

    </section>
  );
};

export default Coding;
