import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/reservations', label: t('nav.reservations') },
    { path: '/order', label: t('nav.orderOnline') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-luxury border-t border-dark-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-gradient">Global</span>
              <span className="text-white">Flame</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.about')}
            </p>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-primary-500 transition-colors text-sm">
                <FaPhone className="mr-2" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@globalflame.com" className="flex items-center text-gray-400 hover:text-primary-500 transition-colors text-sm">
                <FaEnvelope className="mr-2" />
                info@globalflame.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-white">
              {t('contact.hours')}
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 22:00</span>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-primary-500 transition-colors text-sm"
              >
                <FaMapMarkerAlt className="mr-2" />
                123 Culinary Blvd, NYC
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-white">
              {t('footer.followUs')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <Link to="/reservations">
                <button className="btn-primary w-full">
                  {t('hero.cta')}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-700 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} GlobalFlame. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
