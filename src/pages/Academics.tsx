import { motion } from "framer-motion";
import { Book, GraduationCap, Lightbulb, Monitor } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
// import { useState } from "react";

const Academics = () => {
  //   const [activeGrade, setActiveGrade] = useState("primary");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const curriculum = {
    primary: [
      "English",
      "Mathematics",
      "Science",
      "Social Studies",
      "Art",
      "Physical Education",
    ],
    secondary: [
      "English",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Studies",
      "Computer Science",
      "Physical Education",
      "Art",
    ],
    seniorSecondary: {
      science: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "Computer Science",
        "English",
      ],
      commerce: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English",
      ],
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        {...fadeIn}
      >
        Academics at Springdale Public School
      </motion.h1>

      <motion.section className="mb-16" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Book className="mr-2" /> Our Curriculum
        </h2>
        <Tabs defaultValue="primary" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="primary">Primary (Grades 1-5)</TabsTrigger>
            <TabsTrigger value="secondary">Secondary (Grades 6-10)</TabsTrigger>
            <TabsTrigger value="seniorSecondary">
              Senior Secondary (Grades 11-12)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="primary">
            <ul className="list-disc pl-5 mt-4">
              {curriculum.primary.map((subject, index) => (
                <li key={index} className="mb-2">
                  {subject}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="secondary">
            <ul className="list-disc pl-5 mt-4">
              {curriculum.secondary.map((subject, index) => (
                <li key={index} className="mb-2">
                  {subject}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="seniorSecondary">
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Science Stream</h3>
                <ul className="list-disc pl-5">
                  {curriculum.seniorSecondary.science.map((subject, index) => (
                    <li key={index} className="mb-2">
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Commerce Stream</h3>
                <ul className="list-disc pl-5">
                  {curriculum.seniorSecondary.commerce.map((subject, index) => (
                    <li key={index} className="mb-2">
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.section>

      <motion.section className="mb-16" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Lightbulb className="mr-2" /> Teaching Methodologies
        </h2>
        <p className="text-lg">
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </motion.section>

      <motion.section {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Monitor className="mr-2" /> Educational Resources
        </h2>
        <p className="text-lg mb-4">
          Our state-of-the-art facilities and resources include:
        </p>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="bg-blue-100 p-4 rounded-lg flex items-center">
            <GraduationCap className="mr-2 text-blue-500" />
            Digital classrooms
          </li>
          <li className="bg-green-100 p-4 rounded-lg flex items-center">
            <Lightbulb className="mr-2 text-green-500" />
            Interactive learning modules
          </li>
          <li className="bg-purple-100 p-4 rounded-lg flex items-center">
            <Monitor className="mr-2 text-purple-500" />
            Access to online educational platforms
          </li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Academics;
