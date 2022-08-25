import React, { useContext } from "react";
import EventList from "../components/events/EventList";
import FavouritesContext from "../store/favouritesContext";

export default function Favourites() {
	const favouriteContext = useContext(FavouritesContext);

	let content;

	if (favouriteContext.totalFavourites === 0) {
		content = <p>Sorry, you have no favourites yet. Start adding some!</p>;
	} else {
		content = <EventList meetupEvents={favouriteContext.favourites} />;
	}

	return (
		<section>
			<h2>Favourites</h2>
			{content}
		</section>
	);
}
