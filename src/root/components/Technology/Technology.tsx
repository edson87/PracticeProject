import * as React from 'react';

import { Image } from '../Image';

import './technology.css';

export interface ITechnologyItem {
    title: string;
    url: string;
}

export interface ITechnologyProps {
   items: Array<ITechnologyItem>;
}

export class Technology extends React.Component<ITechnologyProps, {}> {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { items } = this.props;
    return (  
      <div id="technology" className="page">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="title-page">
                <h2 className="title">Technologies</h2>
                <h3 className="title-description">Let's have a look.</h3>
              </div>
            </div>
          </div>     
           <div id="social-area" className="page">
            <div className="container">
              <div className="row">
                <div className="span12">
                   {items && items.map(item => <Image key={item.title} url={item.url} title={item.title}/>)} 
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Technology;
