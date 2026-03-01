import "./Detail.css";

export default function Detail(props: IPropDetail) {
	return (
		<div className="Detail">
			<h1 className="sous-titre" id={props.id}>{props.titre}</h1>

			<p className="parag">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis,
				tempore assumenda commodi harum quas quo dolore beatae. Nihil adipisci
				dolorem vel, consectetur autem magni tempore ducimus fugit quasi iste.
			</p>
		</div>
	);
}