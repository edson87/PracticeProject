import * as React from 'react';

import { Link } from 'react-router-dom';
import './menu.css';

export class Menu extends React.PureComponent<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header>
        <div className="sticky-nav">
          <a id="mobile-nav" className="menu-nav" href="#menu-nav" />
          <div id="logo">
            <a id="goUp" href="#home-slider" title="Nearshore Code | Software Development Comapny">
               Nearshore Code
            </a>
          </div>
          <nav id="menus" >
            <ul id="menu-navs" >
              <li className="AdminLink"><Link to={'/form-detail'}>Go add Requeriments</Link></li>
              <li className="post_article"><a href="#home-slider">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#about">About Us</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="#contact">Contact</a></li> 
            </ul> 
          </nav>
        </div>
      </header>
    );
  }
}

export default Menu;
