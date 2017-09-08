import * as React from 'react';

import { Link } from 'react-router-dom';

import './menuglobal.css';

export class MenuGlobal extends React.PureComponent<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="sticky-nav">
          <a id="mobile-nav" className="menu-nav" href="#menu-nav" />
          <div id="logo">
            <a id="goUp" title="Nearshore Code | Software Development Comapny">
              Nearshore Code
            </a>
          </div>
          <nav id="menu" >
            <ul id="menu-nav" >
              <li className="AdminLink"><Link to={'/form-detail'}>Go add Requeriments</Link></li>
              <li><a href="/">Home</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#technology">Technology</a></li>
              <li><a href="/#about">About Us</a></li>
              <li ><Link to="/careers">Careers</Link></li>
              <li><a href="/#contact">Contact</a></li> 
            </ul> 
          </nav>
        </div>
      </header>
    );
  }
}

export default MenuGlobal;
