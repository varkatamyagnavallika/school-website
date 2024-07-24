import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/Home/HomeCarousel";

const Home = () => {
  const quickLinks = [
    { id: 1, title: "About Us", path: "/about" },
    { id: 2, title: "Academics", path: "/academics" },
    { id: 3, title: "Admissions", path: "/admissions" },
    { id: 4, title: "Faculty", path: "/faculty" },
    { id: 5, title: "Students", path: "/students" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header
        className="flex items-center justify-between mb-8"
        variants={itemVariants}
      >
        <motion.img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a52426fb-0e3d-47b6-87af-deca9b744d02/dgnpvbw-472782ed-5e76-436c-bb42-2e5da6d62bea.jpg/v1/fill/w_1032,h_774,q_70,strp/ocean_horse_creature_logomark_design_by_anhdodes_dgnpvbw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvYTUyNDI2ZmItMGUzZC00N2I2LTg3YWYtZGVjYTliNzQ0ZDAyXC9kZ25wdmJ3LTQ3Mjc4MmVkLTVlNzYtNDM2Yy1iYjQyLTJlNWRhNmQ2MmJlYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fDQ_ct1rO-GTiG4g8Hw2YhWwB4x8Tr7olR-IRrsEjfw"
          alt="Springdale Public School Logo"
          className="w-24 h-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.h1
          className="text-4xl font-bold text-blue-800"
          variants={itemVariants}
        >
          Springdale Public School
        </motion.h1>
      </motion.header>

      <motion.section
        className="mb-12 bg-blue-100 p-6 rounded-lg"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Springdale Public School
        </h2>
        <p className="text-lg">
          Where we nurture young minds for a brighter future.
        </p>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <HomeCarousel />
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={containerVariants}
        >
          {quickLinks.map((link) => (
            <motion.div key={link.id} variants={itemVariants}>
              <Link
                to={link.path}
                className="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition duration-300 block"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
