import React, { Component } from 'react';
import './Components.css';
import * as firebase from "firebase";
import { browserHistory } from 'react-router'



class PostJobs extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}






	submit(ev) {
		ev.preventDefault();
		const firstName = this.refs.FirstName.value;
		const lastName = this.refs.LastName.value;
		const CompanyName = this.refs.CompanyName.value;
		const Organization = this.refs.Organization.value;
		const email = this.refs.Email.value;
		const mobile = this.refs.Phone.value;
		const address1 = this.refs.Address.value;
		const Discription = this.refs.Discription.value;
		var e2 = this.refs.JobTitle;
		var jobTitle = e2.options[e2.selectedIndex].value;
		var e3 = this.refs.ExpereienceLevel;
		var expLevel = e3.options[e3.selectedIndex].value;
		let date = new Date().toLocaleString();
		const contactPerFirstName = this.refs.contactPerFirstName.value;
		const contactPerLastName = this.refs.contactPerLastName.value;
		const contactPerPhone = this.refs.contactPerNum.value;
		const contactPerEmail = this.refs.contactPerEmail.value;

		let contactPerDetail = {
			firstName: contactPerFirstName,
			lastName: contactPerLastName,
			Phone: contactPerPhone,
			Email: contactPerEmail
		}


		const EmployerDetail = {
			firstName: firstName,
			lastName: lastName,
			companyName: CompanyName,
			organization: Organization,
			jodDetail: Discription,
			email: email,
			mobNum: mobile,
			companyAddress: address1,
			jobTitle: jobTitle,
			expLevel: expLevel,
			currentDate: date,
			imageLink: "https://d30y9cdsu7xlg0.cloudfront.net/png/621754-200.png",
			condition: "PostJobs",
			contactPerson: contactPerDetail

		}
		const message = {
			Message: `${firstName} ${lastName}  Post A Resume`,
			Date: date,
			detail: Discription,
			imageLink: "https://d30y9cdsu7xlg0.cloudfront.net/png/621754-200.png",
		}
		firebase.database().ref('/').child("EmployersDetail/" + jobTitle).push(EmployerDetail)
		firebase.database().ref('/').child("Notifications").push(message)
		browserHistory.push('/Alljobs')



	}
	render() {

		return (
			<div className="container">
				<h1 className="well">Post Jobs</h1>
				<div className="col-lg-12 well">
					<div className="row">
						<form onSubmit={this.submit.bind(this)} >
							<div className="col-sm-12">
								<div className="row">
									<div className="col-sm-6 form-group">
										<label>First Name</label>
										<input type="text" ref="FirstName" placeholder="Enter First Name Here.." className="form-control" required />
									</div>
									<div className="col-sm-6 form-group">
										<label>Last Name</label>
										<input type="text" ref="LastName" placeholder="Enter Last Name Here.." className="form-control" required />
									</div>
								</div>
								<div className="form-group">
									<label>Company Name</label>
									<input type="text" ref="CompanyName" placeholder="Enter Company Name Here.." className="form-control" required />
								</div>
								<div className="form-group">
									<label>Organization Catagory</label>
									<input type="text" ref="Organization" placeholder="Enter Organization Catagory Here.." className="form-control" />
								</div>
								<div className="form-group">
									<label>Discription</label>
									<textarea placeholder="Enter Discription Here.." rows="3" ref="Discription" className="form-control" required></textarea>
								</div>
								<div className="form-group">
									<label>Address</label>
									<textarea placeholder="Enter Address Here.." rows="3" ref="Address" className="form-control" required></textarea>
								</div>
								<div className="row">
									<div className="col-sm-6 form-group">
										<label>Job Title</label>
										<select className="form-control" ref="JobTitle" id="sel1" required>
											<option>Accounting Jobs</option>
											<option>Administrative Jobs</option>
											<option>Advertising, Marketing & PR Jobs</option>
											<option>Computer Software Jobs</option>
											<option>Customer Service Jobs</option>
										</select>							</div>
									<div className="col-sm-6 form-group">
										<label>Expereience Level</label>
										<select className="form-control" ref="ExpereienceLevel" id="sel1" required>
											<option>1 Year</option>
											<option>2 Year</option>
											<option>3 Year</option>
											<option>4 Year</option>
											<option>5 Year</option>
										</select>							</div>
								</div>
								<div className="form-group">
									<label>Phone Number</label>
									<input type="number" ref="Phone" placeholder="Enter Phone Number Here.." className="form-control" required />
								</div>
								<div className="form-group">
									<label>Email Address</label>
									<input type="text" ref="Email" placeholder="Enter Email Address Here.." className="form-control" required />
								</div>
								<br />
								<br />
								<div className="form-group">

									<label>Contact Person Detail</label>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>First Name</label>
											<input type="text" ref="contactPerFirstName" placeholder="Enter First Name Here.." className="form-control" required />
										</div>
										<div className="col-sm-6 form-group">
											<label>Last Name</label>
											<input type="text" ref="contactPerLastName" placeholder="Enter Last Name Here.." className="form-control" required />
										</div>
									</div>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>Phone</label>
											<input type="number" ref="contactPerNum" placeholder="Enter First Name Here.." className="form-control" required />
										</div>
										<div className="col-sm-6 form-group">
											<label>Email Address</label>
											<input type="email" ref="contactPerEmail" placeholder="Enter Last Name Here.." className="form-control" required />
										</div>
									</div>

								</div>


								<br />

								<input type="submit" className="btn btn-lg btn-info" value="Post" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default PostJobs;