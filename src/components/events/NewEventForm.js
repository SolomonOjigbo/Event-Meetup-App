import React from "react";
import Card from "../layout/Card";
import classes from "./NewEventForm.module.css";
import { useRef } from "react";

export default function NewEventForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const eventData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};
		props.onAddMeetupEvent(eventData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={handleSubmit}>
				<div className={classes.control}>
					<label htmlFor="title"> Event Title</label>
					<input type="text" required id="title" ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="image"> Venue Image</label>
					<input type="url" required id="image" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address"> Address</label>
					<input type="text" required id="address" ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description"> Description</label>
					<textarea
						rows="5"
						required
						id="description"
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button> Add Event</button>
				</div>
			</form>
		</Card>
	);
}
