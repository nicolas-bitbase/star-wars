import React, { useState, useEffect } from "react";

import "../../styles/home.scss";
import CardPlanet from "../component/cardPlanets";

export function Home() {
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(responseJson => {
				setPlanets(responseJson.results);
			});
	}, []);

	return (
		<div className="text-center mt-5">
			<ul>
				{planets.map((planet, index) => {
					return <CardPlanet key={index} planet={planet.name} />;
				})}
			</ul>
		</div>
	);
}
