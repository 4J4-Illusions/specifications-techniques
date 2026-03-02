import './Couverture.css'
import logo from '../assets/images/better-logo.png'



export default function Couverture() {

    return (
        <header className='Couverture'>
            <section className='equipe parag-pt'>
                <h2>
                    Sara Haimeur,
                    Pharly Bazile,
                    Clarence Ouimet,
                    Juba Ameziane,
                    Prinnie Ly
                </h2>
            </section>

            <h1 className='titre'>Spécifications techniques</h1>

            <img src={logo} className='logo' />

            <section className='info-cours parag-pt'>
                <h2>Travail présenté à Martin St-Pierre</h2>
                <h2>360-4J4 Création de jeu en équipe - gr.02</h2>
            </section>

            <section className='identification parag-pt'>
                <h2>
                    Collège de Maisonneuve <br />
                    Technique d'intégration multimédia <br />
                    23 février 2026
                </h2>
            </section>
        </header>
    )
}