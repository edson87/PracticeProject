import * as React from 'react';

import { MenuGlobal } from '../MenuGlobal';

import { Link } from 'react-router-dom';
import './careers.css'; 

export interface ICareersState {
  showDetail: Array<any>;
}

export class Careers extends React.PureComponent<{}, ICareersState> {
  constructor(props) {
    super(props);
    this.state = ({
      showDetail: []
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    fetch('http://localhost:3000/requeriments')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        showDetail: responseJson
      });
    });  
  }
   
  render() {
    return (
      <div id="careers">
        <div className="menu">
          <MenuGlobal />
        </div>
        <div className="careers-title">
          <h2>Choose the technology would you like to apply.</h2>
        </div>  
        <section className="techno-wrapper">
          <ul>
            {this.state.showDetail && this.state.showDetail.map((details, key) => 
              <li key={key}>
                <div className="detail-container">
                  <Link to={`/careers/${details.postulation}`}> 
                    <button className="btn-detail" type="button" >
                      <img src={details.url} alt="" />
                        <div className="detail">
                          <h3>{details.title}</h3>
                          <p>Location: {details.location}</p>
                          <p>Time: {details.time}</p>
                        </div>               
                    </button>
                  </Link> 
                  <Link to={`/career/apply/${details.postulation}`}>
                    <div> 
                      <button className="btn btn-primary btn-lg btn-apply active" 
                        type="button" >
                        Apply
                      </button>
                    </div>  
                  </Link> 
                </div>
              </li>
            )}
          </ul>  
        </section>  
      </div> 
    );
  }
}

export default Careers;
