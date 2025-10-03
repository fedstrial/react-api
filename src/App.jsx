import { useEffect, useState } from "react";

import ActorCard from "./assets/components/ActorCard";
import "./App.css";

function App() {
	const [genderFilter, setGenderFilter] = useState("all");
	const [maleActors, setMaleActors] = useState([]);
	const [femaleActors, setFemaleActors] = useState([]);
	const [filteredActors, setFilteredActors] = useState([]);

	const fetchActors = () => {
		//disable missing axios message because I'm using the cdn
		// eslint-disable-next-line no-undef
		axios
			.get("https://lanciweb.github.io/demo/api/actors/")
			.then((actorsResponse) => {
				// eslint-disable-next-line no-undef
				return axios
					.get("https://lanciweb.github.io/demo/api/actresses/")
					.then((actressesResponse) => {
						setMaleActors(actorsResponse.data);
						setFemaleActors(actressesResponse.data);
					});
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	useEffect(() => {
		fetchActors();
	}, []);

	useEffect(() => {
		if (genderFilter === "all") {
			setFilteredActors([...maleActors, ...femaleActors]);
		} else if (genderFilter === "male") {
			setFilteredActors(maleActors);
		} else if (genderFilter === "female") {
			setFilteredActors(femaleActors);
		}
	}, [genderFilter, maleActors, femaleActors]);

	return (
		<div className="container d-flex flex-wrap gap-4 pt-2 pb-4 justify-content-center">
			<select
				className="form-select"
				aria-label="All"
				onChange={(e) => setGenderFilter(e.target.value)}
			>
				<option defaultValue={"all"} value="all">
					All
				</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			{filteredActors.map((actor, index) => (
				<ActorCard
					key={index}
					name={actor.name}
					img={actor.image}
					bio={actor.biography}
					birth={actor.birth_year}
					death={actor.death_year}
					awards={actor.awards}
					nationality={actor.nationality}
				/>
			))}
		</div>
	);
}

export default App;
