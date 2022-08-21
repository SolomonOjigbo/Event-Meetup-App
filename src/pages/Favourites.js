import React, { useContext } from "react";
import EventList from "../components/events/EventList";
import FavouritesContext from "../store/favouritesContext";

export default function Favourites() {
	const favouriteContext = useContext(FavouritesContext);

	return (
		<section>
			<h2>Favourites</h2>
			<EventList meetupEvents={favouriteContext.favourites} />
		</section>
	);
}
