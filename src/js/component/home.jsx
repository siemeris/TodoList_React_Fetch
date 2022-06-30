import React, { useState, useEffect } from "react";
import ListaTareas from  "./ListaTareas.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
		// const [inputValue, setInputValue ] = React.useState('');
		
		// const validateInput = () => {
		//   if(inputValue === "") alert("No task, please add a task");
		//   else alert("All perfect!");
		// };
		
	return (<div className="container-fluid">
				<div className="pt-5 text-center">
					<h1 className="fw-light display-1 opacity-25" style={{color:"#ad4872"}}>to-do</h1>
				</div>
				<div><ListaTareas /></div>
			</div>);
};

export default Home;
