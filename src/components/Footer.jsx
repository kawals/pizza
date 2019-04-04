import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer class="w3-center w3-black w3-padding-16">
        <p><a href="mailto:kawalsweb@gmail.com" title="Kawal" target="_blank" class="w3-hover-text-blue">Designed by Kawal</a></p>
        <p>&#169; {new Date().getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;
