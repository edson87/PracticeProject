import * as React from 'react';

import { Footer } from '../Footer';
import { MenuGlobal } from '../MenuGlobal';
import { ApplyForm } from '../ApplyForm';

import './apply.css';

export interface ILinkProps {
  match: any;
}
export class Apply extends React.PureComponent<ILinkProps, {}> {
  fileInput: any;

  constructor(props) {
    super(props);
  }
  
  render() {
    const pathId = this.props.match.params.id;
    return (
      <div className="apply" >
        <div className="menuglobal">
          <MenuGlobal />
        </div>
        <div >
          <h2>Please send us your detail</h2>
          </div>  
            <section className="wrapper-apply" > 
              <ApplyForm pathId={pathId}/>
            </section>
          <div className="footer">
          <Footer />
        </div>
      </div> 
    );
  }
}

export default Apply;
