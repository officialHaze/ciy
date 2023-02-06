function TruncateDishName(dishName) {
	const dish = dishName;
	const truncatedDishName = dish.substr(0, 35) + "...";
	return truncatedDishName
	
}

export default TruncateDishName;
