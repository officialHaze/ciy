import React from "react";

import TruncateDishName from "../TruncateDishName";

function Card(props) {
	const dishname = TruncateDishName(props.dishName);

	return (
		<div className="popular-dish-cards">
			<p>{dishname}</p>
			<img src={props.dishImage} alt="{props.dishName}"></img>
		</div>
	);
}

export default Card;
