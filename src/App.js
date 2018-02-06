import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';
import SideBar from './sidebar';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <NavBar />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
