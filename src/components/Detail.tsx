import "./Detail.css";
import OrgQueteImg from "../assets/images/org-quete1.png";
import OrgQueteImg1 from "../assets/images/org-quete2.png";
import OrgQueteImg2 from "../assets/images/org-quete3.png";
import bgOrgImg from '../assets/images/bg-org.png'



export default function Detail(props: IPropDetail) {

	return (
		<section className="Detail"
			style={{
				backgroundImage: props.id === "organigramme" ? `url(${bgOrgImg})` : '',
				padding: props.id === "organigramme" ? `10vh` : '',
			}}>
			<h1 className="titre" id={props.id}>
				{props.titre}
			</h1>

			<div className="parag-type">
				{props.contenu?.map((c, i) => <p key={i}>{c}</p>)}
			</div>

			{props.id === "organigramme" && (
				<div className="organigramme"
					/* style={{
						backgroundImage: `url(${bgOrgImg})`
					}} */>
					<img src={OrgQueteImg} style={{ gridArea: 'niv1' }} />
					<img src={OrgQueteImg1} style={{ gridArea: 'niv2' }} />
					<img src={OrgQueteImg2} style={{ gridArea: 'niv3' }} />
				</div>
			)}
		</section>
	);
}
