import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

const Navbar = (props) => {
	return (

<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Services</a>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link disabled" href="#">Contact</a>
  </li> */}
</ul>
	);
	//here you have to return expected html using the properties being passed to the component
};

// ReactDOM.render(
	
// 	document.querySelector("#app")
// );

export default Navbar;