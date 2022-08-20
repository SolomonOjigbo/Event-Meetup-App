import React from "react";
import Card from "../layout/Card";
import classes from "./NewEventForm.module.css";

export default function NewEventForm() {
	return (
		<Card>
			<form className={classes.form}>
				<div className={classes.control}>
					<label htmlFor="title"> Event Title</label>
					<input type="text" required id="title" />
				</div>
				<div className={classes.control}>
					<label htmlFor="image"> Venue Image</label>
					<input type="url" required id="image" />
				</div>
				<div className={classes.control}>
					<label htmlFor="address"> Address</label>
					<input type="text" required id="address" />
				</div>
				<div className={classes.control}>
					<label htmlFor="description"> Event Title</label>
					<textarea rows="5" required id="description"></textarea>
				</div>
				<div className={classes.actions}>
					<button> Add Event</button>
				</div>
			</form>
		</Card>
	);
}
