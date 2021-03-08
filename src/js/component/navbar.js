import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const newFavoritePerson = store.favorites.map((eachPerson, index) => {
		return (
			<div className="task" key={index}>
				<Dropdown.Item>{eachPerson}</Dropdown.Item>

				<button onClick={event => actions.deleteTask(index)}>x</button>
			</div>
		);
	});
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div>{store.favorites.length + " item left"}</div>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites
					</Dropdown.Toggle>

					<Dropdown.Menu>{newFavoritePerson}</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
