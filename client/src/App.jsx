import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/SFIA/Home';
import Download from './pages/SFIA/Download';
import About from './pages/About';
import ProfileDisplay from './components/ProfileDisplay';
import './styles/Styles.css';
import { gapi } from 'gapi-script';

function App() {
  const clientId = '170385751378-bbtp2rf09iorhsustgqors4r1tc7hf6n.apps.googleusercontent.com';
  const [profile, setProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfileDisplay = () => {
    setShowProfile(!showProfile);
  };

  const handleLogin = (userProfile) => {
    setProfile(userProfile);
  };

  const handleLogout = () => {
    setProfile(null);
    setShowProfile(false);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'profile email'
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <Router>
      <div className="App">
      <Navbar 
          onLogin={handleLogin} 
          isLoggedIn={!!profile} 
          onToggleProfile={toggleProfileDisplay}
          profile={profile}
        />
        {profile && showProfile && (
          <div style={styles.profileContainer}>
            <ProfileDisplay 
              profile={profile} 
              onLogout={handleLogout} 
              onClose={() => setShowProfile(false)}
            />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  profileContainer: {
    position: 'absolute',
    top: '60px',
    right: '20px',
    zIndex: 1000,
  },
};

export default App;
