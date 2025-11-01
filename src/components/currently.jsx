import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const CurrentlyHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];
  
  const politicianCategories = [
    'President', 'Vice President', 'Secretary to the Government of the Federation', 
    'Senate President', 'Deputy Senate President'
  ];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Blog'],
    legal: ['Terms', 'Privacy']
  };

  const handleNavClick = (item) => {
    if (item === 'About us') {
      navigate('/about');
    } else if (item === 'Politicians') {
      navigate('/politicians');
    } else if (item === 'Home') {
      navigate('/');
    } else if (item === 'Current Affairs') {
      navigate('/current-affairs');
    } else if (item === 'Blog') {
      navigate('/blog');
    }
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
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl lg:text-2xl font-bold text-black cursor-pointer" onClick={() => navigate('/')}>
                CURRENTLY.NG
              </div>
            </div>

            {/* Desktop Navigation - Only show on large screens */}
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

            {/* CTA Button - Only show on large screens */}
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-green-500 transition-colors">
              SUBSCRIBE
            </button>

            {/* Mobile/Tablet menu button - Show on medium and smaller screens */}
            <button 
              className="lg:hidden bg-green-600 text-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation - Show on medium and smaller screens */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 pt-4 pb-4 bg-white">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleNavClick(item)} 
                    className={`text-left text-white bg-green-600 hover:text-green-600 py-2 px-3 rounded hover:bg-gray-50 transition-colors ${
                      isCurrentPage(item) ? 'text-white-600 font-medium' : ''
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
          <h1 style={{ lineHeight: '150%' }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Empowering Your Understanding of<br />
            Nigerian Politics
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
            Go beyond the headlines, uncover the definitive backgrounds of those who hold the power moments that shaped 
            the nation, and the analyses shaping Nigeria's future.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pl-12 border bg-gray-200 text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Political Categories */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {politicianCategories.map((category, index) => (
              <button 
                key={index}
                className="px-3 py-2 text-sm sm:text-base text-white-600 hover:text-green-600 transition-colors border-b-2 border-transparent hover:border-green-600"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Get to Know Your Politicians */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Get to Know Your Politicians</h2>
            <a href="#" className="text-green-600 hover:text-black transition-colors no-underline text-sm sm:text-base">See all</a>
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8 sm:flex-row sm:overflow-x-scroll xl:grid xl:grid-cols-3 xl:overflow-x-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            <div className="relative group cursor-pointer flex-shrink-0 mx-auto sm:mx-0" style={{ width: '353px', height: '391.31px', minWidth: '353px' }}>
              <img src="/images/President.png" alt="The Presidency" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center">The Presidency</h3>
            </div>
            
            <div className="relative group cursor-pointer flex-shrink-0 mx-auto sm:mx-0" style={{ width: '353px', height: '391.31px', minWidth: '353px' }}>
              <img src="/images/Ministers.png" alt="Ministers" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center">Ministers</h3>
            </div>
            
            <div className="relative group cursor-pointer flex-shrink-0 mx-auto sm:mx-0" style={{ width: '353px', height: '391.31px', minWidth: '353px' }}>
              <img src="/images/Governor.png" alt="Governors" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center">Governors</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Stories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Trending Stories on Currently.ng</h2>
            <a href="#" className="text-green-600 hover:text-black transition-colors no-underline text-sm sm:text-base">See all</a>
          </div>
          
          <div className="flex flex-col gap-8 sm:flex-row sm:overflow-x-scroll xl:flex-wrap xl:justify-center xl:overflow-x-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 mx-auto sm:mx-0" style={{width: '353px', height: '523.57px', minWidth: '353px'}}>
              <div style={{height: '330px', backgroundColor: '#d1d5db', width: '100%'}}></div>
              <div style={{height: '123.57px', padding: '16px'}}>
                <h3 className="font-semibold text-lg mb-2 text-black">How Did the Biafra War Frame Today's Political Landscape</h3>
                <button className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-gray-800 hover:border-2 hover:border-green-500 transition-all mt-auto">
                    Read more
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 mx-auto sm:mx-0" style={{width: '353px', height: '523.57px', minWidth: '353px'}}>
              <div style={{height: '330px', backgroundColor: '#d1d5db', width: '100%'}}></div>
              <div style={{height: '123.57px', padding: '16px'}}>
                <h3 className="font-semibold text-lg mb-2 text-black">The Unspoken Horrors of the Transatlantic Slave Trade</h3>
                <button className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-gray-800 hover:border-2 hover:border-green-500 transition-all mt-auto">
                    Read more
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 mx-auto sm:mx-0" style={{width: '353px', height: '523.57px', minWidth: '353px'}}>
              <div style={{height: '330px', backgroundColor: '#d1d5db', width: '100%'}}></div>
              <div style={{height: '123.57px', padding: '16px'}}>
                <h3 className="font-semibold text-lg mb-2 text-black">The Hidden Agenda behind the Famous Organisation</h3>
                <button className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-gray-800 hover:border-2 hover:border-green-500 transition-all mt-auto">
                    Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-8 md:mb-0">
              <img 
                src="/images/blk_bg_img.webp" 
                alt="Political awareness illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="flex-1 text-white">
              <h2 id="awareness-heading" className="text-2xl sm:text-3xl font-light mb-4">
                Elevate your political awareness. <br></br>Get the full story, delivered straight to your inbox.
              </h2>
              <div className="flex flex-col space-y-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 text-black rounded focus:outline-none bg-white text-gray-500"
                />
                <button className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 hover:border-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested For You */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Suggested For You</h2>
            <a href="#" className="text-green-600 hover:text-black transition-colors no-underline text-sm sm:text-base">See all</a>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:overflow-x-scroll xl:flex-wrap xl:justify-center xl:overflow-x-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {/* Card 1 */}
            <div
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col flex-shrink-0 mx-auto sm:mx-0"
              style={{ width: '353px', height: '576.48px', minWidth: '353px' }}
            >
              <div className="bg-gray-200" style={{ height: '310px' }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  What If Nigeria Became a Dictatorship
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-gray-800 hover:border-2 hover:border-green-500 transition-all mt-auto">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col flex-shrink-0 mx-auto sm:mx-0"
              style={{ width: '353px', height: '576.48px', minWidth: '353px' }}
            >
              <div className="bg-gray-200" style={{ height: '310px' }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Oh How the Naira has Fallen: The Economy in on a Downward Spiral
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-gray-800 hover:border-2 hover:border-green-500 transition-all mt-auto">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col flex-shrink-0 mx-auto sm:mx-0"
              style={{ width: '353px', height: '576.48px', minWidth: '353px' }}
            >
              <div className="bg-gray-200" style={{ height: '310px' }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Strategic Incompetence: The Hidden Tool in Nigerian Elections
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-black text-white w-40 py-2 text-sm rounded hover:bg-gray-800 hover:border-2 hover:border-green-500 transition-all mt-auto">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-green-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex-1 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Join us in making a difference for Nigeria's future
              </h2>
              <p className="text-green-100 mb-6">
                With your support, we can keep Nigerians informed.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 hover:border-white transition-colors">
                Contact us
              </button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <img 
          src="/images/grn_bg_img.webp" 
          alt="Subscribe Illustration" 
          className="absolute right-0 top-0 bottom-0 h-full w-auto md:w-1/2 object-cover object-left"
        />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-4 text-green-500">Currently.ng</div>
              <p className="text-gray-300 hover:text-green-500 transition-colors text-sm mb-4">
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
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Join our informed community and get exclusive content and updates on our newsletter</h4>
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
            <p className="text-center text-white hover:text-green-500 transition-colors text-sm">
              © 2025 Currently.ng. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CurrentlyHomepage;