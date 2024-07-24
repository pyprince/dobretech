import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
// Dummy component for missing routes
import Dummy from './pages/Dummy';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto bg-white'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/services' element={<Dummy />} />
          <Route exact path='/aboutus' element={<Dummy />} />
          <Route exact path='/community' element={<Dummy />} />
          <Route exact path='/notifications' element={<Dummy />} />
          <Route exact path='/training' element={<Dummy />} />
          <Route exact path='/apply' element={<Dummy />} />
          <Route exact path='/news' element={<Dummy />} />
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
