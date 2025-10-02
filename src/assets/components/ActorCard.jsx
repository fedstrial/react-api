const ActorCard = (props) => (
	<div className="card" style={{ width: "18rem" }}>
		<img
			className="card-img-top"
			src={props.img}
			alt="actor-image"
			style={{ height: "25rem" }}
		/>
		<div className="card-body">
			<h5 className="card-title">{props.name}</h5>
			<h6 className="card-subtitle mb-2 text-muted">{`${props.birth}${
				props.death ? ` - ${props.death}` : ""
			}`}</h6>
			<h6 className="card-subtitle mb-2 text-muted">
				{props.nationality}
			</h6>
			<p className="card-text">{props.bio}</p>
		</div>

		<ul className="list-group list-unstyled list-group-flush list-group-item">
			{props.awards &&
				(Array.isArray(props.awards) ? (
					props.awards.map((award, index) => (
						<li key={index}>{award}</li>
					))
				) : (
					<li>{props.awards}</li>
				))}
		</ul>
	</div>
);

export default ActorCard;
