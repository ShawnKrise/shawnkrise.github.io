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
            I've utilized Framer Motion to assist in the implementation of animation in Reactjs for seamless clean web animation. 
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
      </div>

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
          <p className="mt-5">
          Built a custom personal portfolio website using tools such as Reactjs, Tailwind, JavaScript, Framer Motion, HTML, and CSS. You're looking at it right now!
          </p>
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">02</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                TicTacToe Game
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Built a TicTacToe game using Reactjs, JavaScript, CSS, and HTML in order to improve my logic skills using If Else statements. Check out the code for it on my GitHub.
          </p>
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">03</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Commercial Brokerage Website
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Built a custom website for Commercial Brokerage LLC using tools such as Reactjs, Tailwind, JavaScript, Framer Motion, HTML, and CSS.
          </p>
        </motion.div>
        </div>

    </section>
  );
};

export default Coding;
