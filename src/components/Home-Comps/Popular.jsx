import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Popular-Styling.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
	const [recipe, setRecipe] = useState([]);

	const getRecipes = async () => {
		const { data } = await axios.get(
			`https://api.edamam.com/api/recipes/v2?type=any&app_id=${process.env.REACT_APP_FOOD_API_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}&cuisineType=Indian&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=url&field=yield&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType`
		);
		const recipes = data.hits;
		setRecipe(recipes);
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<div className="popular-section">
			<h3>Popular Dishes</h3>
			<Splide
				className="popular-div"
				options={{
					perPage: 3,
					arrows: false,
					pagination: false,
					drag: "free",
					gap: "1rem",
				}}
			>
				{recipe.map(({ recipe }) => {
					const uri = recipe.uri;
					const id = uri.substr(44, uri.length);

					return (
						<SplideSlide key={id}>
							<Link to={`/dish/${id}`}>
								<Card dishName={recipe.label} dishImage={recipe.image} />
							</Link>
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
}

export default Popular;
