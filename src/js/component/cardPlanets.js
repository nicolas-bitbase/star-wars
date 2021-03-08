//<li key={index}>{planet.name}</li>;//
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

export default function CardPlanet(props) {
	// const[planetName, SetPlanetName] = useState(props.planet.name)

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="https://picsum.photos/400/200" />
			<Card.Body>
				<Card.Title>{props.planet}</Card.Title>
				<Card.Text>hi hid is a planet hhee goffj woewdnwi</Card.Text>
				<Button variant="primary">Go</Button>
			</Card.Body>
		</Card>
	);
}

CardPlanet.propTypes = {
	planet: PropTypes.string
};
