import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const CurrentlyPoliticiansPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];

  const politicianCategories = [
    'All Offices', 'Presidency', 'Ministers', 'Governors',
    'House of Representatives', 'House of Senate', 'Parastatals', 'LGA'
  ];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Contact us'],
    legal: ['Terms', 'Privacy']
  };

  const handleNavClick = (item) => {
    if (item === 'Home') navigate('/');
    else if (item === 'About us') navigate('/about');
    else if (item === 'Politicians') navigate('/politicians');
    else if (item === 'Current Affairs') navigate('/current-affairs');
    else if (item === 'Blog') navigate('/blog');
    setIsMenuOpen(false);
  };

  const isCurrentPage = (item) => {
    if (item === 'Home' && location.pathname === '/') return true;
    if (item === 'About us' && location.pathname === '/about') return true;
    if (item === 'Politicians' && location.pathname === '/politicians') return true;
    if (item === 'Current Affairs' && location.pathname === '/current-affairs') return true;
    if (item === 'Blog' && location.pathname === '/blog') return true;
    return false;
  };

  const handleReadMore = (politicianId) => {
    navigate(`/politician-detail/${politicianId}`);
  };

  const generatePoliticianCards = () => {
    const cards = [];
    const totalCards = 15;

    for (let i = 0; i < totalCards; i++) {
      cards.push(
        <div key={i} className="flex flex-col items-center">
          <div
            className="w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            style={{ width: '353px', height: '488px' }}
          >
            <div className="h-48 bg-gray-200 w-full" style={{ height: '330px' }}></div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-black mb-2">Figure's Name</h3>
              <p className="text-gray-600 text-sm mb-4">Title</p>
              <button
                onClick={() => handleReadMore(i + 1)}
                className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-green-500 hover:border-2 hover:border-green-500 transition-all mt-auto cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div
              className="text-2xl font-bold text-black cursor-pointer"
              onClick={() => navigate('/')}
            >
              CURRENTLY.NG
            </div>

            {/* Desktop Navigation (≥1024px) */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleNavClick(item)}
                  className={`text-black hover:text-green-600 transition-colors cursor-pointer ${
                    isCurrentPage(item) ? 'text-green-600 font-medium' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA Button (desktop only) */}
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-green-700 transition-colors">
              SUBSCRIBE
            </button>

            {/* Hamburger (mobile + tablet) */}
            <button
              className="lg:hidden bg-green-600 text-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile / Tablet menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 pt-4 pb-4 bg-white">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item)}
                    className={`text-left py-2 bg-green-600 text-white px-3 rounded transition-colors ${
                      isCurrentPage(item)
                        ? 'text-white-600 bg-green-50 font-medium'
                        : 'text-white hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button className="bg-green-600 text-white px-6 py-2 rounded w-fit mt-2 hover:bg-green-700 transition-colors">
                  SUBSCRIBE
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 pt-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Elevate Your Knowledge of Nigerian Politicians
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Explore profiles of elected officials, political leaders, and key politicians to learn more about their
            background and missions.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pl-12 border bg-gray-200 text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </section>

      {/* Political Categories */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {politicianCategories.map((category, index) => (
              <a
                key={index}
                className={`px-4 py-2 transition-colors border-b-2 cursor-pointer ${
                  index === 0
                    ? 'text-green-600 border-green-600 font-medium'
                    : 'text-black hover:text-green-600 border-transparent hover:border-green-600'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Politicians Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
            {generatePoliticianCards()}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button className="w-8 h-8 bg-green-600 text-white rounded flex items-center justify-center hover:text-white hover:border-black">
              1
            </button>
            <button className="w-8 h-8 bg-gray-200 text-gray-600 rounded flex items-center justify-center hover:text-white hover:bg-green-600 hover:border-green-300">
              2
            </button>
            <button className="w-8 h-8 bg-gray-200 text-gray-600 rounded flex items-center justify-center hover:text-white hover:bg-green-600 hover:border-green-300">
              3
            </button>
            <button className="w-8 h-8 bg-gray-200 text-gray-600 rounded flex items-center justify-center hover:text-white hover:bg-green-600 hover:border-green-300">
              4
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-green-600 hover:text-white hover:border-green-300">
              Next →
            </button>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black text-white px-6 py-2 rounded hover:border-green-300 transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Join us in making a difference for Nigeria's future
              </h2>
              <p className="text-green-100 mb-6">
                With your support, we can keep Nigerians informed.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 hover:border-white transition-colors">
                Contact us
              </button>
            </div>
            <div className="flex-1">
              <div className="w-64 h-64 mx-auto flex items-center justify-center">
                {/* Placeholder for illustration */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4 text-green-500">Currently.ng</div>
              <p className="text-gray-300 transition-colors text-sm mb-4">
                Currently.ng is dedicated to illuminating Nigeria's political landscape through comprehensive reporting,
                in-depth analysis, and civic education that empowers citizens to engage meaningfully with their democracy.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer" />
                <Twitter size={20} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer" />
                <Instagram size={20} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer" />
                <Youtube size={20} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold mb-4 text-green-500">USEFUL LINKS</h4>
              <ul className="space-y-2">
                {footerLinks.useful.map((link, index) => (
                  <li key={index}>
                    <a
                      onClick={() => {
                        if (link === 'Home') navigate('/');
                        else if (link === 'About us') navigate('/about');
                        else if (link === 'Politicians') navigate('/politicians');
                        else if (link === 'History')navigate('/current-affairs');
                        else if (link === 'Blog')navigate('/blog');
                      }}
                      className="text-gray-300 hover:text-green-500 transition-colors text-sm cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-green-500">LEGAL</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-white">
                Join our informed community and get exclusive content and updates on our newsletter
              </h4>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email here"
                  className="px-4 py-2 bg-white text-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 hover:border-white transition-colors w-fit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-center text-white transition-colors text-sm">
              © 2025 Currently.ng. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Removed <style jsx>; use plain <style> or external CSS */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CurrentlyPoliticiansPage;