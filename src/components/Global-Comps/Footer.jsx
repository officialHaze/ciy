import React, { useEffect, useState } from "react";

function Footer() {
	const [date, setDate] = useState("");

	useEffect(() => {
		const currentYear = new Date().getFullYear();
		setDate(currentYear);
	}, []);

	const footerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
        gap: '0.35rem',
		position: "absolute",
		bottom: "1rem",
		left: "8.5rem",
		color: "#16003B",
        fontFamily: 'Quicksand, sans-serif'
	};

	return (

			<div style={footerStyle}>
				<p style={{ fontWeight: "600", fontSize: '0.85rem' }}>&copy; Copyright {date}</p>
				<p style={{ fontWeight: "600", fontSize: '0.85rem' }}>Made with 🧡 by Moinak</p>
			</div>
	);
}

export default Footer;
