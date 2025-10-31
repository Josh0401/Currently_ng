import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const NationalHolidaysPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Blog'],
    legal: ['Terms', 'Privacy']
  };

  const nationalHolidays = [
    { id: 1, holiday: 'New Year\'s Day', date: 'January 1' },
    { id: 2, holiday: 'Good Friday', date: 'March/April (varies)' },
    { id: 3, holiday: 'Easter Monday', date: 'March/April (varies)' },
    { id: 4, holiday: 'Workers\' Day', date: 'May 1' },
    { id: 5, holiday: 'Children\'s Day', date: 'May 27' },
    { id: 6, holiday: 'Democracy Day', date: 'June 12' },
    { id: 7, holiday: 'Eid al-Fitr', date: 'Varies (Islamic Calendar)' },
    { id: 8, holiday: 'Eid al-Adha', date: 'Varies (Islamic Calendar)' },
    { id: 9, holiday: 'Independence Day', date: 'October 1' },
    { id: 10, holiday: 'Christmas Day', date: 'December 25' },
    { id: 11, holiday: 'Boxing Day', date: 'December 26' },
    { id: 12, holiday: 'Maulud (Prophet\'s Birthday)', date: 'Varies (Islamic Calendar)' },
    { id: 13, holiday: 'Armed Forces Remembrance Day', date: 'January 15' },
    { id: 14, holiday: 'National Youth Day', date: 'November 1' }
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
    if (item === 'Current Affairs' && (location.pathname === '/current-affairs' || location.pathname === '/national-holidays')) return true;
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
            <h1 className="text-4xl font-bold text-black mb-4">National Holidays and Events</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore profiles of elected officials across all levels of government. Click on any politician to learn more about their background and positions.
            </p>
          </div>

          {/* Holidays Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-20">S/N</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Holiday Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {nationalHolidays.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.holiday}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Information */}
          {/* <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-black mb-4">About Nigeria's National Holidays</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nigeria observes a diverse range of national holidays that reflect its rich cultural heritage, 
              religious diversity, and historical milestones. These holidays bring together Nigerians from 
              all walks of life to celebrate shared values and commemorate important events in the nation's history.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The calendar includes Christian holidays like Good Friday, Easter Monday, and Christmas; 
              Islamic holidays such as Eid al-Fitr, Eid al-Adha, and Maulud; and secular national holidays 
              like Independence Day, Democracy Day, and Workers' Day.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These holidays serve as important opportunities for reflection, celebration, and national unity, 
              allowing Nigerians to honor their past, celebrate their present, and look forward to their future 
              as a diverse but united nation.
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
              © 2025 Curently.ng. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NationalHolidaysPage;