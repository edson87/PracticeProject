import * as React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { App } from './App';
import { Careers } from './components/Careers'; 
import { CareersDetail } from './components/Detail'; 
import { Apply } from './components/Apply';
import { DetailForm } from './components/AdminComponents/DetailForm';
import { NotFound } from './components/NotFound';

const history = createHistory();
export const Root = ({ store }) => (
  <Provider store={store}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={App} />  
          <Route exact={true} path="/careers" component={Careers} />)}/>
          <Route path="/careers/:id" component={CareersDetail} />
          <Route path="/career/apply/:id" component={Apply}/>
          <Route path="/form-detail" component={DetailForm}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
  </Provider>
);

export default Root;
