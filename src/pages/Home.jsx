import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')`,
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
          >
            <span className="text-white">Global</span>
            <span className="text-gradient">Flame</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-serif text-primary-300 mb-4"
          >
            {t('hero.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/reservations">
              <button className="btn-primary">
                {t('hero.cta')}
              </button>
            </Link>
            <Link to="/menu">
              <button className="btn-secondary">
                {t('hero.cta2')}
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-primary-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <StorySection t={t} />

      {/* Featured Dishes */}
      <FeaturedDishes t={t} />

      {/* Reviews Section */}
      <ReviewsSection t={t} />

      {/* CTA Section */}
      <CTASection t={t} />
    </div>
  );
};

const StorySection = ({ t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t('home.storyTitle')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {t('home.storyText')}
            </p>
            <Link to="/about">
              <button className="btn-secondary">
                {t('nav.about')}
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturedDishes = ({ t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const dishes = [
    {
      id: 1,
      name: 'Truffle Wagyu Tataki',
      cuisine: 'Asian Fusion',
      price: '$48',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
      description: 'Premium Japanese wagyu with black truffle',
    },
    {
      id: 2,
      name: 'Moroccan Lamb Tagine',
      cuisine: 'Moroccan',
      price: '$42',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070',
      description: 'Slow-cooked lamb with aromatic spices',
    },
    {
      id: 3,
      name: 'Lobster Risotto',
      cuisine: 'Italian',
      price: '$52',
      image: 'https://images.unsplash.com/photo-1633321702518-7dbb1dffc5e1?q=80&w=2070',
      description: 'Creamy Arborio rice with fresh lobster',
    },
    {
      id: 4,
      name: 'Duck Confit',
      cuisine: 'French',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058',
      description: 'Classic French duck with crispy skin',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t('home.featuredTitle')}
          </h2>
          <p className="text-gray-400 text-lg">Curated by our world-class chefs</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <p className="text-primary-500 text-sm mb-2">{dish.cuisine}</p>
                <h3 className="text-xl font-serif font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-400 text-sm">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <button className="btn-primary">
              View Full Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ReviewsSection = ({ t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      rating: 5,
      text: 'An absolutely phenomenal dining experience! The fusion of global cuisines is masterfully executed. Every dish tells a story.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'GlobalFlame exceeded all expectations. The attention to detail, the ambiance, and the flavors are second to none. A true culinary journey!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      rating: 5,
      text: 'This restaurant is a hidden gem! The service is impeccable, and the food is out of this world. I\'ve never tasted anything like it.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={ref} className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-800 rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t('home.reviewsTitle')}
          </h2>
          <div className="flex justify-center items-center space-x-1 text-primary-500 text-2xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-lg p-8 md:p-12"
            >
              <FaQuoteLeft className="text-5xl text-primary-600/30 mb-6" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 font-serif italic">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-primary-600"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{reviews[currentIndex].name}</h4>
                    <div className="flex space-x-1 text-primary-500">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={prevReview}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-700 hover:bg-primary-600 transition-colors"
                    aria-label="Previous review"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-700 hover:bg-primary-600 transition-colors"
                    aria-label="Next review"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative h-96 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready for a Culinary Adventure?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Reserve your table today and embark on a gastronomic journey around the world
        </p>
        <Link to="/reservations">
          <button className="btn-primary text-lg px-12 py-4">
            {t('hero.cta')}
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
