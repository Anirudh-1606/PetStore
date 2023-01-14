import React from "react";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar-wrapper">
			<div className="left-navbar">
				<h1>PetCare</h1>
			</div>
			<div className="links">
				<a href="#">Home</a>
				<a href="#">About Us</a>
				<a href="#">Services</a>
				<a href="#">Pet Health</a>
				<a href="#">Contact Us</a>
			</div>
			<button type="button" className="btn">
				Register
			</button>
		</nav>
	);
};

export default Navbar;
