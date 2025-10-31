import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const GeneralKnowledgePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Blog'],
    legal: ['Terms', 'Privacy']
  };

  const generalKnowledgeFacts = [
    { id: 1, fact: 'Nigeria is the most populous country in Africa', detail: '2023' },
    { id: 2, fact: 'There are over 250 ethnic groups in Nigeria', detail: 'Census Data' },
    { id: 3, fact: 'Nigeria has 36 states and 1 Federal Capital Territory', detail: '1996' },
    { id: 4, fact: 'The Nigerian film industry is called Nollywood', detail: '1990s' },
    { id: 5, fact: 'Nigeria gained independence on October 1, 1960', detail: 'October 1, 1960' },
    { id: 6, fact: 'Lagos was the former capital city before Abuja', detail: 'Until 1991' },
    { id: 7, fact: 'Nigeria is the largest economy in Africa', detail: '2014-Present' },
    { id: 8, fact: 'The River Niger gave Nigeria its name', detail: 'Historical Fact' },
    { id: 9, fact: 'Nigeria has over 500 indigenous languages', detail: 'Linguistic Survey' },
    { id: 10, fact: 'The Giant of Africa is Nigeria\'s nickname', detail: 'Common Reference' },
    { id: 11, fact: 'Nigeria is the world\'s 6th largest oil producer', detail: 'OPEC Rankings' },
    { id: 12, fact: 'The highest point in Nigeria is Chappal Waddi', detail: '2,419m elevation' },
    { id: 13, fact: 'Nigeria covers 923,768 square kilometers', detail: 'Geographic Data' },
    { id: 14, fact: 'The green-white-green flag was adopted in 1960', detail: 'Independence Day' }
  ];

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
    if (item === 'Current Affairs' && (location.pathname === '/current-affairs' || location.pathname === '/general-knowledge')) return true;
    if (item === 'Blog' && location.pathname === '/blog') return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-black cursor-pointer" onClick={() => navigate('/')}>CURRENTLY.NG</div>
            </div>

            {/* Desktop Navigation */}
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

            {/* CTA Button */}
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-green-600 transition-colors">
              SUBSCRIBE
            </button>

            {/* Mobile/Tablet menu button */}
            <button 
              className="lg:hidden bg-green-600 text-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t pt-4 pb-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleNavClick(item)} 
                    className={`text-left text-white bg-green-600 hover:text-green-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors ${
                      isCurrentPage(item) ? 'font-medium' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button className="bg-green-600 text-white px-6 py-2 rounded w-fit hover:bg-green-700 transition-colors">
                  SUBSCRIBE
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 pt-20 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">General Knowledge</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore profiles of elected officials across all levels of government. Click on any politician to learn more about their background and positions.
            </p>
          </div>

          {/* Knowledge Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-20">S/N</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">General Knowledge</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {generalKnowledgeFacts.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.fact}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Information */}
          {/* <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-black mb-4">About Nigeria's Rich Heritage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nigeria is a country of remarkable diversity and rich cultural heritage. Known as the "Giant of Africa," 
              Nigeria stands as the continent's most populous nation and largest economy, with a vibrant mix of over 
              250 ethnic groups and more than 500 indigenous languages.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From the bustling commercial hub of Lagos to the political center of Abuja, from the ancient city of 
              Kano to the oil-rich Niger Delta, Nigeria's 36 states each contribute unique elements to the nation's 
              collective identity and progress.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Understanding these fundamental facts about Nigeria helps provide context for the country's political 
              landscape, economic development, and cultural dynamics that shape the nation's journey toward progress 
              and unity in diversity.
            </p>
          </div> */}
        </div>
      </main>

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
              <div className="w-64 h-64 mx-auto">
                {/* Handshake illustration */}
                {/* <svg viewBox="0 0 300 200" className="w-full h-full text-white">
                  <path d="M50 150 Q100 120 150 130 Q200 140 250 120" 
                        stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M80 140 Q120 110 160 120 Q200 130 240 110" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="100" cy="135" r="8" fill="currentColor"/>
                  <circle cx="200" cy="125" r="8" fill="currentColor"/>
                </svg> */}
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
              <p className="text-gray-300 text-sm mb-4">
                Currently is a...Sed rhoncus sodales ipsum, nec ornare purus porttitor vel. Maecenas ultricies, nulla viverra lobortis rhoncus, dolor erat ultricies mauris, ac consequat libero turpis sit amet mauris.
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
              <h4 className="font-semibold mb-4 text-green-500">Useful Links</h4>
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

            {/* Empty column for spacing */}
            <div></div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Join our informed community and get exclusive content and updates on our newsletter</h4>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white text-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 hover:border-white transition-colors w-fit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-center text-white text-sm">
              © 2025 Currently. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneralKnowledgePage;