import React from "react";
import BootstrapCard from "./bootstrap.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div class="row row-cols-1 row-cols-md-4 g-4"> 
		{/* <div className="text-center"> */}
			<BootstrapCard title="Lovely Cat1"
			description="The cat (Felis catus) is a domestic species of small carnivorous mammal."
			buttonURL="https://en.wikipedia.org/wiki/Cat"
			buttonLabel="Go to wikipedia"
			image="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
		 />	
		 	<BootstrapCard title="Lovely Cat2"
			description="The cat (Felis catus) is a domestic species of small carnivorous mammal."
			buttonURL="https://en.wikipedia.org/wiki/Cat"
			buttonLabel="Go to wikipedia"
			image="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg"
		 />
		 	<BootstrapCard title="Lovely Cat3"
			description="The cat (Felis catus) is a domestic species of small carnivorous mammal."
			buttonURL="https://en.wikipedia.org/wiki/Cat"
			buttonLabel="Go to wikipedia"
			image="https://cdn.pixabay.com/photo/2017/06/24/22/31/cat-2439113__340.jpg"
		 />
		 	<BootstrapCard title="Lovely Cat4"
			description="The cat (Felis catus) is a domestic species of small carnivorous mammal."
			buttonURL="https://en.wikipedia.org/wiki/Cat"
			buttonLabel="Go to wikipedia"
			image="https://cdn.pixabay.com/photo/2018/09/22/17/19/cat-3695694__340.jpg"
		 />		 
		

		</div>
	);
};

export default Home;
