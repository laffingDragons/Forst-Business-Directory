import React, { useState } from 'react';
import BusinessCard from './BusinessCard';
import { businesses } from '../data/businesses';
import LoadingSpinner from './LoadingSpinner';
import { motion } from 'framer-motion';
import CategoryFilter from './CategoryFilter';

const BusinessList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const filteredBusinesses =
    selectedCategory === 'All'
      ? businesses
      : businesses.filter((b) => b.category === selectedCategory);

  console.log('Selected Category:', selectedCategory); // Debug log
  console.log('Filtered Businesses:', filteredBusinesses); // Debug log

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-8 bg-gradient-to-b from-[#a1c0c4] to-[#FFFFFF] min-h-screen">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={(category) => {
          console.log('Setting Category:', category); // Debug log
          setLoading(true);
          setTimeout(() => {
            setSelectedCategory(category);
            setLoading(false);
          }, 500);
        }}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 will-change-opacity pt-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business, index) => (
              <BusinessCard key={business.id} business={business} index={index} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BusinessList;