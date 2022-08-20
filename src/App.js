import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
	return (
		<Layout>
			<Routes>
				<Route exact path="/" element={<AllMeetups />} />
				<Route path="/new-meetup" element={<NewMeetup />} />
				<Route path="/favourites" element={<Favourites />} />
			</Routes>
		</Layout>
	);
}

export default App;
