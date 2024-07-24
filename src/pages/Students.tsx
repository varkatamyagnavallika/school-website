import { motion } from "framer-motion";
import { Award, Users, Star, Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Students = () => {
  const studentLife = {
    extracurricular: [
      "Music",
      "Dance",
      "Drama",
      "Art",
      "Sports",
      "Robotics",
      "Debate Club",
      "Science Club",
    ],
    clubs: [
      "Literary Society",
      "Environmental Club",
      "Astronomy Club",
      "Coding Club",
    ],
  };

  const achievements = [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition",
  ];

  const studentCouncil = [
    { position: "President", name: "Amy Parker", grade: 12 },
    { position: "Vice President", name: "Rajiv Mehta", grade: 11 },
    { position: "Secretary", name: "Lisa Wong", grade: 10 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Student Life at Springdale
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2" /> Extracurricular Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {studentLife.extracurricular.map((activity, index) => (
                  <Badge key={index} variant="secondary">
                    {activity}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Clubs and Societies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {studentLife.clubs.map((club, index) => (
                  <Badge key={index} variant="outline">
                    {club}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2" /> Student Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2" /> Student Council
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {studentCouncil.map((member, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{member.position}</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        {member.name} - Grade {member.grade}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Students;
