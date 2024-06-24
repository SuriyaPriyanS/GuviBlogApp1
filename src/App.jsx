import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/Cybersecurity';
import Career from './Pages/Career';
import FullStack from './Pages/Fullstack';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

const App = () => {
  const [navbarExpanded, setNavbarExpanded] = React.useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <nav className="navbar text-center navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            {navbarExpanded ? 'Blog Category' : null}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={navbarExpanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center ${navbarExpanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setNavbarExpanded(false)}>
                  ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/full-stack-development" onClick={() => setNavbarExpanded(false)}>
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data-science" onClick={() => setNavbarExpanded(false)}>
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cyber-security" onClick={() => setNavbarExpanded(false)}>
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career" onClick={() => setNavbarExpanded(false)}>
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/full-stack-development' element={<FullStack />} />
          <Route path='/data-science' element={<DataScience />} />
          <Route path='/cyber-security' element={<CyberSecurity />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
