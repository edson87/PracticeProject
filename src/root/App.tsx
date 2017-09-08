
import * as React from 'react';

import { Menu } from './components/menu';
import { Slider } from './components/slider';
import { OurServices } from './components/OurServices';
import { Technology } from './components/Technology';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

import items from './data/img_technology';
import sliderItems from './data/img_slider';

import './index.css';

export class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="body">
          <Slider banner={sliderItems} />
          <Menu />
          <OurServices />
          <Technology items={items} />
          <AboutUs />
          <Contact />
          <Footer />
          <BackToTop />
      </div>
    );
  }
}

export default App;
