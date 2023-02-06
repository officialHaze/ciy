import React from "react";
import { NavLink } from "react-router-dom";

function CategoryBalls(props) {
	return (
		<div>
			<div style={{ textAlign: "center" }} className="balls">
				<NavLink
					className="category-links"
					to={`/category/${props.path}`}
					style={{ textDecoration: "none" }}
				>
					<i className={props.fontAwsm} />
				</NavLink>
				<p style={{ fontSize: "0.85rem", fontWeight: "600" }}>{props.type}</p>
			</div>
		</div>
	);
}

export default CategoryBalls;
