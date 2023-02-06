import Home from "./pages/Home";
import Category from "./pages/Category";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchBar from "./components/Global-Comps/SearchBar";
import Categories from "./components/Global-Comps/Categories";
import AppHeading from "./components/Global-Comps/AppHeading";
import Searched from "./pages/Searched";
import { AnimatePresence } from "framer-motion";
import Recipe from "./pages/Recipe";
import Footer from "./components/Global-Comps/Footer";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<div
				style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "3rem 1rem 0" }}
			>
				<AppHeading />
				<SearchBar />
				<Categories />
			</div>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/category/:cuisine" element={<Category />} />
					<Route path="/search/:item" element={<Searched />} />
					<Route path="/dish/:id" element={<Recipe />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
