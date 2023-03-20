import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-Roboto font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Here are some of my additional skills I've gained through work, academic, and self improvement experiences.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center mt-16 gap-32">
        {/* WORK EXPERIENCE */}
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
                Work Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have experience working as a Marketing Specialist/Graphic Designer at Commercial Brokerage LLC seasonally from May 2016 to December 2021 and then transitioned to full time from May 2022 to December 2022.  The job required I design custom flyer advertising layouts using the Adobe Software Suite and Microsoft Office for
commercial properties located throughout Bernalillo County, New Mexico. I also Traveled to and inspected
property sites, logged appropriate details, and photographed sites for company usage. My other tasks included dealing with technical support matters and creating/maintaining a custom company website using frontend development tools.
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">02</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Education
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In May of 2022 I graduated from the University of New Mexico with a Bachelor of Business Administration with a concentration of Marketing Management. My classes covered a wide array of Marketing concepts and skills. Examples include developing in indepth understanding of how user data is gathered and interpreted through tools such as Qualtrics and IBM SPSS Statistics. In addition, I gained valuable sale skills through a Professional Selling course that involved skills such as cold calling and the usage of Salesforce.
          </p>
        </motion.div>

        {/* ADOBE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Roboto font-semibold text-5xl">03</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Adobe Skills 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Throughout all of High School and College I have been constantly using the Adobe Creative Suite for a multitude of personal and school related projects. For instance, during High School I acted as the head graphic designer for my schools yearbook association. This involved using skills based in Photoshop and InDesign to create yearbook pages in collaboration with my fellow yearbook members. In college, I also utilized the entire Creative Suite for several courses that helped further my experience. Furthermore, I have refined my skill with these programs by constantly teaching myself new things for personal projects. Examples of this can be found all throughout this website. 
          </p>
        </motion.div>
        {/* MICROSOFT */}
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
              <p className="font-Roboto font-semibold text-5xl">04</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Microsoft Skills 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have experience utilizing many Microsoft applications such as Word, Teams, Outlook, PowerPoint, and Excel with a high degree of skill. Many of my courses throughout my educational journey have required the usage of these applications and have taught me in depth utilization tips such as Excel Macros to optimize my productivity while working with them.
          </p>
        </motion.div>

 {/* GOOGLE SKILLS */}
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
              <p className="font-Roboto font-semibold text-5xl">05</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Google Skills 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            My educational journey along with work experience has also made me incredibly familiar with Google applications such as Drive, Docs, Slides, and Forms on my own as well as in tandem with others. Additionally, I am familiar with Google AdWords Keyword Planner and have certifications for Google Ads Search, and Google Analytics.
          </p>
        </motion.div>

{/* HOOTSUITE, HUBSPOT, AND SEMRUSH SKILLS */}
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
              <p className="font-Roboto font-semibold text-5xl">06</p>
              <p className="font-Roboto font-semibold text-3xl mt-3">
                Hootsuite, HubSpot & SEMrush
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I possess a certification for the Hootsuite Platform as well as a certification for HubSpot Social Media Marketing. Additionally, I have certifications in SEMrush SEO and SEMrush Advanced Content Marketing.
          </p>
        </motion.div>


      </div>
    </section>
  );
};

export default MySkills;
