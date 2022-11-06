import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

const Footer = (props) => {
	return (

        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                   
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="https://github.com/ZekeriyaOtumlu">GithubLink </a></li>
                            <li><a href="https://www.linkedin.com/in/zekeriya-otumlu-3723381a2/">LinkedIn</a></li>
                        </ul>
                    </div>
                  
                </div>
                <p className="copyright">Zekeriya Otumlu © 11-06-2022</p>
            </div>
        </footer>
    </div>

	);
	//here you have to return expected html using the properties being passed to the component
};

// ReactDOM.render(
	
// 	document.querySelector("#app")
// );

export default Footer;