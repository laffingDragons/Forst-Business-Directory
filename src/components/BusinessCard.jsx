import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const BusinessCard = ({ business, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
      className="bg-gradient-to-br from-white/20 to-blue-200/20 md:backdrop-blur-xl backdrop-blur-md rounded-lg p-4 flex flex-col border border-white/30 shadow-lg relative overflow-hidden will-change-opacity"
    >
    <Link to={`/business/${business.id}`}>

      <div className="absolute inset-0 rounded-lg animate-pulse-glow" />
      <img
        src={business.logo}
        alt={business.name}
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-white drop-shadow-md">{business.name}</h3>
      <p className="text-blue-400 text-sm mb-2 drop-shadow-sm flex-grow overflow-hidden text-ellipsis">
        {business.description}
      </p>
      <div className="flex items-center mb-2 space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`${
              i < Math.round(business.rating) ? 'text-blue-400' : 'text-white/50'
            } w-5 h-5`}
          />
        ))}
        <span className="ml-2 text-white/80 drop-shadow-sm text-sm">{business.rating}</span>
      </div>
      </Link>
    </motion.div>
  );
};

export default BusinessCard;