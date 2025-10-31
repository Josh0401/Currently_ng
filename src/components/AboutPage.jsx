import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const CurrentlyAboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];
  
  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Blog'],
    legal: ['Terms', 'Privacy']
  };

  const handleNavClick = (item) => {
    if (item === 'Home') {
      navigate('/');
    } else if (item === 'Politicians') {
      navigate('/politicians');
    } else if (item === 'About us') {
      navigate('/about');
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
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-white transition-colors">
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
                    className="text-left text-white bg-green-600 hover:text-green-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors"
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

      {/* Hero Section */}
      <section className="bg-white py-16 pt-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 style={{ lineHeight: '150%' }} className="text-4xl md:text-5xl font-bold text-black mb-6">
  Illuminating Nigeria's Political Landscape<br />
  One Insight at a Time
</h1>

          
          {/* Placeholder for visual content */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-sm">Visual content placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 leading-relaxed text-lg italic">"Mission Statement.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem consequat, laoreet eros eu, posuere nunc.
            Proin ut sem consequat, laoreet eros eu, posuere nunc. Proin ut sem consequat, laoreet eros eu, posuere nunc. Proin ut sem consequat, laoreet eros eu, posuere nunc. Proin ut sem consequat, laoreet eros eu, posuere nunc. Proin ut sem consequat, laoreet eros eu, posuere nunc."
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">Who We Are</h2>
          
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat ratione! Ipsa esse 
              eveniet omnis odit fugiat, consequatur cum quia soluta, doloremque reiciendis quibusdam magnam. 
              Non tenetur dolore architecto quia quaerat, eligendi dicta distinctio voluptatibus accusantium 
              nobis ipsa. Repudiandae omnis, explicabo ipsa odio aliquam labore dolore. Repellendus vitae dolore reiciendis?
            </p>
            
            <p className="mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, reiciendis! Illo nam iste voluptatem 
              sequi consequatur perspiciatis nihil ullam aut voluptas? Vero perferendis recusandae eum quas voluptatum, 
              sunt est vitae natus illum. Repellat magnam culpa rerum, voluptates optio reiciendis corrupti? Iste ad 
              ducimus omnis a nobis, obcaecati hic soluta fugiat.
            </p>
            
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae praesentium iusto alias 
              pariatur dignissimos quasi illo commodi ut exercitationem rem mollitia a, minus ipsum soluta, 
              voluptate, eum nostrum! Enim, nesciunt vero. Voluptate non, laudantium amet nam delectus eligendi, 
              ullam tenetur atque laboriosam incidunt nesciunt aliquid quibusdam eum! Placeat, sunt?
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-center italic text-gray-600">
                "A testimonial from the CEO/Founder will be added to this section"
              </p>
              <div className="text-center mt-4">
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-gray-500">CEO, Currently.ng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder/CEO Image Placeholder */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <p className="text-sm">CEO/Founder photo placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Meet the Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-wrap text-center gap-8">
            <div style={{width: '353px', height: '420px'}} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div style={{height: '330px', backgroundColor: '#d1d5db', width: '100%'}}></div>
              <div style={{height: '123.57px', padding: '16px'}}>
              <h3 className="font-semibold text-lg text-black mb-2">Figure's Name</h3>
              <p className="text-gray-600 text-sm">Title</p>
              </div>
            </div>
            </div>
          
            
            {/* Team Member 2 */}
            <div className="flex flex-wrap text-center gap-8">
            <div style={{width: '353px', height: '420px'}} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div style={{height: '330px', backgroundColor: '#d1d5db', width: '100%'}}></div>
              <div style={{height: '123.57px', padding: '16px'}}>
              <h3 className="font-semibold text-lg text-black mb-2">Figure's Name</h3>
              <p className="text-gray-600 text-sm">Title</p>
              </div>
            </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="flex flex-wrap text-center gap-8">
            <div style={{width: '353px', height: '420px'}} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div style={{height: '330px', backgroundColor: '#d1d5db', width: '100%'}}></div>
              <div style={{height: '123.57px', padding: '16px'}}>
              <h3 className="font-semibold text-lg text-black mb-2">Figure's Name</h3>
              <p className="text-gray-600 text-sm">Title</p>
              </div>
            </div>
            </div>
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
                {/* <svg viewBox="0 0 300 200" className="w-full h-full text-white">
                  <path d="M50 150 Q150 50 250 150" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M70 130 Q150 70 230 130" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="150" cy="100" r="8" fill="currentColor"/>
                  <path d="M120 120 L180 120 M150 90 L150 150" stroke="currentColor" strokeWidth="2"/>
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
                      className="text-gray-300 hover:text-green-500 transition-colors text-sm text-left cursor-pointer"
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

export default CurrentlyAboutPage;