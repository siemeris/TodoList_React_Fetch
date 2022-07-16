import React from "react";
import ListaTareas from "./ListaTareas.jsx";

const Home = () => {
	return (
		<div className="container-fluid">
			<div className="pt-5 text-center">
				<h1
					className="fw-light display-1 opacity-25"
					style={{ color: "#ad4872" }}
				>
					to-do
				</h1>
			</div>
			<div>
				<ListaTareas />
			</div>
		</div>
	);
};

export default Home;
