import * as React from 'react';

import { Footer } from '../Footer';
import { MenuGlobal } from '../MenuGlobal';

import { Link } from 'react-router-dom';
import './detail.css';

export interface IListProps {
  match: any;
}
export interface IDetailState {
    showDetail: Array<any>;
}

export class CareersDetail extends React.PureComponent<IListProps, IDetailState> {
  constructor(props) {
    super(props);

    this.state = ({
      showDetail: []
    });
  }

componentDidMount() {
    fetch('http://localhost:3000/requeriments')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        showDetail: responseJson
      });
    });  
  }

  render() {
    const postulation = this.props.match.params.id;

    return (
      <div id="detail">
        <MenuGlobal />
        <div className="detail-title">
          <h2>Requeriment !</h2>
        </div>  
        
        <section className="container">     
          <p>
            The applicant can will have a All benefits agreements by law
          </p>
          {this.state.showDetail && this.state.showDetail.map((item, key) => {          
            if (item.postulation === postulation) {
              return (
              <div key={key} className="container-detail">
                <p>{item.detail}</p>
              </div>
              );
            }         
          })}
          <div className="btn-detail">
            <Link className="btn-backDetail" to={'/careers'}>        
              <button className="btn btn-primary btn-lg active" 
                type="button" >
                Back
              </button>     
            </Link> 
            <Link className="btn-applyDetail" to={`/career/apply/${postulation}`}>          
              <button className="btn btn-primary btn-lg active" 
                type="button" >
                Apply
              </button>         
            </Link>  
          </div>  
        </section>
        <div className="footer">
          <Footer />
        </div>
      </div> 
    );
  }
}

export default CareersDetail;
