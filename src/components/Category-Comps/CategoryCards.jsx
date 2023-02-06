import React from "react";
import { motion } from "framer-motion";
import TruncateDishName from "../TruncateDishName";

function CategoryCards(props) {
	const dishname = TruncateDishName(props.dishName);

	return (
		<motion.div
			className='category-page-cards'
			initial={{ opacity: 0, y: "-5rem" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "-5rem" }}
			transition={{ duration: 0.5 }}
		>
			<p>{dishname}</p>
			<img src={props.dishImage} alt={props.dishName}></img>
		</motion.div>
	);
}

export default CategoryCards;
