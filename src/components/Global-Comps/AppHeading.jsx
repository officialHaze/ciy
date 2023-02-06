import React from "react";
import "./App-heading-style.css";
import { Link } from "react-router-dom";

function AppHeading() {
	return (
		<div className="nav-bar">
			<Link to="/" style={{ textDecoration: "none", color: "#1d1b38" }}>
				<h1 className="app-heading">
					<i className="fa-solid fa-utensils" style={{ marginRight: "0.5rem" }} />
					CIY
				</h1>
			</Link>
		</div>
	);
}

export default AppHeading;
