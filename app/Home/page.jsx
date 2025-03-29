"use client"; 
import React, { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'


export default function HomeComponent() {
    

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const router = useRouter()



    const images = [
       
        "/img1.png",
        "/img2.png",
        "/img3.png",
        "/img4.png",
        "/img5.png",
        "/img6.png"
    ];

    const openImage = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedImage(images[currentIndex + 1]);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedImage(images[currentIndex - 1]);
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3, duration: 0.6 },
        }),
    };

    const faqs = [
        , {
            question: "Why should we choose you?",
            answer: "At Aesthetic Kalakar, we go beyond just capturing photos—we tell your story in the most real, heartfelt, and artistic way. Our goal is to preserve every emotion, from the smallest candid smiles to the grandest moments, ensuring they remain unforgettable.We are not just photographers; we are your hype team, memory-makers, and storytellers. Whether it's a wedding, a special event, or a creative shoot, we focus on making the experience seamless, enjoyable, and filled with genuine emotions. Our approach combines technical expertise with a deep passion for storytelling, ensuring that every frame reflects the true essence of your moments.With an eye for detail, a love for aesthetics, and a commitment to excellence, we don’t just take pictures—we create timeless memories that you will cherish forever.",
        },
        {
            question: "How is your work different from others?",
            answer: "At Aesthetic Kalakar, we don’t just capture images—we tell stories. Our work stands out because we focus on real emotions, artistic composition, and a personalized approach. We take the time to understand your vision, ensuring each shot reflects your unique story. With a blend of creativity and technical expertise, we use innovative techniques, cinematic framing, and natural storytelling to create timeless visuals. Our goal is to make the entire experience seamless and enjoyable, allowing you to be in the moment while we preserve it beautifully.",
        },
        {
            question: "Do you cover destination weddings?",
            answer: "Yes, we absolutely do! At Aesthetic Kalakar, we love capturing love stories in breathtaking locations. Whether it’s a serene beach, a royal palace, or a scenic hillside, we are ready to travel wherever your dream wedding takes you. Our team ensures a seamless experience, handling everything from planning the best shots to adapting to different lighting and settings. No matter the destination, we’re committed to making your wedding memories truly magical and timeless.",
        },
        {
            question: "How many people will come for my wedding?",
            answer: "Our team size depends on the scale of your wedding. We ensure enough photographers and videographers to cover every important moment seamlessly.",
        },
    ];

    
    return (

        

        <div className="bg-black text-white min-h-screen">
            <Head>
                <title>Aesthetic Kalakar | Photography Studio</title>
            </Head>

            {/* Swiper Background Section */}
            <section className="relative h-screen w-full opacity-60 overflow-hidden">
                <Swiper
                    effect="fade"
                    modules={[EffectFade, Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation={true}
                    className="absolute inset-0 w-full h-full"
                >
                    {[...Array(7)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={`/photo${i + 1}.png`}
                                alt={`Slide ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute inset-0 bg-black/40"></div>

                {/* Navigation Bar */}
                <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20">
                    <img className="h-auto rounded-full w-16 sm:w-28 md:w-32 lg:w-40 xl:w-48" src="/logo.png" alt="Logo" />
                    <nav>
                        <ul className="flex justify-end space-x-10 mt-1 text-3xl font-semibold mr-8 pr-8">
                            <li><a  onClick={() => router.push('/Home')} className="hover:text-gray-300">Home</a></li>
                            <li><a  onClick={() => router.push('/Gallery')} className="hover:text-gray-300">Gallery</a></li>
                            <li><a  onClick={() => router.push('/About')} className="hover:text-gray-300">About us</a></li>
                            <li><a  onClick={() => router.push('/Contact')} className="hover:text-gray-300">Contact us</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Main Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <h2 className="text-5xl font-bold text-white drop-shadow-lg">
                        Framing Emotions, Preserving Memories
                    </h2>
                    <p className="mt-4 text-2xl text-gray-200">
                        Every picture tells a story—let us capture yours with passion and artistry.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="p-10">
                <h2 className="text-6xl font-bold text-center mt-20 mb-20">Gallery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg">
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 cursor-pointer"
                                onClick={() => openImage(index)}
                            />
                        </div>
                    ))}
                </div>

                {/* Image Modal with Navigation */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Close Button (Top-Right Corner) */}
                            <button
                                className="absolute top-2 right-2  text-white mr-4 mt-4 p-2 text-3xl hover:bg-gray-900"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                ✕
                            </button>

                            {/* Previous Arrow (Extreme Left) */}
                            {currentIndex > 0 && (
                                <button
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2  text-white ml-4 p-3 text-3xl hover:bg-gray-900"
                                    onClick={prevImage}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            )}

                            {/* Image */}
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                            />

                            {/* Next Arrow (Extreme Right) */}
                            {currentIndex < images.length - 1 && (
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white rounded-full p-3 mr-4 text-3xl hover:bg-gray-900"
                                    onClick={nextImage}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* View More Button */}
                <div className="text-center mt-6">
                    <button type="button" className="mt-10 inline-block bg-black text-white px-6 py-3 rounded-lg text-2xl font-semibold transition-all duration-300 hover:bg-gray-500" onClick={() => router.push('/Gallery')}>
                        View More
                    </button>
             
                </div>
            </section>
            {/* About Section */}
            <h2 className="text-6xl font-bold text-center mt-10 mb-3">About </h2>
            <section id="about" className="p-10 bg-black text-white flex items-center justify-center min-h-screen">

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">



                    {/* Left Side - Text Appears One by One */}
                    <div className="md:w-1/2 space-y-6">


                        <motion.h2
                            className="text-4xl font-bold tracking-wide"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        >
                            Photography & Cinematography
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-300 italic"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                        >
                            “Photography with a Unique Touch – Turning Moments into Timeless Memories.”
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-300 leading-relaxed"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                        >
                            Welcome to Aesthetic Kalakar, where passion meets creativity!
                            We specialize in capturing the magic of your most cherished moments with an artistic and cinematic touch.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-300 leading-relaxed"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                        >
                            Our team of professional photographers and cinematographers blend emotion, art, and innovation,
                            creating visuals that are not just pictures but stories full of love, joy, and memories.
                        </motion.p>

                        {/* Services */}
                        <motion.div
                            className="flex flex-wrap gap-4 mt-4"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                        >
                            {["Wedding Photography", "Pre-Wedding Shoots", "Maternity Shoots", "Baby Photography"].map(
                                (service, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-4 py-2 border border-primary rounded-full text-lg font-semibold"
                                        variants={textVariants}
                                        custom={4 + index * 0.2}
                                    >
                                        {service}
                                    </motion.span>
                                )
                            )}
                        </motion.div>
                    </div>

                    {/* Right Side - Image (Stays Fixed) */}
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="photo.png"
                            alt="Photography Team"
                            className="rounded-full shadow-lg w-full max-w-md transition-transform hover:scale-105"
                        />
                    </motion.div>
                </div>
            </section>
            {/*faq section*/}
            <section id="faq" className="py-16 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold italic text-white">
                        Confused? <span className="underline text-gray-400">We've Got the Answers!</span>
                    </h2>
                </div>

                <div className="mt-10 max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-500">
                            <button
                                className="w-full flex justify-between items-center py-4 text-lg font-medium text-left hover:text-gray-300 transition-all"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                            </button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden text-gray-400 text-base"
                            >
                                <p className="pb-4">{faq.answer}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Contact Section */}
            <section id="contact" className="p-10 text-center border-t border-gray-700 mt-10">
                <h2 className="text-4xl font-bold text-white">Contact Us</h2>
                <p className="mt-4 text-gray-300">
                    Have a project in mind? Let's create something beautiful together.
                </p>

                {/* Contact Details */}
                <div className="mt-6 flex flex-col items-center space-y-4">
                    {/* Phone */}
                    <a href="tel:9579666276" className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                        <span className="text-2xl">📞</span>
                        <span className="text-lg font-medium">9579666276</span>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/aesthetickalakar_/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.25-.75a.75.75 0 0 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                        </svg>
                        <span className="text-lg font-medium">Follow us on Instagram</span>
                    </a>


                </div>
            </section>



            {/* Footer */}
            <footer className="p-6 text-center text-gray-400">
                &copy; {new Date().getFullYear()} Aesthetic Kalakar. All rights reserved.
            </footer>
        </div>
    );
}


