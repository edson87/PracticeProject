import * as React from 'react';

import './image.css';

export interface IImageProps {
   title: string;
   url: string;
}

export class Image extends React.Component<IImageProps, {}> {
  constructor(props) {
    super(props);  
  }
  
  render() {
    return (  
      <a title={this.props.title} target="_blank" key={this.props.title}>
        <img src={this.props.url} alt="" />
      </a>
    );
  }
}
