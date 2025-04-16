import React from 'react';
import { useParams } from 'react-router-dom';
import { businesses } from '../data/businesses';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import ReviewSection from './ReviewSection';
import { FaPhone, FaEnvelope, FaGlobe, FaStar } from 'react-icons/fa';
import mapImage from '../assets/images/Snowy-Road.webp';

const BusinessProfile = () => {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === parseInt(id));

  if (!business) return <div className="text-white dark:text-gray-200">Business not found</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Animation variants for sections and images
  const sectionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto px-4 py-8 bg-gradient-to-b from-[#a1c0c4] to-[#FFFFFF] dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      <div className="bg-gradient-to-br from-white/20 to-blue-200/20 dark:from-gray-800/20 dark:to-blue-900/20 md:backdrop-blur-xl backdrop-blur-md rounded-xl p-6 flex flex-col border border-white/30 dark:border-gray-700/30 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
        {/* Upper Half: Modern Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Logo, Name, Description, Rating */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              className="relative mb-4"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src={business.logo}
                alt={business.name}
                className="w-32 h-32 object-cover rounded-full shadow-md border border-white/30 dark:border-gray-700/30"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-blue-200/10 dark:from-gray-800/10 dark:to-blue-900/10 md:backdrop-blur-sm backdrop-blur-none animate-pulse-glow" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-3 text-white drop-shadow-md dark:text-gray-200">{business.name}</h1>
            <p className="text-blue-400 mb-4 drop-shadow-sm text-xl dark:text-blue-300">{business.description}</p>
            <div className="flex items-center mb-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(business.rating) ? 'text-blue-400 dark:text-blue-300' : 'text-white/50 dark:text-gray-500'
                  } w-6 h-6`}
                />
              ))}
              <span className="ml-2 text-white/80 drop-shadow-sm text-base dark:text-gray-400">{business.rating}</span>
            </div>
          </div>
          {/* Right Side: Slider */}
          <div className="lg:w-1/2">
            <Slider {...sliderSettings} className="mt-4">
              {business.gallery.map((image, index) => (
                <div key={index}>
                  <motion.img
                    src={image}
                    alt={`Gallery ${index}`}
                    className="w-full h-64 object-cover rounded-xl shadow-md border border-white/30 dark:border-gray-700/30"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Middle Section: Services, Hours, Contact in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            className="bg-gradient-to-br from-white/10 to-blue-200/10 dark:from-gray-800/10 dark:to-blue-900/10 md:backdrop-blur-sm backdrop-blur-none rounded-xl p-4 border border-white/30 dark:border-gray-700/30 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white drop-shadow-md mb-2 dark:text-gray-200">Services</h3>
            <ul className="list-disc pl-5 text-white/80 drop-shadow-sm space-y-1 dark:text-gray-400">
              {business.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white/10 to-blue-200/10 dark:from-gray-800/10 dark:to-blue-900/10 md:backdrop-blur-sm backdrop-blur-none rounded-xl p-4 border border-white/30 dark:border-gray-700/30 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white drop-shadow-md mb-2 dark:text-gray-200">Hours</h3>
            <p className="text-white/80 drop-shadow-sm dark:text-gray-400">{business.hours}</p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white/10 to-blue-200/10 dark:from-gray-800/10 dark:to-blue-900/10 md:backdrop-blur-sm backdrop-blur-none rounded-xl p-4 border border-white/30 dark:border-gray-700/30 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white drop-shadow-md mb-2 dark:text-gray-200">Contact</h3>
            <motion.p
              className="flex items-center text-white/80 drop-shadow-sm mb-2 dark:text-gray-400"
              whileHover={{ x: 5, color: '#93c5fd', transition: { duration: 0.2 } }}
            >
              <FaPhone className="mr-2 text-white dark:text-gray-400" /> {business.contact.phone}
            </motion.p>
            <motion.p
              className="flex items-center text-white/80 drop-shadow-sm mb-2 dark:text-gray-400"
              whileHover={{ x: 5, color: '#93c5fd', transition: { duration: 0.2 } }}
            >
              <FaEnvelope className="mr-2 text-white dark:text-gray-400" /> {business.contact.email}
            </motion.p>
            <motion.p
              className="flex items-center text-white/80 drop-shadow-sm dark:text-gray-400"
              whileHover={{ x: 5, color: '#93c5fd', transition: { duration: 0.2 } }}
            >
              <FaGlobe className="mr-2 text-white dark:text-gray-400" />{' '}
              <a
                href={`https://${business.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline dark:text-blue-400"
              >
                {business.contact.website}
              </a>
            </motion.p>
          </motion.div>
        </div>
        {/* Lower Half: Location and Reviews */}
        <motion.div className="mt-8" variants={sectionVariants} initial="hidden" animate="visible">
          <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-md dark:text-gray-200">Location</h3>
          <div className="relative rounded-xl overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-md">
            <img
              src={mapImage}
              alt="Map"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </motion.div>
        <ReviewSection reviews={business.reviews} />
      </div>
    </motion.div>
  );
};

export default BusinessProfile;