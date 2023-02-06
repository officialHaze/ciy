import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar-style.css";

function SearchBar() {
	const [inputVal, setInputVal] = useState("");
	const navigate = useNavigate();

	const inputStyle2 = {
		background: "#1d1b38",
		color: "white",
		outline: "none",
		border: "#1d1b38",
	};

	const inputStyle1 = {
		background: "none",
		color: "black",
		fontWeight: '600',
		border: "1px solid #1d1b38",
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setInputVal(value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`/search/${inputVal}`);
	};

	return (
		<div className="search-bar">
			<i className="fa-solid fa-magnifying-glass" onClick={handleSearch} />
			<form onSubmit={handleSearch}>
				<input
					type="text"
					onChange={handleChange}
					style={inputVal !== "" ? inputStyle1 : inputStyle2}
					value={inputVal}
				/>
			</form>
		</div>
	);
}

export default SearchBar;
