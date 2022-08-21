import React, { useContext } from "react";
import Card from "../layout/Card";
import classes from "./EventItem.module.css";
import FavouritesContext from "../../store/favouritesContext";

export default function EventItem(props) {
	const favouriteContext = useContext(FavouritesContext);

	const itemIsFavourite = favouriteContext.itemIsFavourite(props.id);

	function toggleFavouriteStatus() {
		if (itemIsFavourite) {
			favouriteContext.removeFavourite(props.id);
		} else {
			favouriteContext.addFavourite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h1>{props.title}</h1>
					<address>{props.address} </address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavouriteStatus}>
						{itemIsFavourite ? "Remove from Favourites" : "Add to Favourites"}
					</button>
				</div>
			</Card>
		</li>
	);
}
