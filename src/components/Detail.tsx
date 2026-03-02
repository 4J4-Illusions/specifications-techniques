import "./Detail.css";
import OrgQueteImg from '../assets/images/org-quete1.png'
import OrgQueteImg1 from '../assets/images/org-quete2.png'
import OrgQueteImg2 from '../assets/images/org-quete3.png'

export default function Detail(props: IPropDetail) {
	return (
		<section className="Detail">
			<h1 className="sous-titre" id={props.id}>{props.titre}</h1>

			<p className="parag">{props.contenu}</p>

			{props.id === "organigramme" ? (
				<div>
					<img src={OrgQueteImg} />
					<img src={OrgQueteImg1} />
					<img src={OrgQueteImg2} />
				</div>
			) : (
				<></>
			)}
		</section>
	);
}