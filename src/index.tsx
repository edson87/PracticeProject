import * as React from 'react';
import { render } from 'react-dom';

import { Root } from './root/Root';
import * as firebase from 'firebase';
import configureStore from './configureStore';

/* import express from 'express'; */

const config = {
  apiKey: 'AIzaSyDVWk3aWQaFf0uGOsU9NY1lUJ2MNz0PCZk',
  authDomain: 'uploadfiles-8b920.firebaseapp.com',
  databaseURL: 'https://uploadfiles-8b920.firebaseio.com',
  projectId: 'uploadfiles-8b920',
  storageBucket: 'uploadfiles-8b920.appspot.com',
  messagingSenderId: '269061425394'
 };

firebase.initializeApp(config);

const store = configureStore({});

render(
  <Root store={store}/>,
  document.querySelector('#ReactRoot'),
);
