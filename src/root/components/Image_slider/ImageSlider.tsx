import * as React from 'react';

import './imageSlider.css';

export interface IImageSlider {
  title: string;
  url: string;
  active: string;
}
export interface ISliderState {
  active: number;	
}

export class ImageSlider extends React.PureComponent<IImageSlider, ISliderState> {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return(
      <div className={`item ${this.props.active}`}>
        <img src={this.props.url} alt={this.props.title} />
        <div className="carousel-caption" /> 
      </div>
    );
  }
}
