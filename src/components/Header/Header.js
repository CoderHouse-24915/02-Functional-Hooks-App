import React from 'react';
import './Header.css';
import img from './logo.png';

const Header = ({ title, subtitle, onClick, myNumber }) => {
	return (
		<div className='Header'>
			<img src={img} alt='logo-coder-house' />
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<h3>{myNumber}</h3>
			<button onClick={onClick}>Hacer Click!</button>
		</div>
	);
};

export default Header;
