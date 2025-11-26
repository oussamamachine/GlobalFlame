import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAward, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-2xl text-gray-300">{t('about.subtitle')}</p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <MissionSection t={t} />

      {/* Stats Section */}
      <StatsSection />

      {/* Chef Section */}
      <ChefSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <TimelineSection />
    </div>
  );
};

const MissionSection = ({ t }) => {
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
              {t('about.missionTitle')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {t('about.missionText')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 2018, GlobalFlame has become a destination for food lovers seeking
              authentic global flavors prepared with modern techniques and premium ingredients.
              Our chefs, trained in Michelin-starred kitchens around the world, bring their
              expertise and passion to every dish.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074"
              alt="Restaurant"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: '50+', label: 'Countries Represented', icon: FaGlobe },
    { number: '25K+', label: 'Happy Customers', icon: FaUsers },
    { number: '15+', label: 'Awards Won', icon: FaAward },
    { number: '100%', label: 'Customer Satisfaction', icon: FaHeart },
  ];

  return (
    <section ref={ref} className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-lg p-8 text-center"
              >
                <Icon className="text-5xl text-primary-500 mx-auto mb-4" />
                <div className="text-4xl font-bold font-serif text-gradient mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ChefSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const chefs = [
    {
      name: 'Chef Marcus Chen',
      title: 'Executive Chef',
      specialty: 'Asian Fusion',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080',
      bio: 'Trained in Tokyo and Hong Kong, Chef Marcus brings 20 years of culinary excellence.',
    },
    {
      name: 'Chef Isabella Rossi',
      title: 'Head Chef',
      specialty: 'Italian & French',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2080',
      bio: 'Michelin-starred chef with experience in Paris and Rome\'s finest restaurants.',
    },
    {
      name: 'Chef Ahmed Hassan',
      title: 'Specialty Chef',
      specialty: 'Moroccan & Middle Eastern',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077',
      bio: 'Master of traditional spices and modern techniques from Marrakech to Dubai.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Meet Our Chefs
          </h2>
          <p className="text-gray-400 text-lg">
            World-class talent bringing global flavors to your table
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-lg overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-1">{chef.name}</h3>
                <p className="text-primary-500 mb-2">{chef.title}</p>
                <p className="text-sm text-gray-400 mb-3">Specialty: {chef.specialty}</p>
                <p className="text-gray-400 text-sm">{chef.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: '🌍',
      title: 'Global Inspiration',
      description: 'We celebrate culinary traditions from every corner of the world.',
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We never compromise on quality, from ingredients to service.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We source locally and ethically whenever possible.',
    },
    {
      icon: '🎨',
      title: 'Innovation',
      description: 'We blend traditional techniques with modern creativity.',
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
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-lg p-6 text-center"
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timeline = [
    { year: '2018', event: 'GlobalFlame opens its doors in New York City' },
    { year: '2019', event: 'Awarded "Best New Restaurant" by Food & Wine Magazine' },
    { year: '2020', event: 'Expanded menu to include 50+ countries\' cuisines' },
    { year: '2022', event: 'Received Michelin recognition and AAA Five Diamond Award' },
    { year: '2023', event: 'Launched online ordering and expanded catering services' },
    { year: '2024', event: 'Celebrated serving 25,000+ happy customers' },
  ];

  return (
    <section ref={ref} className="section-padding bg-dark-800">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-gray-400 text-lg">
            Milestones in our culinary adventure
          </p>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-8"
            >
              <div className="w-24 text-right">
                <span className="text-3xl font-serif font-bold text-gradient">
                  {item.year}
                </span>
              </div>
              <div className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0" />
              <div className="flex-1 glass-effect rounded-lg p-6">
                <p className="text-gray-300">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
