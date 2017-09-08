import * as React from 'react';

import './contact.css';

export class Contact extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div id="contact" className="page">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="title-page">
                <h2 className="title">Get in Touch</h2>
                <h3 className="title-description">
                  We’re currently accepting new client projects. We look forward to serving you.
                </h3>
              </div>
            </div>
        </div>
        
        <div className="row text-center">    
           <div className="text-center">
             <div className="span3">
                <div className="contact-details">
                  <h4>Global Headquarters</h4>
                    <ul>
                      <li><a href="#">hello@nearshorecode.com</a></li>
                      <li>Global Headquarters</li>                     
                    </ul>
                </div>        
              </div>
              <div className="span3">
                  <div className="contact-details">
                    <h4>Nearshore Development Centers</h4>
                      <ul>
                        <li><a href="#">bolivia@nearshorecode.com</a></li>
                        <li>(591) 44025483</li>  
                        <li>Cochabamba - Bolivia</li>                    
                      </ul>
                  </div>
              </div>  
           </div>   
         </div>
     </div>
    </div>
    );
  }
}

export default Contact;
