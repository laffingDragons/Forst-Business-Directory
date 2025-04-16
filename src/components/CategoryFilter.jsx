import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/businesses';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-[#a1c0c4]/90  md:backdrop-blur-sm backdrop-blur-none">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-full bg-gradient-to-r from-white/20 to-blue-200/20 dark:from-gray-800/20 dark:to-blue-900/20 md:backdrop-blur-sm backdrop-blur-none text-white dark:text-gray-200 drop-shadow-md transition-transform duration-200 relative overflow-hidden will-change-transform border border-blue-300/50 dark:border-blue-600/50 ${
                selectedCategory === category ? 'bg-blue-500/50 dark:bg-blue-600/50 text-white dark:text-gray-200' : ''
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;