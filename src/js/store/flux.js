import React, { useState, useEffect, useContext } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			person: "",
			favorites: [],
			variant: [{ title: "danger" }, { title: "success" }]
		},
		actions: {
			addFavoritePerson: person => {
				let favoriteList = [...getStore().favorites, person];

				setStore({ favorites: favoriteList });
			},

			addPeople: people => {
				setStore({ people: people });
			},

			deleteTask: favoritesListIndex => {
				const newList = getStore().favorites.filter((_, index) => index !== favoritesListIndex);

				setStore({ favorites: newList });
			},

			changeButton: () => {},

			// TasksCounter: () => {
			// 	return <div>{getStore().favorites.length + " item left"}</div>;
			// },

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
