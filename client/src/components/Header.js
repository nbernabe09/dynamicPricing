import React from 'react';
import logo from '../img/ruckus-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='row'>
      <Link to={`/`}><img id="HEADER" src={logo} className='img-fluid' alt='header'/></Link>
    </div>
  );
}

export default Header;
