import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import CurrentlyHomepage from './components/currently';
import CurrentlyAboutPage from './components/AboutPage';
import CurrentlyPoliticiansPage from './components/PoliticiansPage';
import PoliticianDetailPage from './components/PoliticianDetailPage.jsx';
import CurrentAffairsPage from './components/CurrentAffairsPage';
import BlogPage from './components/BlogPage';
import NaturalResourcesPage from './components/NaturalResourcesPage';
import NationalHolidaysPage from './components/NationalHolidaysPage';
import GeneralKnowledgePage from './components/GeneralKnowledgePage';
import HistoricalFiguresPage from './components/HistoricalFiguresPage';
import HistoricalFigureDetailPage from './components/HistoricalFigureDetailPage';
import NigerianPresidentsPage from './components/NigerianPresidentsPage';
import StoriesNigeriaPastPage from './components/StoriesNigeriaPastPage';

// Component to handle title updates
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Currently.ng | Home',
      '/about': 'Currently.ng | About Us',
      '/politicians': 'Currently.ng | Politicians',
      '/current-affairs': 'Currently.ng | Current Affairs',
      '/blog': 'Currently.ng | Blog',
      '/natural-resources': 'Currently.ng | Natural Resources',
      '/national-holidays': 'Currently.ng | National Holidays',
      '/general-knowledge': 'Currently.ng | General Knowledge',
      '/historical-figures': 'Currently.ng | Historical Figures',
      '/historical-figure': 'Currently.ng | Historical Figure',
      '/nigerian-presidents': 'Currently.ng | Nigerian Presidents',
      '/StoriesNigeriaPastPage': 'Currently.ng | Stories',
      '/politician-detail': 'Currently.ng | Politician Details'
    };

    const title = titles[location.pathname] || 'Currently.ng';
    document.title = title;
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<CurrentlyHomepage />} />
          <Route path="/about" element={<CurrentlyAboutPage />} />
          <Route path="/politicians" element={<CurrentlyPoliticiansPage />} />
          <Route path="/current-affairs" element={<CurrentAffairsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/natural-resources" element={<NaturalResourcesPage />} />
          <Route path="/national-holidays" element={<NationalHolidaysPage />} />
          <Route path="/general-knowledge" element={<GeneralKnowledgePage />} />
          <Route path="/historical-figures" element={<HistoricalFiguresPage />} />
          <Route path="/historical-figure/:id?" element={<HistoricalFigureDetailPage />} />
          <Route path="/nigerian-presidents" element={<NigerianPresidentsPage />} />
          <Route path="/politician-detail/:id?" element={<PoliticianDetailPage />} />
          <Route path="/StoriesNigeriaPastPage" element={<StoriesNigeriaPastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;