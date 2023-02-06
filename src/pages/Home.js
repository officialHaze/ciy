import React from "react";
import Popular from "../components/Home-Comps/Popular";
import Vegetarian from "../components/Home-Comps/Vegetarian";
import { motion } from "framer-motion";
import "./Pages-style.css";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0, x: "-5rem" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "-5rem" }}
			transition={{ duration: 0.5 }}
			className="page"
		>
			<Popular />
			<Vegetarian />
		</motion.div>
	);
}
