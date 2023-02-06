import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import CategoryCards from "../components/Category-Comps/CategoryCards";
import "./Pages-style.css";

function Searched() {
	const [dishes, setDishes] = useState([]);
	const { item } = useParams();

	useEffect(() => {
		const getCuisine = async () => {
			const { data } = await axios.get(
				`https://api.edamam.com/api/recipes/v2?type=any&q=${item}&app_id=${process.env.REACT_APP_FOOD_API_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}&random=true`
			);
			const recipes = data.hits;
			for (var i = 0; i < 10; i++) {
				recipes.pop();
			}

			setDishes(recipes);
		};
		getCuisine();
	}, [item]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="searched-page"
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

export default Searched;
