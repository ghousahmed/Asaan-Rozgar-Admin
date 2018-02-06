import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import * as firebase from 'firebase'



  var config = {
    apiKey: "AIzaSyAJJGHR6-ebGeG1t8ksFWfRedscj49hkvM",
    authDomain: "index-83d18.firebaseapp.com",
    databaseURL: "https://index-83d18.firebaseio.com",
    projectId: "index-83d18",
    storageBucket: "index-83d18.appspot.com",
    messagingSenderId: "671568613729"
  };
  firebase.initializeApp(config);

ReactDOM.render(
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('root')
);
