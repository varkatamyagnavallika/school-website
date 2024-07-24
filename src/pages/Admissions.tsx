import { motion } from "framer-motion";
import { Download, Calendar, ClipboardCheck, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

const Admissions = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const importantDates = [
    { date: "March 1st", event: "Admission Form Availability" },
    { date: "March 31st", event: "Last Date for Submission" },
    { date: "April 15th", event: "Entrance Test" },
    { date: "April 30th", event: "Announcement of Results" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        {...fadeIn}
      >
        Admissions at Springdale Public School
      </motion.h1>

      <motion.section className="mb-16" {...fadeIn}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <ClipboardCheck className="mr-2" /> Admission Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </p>
            <Button className="flex items-center">
              <Download className="mr-2" /> Download Admission Form
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section className="mb-16" {...fadeIn}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <Info className="mr-2" /> Admission Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Admission is based on merit and availability of seats. Entrance
              tests may be conducted for certain grades.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Calendar className="mr-2" /> Important Dates
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {importantDates.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.date}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.event}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section className="mt-16" {...fadeIn}>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            Please ensure all required documents are submitted along with the
            completed admission form. Incomplete applications may not be
            considered.
          </AlertDescription>
        </Alert>
      </motion.section>
    </div>
  );
};

export default Admissions;
