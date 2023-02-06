import React from "react";
import CategoryBalls from "./CategoryBalls";
import "./Categories-style.css";

function Categories() {
	return (
		<div className="category-section">
			<CategoryBalls path="Chinese" type="Chinese" fontAwsm="fa-solid fa-bowl-food" />
			<CategoryBalls path="Indian" type="Indian" fontAwsm="fa-solid fa-drumstick-bite" />
			<CategoryBalls path="American" type="American" fontAwsm="fa-solid fa-hotdog" />
			<CategoryBalls path="Italian" type="Italian" fontAwsm="fa-solid fa-pizza-slice" />
		</div>
	);
}

export default Categories;
