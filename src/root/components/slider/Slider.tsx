import * as React from 'react';

import {ImageSlider} from '../Image_slider';

import './slider.css';

export interface ISliderItems {
  title: string;
  url: string;
}

export interface ISliderProps {
  banner: Array<ISliderItems>;
}

export interface ISliderState {
 active: number;
}

export class Slider extends React.PureComponent<ISliderProps, ISliderState> {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
   
    };
  }

  render() {
    const {banner} = this.props;
    return (
     <div id="home-slider" className="carousel slide" data-ride="carousel">

      <div className="slider-text">
        <div id="slidecaption">
          <div className="slide-content">
            <img src="/profile/nearshore-code.png" alt="Nearshore Code" />
          </div>
        </div>
      </div>    

      <div className="carousel-inner" role="listbox">

        {banner && banner.map((img, index) => {
          const active = index === this.state.active ? 'active' : '';
          return (
            <ImageSlider key={index} active={active} url={img.url} 
                        title={img.title} />
          );
        })}
      </div>
      
      <div className="carousule-container">
        <ol  className="carousel-indicators">
        {banner && banner.map((pointers, index) => {
          const active = index === this.state.active ? 'active' : '';
          return (
            <li key={pointers.title} data-target="#home-slider" data-slide-to={index} className={`${active}`} />        
          );
        })}
        </ol>  
        <a className="left carousel-controls" href="#home-slider" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-controls" href="#home-slider" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    );
  }
}

export default Slider;
