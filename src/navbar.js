import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#"> Asaan Rozgar</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                  
                 
                 
                </ul>
                
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="Alljobs">
                      Admin
                    </a>
                  </li>
                 
                  <li>
                    <a href="#">
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
		);
	}
}

export default NavBar;