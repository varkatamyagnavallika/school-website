import { motion } from "framer-motion";
import {
  Book,
  Target,
  Lightbulb,
  User,
  FlaskConical,
  MonitorDot,
  Library,
  LoaderPinwheel,
} from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        {...fadeIn}
      >
        About Springdale Public School
      </motion.h1>

      <motion.section className="mb-16" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Book className="mr-2" /> Our History
        </h2>
        <p className="text-lg">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.section {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Target className="mr-2" /> Our Vision
          </h2>
          <p className="text-lg">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </motion.section>

        <motion.section {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Lightbulb className="mr-2" /> Our Mission
          </h2>
          <p className="text-lg">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </motion.section>
      </div>

      <motion.section className="mb-16" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <User className="mr-2" /> Principal's Message
        </h2>
        <blockquote className="text-lg italic border-l-4 border-blue-500 pl-4">
          "At Springdale, we believe in nurturing the potential of every student
          and guiding them towards a successful future."
        </blockquote>
      </motion.section>

      <motion.section {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FlaskConical className="mr-2" /> Infrastructure and Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg flex items-start">
            <MonitorDot className="mr-4 text-blue-500" />
            <p>State-of-the-art science and computer labs</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg flex items-start">
            <svg
              className="w-6 h-6 mr-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <p>Spacious and well-equipped classrooms</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg flex items-start">
            <Library className="mr-4 text-purple-500" />
            <p>Library with a vast collection of books and digital resources</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg flex items-start">
            <LoaderPinwheel className="mr-4 text-yellow-500" />
            <p>
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
