import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Apply from './pages/Apply';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
// Dummy component for missing routes
import Dummy from './pages/Dummy';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className='bg-white'>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/services' element={<Dummy />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/community' element={<Dummy />} />
          <Route exact path='/notifications' element={<Dummy />} />
          <Route exact path='/training' element={<Dummy />} />
          <Route exact path='/apply' element={<Apply />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/faqs' element={<Dummy />} />
          <Route exact path='/intro' element={<Dummy />} />
          <Route exact path='/privacypolicy' element={<Dummy />} />
          <Route exact path='/termsandconditions' element={<Dummy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
