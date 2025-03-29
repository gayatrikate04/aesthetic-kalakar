"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {   
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Background Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/photo7.png" 
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
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white text-black w-full py-16 px-6 md:px-16 mt-[-5rem] shadow-lg rounded-lg text-center"
      >
        <h2 className="text-3xl font-semibold italic text-gray-800 mb-6">Get in Touch</h2>
        
        {/* Phone Contact */}
        <div className="flex items-center justify-center space-x-4 text-gray-600 text-lg mb-6">
          <FaPhoneAlt className="text-2xl text-blue-500" />
          <span className="font-medium">9579666276</span>
        </div>

        {/* Instagram Link */}
        <div className="flex items-center justify-center space-x-4 text-gray-600 text-lg">
          <FaInstagram className="text-2xl text-pink-500" />
          <a
            href="https://www.instagram.com/aesthetickalakar_/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-pink-600 transition"
          >
            Follow us on Instagram
          </a>
        </div>
      </motion.div>

      {/* Additional Information Section */}
      <div className="w-full max-w-4xl text-gray-700 px-6 py-12 text-lg leading-relaxed text-center">
        <p>
          We believe in the power of connection and creativity. Aesthetic Kalakar is more than just a photography brand; 
          it is a space where art meets vision, and memories are captured in their purest form. Whether you are looking for 
          professional photography, creative collaborations, or simply want to engage with our work, we are here for you.
        </p>
        <p className="mt-6">
          Our team consists of passionate artists and photographers dedicated to bringing your ideas to life. Every picture tells a story, 
          and we want to ensure that yours is told with clarity, beauty, and authenticity. From event coverage to personal portraits, 
          we are committed to excellence in every shot.
        </p>
        <p className="mt-6">
          If you have any questions, collaborations in mind, or simply want to share your thoughts, do not hesitate to reach out. 
          We value each interaction and look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
