import './Couverture.css'
import logo from '../assets/images/logo.png'



export default function Couverture(){

    return(
        <header className='Couverture'>
            <section className='equipe'>
                <span>Sara Haimeur</span>
                <span>Pharly Bazile</span>
                <span>Clarence Ouimet</span>
                <span>Juba Ameziane</span>
                <span>Prinnie Ly</span>
            </section>

            <h1 className='titre'>Spécifications techniques</h1>

            <img src={logo} className='logo' />

            <section className='info-cours'>
                <h2>Travail présenté à Martin St-Pierre</h2>
                <h3>360-4J4 Création de jeu en équipe, groupe 2</h3>
            </section>

            <section className='identification'>
                <p>
                    Collège de Maisonneuve <br />
                    Technique d'intégration multimédia <br />
                    23 février 2026
                </p>
            </section>
        </header>
    )
}