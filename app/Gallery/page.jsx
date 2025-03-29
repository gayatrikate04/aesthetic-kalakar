"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Wedding Photography",
    description:
      "A wedding is not just an event; it's a beautiful beginning. The stolen glances, the heartfelt vows, the joyful tears—every moment is a chapter in your love story. We don’t just take photos; we capture emotions, the warmth of a touch, the sparkle in your eyes, and the magic of two souls becoming one. Your love deserves to be remembered in its purest form—timeless, raw, and breathtaking.",
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img5.png", "/photo1.png"],
  },
  {
    title: "Pre-Wedding Shoots",
    description:
      "Before the vows are spoken, before the rings are exchanged, there exists a world of quiet, intimate moments—laughter shared under the golden sky, soft whispers of forever, and stolen kisses in the evening breeze. A pre-wedding shoot isn’t just about photos; it’s about freezing in time the love, excitement, and anticipation that make this journey so magical. Let’s capture your love in its purest form—unscripted, passionate, and beautifully yours.",
    images: ["/photo3.png", "/photo4.png", "/photo7.png", "/photo8.png", "/photo9.png", "/photo11.png"],
  },
  {
    title: "Baby Photography",
    description:
      "Tiny fingers, little yawns, and the softest giggles—every newborn moment is a fleeting miracle. The first smile, the gentle grasp of a hand, the peaceful slumber on a mother’s chest—these are the memories that deserve to be cherished forever. Baby photography is not just about pictures; it’s about preserving the purest form of love, innocence, and joy. Let us capture these heartwarming moments, so you can relive them for a lifetime.",
    images: ["/pic1.png", "/pic2.png", "/pic3.png"],
  },
];

export default function Gallery() {
  return (
    <>
      {/* Navigation Bar */}
      <header className="fixed bg-black text-white top-0 left-0 w-full flex justify-between items-center p-6 z-50 shadow-lg h-20">
        <img className="h-auto rounded-full w-16 sm:w-28 md:w-32 lg:w-40 xl:w-48" src="/logo.png" alt="Logo" />
      </header>

      {/* Page Content */}
      <div className="bg-black text-white min-h-screen py-20 px-6 pt-32">
        <motion.h1
          className="text-5xl text-center font-bold text-white mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h1>

        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <motion.div
              className="md:w-1/3 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold italic mb-3">{category.title}</h2>
              <p className="text-gray-400 text-2xl">{category.description}</p>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {category.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden shadow-lg"
                  style={{ paddingBottom: "100%" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={img}
                    alt="gallery image"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
