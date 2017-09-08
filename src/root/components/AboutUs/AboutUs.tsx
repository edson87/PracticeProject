import * as React from 'react';

import './aboutUs.css';

export class AboutUs extends React.PureComponent<{}, {}> {

  render() {
    return (
      <div id="about" className="page-alternate">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="title-page">
                <h2 className="title">About Us</h2>
                <h3 className="title-description">
                  We have a great working environment with a rich culture of fun and
                  professionalism that attracts the best talents.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
