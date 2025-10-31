import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube, ArrowLeft } from 'lucide-react';

const HistoricalFigureDetailPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Contact us'],
    legal: ['Terms', 'Privacy']
  };

  const suggestedFigures = [
    { id: 1, name: "Figure's Name", title: 'Title' },
    { id: 2, name: "Figure's Name", title: 'Title' },
    { id: 3, name: "Figure's Name", title: 'Title' }
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
    if (item === 'Current Affairs' && (location.pathname.startsWith('/current-affairs') || location.pathname.startsWith('/historical-figure'))) return true;
    if (item === 'Blog' && location.pathname === '/blog') return true;
    return false;
  };

  const handleSuggestedFigureClick = (figureId) => {
    navigate(`/historical-figure/${figureId}`);
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
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-green-700 transition-colors">
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

      {/* Back Button */}
      <section className="bg-white py-4 pt-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/historical-figures')}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:border-green-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Historical Figures
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <div className="w-full h-96 bg-gray-200 rounded-lg sticky top-24"></div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-black mb-6">
                Historical Figure's Name
              </h1>

              {/* Biography Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem consequat, laoreet eros eu, posuere nunc. 
                  Integer interdum laoreet ligula eu consectetur. Cras quis urna et enim molestie porttitor. Duis at ante nibh. 
                  Nunc eu posuere orci, sit amet aliquet risus. Aliquam dictum, enim vitae cursus maximus, libero mollis magna, 
                  sit amet fringilla turpis orci sit amet odio. Curabitur dui neque, hendrerit vitae lorem sed, dignissim 
                  porttitor metus. Nullam ut gravida lorem. Morbi eu lacus condimentum, auctor nibh sed, sagittis magna. 
                  Etiam condimentum vulputate lorem, cursus tincidunt nulla gravida vel. Sed rhoncus sodales ipsum, nec ornare 
                  purus porttitor vel. Maecenas ultricies, nulla viverra lobortis rhoncus, dolor erat ultricies mauris, ac 
                  consequat libero turpis sit amet mauris. Nulla bibendum justo eu nunc congue fringilla. Donec mi ex, mattis 
                  ac pretium non, rutrum id erat. Suspendisse mi felis, molestie at aliquam vitae, convallis auctor velit. 
                  Phasellus imperdiet urna a sem rutrum, sed condimentum nulla ullamcorper. Cras in rutrum tellus. Mauris eget 
                  odio finibus, gravida libero ac, finibus lacus. Vivamus lacinia lobortis enim sed rutrum. Morbi et enim non 
                  orci vehicula fringilla a nec sapien. Donec et ligula nec justo accumsan dignissim rutrum nec felis. Duis 
                  non leo at libero bibendum efficitur consectetur imperdiet magna. Vivamus lacinia lobortis enim sed rutrum. 
                  Morbi et enim non orci vehicula fringilla a nec sapien.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sed rhoncus sodales ipsum, nec ornare purus porttitor vel. Maecenas ultricies, nulla viverra lobortis rhoncus, 
                  dolor erat ultricies mauris, ac consequat libero turpis sit amet mauris. Nulla bibendum justo eu nunc congue 
                  fringilla. Donec mi ex, mattis ac pretium non, rutrum id erat. Suspendisse mi felis, molestie at aliquam vitae, 
                  convallis auctor velit. Phasellus imperdiet urna a sem rutrum, sed condimentum nulla ullamcorper. Cras in rutrum 
                  tellus. Mauris eget odio finibus, gravida libero ac, finibus lacus. Vivamus lacinia lobortis enim sed rutrum. 
                  Morbi et enim non orci vehicula fringilla a nec sapien. Donec et ligula nec justo accumsan dignissim rutrum nec 
                  felis. Duis non leo at libero bibendum efficitur consectetur imperdiet magna.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sed rhoncus sodales ipsum, nec ornare purus porttitor vel. Maecenas ultricies, nulla viverra lobortis rhoncus, 
                  dolor erat ultricies mauris, ac consequat libero turpis sit amet mauris. Nulla bibendum justo eu nunc congue 
                  fringilla. Donec mi ex, mattis ac pretium non, rutrum id erat. Suspendisse mi felis, molestie at aliquam vitae, 
                  convallis auctor velit. Phasellus imperdiet urna a sem rutrum, sed condimentum nulla ullamcorper. Cras in rutrum 
                  tellus. Mauris eget odio finibus, gravida libero ac, finibus lacus. Vivamus lacinia lobortis enim sed rutrum. 
                  Morbi et enim non orci vehicula fringilla a nec sapien. Donec et ligula nec justo accumsan dignissim rutrum nec 
                  felis. Duis non leo at libero bibendum efficitur consectetur imperdiet magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Suggested For You */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-left">Suggested For You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedFigures.map((figure, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-black mb-2">{figure.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{figure.title}</p>
                  <button 
                    onClick={() => handleSuggestedFigureClick(figure.id)}
                    className="bg-black text-white px-6 py-2 rounded hover:bg-green-600 hover:border-green-600 transition-colors"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
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
              <button className="bg-black text-white px-6 py-3 rounded hover:border-white transition-colors">
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
                Currently is a...Sed rhoncus sodales ipsum, nec ornare purus porttitor vel. Maecenas ultricies, nulla viverra 
                lobortis rhoncus, dolor erat ultricies mauris, ac consequat libero turpis sit amet mauris.
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
                <li><a onClick={() => navigate('/')} className="text-gray-300 hover:text-green-500 transition-colors text-sm cursor-pointer">Home</a></li>
                <li><a onClick={() => navigate('/about')} className="text-gray-300 hover:text-green-500 transition-colors text-sm cursor-pointer">About us</a></li>
                <li><a onClick={() => navigate('/politicians')} className="text-gray-300 hover:text-green-500 transition-colors text-sm cursor-pointer">Politicians</a></li>
                <li><a onClick={() => navigate('/current-affairs')} className="text-gray-300 hover:text-green-500 transition-colors text-sm cursor-pointer">History</a></li>
                <li><a onClick={() => navigate('/blog')} className="text-gray-300 hover:text-green-500 transition-colors text-sm cursor-pointer">Blog</a></li>
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
              © 2025 Currently.ng. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HistoricalFigureDetailPage;