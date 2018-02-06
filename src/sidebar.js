import React, { Component } from 'react';
import { Link } from 'react-router';
import './main.css';
import * as firebase from "firebase";


class SideBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Notifications: [],
			
		}

	}

	componentWillMount() {
		
		firebase.database().ref("Notifications").on('child_added', (data) => {
			let obj = data.val();
			obj.id = data.key;
			
			this.state.Notifications.push(obj)

			this.setState({
				Notifications: this.state.Notifications
			})


		})
	}
    render() {
    	
        return (
            <div className="sidebar" style={{background: "none"}}  data-image="assets/img/sidebar-7.jpg">
	    		<div className="sidebar-wrapper">
		            <div className="logo">
		            	<a href="Alljobs" className="simple-text">
		                	<img src="http://saylaniwelfare.com/wp-content/uploads/2015/06/Saylani-logo.png" width="200" height="60" alt="img" />
		            	</a>
		            </div>
		            <ul className="nav">
		            <li>
		            	<Link to="/Alljobs"><i className="pe-7s-id" />All Jobs</Link>
		            </li>
		             <li>
		              <Link to="/notifications"><i className="pe-7s-bell" />Notifications({this.state.Notifications.length})                 
		              </Link>
		              </li>
		           
		              <li>
		              	<Link to="/PostJobs"><i className="pe-7s-portfolio" />Post Jobs</Link>
		              </li>
		              <li>
		              	<Link to="/PostResume"><i className="pe-7s-news-paper" />Post Resume</Link>
		              </li>
		              <li>
		              	<Link to="/HireList"><i className="pe-7s-star" />Hire List</Link>
		              </li>
		              <li>
		              	<Link to="/Messages"><i className="pe-7s-mail" />Messages</Link>
		              </li>
		             
		            </ul>
	        	</div>
        	</div>
        );
    }
}

export default SideBar;
