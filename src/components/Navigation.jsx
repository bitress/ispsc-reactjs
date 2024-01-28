import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Navigation() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleNav = () => {
    setIsNavToggled((prevIsNavToggled) => !prevIsNavToggled);
  };

    return (
        <>
        <header className="masthead">
          <Header></Header>
          <nav>
          <div id="hamburger" className={`hamburger-menu ${isNavToggled ? 'active' : ''}`} onClick={toggleNav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-link ${isNavToggled ? 'navbar-toggled' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li>About ISPSC 
                <ul className="sub-menu">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/mission-vision">Mission & Vision</Link></li>
                  <li><Link to="/hymn">Hymn</Link></li>
                </ul>
              </li>
              <li><Link to="/what-we-offer">What We Offer</Link></li> 
              <li>Be an ISPSCian
                <ul className="sub-menu">
                  <li><Link to="/admission-requirements">Admission Requirements </Link></li>
                  <li><Link to="/procedure-for-enrollment">Procedure for Enrollment</Link></li>
                </ul>
              </li>
              <li><Link to="/contacts">Contacts</Link></li>
            </ul>

          </nav>
        </header>
        </>
        
      );
    
}

export default Navigation;