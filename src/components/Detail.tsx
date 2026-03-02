import "./Detail.css";
import OrgQueteImg from "../assets/images/org-quete1.png";
import OrgQueteImg1 from "../assets/images/org-quete2.png";
import OrgQueteImg2 from "../assets/images/org-quete3.png";

export default function Detail(props: IPropDetail) {

	return (
		<section className="Detail">
			<h1 className="titre" id={props.id}>
				{props.titre}
			</h1>

			<div className="parag-type">
				{props.contenu?.map((c, i) => <p key={i}>{c}</p>)}
			</div>

			{props.id === "organigramme" && (
				<div className="organigramme">
					<img src={OrgQueteImg} />
					<img src={OrgQueteImg1} />
					<img src={OrgQueteImg2} />
				</div>
			)}
		</section>
	);
}
