import './Sommaire.css'



export default function Sommaire() {


	return (
		<nav className='Sommaire'>
			<h1 className='sous-titre'>Sommaire</h1>

			<div className='parag'>
				<a href="#technique">Description technique du jeu</a>
				<a href="#niveaux">Description des niveaux</a>
				<a href="#organigramme">Organigramme des quêtes</a>
				<a href="#identite">Description de l'identité graphique</a>
				<a href="#modules">Liste de modules programmables</a>
			</div>
		</nav>
	)
}