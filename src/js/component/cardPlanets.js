//<li key={index}>{planet.name}</li>;//
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardPlanet(props) {
	// const[planetName, SetPlanetName] = useState(props.planet.name)

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.planet}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

CardPlanet.propTypes = {
	planet: PropTypes.string
};
