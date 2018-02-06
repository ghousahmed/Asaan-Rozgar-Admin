import React, { Component } from 'react';
import * as firebase from "firebase";
import { Link } from 'react-router/lib';

class Notifications extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Notifications: []
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
			<div className="container">
			<ul className="list-group">{
				this.state.Notifications.map((val , ind) => { 
					return(
						<div className="row">
						<div className="panel panel-default widget">
						<div className="panel-heading">

						<h3 className="panel-title">
						Recent Notification</h3>
						<span className="label label-info">
						@</span>
						</div>
						<div className="panel-body">
						<ul className="list-group">
						<li className="list-group-item">
						<div className="row">
						<div className="col-xs-2 col-md-1">
						<img src={val.imageLink} className="img-circle img-responsive" alt="" /></div>
						<div className="col-xs-10 col-md-11">
						<div>
						<Link to="/alljobs">{val.Message}</Link>

						</div>
						<div className="comment-text">
						{val.detail}
						</div>
						<div className="mic-info">
						Post On: {val.Date}
						</div>

						</div>
						</div>
						</li>
						</ul>
						</div>
						</div>
						</div>
						)
					}).reverse()
				}</ul>


				</div>

				);
			}
		}

		export default Notifications;
