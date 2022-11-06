//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import BootstrapCard from "./component/bootstrap.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";


//render your react application
ReactDOM.render(<div>
<Navbar />
< Jumbotron  
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>
<Home />
{/* <BootstrapCard 
        title="Bob Dylan"
		description="Bob Dylan born Robert Allen Zimmerman, May 24, 1941 is an American singer-songwriter."
		buttonURL="https://en.wikipedia.org/wiki/Bob_Dylan"
		buttonLabel="Go to wikipedia"
		image="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true" 
        /> */}
<Footer />
 </div>, document.querySelector("#app"));
