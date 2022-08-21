import React from "react";
import { useNavigate } from "react-router-dom";
import NewEventForm from "../components/events/NewEventForm";

export default function NewMeetup() {
	const navigate = useNavigate();
	function addEventMeetup(eventData) {
		fetch(
			"https://event-meetup-app-7791a-default-rtdb.firebaseio.com/events.json",
			{
				method: "POST",
				body: JSON.stringify(eventData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			navigate("/", { replace: true });
		});
	}
	return (
		<div>
			<div>
				<h2> Add New Meetup Event</h2>
				<NewEventForm onAddMeetupEvent={addEventMeetup} />
			</div>
		</div>
	);
}
