import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Media from "react-bootstrap/Media";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export default function Demo() {
	const { store, action } = useContext(Context);
	const [people, setPeople] = useState(null);
	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id, {
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
				setPeople(responseJson.result);
			});
	}, []);
	console.log(params.id);
	return (
		<Media className="ml-5">
			<img
				width={600}
				height={400}
				className="mr-3"
				src="https://picsum.photos/400/200"
				alt="Generic placeholder"
			/>

			<Media.Body>
				{people ? <h5>{people.properties.name}</h5> : <p>loading..</p>}

				<p>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
					Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
					vulputate fringilla. Donec lacinia congue felis in faucibus.
				</p>
			</Media.Body>
		</Media>
	);
}

Demo.propTypes = {
	person: PropTypes.string,
	uid: PropTypes.number
};
