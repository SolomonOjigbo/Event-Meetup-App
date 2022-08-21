import React, { useEffect, useState } from "react";
import EventList from "../components/events/EventList";

const DUMMY_DATA = [
	{
		id: "m1",
		title: "This is a first meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Meetupstreet 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
	},
	{
		id: "m2",
		title: "This is a second meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Meetupstreet 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
	},
];

function AllMeetups() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedData, setLoadedData] = useState([]);

	useEffect(() => {
		fetch(
			"https://event-meetup-app-7791a-default-rtdb.firebaseio.com/events.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetupEvents = [];
				for (const key in data) {
					const meetupEvent = {
						id: key,
						...data[key],
					};
					meetupEvents.push(meetupEvent);
				}

				setIsLoading(false);
				setLoadedData(meetupEvents);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}
	return (
		<div>
			<h1>AllMeetups</h1>
			<EventList meetupEvents={loadedData} />
		</div>
	);
}
export default AllMeetups;
