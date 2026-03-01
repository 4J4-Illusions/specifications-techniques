import "./Detail.css";

export default function Detail(props: IPropDetail) {
	return (
		<div className="Detail">
			<h1 className="sous-titre" id={props.id}>{props.titre}</h1>

			<p className="parag">{props.contenu}</p>
		</div>
	);
}