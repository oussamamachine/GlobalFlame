import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      reservations: 'Reservations',
      orderOnline: 'Order Online',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'The World\'s Kitchen',
      subtitle: 'Experience culinary excellence from every corner of the globe',
      cta: 'Book a Table',
      cta2: 'Explore Menu',
    },
    home: {
      storyTitle: 'Our Story',
      storyText: 'GlobalFlame was born from a passion to bring the world\'s finest cuisines under one roof. Our award-winning chefs craft extraordinary dishes that celebrate global flavors with a modern, luxurious twist.',
      featuredTitle: 'Chef\'s Specials',
      reviewsTitle: 'What Our Guests Say',
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'A journey through global flavors',
      filterAll: 'All',
      filterAsian: 'Asian',
      filterMoroccan: 'Moroccan',
      filterItalian: 'Italian',
      filterFrench: 'French',
      filterAmerican: 'American',
      filterVeg: 'Vegetarian',
      filterVegan: 'Vegan',
      filterGF: 'Gluten-Free',
    },
    reservations: {
      title: 'Reserve Your Table',
      subtitle: 'Join us for an unforgettable dining experience',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      date: 'Date',
      time: 'Time',
      guests: 'Number of Guests',
      specialRequests: 'Special Requests',
      submit: 'Book Now',
    },
    order: {
      title: 'Order Online',
      subtitle: 'Enjoy GlobalFlame at home',
      delivery: 'Delivery',
      pickup: 'Pick Up',
    },
    about: {
      title: 'About GlobalFlame',
      subtitle: 'Where the world comes to dine',
      missionTitle: 'Our Mission',
      missionText: 'To create an unparalleled dining experience that celebrates diversity, innovation, and culinary artistry.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'We\'d love to hear from you',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Opening Hours',
      message: 'Message',
      send: 'Send Message',
    },
    footer: {
      about: 'GlobalFlame brings together the finest cuisines from around the world in a luxurious, modern setting.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    floating: {
      bookTable: 'Book a Table',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      reservations: 'Réservations',
      orderOnline: 'Commander en ligne',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      title: 'La Cuisine du Monde',
      subtitle: 'Découvrez l\'excellence culinaire des quatre coins du globe',
      cta: 'Réserver une table',
      cta2: 'Découvrir le menu',
    },
    home: {
      storyTitle: 'Notre Histoire',
      storyText: 'GlobalFlame est né d\'une passion pour rassembler les meilleures cuisines du monde sous un même toit. Nos chefs primés créent des plats extraordinaires célébrant les saveurs mondiales avec une touche moderne et luxueuse.',
      featuredTitle: 'Spécialités du Chef',
      reviewsTitle: 'Ce que disent nos clients',
    },
    menu: {
      title: 'Notre Menu',
      subtitle: 'Un voyage à travers les saveurs du monde',
      filterAll: 'Tout',
      filterAsian: 'Asiatique',
      filterMoroccan: 'Marocain',
      filterItalian: 'Italien',
      filterFrench: 'Français',
      filterAmerican: 'Américain',
      filterVeg: 'Végétarien',
      filterVegan: 'Végétalien',
      filterGF: 'Sans gluten',
    },
    reservations: {
      title: 'Réservez votre table',
      subtitle: 'Rejoignez-nous pour une expérience culinaire inoubliable',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      date: 'Date',
      time: 'Heure',
      guests: 'Nombre de personnes',
      specialRequests: 'Demandes spéciales',
      submit: 'Réserver maintenant',
    },
    order: {
      title: 'Commander en ligne',
      subtitle: 'Profitez de GlobalFlame à la maison',
      delivery: 'Livraison',
      pickup: 'À emporter',
    },
    about: {
      title: 'À propos de GlobalFlame',
      subtitle: 'Où le monde vient dîner',
      missionTitle: 'Notre Mission',
      missionText: 'Créer une expérience culinaire inégalée célébrant la diversité, l\'innovation et l\'art culinaire.',
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous serions ravis de vous entendre',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'E-mail',
      hours: 'Horaires d\'ouverture',
      message: 'Message',
      send: 'Envoyer le message',
    },
    footer: {
      about: 'GlobalFlame rassemble les meilleures cuisines du monde dans un cadre luxueux et moderne.',
      quickLinks: 'Liens rapides',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés.',
    },
    floating: {
      bookTable: 'Réserver',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      menu: 'القائمة',
      reservations: 'الحجوزات',
      orderOnline: 'اطلب عبر الإنترنت',
      about: 'من نحن',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'مطبخ العالم',
      subtitle: 'استمتع بالتميز الطهوي من كل أركان العالم',
      cta: 'احجز طاولة',
      cta2: 'استكشف القائمة',
    },
    home: {
      storyTitle: 'قصتنا',
      storyText: 'ولدت GlobalFlame من شغف لجمع أفضل المطابخ العالمية تحت سقف واحد. يصنع طهاتنا الحائزون على جوائز أطباقًا استثنائية تحتفي بالنكهات العالمية بلمسة عصرية فاخرة.',
      featuredTitle: 'اختيارات الشيف',
      reviewsTitle: 'ماذا يقول ضيوفنا',
    },
    menu: {
      title: 'قائمتنا',
      subtitle: 'رحلة عبر النكهات العالمية',
      filterAll: 'الكل',
      filterAsian: 'آسيوي',
      filterMoroccan: 'مغربي',
      filterItalian: 'إيطالي',
      filterFrench: 'فرنسي',
      filterAmerican: 'أمريكي',
      filterVeg: 'نباتي',
      filterVegan: 'نباتي صرف',
      filterGF: 'خالي من الغلوتين',
    },
    reservations: {
      title: 'احجز طاولتك',
      subtitle: 'انضم إلينا لتجربة طعام لا تُنسى',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      date: 'التاريخ',
      time: 'الوقت',
      guests: 'عدد الضيوف',
      specialRequests: 'طلبات خاصة',
      submit: 'احجز الآن',
    },
    order: {
      title: 'اطلب عبر الإنترنت',
      subtitle: 'استمتع بـ GlobalFlame في المنزل',
      delivery: 'توصيل',
      pickup: 'استلام',
    },
    about: {
      title: 'عن GlobalFlame',
      subtitle: 'حيث يأتي العالم لتناول الطعام',
      missionTitle: 'مهمتنا',
      missionText: 'خلق تجربة طعام لا مثيل لها تحتفي بالتنوع والابتكار والفن الطهوي.',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نود أن نسمع منك',
      address: 'العنوان',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
    },
    footer: {
      about: 'يجمع GlobalFlame أفضل المطابخ من جميع أنحاء العالم في بيئة فاخرة وعصرية.',
      quickLinks: 'روابط سريعة',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
    },
    floating: {
      bookTable: 'احجز',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
