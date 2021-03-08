import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import CardPerson from "../component/cardPerson";
import { Context } from "../store/appContext";

export function Home() {
	// const [people, setPeople] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				actions.addPeople(responseJson.results);
			});
	}, []);
	if (store.people.length == 0) {
		return <p>cargando...</p>;
	}

	return (
		<div className="container-fluid py-2">
			<div className="d-flex flex-row flex-nowrap">
				{store.people.map((person, index) => {
					return (
						<div key={index}>
							<CardPerson key={index} uid={person.uid} person={person.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
