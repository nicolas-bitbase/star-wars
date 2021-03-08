import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/card.scss";
import { Context } from "../store/appContext";

export default function CardPerson(props) {
	const [person, setPerson] = useState(null);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + props.uid, {
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
				console.log(responseJson.result, "ooooooooo");
				setPerson(responseJson.result);
			});
	}, []);

	//  function addFavoritePerson(person) {
	// 	let favoriteList = tasksList.push(task);
	// 	let newList = [...peopleList, person];

	//  	setPeopleList(newList);
	// 	console.log(peopleList);
	//  }

	// const[planetName, SetPlanetName] = useState(props.planet.name)

	// //const [liNewTask, setLiNewTask] = React.useState(null);

	// const liNewTask = peopleList.map((eachPerson, index) => {
	// 	return (
	// 		<div className="task" key={index}>
	// 			<div className="">
	// 				{eachPerson}
	// 				<button onClick={() => deleteTask(index)}>x</button>
	// 			</div>
	// 		</div>
	// 	);
	// });
	// onClick={addPerson("jordi")}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="https://picsum.photos/400/200" />
			<Card.Body>
				<Card.Title>{props.person}</Card.Title>
				{person ? (
					<div>
						<Card.Text>
							<p>Gender: {person.properties.gender}</p>
							<p>Hair-Color: {person.properties.hair_color}</p>
							<p>Eye-Color: {person.properties.eye_color}</p>
						</Card.Text>
						<div className="btn">
							<Link to={"/demo/" + props.uid}>
								<Button variant="primary">See More</Button>
							</Link>
							<Button
								variant={store.variant[0].title}
								onClick={e => {
									actions.addFavoritePerson(props.person);
									// e.preventDefault();
									// e.target.style.color = "black";
								}}>
								love
							</Button>
						</div>
					</div>
				) : (
					<p>loading..</p>
				)}
			</Card.Body>
		</Card>
	);
}

CardPerson.propTypes = {
	uid: PropTypes.string,
	person: PropTypes.string,
	people: PropTypes.string
	// gender: PropTypes.string,
	// hairColor: PropTypes.string,
	// eyeColor: PropTypes.string
};
