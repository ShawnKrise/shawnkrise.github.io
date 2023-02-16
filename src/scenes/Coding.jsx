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
    </section>
  );
};

export default Coding;
