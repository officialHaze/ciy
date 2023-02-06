import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./Pages-style.css";

function Recipe() {
	const [dish, setDish] = useState({});
	const [ingredients, setIngredients] = useState([]);
	const [cuisineTypes, setCuisineType] = useState([]);
	const [mealTypes, setMealType] = useState([]);
	const [mouseOver, setMouseOver] = useState(false);
	const { id } = useParams();
	let keyId = 0;

	useEffect(() => {
		const getDishById = async () => {
			const { data } = await axios.get(
				`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_FOOD_API_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}&field=uri&field=label&field=image&field=url&field=ingredientLines&field=cuisineType&field=mealType&field=dishType`
			);

			setDish(data.recipe);
			setIngredients(data.recipe.ingredientLines);
			setCuisineType(data.recipe.cuisineType);
			setMealType(data.recipe.mealType);
		};
		getDishById();
	}, [id]);

	const handleOver = () => {
		setMouseOver(true);
	};

	const handleOut = () => {
		setMouseOver(false);
	};

	if (ingredients.length === 0) {
		return <h2 style={{ textAlign: "center", padding: "2rem 0" }}>Loading...</h2>;
	} else {
		return (
			<div className="recipe">
				<motion.div
					initial={{ opacity: 0, x: "-5rem" }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: "-5rem" }}
					transition={{ duration: 0.5 }}
					className="recipe-container"
				>
					<div className="recipe-image">
						<img src={dish.image} alt={dish.label} />
					</div>
					<div className="recipe-content">
						<h2>{dish.label}</h2>

						<div className="food-info-container">
							{cuisineTypes.map((type) => {
								keyId = keyId + 1;

								return <p key={keyId}>Cusine type: {type.toUpperCase()}</p>;
							})}
							{mealTypes.map((type) => {
								keyId = keyId + 1;

								return <p key={keyId}>Meal type: {type}</p>;
							})}
						</div>

						<h3>Ingredients:</h3>

						<ul>
							{ingredients.map((ingredient) => {
								keyId = keyId + 1;
								return <li key={keyId}>{ingredient}</li>;
							})}
						</ul>
					</div>
					<div
						className="show-recipe-btn"
						onMouseOver={handleOver}
						onMouseOut={handleOut}
						style={{ background: mouseOver && "#20262E" }}
					>
						<a href={dish.url} style={{ color: mouseOver && "white" }}>
							<h3>Show recipe</h3>
						</a>
					</div>
				</motion.div>
			</div>
		);
	}
}

export default Recipe;
