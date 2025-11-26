import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Reservations = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Reservation data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: '',
      });
    }, 3000);
  };

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {t('reservations.title')}
          </h1>
          <p className="text-xl text-gray-300">{t('reservations.subtitle')}</p>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-lg p-8 md:p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-4xl text-white" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Reservation Confirmed!</h2>
                <p className="text-gray-400 text-lg">
                  We've sent a confirmation email to {formData.email}
                </p>
                <p className="text-gray-400 mt-2">
                  We look forward to serving you!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <FaUser className="mr-2 text-primary-500" />
                      {t('reservations.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <FaEnvelope className="mr-2 text-primary-500" />
                      {t('reservations.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <FaPhone className="mr-2 text-primary-500" />
                    {t('reservations.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <FaCalendarAlt className="mr-2 text-primary-500" />
                      {t('reservations.date')}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <FaClock className="mr-2 text-primary-500" />
                      {t('reservations.time')}
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('reservations.guests')}
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="10+">10+ Guests (Contact us)</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('reservations.specialRequests')}
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600 transition-colors resize-none"
                    placeholder="Allergies, dietary restrictions, special occasions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  {t('reservations.submit')}
                </motion.button>

                <p className="text-sm text-gray-400 text-center mt-4">
                  By submitting this form, you agree to receive confirmation via email and SMS
                </p>
              </form>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass-effect rounded-lg p-6 text-center">
              <FaCalendarAlt className="text-4xl text-primary-500 mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg mb-2">Book in Advance</h3>
              <p className="text-gray-400 text-sm">
                We recommend booking at least 2-3 days ahead for the best availability
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <FaClock className="text-4xl text-primary-500 mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg mb-2">Cancellation Policy</h3>
              <p className="text-gray-400 text-sm">
                Free cancellation up to 24 hours before your reservation
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <FaUser className="text-4xl text-primary-500 mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg mb-2">Dress Code</h3>
              <p className="text-gray-400 text-sm">
                Smart casual attire recommended for an elegant dining experience
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
