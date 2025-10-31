import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowLeft,
} from 'lucide-react';

const PoliticianDetailPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [activeTab, setActiveTab] = useState('personal');
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); // Get the politician ID from URL

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Blog'],
    legal: ['Terms', 'Privacy'],
  };

  const politicianData = {
    name: "Figure's Name",
    title: 'Lorem ipsum dolor',
    office: 'Lorem ipsum dolor',
    politicalParty: 'Lorem ipsum dolor',
    age: 'Lorem ipsum dolor',
    website: 'Lorem ipsum dolor',
    image: '',
    personalBackground: `Lorem ipsum dolor sit amet…`,
    education: `Lorem ipsum dolor sit amet…`,
    professionalCareer: `Lorem ipsum dolor sit amet…`,
    politicalJourney: `Lorem ipsum dolor sit amet…`,
  };

  const suggestedPoliticians = [
    { id: 1, name: "Figure's Name", title: 'Title' },
    { id: 2, name: "Figure's Name", title: 'Title' },
    { id: 3, name: "Figure's Name", title: 'Title' },
  ];

  const tabContent = {
    personal: politicianData.personalBackground,
    education: politicianData.education,
    career: politicianData.professionalCareer,
    political: politicianData.politicalJourney,
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
    if (item === 'Politicians' && location.pathname.startsWith('/politician')) return true;
    if (item === 'Current Affairs' && location.pathname === '/current-affairs') return true;
    if (item === 'Blog' && location.pathname === '/blog') return true;
    return false;
  };

  const handleSuggestedPoliticianClick = (politicianId) => {
    navigate(`/politician-detail/${politicianId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HEADER ================= */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer transition-colors ${
                    isCurrentPage(item)
                      ? 'text-green-600 font-medium'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA button */}
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-green-500 transition-colors">
              SUBSCRIBE
            </button>

            {/* Mobile / tablet menu button */}
            <button
              className="lg:hidden bg-green-600 text-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t pt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`text-left px-4 py-2 rounded transition-colors ${
                      isCurrentPage(item)
                        ? 'bg-green-600 text-white'
                        : 'bg-green-600 text-white hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button className="bg-green-600 hover:border-green-600 text-white px-6 py-2 rounded w-fit">
                  SUBSCRIBE
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ================= BACK BUTTON ================= */}
      <section className="bg-white py-4 pt-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/politicians')}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:border-green-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Politicians
          </button>
        </div>
      </section>

      {/* ================= PROFILE HEADER ================= */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-80 h-96 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-black mb-4">
                {politicianData.name}
              </h1>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold text-black">Office:</span>{' '}
                  {politicianData.office}
                </div>
                <div>
                  <span className="font-semibold text-black">
                    Political Party:
                  </span>{' '}
                  {politicianData.politicalParty}
                </div>
                <div>
                  <span className="font-semibold text-black">Age:</span>{' '}
                  {politicianData.age}
                </div>
                <div>
                  <span className="font-semibold text-black">Website:</span>
                  <a
                    href="#"
                    className="ml-1 text-black hover:underline hover:text-green-600"
                  >
                    {politicianData.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 border-b border-gray-300 min-w-max md:min-w-0 md:flex-wrap">
              {[
                { key: 'personal', label: 'Personal Background' },
                { key: 'education', label: 'Education' },
                { key: 'career', label: 'Professional Career' },
                { key: 'political', label: 'Political Journey' },
              ].map((tab) => (
                <a
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 font-medium  transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === tab.key
                      ? 'text-green-600 border-green-600 hover:text-green-600'
                      : 'text-black border-transparent hover:text-green-600 hover:border-green-600'
                  }`}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* hide-scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ================= TAB CONTENT ================= */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-6">
            {activeTab === 'personal' && 'Personal Background'}
            {activeTab === 'education' && 'Education'}
            {activeTab === 'career' && 'Professional Career'}
            {activeTab === 'political' && 'Political Journey'}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {tabContent[activeTab]}
            </p>
          </div>
        </div>
      </section>

      {/* ================= SUGGESTED POLITICIANS ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-left">
            Suggested For You
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {suggestedPoliticians.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                style={{ width: '353px', height: '488px' }}
              >
                <div className="h-80 bg-gray-200"></div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{p.title}</p>
                  <button 
                    onClick={() => handleSuggestedPoliticianClick(p.id)}
                    className="bg-black text-white px-6 py-2 rounded hover:border-green-600 hover:bg-gray-800 transition-colors"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-green-500">
                Currently.ng
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Currently.ng is dedicated to illuminating Nigeria's political
                landscape through comprehensive reporting and analysis.
              </p>
              <div className="flex space-x-4">
                <Facebook
                  size={20}
                  className="text-gray-400 hover:text-green-500 cursor-pointer"
                />
                <Twitter
                  size={20}
                  className="text-gray-400 hover:text-green-500 cursor-pointer"
                />
                <Instagram
                  size={20}
                  className="text-gray-400 hover:text-green-500 cursor-pointer"
                />
                <Youtube
                  size={20}
                  className="text-gray-400 hover:text-green-500 cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-green-500">
                USEFUL LINKS
              </h4>
              <ul className="space-y-2">
                {footerLinks.useful.map((link) => (
                  <li key={link}>
                    <a
                      onClick={() => {
                        if (link === 'Home') navigate('/');
                        else if (link === 'About us') navigate('/about');
                        else if (link === 'Politicians') navigate('/politicians');
                        else if (link === 'History')navigate('/current-affairs');
                        else if (link === 'Blog')navigate('/blog');
                      }}
                      className="text-gray-300 hover:text-green-500 text-sm cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-green-500">LEGAL</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-500 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Join our informed community
              </h4>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email here"
                  className="px-4 py-2 bg-white text-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 hover:border-white w-fit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-center text-sm">
              © 2025 Currently.ng. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliticianDetailPage;