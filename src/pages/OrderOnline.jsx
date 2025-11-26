import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaShoppingBag, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const OrderOnline = () => {
  const { t } = useLanguage();
  const [orderType, setOrderType] = useState('delivery');

  const popularItems = [
    {
      id: 1,
      name: 'Truffle Wagyu Tataki',
      price: 48,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
      description: 'Premium Japanese wagyu with black truffle',
    },
    {
      id: 2,
      name: 'Lobster Risotto',
      price: 52,
      image: 'https://images.unsplash.com/photo-1633321702518-7dbb1dffc5e1?q=80&w=2070',
      description: 'Creamy Arborio rice with fresh lobster',
    },
    {
      id: 3,
      name: 'Duck Confit',
      price: 45,
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058',
      description: 'Classic French duck with crispy skin',
    },
    {
      id: 4,
      name: 'Moroccan Lamb Tagine',
      price: 42,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070',
      description: 'Slow-cooked lamb with aromatic spices',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070')`,
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
            {t('order.title')}
          </h1>
          <p className="text-xl text-gray-300">{t('order.subtitle')}</p>
        </motion.div>
      </section>

      {/* Order Type Selection */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOrderType('delivery')}
              className={`glass-effect rounded-lg p-8 text-center transition-all ${
                orderType === 'delivery'
                  ? 'border-2 border-primary-600 bg-primary-600/10'
                  : 'border-2 border-transparent'
              }`}
            >
              <FaTruck className="text-5xl text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-2">
                {t('order.delivery')}
              </h3>
              <p className="text-gray-400">30-45 minutes • Free over $50</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOrderType('pickup')}
              className={`glass-effect rounded-lg p-8 text-center transition-all ${
                orderType === 'pickup'
                  ? 'border-2 border-primary-600 bg-primary-600/10'
                  : 'border-2 border-transparent'
              }`}
            >
              <FaShoppingBag className="text-5xl text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-2">
                {t('order.pickup')}
              </h3>
              <p className="text-gray-400">Ready in 20-30 minutes • 10% discount</p>
            </motion.button>
          </motion.div>

          {/* Address/Location Section */}
          {orderType === 'delivery' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-lg p-6 mb-12"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-primary-500 text-xl mr-3" />
                <h3 className="text-xl font-semibold">Delivery Address</h3>
              </div>
              <input
                type="text"
                placeholder="Enter your delivery address..."
                className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-600"
              />
              <p className="text-sm text-gray-400 mt-2">
                We deliver within a 5-mile radius of our restaurant
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-lg p-6 mb-12"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-primary-500 text-xl mr-3" />
                <h3 className="text-xl font-semibold">Pickup Location</h3>
              </div>
              <p className="text-gray-400 mb-2">123 Culinary Boulevard, New York, NY 10001</p>
              <div className="flex items-center text-sm text-gray-400">
                <FaClock className="mr-2" />
                <span>Open: Mon-Fri 11:00-23:00 | Sat 10:00-00:00 | Sun 10:00-22:00</span>
              </div>
            </motion.div>
          )}

          {/* Popular Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Popular Items
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-500 font-bold text-xl">${item.price}</span>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Full Menu CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              Want to see more options?
            </p>
            <a
              href="/menu"
              className="inline-block btn-primary"
            >
              Browse Full Menu
            </a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-serif font-semibold text-lg mb-2">Quality Packaging</h3>
              <p className="text-gray-400 text-sm">
                Premium containers to keep your food fresh and hot
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-serif font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">
                Track your order in real-time with our delivery partners
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-serif font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-400 text-sm">
                Multiple payment options including cash, card, and digital wallets
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrderOnline;
