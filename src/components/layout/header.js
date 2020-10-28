import React from 'react';
import {Link} from "react-router-dom";

function Header() {

  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <header style={headerStyle}>
      <h1> Todo List</h1>
      <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
    </header>
  );
}

export default Header;