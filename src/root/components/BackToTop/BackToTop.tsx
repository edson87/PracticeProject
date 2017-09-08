import * as React from 'react';

import './backToTop.css';

export class BackToTop extends React.PureComponent<{}, {}> {
  render() {
    return (
      <a id="back-to-top" href="#">
        <i className="glyphicon glyphicon-menu-up" />
      </a>
    );
  }
}

export default BackToTop;
