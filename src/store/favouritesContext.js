import { createContext, useState } from "react";

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,
	addFavourite: (favouriteEvent) => {},
	removeFavourite: (eventId) => {},
	itemIsFavourite: (eventId) => {},
});

export function FavouritesContextProvider(props) {
	const [userFavourites, setUserFavourites] = useState([]);

	function addFavouritesHandler(favouriteEvent) {
		setUserFavourites((prevUserFavourites) => {
			return prevUserFavourites.concat(favouriteEvent);
		});
	}

	function removeFavouriteHandler(eventId) {
		setUserFavourites((prevUserFavourites) => {
			return prevUserFavourites.filter(
				(meetupEvent) => meetupEvent.id !== eventId
			);
		});
	}

	function itemIsFavouriteHandler(eventId) {
		return userFavourites.some((meetupEvent) => meetupEvent.id === eventId);
	}

	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
		addFavourite: addFavouritesHandler,
		removeFavourite: removeFavouriteHandler,
		itemIsFavourite: itemIsFavouriteHandler,
	};

	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}
export default FavouritesContext;
