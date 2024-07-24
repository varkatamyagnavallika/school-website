import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeCarousel() {
  const carouselItems = [
    {
      id: 1,
      title: "Annual Sports Day",
      description: "Celebrating Excellence in Sports",
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/blue-lock.jpg?q=70&fit=crop&w=1100&h=618&dpr=1",
    },
    {
      id: 2,
      title: "Science Exhibition",
      description: "Showcasing Student Innovations",
      img: "https://i0.wp.com/halcyonrealms.com/blogpics/akiraneoex01.jpg?resize=750%2C500&ssl=1",
    },
    {
      id: 3,
      title: "Cultural Fest",
      description: "Embracing Diversity and Creativity",
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/hyouka-school-festival.jpg?q=50&fit=crop&w=750&dpr=1.5",
    },
  ];
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className={`bg-gray-200 p-8 text-center  text-white h-64 flex flex-col justify-center `}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
