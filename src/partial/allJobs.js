import React, { Component } from 'react';
import './Components.css';
import * as firebase from "firebase";

class AllJobs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			don: [],
			jobTitle: "",
			jobCatagory: ""

		}

	}


	run() {
		let btn = this.refs.btn;
		btn.disabled = true;
		this.setState({
			don: []
		})
		const job = this.state.jobTitle
		const Catagory = this.state.jobCatagory
		console.log(this.state.jobTitle + this.state.jobCatagory)
		if (!job) {
			alert("error")
		}
		else {
			firebase.database().ref(`${Catagory}/${job}`).on('child_added', (data) => {
				let obj = data.val();
				obj.id = data.key;

				this.state.don.push(obj)

				this.setState({
					don: this.state.don
				})


			})
		}
	}
	componentWillMount() {
		console.log(this.state.value, this.state.value1)
		const job = "Computer Software Jobs"
		firebase.database().ref('EmployersDetail').on('child_added', (data) => {
			let obj = data.val();
			obj.id = data.key;

			this.state.don.push(obj)

			this.setState({
				don: this.state.don
			})


		})
	}
	handleChange4 = (e) => {
		let btn = this.refs.btn;
		btn.disabled = false;
		this.setState({
			jobTitle: e.target.value
		})


	}
	handleChange5 = (e) => {
		let btn = this.refs.btn;
		btn.disabled = false;
		this.setState({
			jobCatagory: e.target.value
		})


	}

	render() {
		return (
			<div>
				<div className="main">
					<div className="row">
						<div className="col-sm-6 form-group">
							<label>Select Job Title</label>
							<select className="form-control" onChange={this.handleChange4} ref="Gendre" id="sel1" required>
								<option>AllJobs</option>
								<option>Accounting Jobs</option>
								<option>Administrative Jobs</option>
								<option>Advertising, Marketing & PR Jobs</option>
								<option>Computer Software Jobs</option>
								<option>Customer Service Jobs</option>

							</select>							</div>
						<div className="col-sm-6 form-group">
							<label>Select Catagory</label>
							<select className="form-control" onChange={this.handleChange5} ref="Status" id="sel1" required>
								<option>All Catagory</option>
								<option>EmployersDetail</option>
								<option>jobSeekerDetail</option>
							</select>

							<button type="button" ref="btn" style={{float: "right"}} onClick={this.run.bind(this)} class="btn btn-default">
							<span className="glyphicon glyphicon-search"></span> Search
    </button>
						</div>
					
					</div>
					
				</div>

				<ul className="list-group">{
					this.state.don.map((val, ind) => {
						console.log(val)
						return (
							<div key={ind} className="jobs">
								<div className="well">
									<div className="media">
										<a className="pull-left" href="#">
											<img className="media-object" src={val.imageLink} alt="jobseeker" width="100" height="100" />
										</a>
										<div className="media-body">
											<h4 className="media-heading"><b>{val.jobTitle}</b></h4>
											<p className="text-left">{val.jobSeekerOtherDetail}</p>

											<ul className="list-inline list-unstyled">
												<li><b>Name:</b> {val.firstName + " " + val.lastName}</li><br />

												<li><b>Father Name:</b> {val.fatherName}</li><br />
												<li><b>Gendre:</b> Male</li><br />
												<li><b>Status:</b> {val.mStatus}</li><br />
												<li><b>Expereince Level:</b> {val.expLevel}</li><br />
												<li><b>Email Address:</b> {val.email}</li><br />
												<li><b>CNIC:</b> {val.cnicNum}</li><br />
												<li><b>Mobile:</b> {val.mobNum}</li><br />
												<li><b>Address:</b> {val.jobSeekerAddress}</li>


												<p className="text-right">{val.currentDate}</p>
											</ul>
										</div>
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

export default AllJobs;