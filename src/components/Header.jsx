import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { businesses } from '../data/businesses';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Handle scroll visibility for header
  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search input and autocomplete
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = businesses.filter((business) => {
      const nameMatch = business.name.toLowerCase().includes(query.toLowerCase());
      const categoryMatch = business.category?.toLowerCase().includes(query.toLowerCase());
      const locationMatch = typeof business.location === 'string'
        ? business.location.toLowerCase().includes(query.toLowerCase())
        : business.location?.city?.toLowerCase().includes(query.toLowerCase());
      return nameMatch || categoryMatch || locationMatch;
    });

    setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
  };

  // Handle suggestion click
  const handleSuggestionClick = (businessId) => {
    setSearchQuery('');
    setSuggestions([]);
    navigate(`/business/${businessId}`);
  };

  // Animation variants for the header
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Animation variants for the suggestions dropdown
  const suggestionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-white/20 to-blue-200/20 backdrop-blur-xl shadow-lg border-b border-white/30"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white drop-shadow-md">
          Business Directory
        </Link>
        <div className="hidden md:flex items-center space-x-4 relative">
          <div className="relative bg-gradient-to-r from-white/20 to-blue-200/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <input
              type="text"
              placeholder="Search businesses..."
              aria-label="Search businesses"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/80" />
          </div>
          {suggestions.length > 0 && (
            <motion.div
              variants={suggestionVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-12 left-0 w-full max-w-md bg-gradient-to-br from-white/20 to-blue-200/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg z-50"
            >
              <div className="relative p-2">
                <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
                {suggestions.map((business) => (
                  <motion.div
                    key={business.id}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-2 cursor-pointer text-white drop-shadow-sm hover:text-blue-400"
                    onClick={() => handleSuggestionClick(business.id)}
                  >
                    <span className="font-semibold">{business.name}</span>
                    <span className="block text-sm text-white/80">
                      {business.category} - {typeof business.location === 'string' ? business.location : business.location?.city}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-white/20 to-blue-200/20 backdrop-blur-xl px-4 py-2 border-t border-white/30"
        >
          <div className="relative bg-gradient-to-r from-white/20 to-blue-200/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-4">
            <input
              type="text"
              placeholder="Search businesses..."
              aria-label="Search businesses"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/80" />
          </div>
          {suggestions.length > 0 && (
            <motion.div
              variants={suggestionVariants}
              initial="hidden"
              animate="visible"
              className="w-full bg-gradient-to-br from-white/20 to-blue-200/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg"
            >
              <div className="relative p-2">
                <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
                {suggestions.map((business) => (
                  <motion.div
                    key={business.id}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-2 cursor-pointer text-white drop-shadow-sm hover:text-blue-400"
                    onClick={() => handleSuggestionClick(business.id)}
                  >
                    <span className="font-semibold">{business.name}</span>
                    <span className="block text-sm text-white/80">
                      {business.category} - {typeof business.location === 'string' ? business.location : business.location?.city}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;