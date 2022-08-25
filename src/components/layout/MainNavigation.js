import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavouritesContext from "../../store/favouritesContext";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
	const favouritesContext = useContext(FavouritesContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>Event Meetups</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">All Meetups</NavLink>
					</li>
					<li>
						<NavLink to="/new-meetup">New Meetup</NavLink>
					</li>
					<li>
						<NavLink to="/favourites">
							My Favourites
							<span className={classes.badge}>
								{favouritesContext.totalFavourites}{" "}
							</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
