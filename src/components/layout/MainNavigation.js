import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Event Meetups</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">AllMeetups</NavLink>
					</li>
					<li>
						<NavLink to="/new-meetup">NewMeetup</NavLink>
					</li>
					<li>
						<NavLink to="/favourites">Favourites</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
