import * as React from 'react';

import './ourServices.css';

export class OurServices extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div id="services" className="page-alternate">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="title-page">
                <h2 className="title">Our Services</h2>
                <h3 className="title-description">What we love to do.</h3>
              </div>
            </div>
          </div>
          <section id="services">
            <div className="col-lg-12">
              <ul className="timeline" >
                <li>
                  <div className="timeline-image">
                     <img className="img-circle img-responsive" src="./services/dev.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                       <h4>Product Development</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        The custom software is critical to your success in business.
                        We build custom UX-focused solutions that are integral to
                        that success. We deliver web and application solutions,
                        together with migration, maintenance and support.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                     <img className="img-circle img-responsive" src="./services/mobile.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                       <h4>Mobile Development</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Our mobile team provides
                         high quality solutions for a variety of companies and uses.
                         We develop native/ cross-platform mobile
                         applications for iOS, Android and Windows.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                     <img className="img-circle img-responsive" src="./services/qa.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Software Testing</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Our structured manual and automated QA
                        process encompasses every part of the software lifecycle.
                        Making Sense has the right team, technologies and
                        expertise to ensure our client’s projects are
                        delivered to perfection.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="./services/staff.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Staff Augmentation</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        We help to our client to increase operational
                        capacity for the period it deems appropriate.
                        We count  with staff with different levels of
                        expertise (Leader, Senior, Junior) for both
                        Development and Quality assurance.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Using
                    <br />SCRUM
                    <br />Methodology!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default OurServices;
