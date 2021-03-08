import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import CardPlanet from "../component/cardPlanets";

export function Home2() {
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
		<div className="container-fluid py-2">
			<div className="d-flex flex-row flex-nowrap justify-content: space-between;">
				{planets.map((planet, index) => {
					return (
						<div key={index}>
							<CardPlanet key={index} planet={planet.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
