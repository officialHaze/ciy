import React, { useState, useEffect } from "react";
import "./Pages-style.css";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import CategoryCards from "../components/Category-Comps/CategoryCards";

function Category() {
	const [dishes, setDishes] = useState([]);
	const { cuisine } = useParams();

	useEffect(() => {
		const getCuisine = async () => {
			const { data } = await axios.get(
				`https://api.edamam.com/api/recipes/v2?type=any&app_id=${process.env.REACT_APP_FOOD_API_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}&cuisineType=${cuisine}&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=url&field=yield&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType`
			);
			const recipes = data.hits;
			for (var i = 0; i < 10; i++) {
				recipes.pop();
			}
			setDishes(recipes);
		};
		getCuisine();
	}, [cuisine]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="category-page"
		>
			{dishes.length === 0 ? (
				<h2>Loading...</h2>
			) : (
				dishes.map(({ recipe }) => {
					const uri = recipe.uri;
					const id = uri.substr(44, uri.length);
					return (
						<Link to={`/dish/${id}`} key={id}>
							<CategoryCards dishName={recipe.label} dishImage={recipe.image} />
						</Link>
					);
				})
			)}
		</motion.div>
	);
}

export default Category;
