import React from "react";
import { Link } from "react-router-dom";

export default function MainNavigation() {
	return (
		<header>
			<div>MainNavigation</div>
			<nav>
				<ul>
					<li>
						<Link to="/">AllMeetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">NewMeetup</Link>
					</li>
					<li>
						<Link to="/favourites">NewMeetup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
