"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion for smooth animations

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Background Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/pg.png" // Update with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="filter grayscale brightness-50"
        />
        {/* Overlay Title */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold uppercase tracking-widest"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white text-black w-full py-16 px-6 md:px-16 mt-[-5rem] shadow-lg rounded-lg"
      >
        {/* Vision Section */}
        <h2 className="text-3xl font-semibold italic text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At our photography studio, we are passionate about capturing the essence of life's most cherished moments. Our goal is to create images that resonate deeply and become timeless treasures for our clients.
        </p>

        {/* Mission Section */}
        <h2 className="text-3xl font-semibold italic text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We strive to be more than just photographers; we aim to be storytellers who encapsulate emotions, relationships, and beauty through our lenses.
        </p>

        {/* Values Section */}
        <h2 className="text-3xl font-semibold italic text-gray-800 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-600 text-lg leading-relaxed">
          <li><strong>Creativity:</strong> Embracing artistic expression to tell your story uniquely.</li>
          <li><strong>Passion:</strong> Capturing moments with enthusiasm and dedication.</li>
          <li><strong>Commitment:</strong> Ensuring we exceed expectations.</li>
          <li><strong>Quality:</strong> Using top-tier equipment for the best results.</li>
        </ul>

        {/* Services Section */}
        <h2 className="text-3xl font-semibold italic text-gray-800 mt-8 mb-4">Our Services</h2>
        <ul className="list-disc pl-6 text-gray-600 text-lg leading-relaxed">
          <li>Wedding Photography</li>
          <li>Portrait Sessions</li>
          <li>Commercial Photography</li>
          <li>Event Coverage</li>
        </ul>

        {/* Testimonials Section */}
        <h2 className="text-3xl font-semibold italic text-gray-800 mt-8 mb-4">Client Testimonials</h2>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
          "Choosing this studio was the best decision for our wedding. The photos are breathtaking, and the team was professional and fun to work with."
        </blockquote>
      </motion.div>
    </div>
  );
};

export default About;