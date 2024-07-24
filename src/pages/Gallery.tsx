import { useState } from "react";
import { motion } from "framer-motion";
import { Image, Film } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      type: "photo",
      src: "https://source.unsplash.com/random/800x600?sports",
      alt: "Sports Day",
      description: "Students participating in various sports events.",
    },
    {
      type: "photo",
      src: "https://source.unsplash.com/random/800x600?science",
      alt: "Science Exhibition",
      description: "Students presenting their science projects.",
    },
    {
      type: "photo",
      src: "https://source.unsplash.com/random/800x600?performance",
      alt: "Cultural Fest",
      description: "Students performing in the cultural fest.",
    },
    {
      type: "photo",
      src: "https://source.unsplash.com/random/800x600?classroom",
      alt: "Classroom",
      description: "A glimpse of our interactive classrooms.",
    },
    {
      type: "photo",
      src: "https://source.unsplash.com/random/800x600?library",
      alt: "Library",
      description: "Students reading and studying in the school library.",
    },
    {
      type: "video",
      src: "https://www.example.com/placeholder-video.mp4",
      alt: "School Tour",
      description: "Virtual tour of Springdale Public School.",
    },
    {
      type: "video",
      src: "https://www.example.com/placeholder-video.mp4",
      alt: "Annual Function",
      description: "Highlights from the Annual Function 2023.",
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

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
        Gallery
      </motion.h1>

      <div className="mb-8 flex justify-end">
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="photo">Photos</SelectItem>
            <SelectItem value="video">Videos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {item.type === "photo" ? (
                    <Image className="mr-2" />
                  ) : (
                    <Film className="mr-2" />
                  )}
                  {item.alt}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {item.type === "photo" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover rounded-md"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-48 object-cover rounded-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                <CardDescription className="mt-4">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
