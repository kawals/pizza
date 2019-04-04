import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <div className="w3-top">
        <div className="w3-bar w3-large w3-opacity w3-hover-opacity-off w3-black">
          <Link to="/" className="w3-bar-item w3-button">Home</Link>
          <Link to="/menu" className="w3-bar-item w3-button">Menu</Link>
          <Link to="/about" className="w3-bar-item w3-button">About</Link>
          <Link to="/contact" className="w3-bar-item w3-button">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
{
// <div className="w3-bar w3-white w3-wide w3-padding-32 w3-card">
//   <Link to="/home" className="w3-bar-item w3-button"><b>Alpine</b> Railing Gate</Link>
//   <div class="w3-right w3-hide-small">
//     <Link to="/" className="w3-bar-item w3-button">Home</Link>
//     <Link to="/contact" className="w3-bar-item w3-button">Contact</Link>
//   </div>
// </div>
}
