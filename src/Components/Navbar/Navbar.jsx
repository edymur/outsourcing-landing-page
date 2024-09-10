import React from 'react';
import './Navbar.css';
import logo from '../../assets/outworking_logo.png';

const Navbar = () => {
	return (
		<nav className='container'>
			<img src={logo} alt='logo firmy' className='logo' />
		</nav>
	);
};

export default Navbar;
