import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Calendar, Instagram, Youtube } from 'lucide-react';

const CurrentAffairsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ['Home', 'About us', 'Politicians', 'Current Affairs', 'Blog'];

  const footerLinks = {
    useful: ['Home', 'About us', 'Politicians', 'History', 'Blog'],
    legal: ['Terms', 'Privacy']
  };

  const currentAffairsHighlights = [
    { title: 'Nigerian Presidency Till Date', category: 'Politics' },
    { title: 'Historical Figures', category: 'History' },
    { title: 'General Facts', category: 'Education' },
    { title: 'President, Chiefs & Monarchs', category: 'Leadership' },
    { title: 'Natural Resources & Cultivation', category: 'Economy' }
  ];

  const historicalStories = [
    {
      title: 'How Did the Biafra War Frame Today\'s Political Landscape',
      category: 'History'
    },
    {
      title: 'The Unspoken Horrors of the Transatlantic Slave Trade',
      category: 'History'
    },
    {
      title: 'The Hidden Agenda behind the Famous An Organisation',
      category: 'Politics'
    }
  ];

  const timelineEvents = [
    {
      year: '2023-Present',
      title: 'Tinubu\'s Presidency',
      description: 'Bola Ahmed Tinubu assumes office as Nigeria\'s 16th President. Key policies include fuel subsidy removal, currency reforms, and infrastructure development initiatives aimed at economic recovery and growth.',
      side: 'right'
    },
    {
      year: '2015',
      title: 'Historic Political Transition',
      description: 'Nigeria experiences its first democratic transfer of power from a ruling party to the opposition, as Muhammadu Buhari defeats incumbent Goodluck Jonathan in a peaceful election.',
      side: 'left'
    },
    {
      year: '1999',
      title: 'Fourth Republic Begins',
      description: 'Nigeria returns to democratic governance under President Olusegun Obasanjo after years of military rule. This marks the beginning of Nigeria\'s longest period of continuous civilian rule.',
      side: 'right'
    },
    {
      year: '1983',
      title: 'Buhari Military Coup',
      description: 'General Muhammadu Buhari leads a military coup that overthrows the Second Republic. The coup ends Nigeria\'s second attempt at democratic governance and ushers in another period of military rule.',
      side: 'left'
    },
    {
      year: '1979',
      title: 'Second Republic',
      description: 'Nigeria establishes its Second Republic with Shehu Shagari as president. This period introduces a new constitution and attempts to restore democratic governance after years of military rule.',
      side: 'right'
    },
    {
      year: '1970',
      title: 'End of Civil War',
      description: 'The Nigerian Civil War concludes with Biafra\'s surrender. Nigeria begins reconstruction efforts under the "No Victor, No Vanquished" policy, focusing on national reconciliation and unity.',
      side: 'left'
    },
    {
      year: '1967',
      title: 'Nigerian Civil War Begins',
      description: 'The declaration of the Republic of Biafra leads to a devastating civil war that lasts three years. The conflict shapes Nigeria\'s political landscape and federal structure to this day.',
      side: 'right'
    },
    {
      year: '1966',
      title: 'First Military Coup',
      description: 'Nigeria experiences its first military coup, ending the First Republic. This event marks the beginning of decades of military rule and political instability.',
      side: 'left'
    },
    {
      year: '1963',
      title: 'First Republic Established',
      description: 'Nigeria becomes a republic within the Commonwealth, with Nnamdi Azikiwe as the first President. This marks Nigeria\'s transition from a constitutional monarchy to a full republic.',
      side: 'right'
    },
    {
      year: '1960',
      title: 'Nigeria\'s Independence',
      description: 'Nigeria gains independence from British colonial rule on October 1st. Tafawa Balewa becomes the first Prime Minister, marking the beginning of self-governance and the formation of modern Nigeria.',
      side: 'left'
    }
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
            <button className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:border-green-500 transition-colors">
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

      {/* Nigeria's Current Affairs Highlights */}
      <section className="bg-white py-16 pt-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">Nigeria's Current Affairs Highlights</h2>
          
          <div className="space-y-4">
            {/* Top row - 2 large cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate('/nigerian-presidents')}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center">Nigerian Presidents Till Date</h3>
                </div>
              </div>

              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate('/historical-figures')}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center">Historical Figures</h3>
                </div>
              </div>
            </div>

            {/* Bottom row - 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate('/general-knowledge')}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <h4 className="text-white text-lg font-semibold text-center">General Knowledge</h4>
                </div>
              </div>

              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate('/national-holidays')}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <h4 className="text-white text-lg font-semibold text-center">National Events & Holidays</h4>
                </div>
              </div>

              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate('/natural-resources')}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <h4 className="text-white text-lg font-semibold text-center">Natural Resources & Locations</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories from Nigeria's Past */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Stories from Nigeria's Past</h2>
            <a onClick={() => navigate('/StoriesNigeriaPastPage')} className="text-green-600 hover:text-black transition-colors text-sm cursor-pointer">See all</a>
          </div>
          
          <div className="flex flex-col gap-8 sm:flex-row sm:overflow-x-scroll xl:grid xl:grid-cols-3 xl:overflow-x-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {historicalStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 mx-auto sm:mx-0" style={{ width: '353px', minWidth: '353px' }}>
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-black">{story.title}</h3>
                  <button className="bg-black text-white px-6 py-2 rounded hover:bg-green-500 hover:border-2 hover:border-green-500 transition-all">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nigeria's Journey Through Time */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Nigeria's Journey Through Time</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${event.side === 'left' ? 'flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${event.side === 'left' ? 'text-right pl-8' : 'text-left pr-8'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-green-700">
                            <Calendar size={18} className="text-green-600" />
                            <span className="font-semibold text-sm text-black">{event.year}</span>
                    </div>

                      <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  
                  {/* Empty space for opposite side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
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
              <div className="w-64 h-64 mx-auto">
                {/* Map illustration placeholder */}
                
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
            <p className="text-center text-white transition-colors text-sm">
              © 2025 Currently.ng. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CurrentAffairsPage;