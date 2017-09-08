import * as React from 'react';

import './footer.css';

export class Footer extends React.PureComponent<{}, {}> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <footer>
        <p className="credits">Copyright © 2016 Nearshore Code SRL., All Rights Reserved</p>
      </footer>
    );
  }
}

export default Footer;
