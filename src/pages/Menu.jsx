import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaFilter, FaLeaf, FaSeedling } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Menu = () => {
  const { t } = useLanguage();
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const menuItems = [
    {
      id: 1,
      name: 'Truffle Wagyu Tataki',
      cuisine: 'Asian',
      price: 48,
      diet: ['Gluten-Free'],
      description: 'Premium Japanese wagyu beef with black truffle oil, yuzu ponzu, and microgreens',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
      spicy: false,
    },
    {
      id: 2,
      name: 'Peking Duck Bao',
      cuisine: 'Asian',
      price: 28,
      diet: [],
      description: 'Crispy duck, hoisin sauce, cucumber, and scallions in fluffy steamed buns',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2069',
      spicy: false,
    },
    {
      id: 3,
      name: 'Moroccan Lamb Tagine',
      cuisine: 'Moroccan',
      price: 42,
      diet: ['Gluten-Free'],
      description: 'Slow-cooked lamb with apricots, almonds, and aromatic spices served with couscous',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070',
      spicy: true,
    },
    {
      id: 4,
      name: 'Harira Soup',
      cuisine: 'Moroccan',
      price: 18,
      diet: ['Vegetarian', 'Vegan'],
      description: 'Traditional Moroccan soup with tomatoes, lentils, chickpeas, and fresh herbs',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
      spicy: false,
    },
    {
      id: 5,
      name: 'Lobster Risotto',
      cuisine: 'Italian',
      price: 52,
      diet: ['Gluten-Free'],
      description: 'Creamy Arborio rice with fresh Maine lobster, white wine, and parmesan',
      image: 'https://images.unsplash.com/photo-1633321702518-7dbb1dffc5e1?q=80&w=2070',
      spicy: false,
    },
    {
      id: 6,
      name: 'Truffle Pasta',
      cuisine: 'Italian',
      price: 38,
      diet: ['Vegetarian'],
      description: 'Fresh tagliatelle with black truffle, butter, and aged parmesan',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070',
      spicy: false,
    },
    {
      id: 7,
      name: 'Margherita Pizza',
      cuisine: 'Italian',
      price: 24,
      diet: ['Vegetarian'],
      description: 'Wood-fired pizza with San Marzano tomatoes, buffalo mozzarella, and basil',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069',
      spicy: false,
    },
    {
      id: 8,
      name: 'Duck Confit',
      cuisine: 'French',
      price: 45,
      diet: ['Gluten-Free'],
      description: 'Classic French duck leg with crispy skin, served with potato purée and red wine jus',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058',
      spicy: false,
    },
    {
      id: 9,
      name: 'Bouillabaisse',
      cuisine: 'French',
      price: 48,
      diet: ['Gluten-Free'],
      description: 'Provençal fish stew with saffron, fennel, and rouille',
      image: 'https://images.unsplash.com/photo-1559737558-2f4e90f453cd?q=80&w=2069',
      spicy: false,
    },
    {
      id: 10,
      name: 'Ratatouille',
      cuisine: 'French',
      price: 32,
      diet: ['Vegetarian', 'Vegan', 'Gluten-Free'],
      description: 'Traditional Provençal vegetable stew with eggplant, zucchini, and tomatoes',
      image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=2070',
      spicy: false,
    },
    {
      id: 11,
      name: 'USDA Prime Ribeye',
      cuisine: 'American',
      price: 65,
      diet: ['Gluten-Free'],
      description: '16oz aged ribeye steak with truffle butter and roasted vegetables',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070',
      spicy: false,
    },
    {
      id: 12,
      name: 'BBQ Brisket',
      cuisine: 'American',
      price: 38,
      diet: [],
      description: 'Slow-smoked Texas-style brisket with house BBQ sauce and coleslaw',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2071',
      spicy: false,
    },
    {
      id: 13,
      name: 'Lobster Roll',
      cuisine: 'American',
      price: 42,
      diet: [],
      description: 'New England style with fresh lobster, mayo, celery, and butter-toasted roll',
      image: 'https://images.unsplash.com/photo-1619881403081-38d8adf4f11d?q=80&w=2070',
      spicy: false,
    },
    {
      id: 14,
      name: 'Vegan Buddha Bowl',
      cuisine: 'Asian',
      price: 28,
      diet: ['Vegetarian', 'Vegan', 'Gluten-Free'],
      description: 'Quinoa, roasted vegetables, tahini, avocado, and sesame seeds',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080',
      spicy: false,
    },
  ];

  const cuisines = ['All', 'Asian', 'Moroccan', 'Italian', 'French', 'American'];
  const diets = ['All', 'Vegetarian', 'Vegan', 'Gluten-Free'];
  const prices = ['All', 'Under $30', '$30-$45', 'Over $45'];

  const filteredItems = menuItems.filter((item) => {
    const cuisineMatch = selectedCuisine === 'All' || item.cuisine === selectedCuisine;
    
    const dietMatch =
      selectedDiet === 'All' ||
      item.diet.includes(selectedDiet);
    
    let priceMatch = true;
    if (priceRange === 'Under $30') priceMatch = item.price < 30;
    else if (priceRange === '$30-$45') priceMatch = item.price >= 30 && item.price <= 45;
    else if (priceRange === 'Over $45') priceMatch = item.price > 45;

    return cuisineMatch && dietMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074')`,
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
            {t('menu.title')}
          </h1>
          <p className="text-xl text-gray-300">{t('menu.subtitle')}</p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-30 glass-effect border-b border-dark-700 py-6">
        <div className="container-custom px-6">
          <div className="flex items-center space-x-4 mb-4">
            <FaFilter className="text-primary-500" />
            <h3 className="font-semibold">Filter Menu</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cuisine Filter */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Cuisine</label>
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary-600"
              >
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Diet Filter */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Dietary Preference</label>
              <select
                value={selectedDiet}
                onChange={(e) => setSelectedDiet(e.target.value)}
                className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary-600"
              >
                {diets.map((diet) => (
                  <option key={diet} value={diet}>
                    {diet}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-dark-800 border border-dark-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary-600"
              >
                {prices.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <p className="text-gray-400">
              Showing <span className="text-primary-500 font-semibold">{filteredItems.length}</span> dishes
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCuisine}-${selectedDiet}-${priceRange}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                    
                    {/* Diet Icons */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {item.diet.includes('Vegetarian') && (
                        <div className="bg-green-600 text-white p-2 rounded-full" title="Vegetarian">
                          <FaLeaf size={12} />
                        </div>
                      )}
                      {item.diet.includes('Vegan') && (
                        <div className="bg-green-700 text-white p-2 rounded-full" title="Vegan">
                          <FaSeedling size={12} />
                        </div>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold">
                      ${item.price}
                    </div>

                    {/* Spicy Indicator */}
                    {item.spicy && (
                      <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        🌶️ Spicy
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-primary-500 text-sm mb-2">{item.cuisine}</p>
                    <h3 className="text-xl font-serif font-semibold mb-3">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    
                    {/* Diet Tags */}
                    {item.diet.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.diet.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No dishes match your filters</p>
              <p className="text-gray-500 mt-2">Try adjusting your selection</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
