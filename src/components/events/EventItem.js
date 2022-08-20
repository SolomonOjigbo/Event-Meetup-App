import React from "react";
import classes from "./EventItem.module.css";

export default function EventItem(props) {
	return (
		<li className={classes.item}>
			<div className={classes.image}>
				<img src={props.image} alt={props.title} />
			</div>
			<div className={classes.content}>
				<h1>{props.title}</h1>
				<address>{props.address} </address>
				<p>{props.description}</p>
			</div>
			<div className={classes.actions}>
				<button>To Favourites</button>
			</div>
		</li>
	);
}
