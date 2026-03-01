import Detail from './Detail'
import './ListeDetails.css'



export default function ListeDetails(){
	const titres = [
		"Description technique du jeu",
		"Description des niveaux",
		"Organigramme des quêtes",
		"Description de l'identité graphique",
		"Liste de modules programmables",
	];
	const ids = [
		"technique",
		"niveaux",
		"organigramme",
		"identite",
		"modules",
	];

	return (
		<div className='ListeDetails'>
			{[...Array(5)].map((_, i) => <Detail key={i} titre={titres[i]} id={ids[i]}/>)}
		</div>
	)
}