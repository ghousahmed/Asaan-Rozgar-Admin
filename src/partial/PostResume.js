import React, { Component } from 'react';
import './Components.css';
import * as firebase from "firebase";
import { browserHistory } from 'react-router'


class PostResume extends Component {
constructor(props) {
		super(props);
		this.state = {
			image: ""
		};
	}
	handleChange4 =  (e) => {
		var file = e.target.files[0];
		this.setState({
			image: file.name
		})
		var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);
		var task = storageRef.put(file);
		console.log(task)
		task.on('state_changed',
			function progress(snapshot) {
			
			},
			function error(err) {

			},
			function complete(succes) {
			},

			);
		
	}
	submit(ev){
		ev.preventDefault();
		const firstName = this.refs.FirstName.value;
		const lastName = this.refs.LastName.value;
		const Age = this.refs.age.value;
		const Qualification = this.refs.qualification.value;
		const DateOfBirth = this.refs.dateOfBirth.value;
		const fatherName = this.refs.FatherName.value;
		const CNIC = this.refs.CNIC.value;
		const email = this.refs.Email.value;
		const mobile = this.refs.Phone.value;
		const address1 = this.refs.Address.value;
		const permenentAddress = this.refs.permenentAddress.value;
		const Discription = this.refs.Discription.value;
		const Salary = this.refs.salary.value;
		const e = this.refs.religion;
		const Religion = e.options[e.selectedIndex].value
        var e1 = this.refs.Status;
        var status = e1.options[e1.selectedIndex].value;
         var e2 = this.refs.JobTitle;
        var jobTitle = e2.options[e2.selectedIndex].value;
         var e3 = this.refs.ExpereienceLevel;
        var expLevel = e3.options[e3.selectedIndex].value;
		let date = new Date().toLocaleString();
		let val = this.state.image
		
		var storage = firebase.storage();
		var storageRef = storage.ref();
		var tangRef = storageRef.child('sweet_gifs/' + val);
		tangRef.getDownloadURL().then(function (url) {
			const jobSeekerDetail ={
				firstName: firstName,
				lastName: lastName,
				age: Age,
				qualification: Qualification,
				dateOfBirth: DateOfBirth,
				religion: Religion,
				fatherName: fatherName,
				cnicNum: CNIC,
				jobSeekerOtherDetail: Discription,
				email: email,
				mobNum: mobile,
				jobSeekerAddress: address1,
				jobSeekerAddress1: permenentAddress,
				mStatus: status,
				jobTitle: jobTitle,
				expLevel: expLevel,
				currentDate: date,
				imageLink: url,
				condition: "PostResume",
				Salary: Salary
			}
			const message ={
				Message: `${firstName} ${lastName}  Post A Resume`,
				Date: date,
				detail: Discription,
				imageLink: url,
			}
			firebase.database().ref('/').child("Notifications").push(message)

			firebase.database().ref('/').child("jobSeekerDetail/"+ jobTitle).push(jobSeekerDetail)
			browserHistory.push('/Alljobs')
			console.log(jobSeekerDetail)
		})
	}
	render() {
		console.log(this.state.image)
		return (
			<div className="container">
			<h1 className="well">Post Resume</h1>
			<div className="col-lg-12 well">
			<div className="row">
			<form onSubmit={this.submit.bind(this)} >
			<div className="col-sm-12">
			<div className="row">
			<div className="col-sm-6 form-group">
			<label>First Name</label>
			<input type="text" ref="FirstName" placeholder="Enter First Name Here.." className="form-control" required/>
			</div>
			<div className="col-sm-6 form-group">
			<label>Last Name</label>
			<input type="text" ref="LastName" placeholder="Enter Last Name Here.." className="form-control" required/>
			</div>
			</div>
			<div className="form-group">
			<label>Father Name</label>
			<input type="text" ref="FatherName" placeholder="Enter Father Name Here.." className="form-control" required/>
			</div>
			<div className="row">
			<div className="col-sm-6 form-group">
			<label>Age</label>
			<input type="number" ref="age" placeholder="Enter Age Here.." className="form-control" required/>
			</div>
			<div className="col-sm-6 form-group">
			<label>Qualification</label>
			<input type="text" ref="qualification" placeholder="Enter Qualification Here.." className="form-control" required/>
			</div>
			</div>
			<div className="row">
			<div className="col-sm-6 form-group">
			<label>Religion</label>
			<select className="form-control" ref="religion" id="sel1" required>
			<option>Muslim</option>
			<option>Non-Muslim</option>
			</select>
			</div>	
			<div className="col-sm-6 form-group">
			<label>Date Of Birth</label>
			<input type="date" ref="dateOfBirth" placeholder="Enter Date Of Birth" className="form-control" />
			</div>	
			</div>		
			<div className="form-group">
			<label>CNIC</label>
			<input type="number" ref="CNIC" placeholder="Enter CNIC Number" className="form-control" />
			</div>					
			<div className="form-group">
			<label>Other Detail</label>
			<textarea placeholder="Enter Discription Here.." rows="3" ref="Discription" className="form-control" required></textarea>
			</div>	
			<div className="form-group">
			<label>Address</label>
			<textarea placeholder="Enter Address Here.." rows="3" ref="Address" className="form-control" required></textarea>
			</div>
			<div className="form-group">
			<label>Permenent Address</label>
			<textarea placeholder="Enter Address Here.." rows="3" ref="permenentAddress" className="form-control" required></textarea>
			</div>		
			<div className="row">
			<div className="col-sm-6 form-group">
			<label>Expacted Salary</label>
			<input type="text" ref="salary" placeholder="Enter Expacted Salary Here.." className="form-control" required/>
			</div>		
			<div className="col-sm-6 form-group">
			<label>Status</label>
			<select className="form-control" ref="Status" id="sel1" required>
			<option>Married</option>
			<option>UnMarried</option>
			</select>							</div>	
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
			<input type="number" ref="Phone" placeholder="Enter Phone Number Here.." className="form-control" required/>
			</div>		
			<div className="form-group">
			<label>Email Address</label>
			<input type="text" ref="Email" placeholder="Enter Email Address Here.." className="form-control" required/>
			</div>
			<div className="form-group">
			<label>Upload Image</label>
			<br />
			<input onChange={this.handleChange4} style={{float: "left",marginLeft: "10%"}} type="file" ref="file" required/>
			</div>	
            <br />
            <br />
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

	export default PostResume;