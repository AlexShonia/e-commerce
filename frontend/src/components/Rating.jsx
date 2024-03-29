import React from "react";

function Rating({ value, text, color }) {
	const renderedStars = [];

	if (value !== undefined) {
		for (let i = 1; i <= 5; i++) {
			if (i <= value) {
				renderedStars.push(
					// fullstar
					<i key={i} className="fas fa-star" style={{ color }} />
				);
			} else if (i - 0.5 == value) {
				renderedStars.push(
					// halfstar
					<i
						key={i}
						className="fas fa-star-half-alt"
						style={{ color }}
					/>
				);
			} else {
				renderedStars.push(
					// emptystar
					<i key={i} className="far fa-star" style={{ color }} />
				);
			}
		}
	}

	return (
		<div className="rating">
			<span>{renderedStars}</span>
			<span>{text && text}</span>
		</div>
	);
}

export default Rating;
