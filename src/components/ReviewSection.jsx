import React, { useState } from 'react';
import { FaStar, FaCheck } from 'react-icons/fa'; // Added FaCheck for the submit icon
import { motion } from 'framer-motion';

const ReviewSection = ({ reviews }) => {
  const [newReview, setNewReview] = useState({ user: '', rating: 0, comment: '' });
  const [submittedReviews, setSubmittedReviews] = useState(reviews);

  // Animation variants for reviews and form
  const reviewVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedReviews([...submittedReviews, newReview]);
    setNewReview({ user: '', rating: 0, comment: '' });
  };

  return (
    <motion.div
      className="mt-8 bg-gradient-to-br from-white/10 to-blue-200/10 md:backdrop-blur-sm backdrop-blur-none rounded-xl p-6 border border-white/30 shadow-md relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <div className="absolute inset-0 rounded-xl animate-pulse-glow z-0" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-400 drop-shadow-md">Reviews</h3>
        <div className="space-y-4 mb-6">
          {submittedReviews.map((review, index) => (
            <motion.div
              key={index}
              className="border-b border-white/20 pb-3"
              variants={reviewVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <span className="font-semibold text-blue-400 drop-shadow-sm">{review.user}</span>
                <div className="ml-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < review.rating ? 'text-blue-400' : 'text-white/50'
                      } w-4 h-4`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-blue-400 drop-shadow-sm">{review.comment}</p>
            </motion.div>
          ))}
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <label className="block text-sm font-medium text-blue-400 drop-shadow-sm mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={newReview.user}
              onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
              className="w-full border border-white/30 rounded-lg p-2 bg-white/10 text-blue-400 placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-400 drop-shadow-sm mb-1">
              Rating
            </label>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FaStar
                    className={`cursor-pointer ${
                      i < newReview.rating ? 'text-blue-400' : 'text-white/50'
                    } w-6 h-6`}
                    onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-400 drop-shadow-sm mb-1">
              Comment
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full border border-white/30 rounded-lg p-2 bg-white/10 text-blue-400 placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
              placeholder="Share your thoughts..."
              rows="4"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-white/20 to-blue-200/20 md:backdrop-blur-sm backdrop-blur-none text-white p-3 rounded-full shadow-md border border-white/30 drop-shadow-md transition-transform float-end"
          >
            <FaCheck className="w-5 h-5  text-blue-400" />
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ReviewSection;