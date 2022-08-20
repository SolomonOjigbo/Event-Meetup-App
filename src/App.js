import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
	return (
		<div>
			<MainNavigation />
			<Routes>
				<Route exact path="/" element={<AllMeetups />} />
				<Route path="/new-meetup" element={<NewMeetup />} />
				<Route path="/favourites" element={<Favourites />} />
			</Routes>
		</div>
	);
}

export default App;
