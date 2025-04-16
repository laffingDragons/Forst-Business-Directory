import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaMicrophone } from 'react-icons/fa'; 
import { businesses } from '../data/businesses';
import backgroundImage from '../assets/images/background.png';

const Hero = () => {
  const heroRef = React.useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  // Voice search setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      handleSearch(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  const toggleVoiceSearch = () => {
    if (isListening) {
      recognition.stop();
    } else if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  // Parallax effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
      }
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

    setSuggestions(filtered.slice(0, 5));
  };

  const handleSuggestionClick = (businessId) => {
    setSearchQuery('');
    setSuggestions([]);
    navigate(`/business/${businessId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 },
    },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' },
    focus: { scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.8)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' },
  };

  const suggestionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white"
      >
        <div
          className="relative bg-gradient-to-br from-white/30 to-blue-200/30 dark:from-gray-800/30 dark:to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-white/20 dark:border-gray-700/20 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(59, 130, 246, 0.2))',
          }}
        >
          <div className="absolute inset-0 rounded-3xl animate-pulse-glow" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Discover Local Businesses
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Find the best services in your area.
          </p>
          <motion.div
            variants={searchBarVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative w-full max-w-md mx-auto bg-gradient-to-r from-white/20 to-blue-200/20 dark:from-gray-800/20 dark:to-blue-900/20 backdrop-blur-md rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg"
            data-focus="false"
          >
            <input
              type="text"
              placeholder="Search by name, category, or location..."
              aria-label="Search businesses by name, category, or location"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={(e) => e.target.parentElement.setAttribute('data-focus', 'true')}
              onBlur={(e) => e.target.parentElement.removeAttribute('data-focus')}
              className="w-full pl-10 pr-12 py-3 rounded-full bg-transparent text-white dark:text-gray-200 placeholder-white/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/80 dark:text-gray-400" />
            <motion.button
              layout
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleVoiceSearch}
              className={`absolute right-3 top-[0.50rem] w-8 h-8 flex items-center justify-center rounded-full ${isListening ? 'text-blue-400' : 'text-white/80 dark:text-gray-400'}`}
            >
              <FaMicrophone className="w-5 h-5" />
            </motion.button>
            {suggestions.length > 0 && (
              <motion.div
                variants={suggestionVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-14 left-0 right-0 mx-auto w-full max-w-md bg-gradient-to-br from-white/20 to-blue-200/20 dark:from-gray-800/20 dark:to-blue-900/20 backdrop-blur-md rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg z-50"
>
                <div className="relative p-2">
                  <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
                  {suggestions.map((business) => (
                    <motion.div
                      key={business.id}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="p-2 cursor-pointer text-white drop-shadow-sm hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-300"
                          onClick={() => handleSuggestionClick(business.id)}
                        >
                      <span className="font-semibold">{business.name}</span>
                      <span className="block text-sm text-white/80 dark:text-gray-400">
                        {business.category} - {typeof business.location === 'string' ? business.location : business.location?.city}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;