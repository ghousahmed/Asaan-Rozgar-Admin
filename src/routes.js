import React from 'react';
import { browserHistory, Route, IndexRoute } from 'react-router';
import App from './App';
import NotFound from './partial/not_found';
import HireList from './partial/HireList';
import Messages from './partial/Messages';
import Notifications from './partial/notifications';
import PostJobs from './partial/PostJobs';
import AllJobs from './partial/allJobs';
import PostResume from './partial/PostResume';
import LogIn from './components/Login';


export default ( 
    <Route history={ browserHistory } path="/" component={ App }>
		<IndexRoute component={LogIn}/>
		<Route path="/AllJobs" component={ AllJobs }/>
		<Route path="/HireList" component={ HireList }/>
		<Route path="/Messages" component={ Messages }/>
		<Route path="/notifications" component={ Notifications }/>
		<Route path="/PostJobs" component={ PostJobs }/>
		<Route path="/AllJobs" component={ AllJobs }/>
		<Route path="/PostResume" component={ PostResume }/>
		<Route path="*" component={ NotFound }/>
	</Route>
);
