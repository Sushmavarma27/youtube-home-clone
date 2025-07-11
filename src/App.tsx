import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoSection from './components/VideoSection';
import ShortsSection from './components/ShortsSection';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <VideoSection />
      <ShortsSection />
    </>
  );
}

export default App;
